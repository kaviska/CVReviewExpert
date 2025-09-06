'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Navbar from '../../../component/pt/Navbar';
import Footer from '../../../component/Footer';
import AnalysisResult from '../../../component/AnalysisResult';

interface UploadState {
  file: File | null;
  uploading: boolean;
  progress: number;
  error: string | null;
  success: boolean;
  result: any;
  parsedAnalysis?: any | null;
}

const CVReviewPage = () => {
  const [uploadState, setUploadState] = useState<UploadState>({
    file: null,
    uploading: false,
    progress: 0,
    error: null,
    success: false,
    result: null,
    parsedAnalysis: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [jobDescription, setJobDescription] = useState<string>("");
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressSectionRef = useRef<HTMLDivElement | null>(null);
  const resultsSectionRef = useRef<HTMLDivElement | null>(null);

  // Handle drag events
  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragleave' || e.type === 'dragover') {
      setDragActive(e.type !== 'dragleave');
    }
  }, []);

  // Handle dropped files
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (validateFile(file)) {
        setUploadState(prev => ({ ...prev, file, error: null }));
      }
    }
  }, []);

  // Handle file input change
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (validateFile(file)) {
        setUploadState(prev => ({ ...prev, file, error: null }));
      }
    }
  };

  // Validate file type and size
  const validateFile = (file: File): boolean => {
    const maxSize = 10 * 1024 * 1024; // 10MB
    const allowedTypes = ['application/pdf'];
    if (!allowedTypes.includes(file.type)) {
      setUploadState(prev => ({ ...prev, error: 'Please upload a PDF file only' }));
      return false;
    }
    if (file.size > maxSize) {
      setUploadState(prev => ({ ...prev, error: 'File size must be less than 10MB' }));
      return false;
    }
    return true;
  };

  // API URL
  const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

  const startProgressSimulation = () => {
    // Clear any existing timer
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    // Start from a small baseline for visual feedback
    setUploadState(prev => ({ ...prev, progress: Math.max(prev.progress, 5) }));
    let current = 5;
    progressTimer.current = setInterval(() => {
      // Ease towards 90-95% and then wait for real completion
      current = Math.min(current + Math.random() * 7 + 2, 93);
      setUploadState(prev => ({ ...prev, progress: Math.max(prev.progress, Math.floor(current)) }));
    }, 400);
  };

  const stopProgressSimulation = (final = 100) => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    setUploadState(prev => ({ ...prev, progress: final }));
  };

  const handleUpload = async () => {
    if (!uploadState.file) {
      setUploadState(prev => ({ ...prev, error: 'Please select a PDF file before starting analysis.' }));
      return;
    }
    setUploadState(prev => ({ ...prev, uploading: true, progress: 0, error: null }));
    startProgressSimulation();
    
    // Scroll to progress section for better user experience
    setTimeout(() => {
      if (progressSectionRef.current) {
      const top = progressSectionRef.current.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
    
    const formData = new FormData();
    formData.append('cv', uploadState.file);
    if (jobDescription.trim()) formData.append('job_description', jobDescription.trim());
    try {
      const response = await fetch(`${API_URL}/handle-cv`, { method: 'POST', body: formData });
      if (response.ok) {
        const result = await response.json();
        // Parse Gemini JSON if present
        let parsedAnalysis: any = null;
        try {
          const candidates = result?.gemini?.candidates;
          const textBlock = candidates?.[0]?.content?.parts?.[0]?.text || '';
          const jsonMatch = textBlock.match(/```json\n([\s\S]*?)```/i) || textBlock.match(/```\n([\s\S]*?)```/i);
          const jsonString = jsonMatch ? jsonMatch[1] : textBlock;
          if (jsonString?.trim()?.startsWith('{')) parsedAnalysis = JSON.parse(jsonString);
        } catch (e) {
          console.warn('Failed to parse Gemini JSON:', e);
        }
        stopProgressSimulation(100);
        setUploadState(prev => ({ ...prev, uploading: false, success: true, progress: 100, result, parsedAnalysis }));
        
        // Scroll to results section after a short delay
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 100);
      } else {
        stopProgressSimulation(0);
        setUploadState(prev => ({ ...prev, uploading: false, error: 'Upload failed' }));
      }
    } catch (error) {
      stopProgressSimulation(0);
      setUploadState(prev => ({ ...prev, uploading: false, error: 'Upload failed. Please try again.' }));
    }
  };

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (progressTimer.current) {
        clearInterval(progressTimer.current);
        progressTimer.current = null;
      }
    };
  }, []);

  const resetUpload = () => {
    setUploadState({ file: null, uploading: false, progress: 0, error: null, success: false, result: null, parsedAnalysis: null });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Upload Your CV for
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Expert Analysis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Get instant AI-powered insights and recommendations to improve your CV and increase your job prospects.</p>
          </div>

          {!uploadState.success ? (
            <div className="max-w-2xl mx-auto">
              <div
                className={`relative border-3 border-dashed rounded-2xl p-12 text-center transition-all duration-300 ${
                  dragActive ? 'border-blue-500 bg-blue-50' : uploadState.file ? 'border-green-500 bg-green-50' : 'border-gray-300 bg-white hover:border-blue-400 hover:bg-blue-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input type="file" accept=".pdf" onChange={handleFileChange} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" disabled={uploadState.uploading} />

                {!uploadState.file ? (
                  <>
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Drop your CV here or click to browse</h3>
                    <p className="text-gray-600 mb-6">Supports PDF files up to 10MB</p>
                    <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105">Choose File</div>
                  </>
                ) : (
                  <>
                    <div className="w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">File Ready to Upload</h3>
                    <p className="text-gray-600 mb-2">{uploadState.file.name} ({(uploadState.file.size / 1024 / 1024).toFixed(2)} MB)</p>
                    <p className="text-gray-500 text-sm">Review or paste the job description below, then click Start Analysis.</p>
                  </>
                )}
              </div>

              {/* Job Description Textarea */}
              <div className="mt-6">
                <label htmlFor="job-description" className="block text-sm font-medium text-gray-700 mb-2">Job Description (optional)</label>
                <textarea id="job-description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} placeholder="Paste the job description or key responsibilities here to tailor the analysis..." rows={5} className="w-full rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-blue-500 p-4 text-gray-700 placeholder-gray-400 shadow-sm" disabled={uploadState.uploading} />
                <div className="mt-1 text-xs text-gray-500 text-right">{jobDescription.length} characters</div>
                <div className="mt-4 flex flex-wrap items-center gap-4">
                  <button onClick={handleUpload} disabled={uploadState.uploading} className="relative bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative flex items-center">
                      {uploadState.uploading ? (
                        <>
                          <svg className="animate-spin w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                          </svg>
                          Analyzing...
                        </>
                      ) : (
                        <>
                          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                          </svg>
                          Start Analysis
                        </>
                      )}
                    </span>
                  </button>
                  <button onClick={resetUpload} disabled={uploadState.uploading || !uploadState.file} className="border-2 border-gray-400 text-gray-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 disabled:opacity-50">Remove File</button>
                </div>
              </div>

              {/* Progress Bar */}
              {uploadState.uploading && (
                <div className="mt-6" ref={progressSectionRef}>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Uploading and analyzing...</span>
                    <span>{uploadState.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full transition-all duration-300" style={{ width: `${uploadState.progress}%` }}></div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {uploadState.error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-red-700 font-medium">{uploadState.error}</span>
                  </div>
                </div>
              )}

              {/* Features */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Secure & Private</h3>
                  <p className="text-gray-600 text-sm">Your CV is processed securely and never stored permanently</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Instant Results</h3>
                  <p className="text-gray-600 text-sm">Get comprehensive analysis in under 30 seconds</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-md">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Expert Quality</h3>
                  <p className="text-gray-600 text-sm">AI trained on thousands of successful CVs and hiring patterns</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto" ref={resultsSectionRef}>
              <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Analysis Complete!</h2>
                  <p className="text-gray-600">Your CV has been successfully analyzed. Here's your detailed report:</p>
                </div>

                {/* Results: prefer Gemini if available and not false */}
                {(() => {
                  const candidates = uploadState.result?.gemini?.candidates;
                  const isFalse = typeof candidates?.[0]?.content?.parts?.[0]?.text === 'string' && candidates[0].content.parts[0].text.trim().toLowerCase() === 'false';
                  if (isFalse) {
                    return (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                        <p className="text-red-700 font-medium">Analysis could not be completed. Please ensure your CV and job role are valid and try again.</p>
                      </div>
                    );
                  }
                  if (uploadState.parsedAnalysis) {
                    return <AnalysisResult data={uploadState.parsedAnalysis} />;
                  }
                  if (!uploadState.result?.gemini) {
                    return (
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                        <p className="text-yellow-800 font-medium">Analysis service is temporarily unavailable or returned no data. Please try again.</p>
                      </div>
                    );
                  }
                  return (
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">CV Analysis Results</h3>
                      <p className="text-gray-600">Processing your CV analysis...</p>
                    </div>
                  );
                })()}

                <div className="flex gap-4 justify-center mt-8">
                  <button onClick={resetUpload} className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                    <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Analyze Another CV</span>
                  </button>
                  <button className="border-2 border-gray-400 text-gray-600 px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300">Download Report</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CVReviewPage;
