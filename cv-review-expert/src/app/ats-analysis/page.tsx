'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import ATSResult from '../../component//ATSResult';

interface UploadState {
  file: File | null;
  uploading: boolean;
  progress: number;
  error: string | null;
  success: boolean;
  result: any;
  analysisData?: any | null;
}

const ATSAnalysisPage = () => {
  const [uploadState, setUploadState] = useState<UploadState>({
    file: null,
    uploading: false,
    progress: 0,
    error: null,
    success: false,
    result: null,
    analysisData: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [jobDescription, setJobDescription] = useState<string>("");
  const progressTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressSectionRef = useRef<HTMLDivElement | null>(null);

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
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    setUploadState(prev => ({ ...prev, progress: Math.max(prev.progress, 5) }));
    let current = 5;
    progressTimer.current = setInterval(() => {
      current = Math.min(current + Math.random() * 8 + 3, 92);
      setUploadState(prev => ({ ...prev, progress: Math.max(prev.progress, Math.floor(current)) }));
    }, 500);
  };

  const stopProgressSimulation = (final = 100) => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    setUploadState(prev => ({ ...prev, progress: final }));
  };

  const handleAnalyze = async () => {
    if (!uploadState.file) {
      setUploadState(prev => ({ ...prev, error: 'Please select a PDF file before starting ATS analysis.' }));
      return;
    }
    
    if (!jobDescription.trim()) {
      setUploadState(prev => ({ ...prev, error: 'Job description is required for ATS analysis.' }));
      return;
    }

    setUploadState(prev => ({ ...prev, uploading: true, progress: 0, error: null }));
    startProgressSimulation();
    
    // Scroll to progress section
    setTimeout(() => {
      progressSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    }, 100);
    
    const formData = new FormData();
    formData.append('cv', uploadState.file);
    formData.append('job_description', jobDescription.trim());
    
    try {
      const response = await fetch(`${API_URL}/ats/analyze`, { 
        method: 'POST', 
        body: formData 
      });
      
      if (response.ok) {
        const result = await response.json();
        stopProgressSimulation(100);
        setUploadState(prev => ({ 
          ...prev, 
          uploading: false, 
          success: true, 
          progress: 100, 
          result,
          analysisData: result.analysis 
        }));
      } else {
        const errorData = await response.json();
        stopProgressSimulation(0);
        setUploadState(prev => ({ 
          ...prev, 
          uploading: false, 
          error: errorData.error || 'ATS analysis failed' 
        }));
      }
    } catch (error) {
      stopProgressSimulation(0);
      setUploadState(prev => ({ 
        ...prev, 
        uploading: false, 
        error: 'Network error. Please try again.' 
      }));
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

  const resetAnalysis = () => {
    setUploadState({ 
      file: null, 
      uploading: false, 
      progress: 0, 
      error: null, 
      success: false, 
      result: null, 
      analysisData: null 
    });
    setJobDescription("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              ATS Compatibility
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Analysis</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Check how well your CV performs against Applicant Tracking Systems (ATS) for specific job descriptions.
            </p>
          </div>

          {!uploadState.success ? (
            <div className="max-w-2xl mx-auto">
              {/* File Upload Section */}
              <div
                className={`relative border-3 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 ${
                  dragActive ? 'border-purple-500 bg-purple-50' : 
                  uploadState.file ? 'border-green-500 bg-green-50' : 
                  'border-gray-300 bg-white hover:border-purple-400 hover:bg-purple-50'
                }`}
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
              >
                <input 
                  type="file" 
                  accept=".pdf" 
                  onChange={handleFileChange} 
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                  disabled={uploadState.uploading} 
                />

                {!uploadState.file ? (
                  <>
                    <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Upload Your CV</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">Supports PDF files up to 10MB</p>
                    <div className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Choose File
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-green-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">CV Ready for Analysis</h3>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">
                      {uploadState.file.name} ({(uploadState.file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">Add job description below to continue</p>
                  </>
                )}
              </div>

              {/* Job Description Section */}
              <div className="mt-6">
                <label htmlFor="job-description" className="block text-sm font-medium text-gray-700 mb-2">
                  Job Description <span className="text-red-500">*</span>
                </label>
                <textarea 
                  id="job-description" 
                  value={jobDescription} 
                  onChange={(e) => setJobDescription(e.target.value)} 
                  placeholder="Paste the complete job description here. Include required skills, qualifications, and responsibilities for accurate ATS analysis..." 
                  rows={6} 
                  className="w-full rounded-xl border border-gray-300 focus:border-purple-500 focus:ring-purple-500 p-4 text-gray-700 placeholder-gray-400 shadow-sm text-sm sm:text-base" 
                  disabled={uploadState.uploading}
                  required 
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>Required for ATS analysis</span>
                  <span>{jobDescription.length} characters</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleAnalyze} 
                  disabled={uploadState.uploading || !uploadState.file || !jobDescription.trim()} 
                  className="relative bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group flex-1 sm:flex-none"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    {uploadState.uploading ? (
                      <>
                        <svg className="animate-spin w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                        </svg>
                        Analyzing ATS...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd"/>
                        </svg>
                        Start ATS Analysis
                      </>
                    )}
                  </span>
                </button>
                
                <button 
                  onClick={resetAnalysis} 
                  disabled={uploadState.uploading} 
                  className="border-2 border-gray-400 text-gray-600 px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 disabled:opacity-50 text-sm sm:text-base"
                >
                  Reset
                </button>
              </div>

              {/* Progress Bar */}
              {uploadState.uploading && (
                <div className="mt-6" ref={progressSectionRef}>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Analyzing ATS compatibility...</span>
                    <span>{uploadState.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadState.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Extracting keywords, analyzing compatibility, generating recommendations...
                  </p>
                </div>
              )}

              {/* Error Message */}
              {uploadState.error && (
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-red-700 font-medium text-sm sm:text-base">{uploadState.error}</span>
                  </div>
                </div>
              )}

              {/* Info Cards */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">ATS Score</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Get a detailed compatibility score with breakdown</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Keyword Analysis</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">See which keywords you have and which you're missing</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Optimization Tips</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Get actionable recommendations to improve your ATS score</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">ATS Analysis Complete!</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Your CV has been analyzed for ATS compatibility. Here are the detailed results:</p>
                </div>

                {/* Display Results */}
                {uploadState.analysisData ? (
                  <ATSResult data={uploadState.analysisData} />
                ) : (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <p className="text-yellow-800 font-medium">Analysis data is not available. Please try the analysis again.</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                  <button 
                    onClick={resetAnalysis} 
                    className="relative bg-gradient-to-r from-purple-600 via-purple-700 to-blue-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Analyze Another CV</span>
                  </button>
                  <button className="border-2 border-gray-400 text-gray-600 px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300">
                    Download Report
                  </button>
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

export default ATSAnalysisPage;
