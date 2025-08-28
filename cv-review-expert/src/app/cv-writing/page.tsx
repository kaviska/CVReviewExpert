'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import CVWritingResult from '../../component/CVWritingResult';
import CVWritingHeroSection from '../../component/CVWritingHeroSection';
import CVWritingServices from '../../component/CVWritingServices';
import CVWritingProcess from '../../component/CVWritingProcess';
import CVWritingSamples from '../../component/CVWritingSamples';
import CVWritingFAQ from '../../component/CVWritingFAQ';
import CVWritingTestimonials from '../../component/CVWritingTestimonials';
import CVWritingCTAFooter from '../../component/CVWritingCTAFooter';
import CVWritingStructuredData from '../../component/CVWritingStructuredData';

interface UploadState {
  file: File | null;
  uploading: boolean;
  progress: number;
  error: string | null;
  success: boolean;
  result: any;
  rewrittenData?: any | null;
}

const CVWritingPage = () => {
  const [uploadState, setUploadState] = useState<UploadState>({
    file: null,
    uploading: false,
    progress: 0,
    error: null,
    success: false,
    result: null,
    rewrittenData: null,
  });

  const [dragActive, setDragActive] = useState(false);
  const [jobDescription, setJobDescription] = useState<string>("");
  const [targetRole, setTargetRole] = useState<string>("");
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
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    setUploadState(prev => ({ ...prev, progress: Math.max(prev.progress, 5) }));
    let current = 5;
    progressTimer.current = setInterval(() => {
      current = Math.min(current + Math.random() * 6 + 2, 90);
      setUploadState(prev => ({ ...prev, progress: Math.max(prev.progress, Math.floor(current)) }));
    }, 600);
  };

  const stopProgressSimulation = (final = 100) => {
    if (progressTimer.current) {
      clearInterval(progressTimer.current);
      progressTimer.current = null;
    }
    setUploadState(prev => ({ ...prev, progress: final }));
  };

  const handleRewrite = async () => {
    if (!uploadState.file) {
      setUploadState(prev => ({ ...prev, error: 'Please select a PDF file before starting CV rewriting.' }));
      return;
    }
    
    if (!jobDescription.trim()) {
      setUploadState(prev => ({ ...prev, error: 'Job description is required for CV rewriting.' }));
      return;
    }

    setUploadState(prev => ({ ...prev, uploading: true, progress: 0, error: null }));
    startProgressSimulation();
    
    // Scroll to progress section
     setTimeout(() => {
      if (progressSectionRef.current) {
      const top = progressSectionRef.current.getBoundingClientRect().top + window.scrollY - 50;
      window.scrollTo({ top, behavior: 'smooth' });
      }
    }, 100);
    
    const formData = new FormData();
    formData.append('cv', uploadState.file);
    formData.append('job_description', jobDescription.trim());
    if (targetRole.trim()) {
      formData.append('target_role', targetRole.trim());
    }
    
    try {
      const response = await fetch(`${API_URL}/cv-writing/rewrite`, { 
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
          rewrittenData: result.rewrittenCv 
        }));
        
        // Scroll to results section after a short delay
        setTimeout(() => {
          resultsSectionRef.current?.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }, 500);
      } else {
        const errorData = await response.json();
        stopProgressSimulation(0);
        setUploadState(prev => ({ 
          ...prev, 
          uploading: false, 
          error: errorData.error || 'CV rewriting failed' 
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

  const resetRewriting = () => {
    setUploadState({ 
      file: null, 
      uploading: false, 
      progress: 0, 
      error: null, 
      success: false, 
      result: null, 
      rewrittenData: null 
    });
    setJobDescription("");
    setTargetRole("");
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      <Navbar />
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Professional CV
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"> Rewriting Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transform your CV into a compelling, job-winning document tailored specifically for your target role.
            </p>
          </div>

          {!uploadState.success ? (
            <div className="max-w-2xl mx-auto">
              {/* File Upload Section */}
              <div
                className={`relative border-3 border-dashed rounded-2xl p-8 sm:p-12 text-center transition-all duration-300 ${
                  dragActive ? 'border-green-500 bg-green-50' : 
                  uploadState.file ? 'border-emerald-500 bg-emerald-50' : 
                  'border-gray-300 bg-white hover:border-green-400 hover:bg-green-50'
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
                    <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Upload Your Current CV</h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">We'll transform it into a professional, job-winning CV</p>
                    <div className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Choose CV File
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-emerald-500 rounded-full flex items-center justify-center">
                      <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">CV Ready for Rewriting</h3>
                    <p className="text-gray-600 mb-2 text-sm sm:text-base">
                      {uploadState.file.name} ({(uploadState.file.size / 1024 / 1024).toFixed(2)} MB)
                    </p>
                    <p className="text-gray-500 text-xs sm:text-sm">Add job details below to continue</p>
                  </>
                )}
              </div>

              {/* Target Role Input */}
              <div className="mt-6">
                <label htmlFor="target-role" className="block text-sm font-medium text-gray-700 mb-2">
                  Target Role/Position <span className="text-gray-500">(optional)</span>
                </label>
                <input 
                  type="text"
                  id="target-role" 
                  value={targetRole} 
                  onChange={(e) => setTargetRole(e.target.value)} 
                  placeholder="e.g., Senior Software Engineer, Marketing Manager, Data Analyst..." 
                  className="w-full rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500 p-4 text-gray-700 placeholder-gray-400 shadow-sm text-sm sm:text-base" 
                  disabled={uploadState.uploading}
                />
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
                  placeholder="Paste the complete job description here. Include required skills, qualifications, responsibilities, and company information for the best CV rewriting results..." 
                  rows={6} 
                  className="w-full rounded-xl border border-gray-300 focus:border-green-500 focus:ring-green-500 p-4 text-gray-700 placeholder-gray-400 shadow-sm text-sm sm:text-base" 
                  disabled={uploadState.uploading}
                  required 
                />
                <div className="mt-1 flex justify-between text-xs text-gray-500">
                  <span>Required for professional CV rewriting</span>
                  <span>{jobDescription.length} characters</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button 
                  onClick={handleRewrite} 
                  disabled={uploadState.uploading || !uploadState.file || !jobDescription.trim()} 
                  className="relative bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden group flex-1 sm:flex-none"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    {uploadState.uploading ? (
                      <>
                        <svg className="animate-spin w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"/>
                        </svg>
                        Rewriting CV...
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                        </svg>
                        Start CV Rewriting
                      </>
                    )}
                  </span>
                </button>
                
                <button 
                  onClick={resetRewriting} 
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
                    <span>Rewriting your CV professionally...</span>
                    <span>{uploadState.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-green-500 to-emerald-500 h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadState.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Analyzing content, enhancing language, optimizing keywords, tailoring to job requirements...
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
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Professional Rewriting</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Complete section-by-section CV transformation</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">Job-Tailored Content</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Customized to match your target role perfectly</p>
                </div>
                
                <div className="text-center p-4 sm:p-6 bg-white rounded-xl shadow-md sm:col-span-2 lg:col-span-1">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <svg className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">ATS Optimized</h3>
                  <p className="text-gray-600 text-xs sm:text-sm">Enhanced with keywords and proper formatting</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="max-w-5xl mx-auto" ref={resultsSectionRef}>
              <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 mb-8">
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-16 sm:w-20 h-16 sm:h-20 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 sm:w-10 h-8 sm:h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">CV Rewriting Complete! ✨</h2>
                  <p className="text-gray-600 text-sm sm:text-base">Your CV has been professionally rewritten and optimized. Here's your new and improved version:</p>
                </div>

                {/* Display Results */}
                {uploadState.rewrittenData ? (
                  <CVWritingResult data={uploadState.rewrittenData} />
                ) : (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                    <p className="text-yellow-800 font-medium">Rewritten CV data is not available. Please try the rewriting again.</p>
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8">
                  <button 
                    onClick={resetRewriting} 
                    className="relative bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white px-6 sm:px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative">Rewrite Another CV</span>
                  </button>
                  <button className="border-2 border-gray-400 text-gray-600 px-6 sm:px-8 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300">
                    Download Rewritten CV
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      {/* New SEO-Optimized Content Sections */}
      <CVWritingHeroSection />
      <CVWritingServices />
      <CVWritingProcess />
      <CVWritingSamples />
      <CVWritingTestimonials />
      <CVWritingFAQ />
      <CVWritingCTAFooter />
      
      {/* Structured Data */}
      <CVWritingStructuredData />
      
      <Footer />
    </div>
  );
};

export default CVWritingPage;
