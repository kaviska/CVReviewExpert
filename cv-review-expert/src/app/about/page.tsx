import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-yellow-300">CV Review Expert</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            Empowering job seekers worldwide with AI-powered CV and resume analysis 
            to land their dream careers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At CV Review Expert, we believe that everyone deserves the opportunity to present 
                their best professional self. Our mission is to democratize access to professional 
                CV and resume optimization tools, helping job seekers at every level improve their 
                chances of landing interviews and securing their dream jobs.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We combine cutting-edge AI technology with industry best practices to provide 
                comprehensive, actionable feedback that transforms ordinary resumes into 
                interview-winning documents.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">50,000+</h3>
                  <p className="text-gray-600">CVs analyzed and improved</p>
                </div>
                
                <div className="bg-green-50 p-6 rounded-lg">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">95%</h3>
                  <p className="text-gray-600">User satisfaction rate</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img 
                  src="/api/placeholder/600/450" 
                  alt="Team working on CV analysis"
                  className="rounded-2xl shadow-2xl object-cover w-full h-96"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">AI-Powered</p>
                    <p className="text-sm text-gray-600">Analysis Engine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Story</span>
            </h2>
            <p className="text-lg text-gray-600">
              Born from the frustration of seeing talented individuals struggle with CV optimization
            </p>
          </div>
          
          <div className="space-y-12">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Problem</h3>
                <p className="text-gray-600">
                  We noticed that many qualified professionals were being filtered out by 
                  Applicant Tracking Systems (ATS) simply because their CVs weren't optimized. 
                  Great candidates were missing opportunities due to formatting issues, missing 
                  keywords, or unclear presentation.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Solution</h3>
                <p className="text-gray-600">
                  We developed an intelligent platform that combines AI analysis with human 
                  expertise to provide comprehensive CV reviews. Our system analyzes everything 
                  from ATS compatibility to content quality, giving users actionable insights 
                  to improve their job application success rate.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Impact</h3>
                <p className="text-gray-600">
                  Today, CV Review Expert has helped thousands of job seekers improve their 
                  resumes and land interviews. Our users report a 3x increase in interview 
                  callbacks and significantly better job placement rates after using our platform.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-lg text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Privacy First</h3>
              <p className="text-gray-600">
                Your data is secure and confidential. We never share your information with third parties.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fast Results</h3>
              <p className="text-gray-600">
                Get instant feedback on your CV with our AI-powered analysis engine.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quality Focus</h3>
              <p className="text-gray-600">
                We're committed to providing accurate, actionable feedback that actually works.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">User-Centric</h3>
              <p className="text-gray-600">
                Every feature we build is designed with the job seeker's success in mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Founder</span>
            </h2>
            <p className="text-lg text-gray-600">
              Passionate about helping people achieve their career goals
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-white">K</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Kaviska</h3>
              <p className="text-lg text-blue-600 mb-4">Founder & CEO</p>
              <p className="text-gray-600 mb-6">
                With a passion for technology and career development, Kaviska founded CV Review Expert 
                to bridge the gap between talented professionals and their dream jobs. Combining technical 
                expertise with deep understanding of recruitment processes, he leads our mission to 
                democratize professional CV optimization.
              </p>
              
              <div className="flex justify-center space-x-6">
                <div className="text-center">
                  <a 
                    href="mailto:kaviska5252@gmail.com"
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    kaviska5252@gmail.com
                  </a>
                </div>
                <div className="text-center">
                  <a 
                    href="tel:+94782099172"
                    className="flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +94 78 209 9172
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Technology</span>
            </h2>
            <p className="text-lg text-gray-600">
              Powered by cutting-edge AI and machine learning algorithms
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Our advanced AI algorithms analyze your CV against thousands of successful resumes 
                and current industry standards to provide accurate feedback.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">ATS Optimization</h3>
              <p className="text-gray-600">
                Our system is trained on the latest ATS requirements from major companies, 
                ensuring your CV passes through automated screening systems.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Real-time Feedback</h3>
              <p className="text-gray-600">
                Get instant, actionable suggestions for improving your CV, from keyword optimization 
                to formatting improvements and content enhancement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful job seekers who have improved their CVs with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-300">
              Analyze My CV Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
