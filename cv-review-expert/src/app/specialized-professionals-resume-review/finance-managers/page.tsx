import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Finance Managers - Professional Financial Management Resume Analysis | CVReviewExpert',
  description: 'Get your finance manager CV professionally reviewed by AI. Optimize your financial management resume for corporations, startups, and financial institutions. Expert feedback for finance leaders.',
  keywords: [
    'finance manager CV review',
    'financial manager resume',
    'finance director CV',
    'CFO resume review',
    'financial planning manager CV',
    'treasury manager resume',
    'finance career',
    'financial management CV',
    'finance leadership resume',
    'corporate finance CV',
    'finance manager interview preparation',
    'financial analyst manager CV'
  ],
};

export default function FinanceManagersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-emerald-600 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Finance Managers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your finance manager CV reviewed by AI experts. Stand out in financial leadership applications 
              and secure senior positions in corporations, startups, and financial institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Finance CV Now
              </a>
              <a
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Finance Managers Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Finance Manager CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finance leadership roles demand strategic thinking, team management, and financial expertise. 
              Your CV must demonstrate these leadership competencies and quantifiable business impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Strategic Financial Planning</h3>
              <p className="text-gray-600">
                Highlight your experience in budgeting, forecasting, financial modeling, and strategic 
                planning that drives business growth and profitability.
              </p>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Leadership</h3>
              <p className="text-gray-600">
                Showcase your ability to lead finance teams, mentor staff, and collaborate with 
                cross-functional departments to achieve business objectives.
              </p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Business Impact</h3>
              <p className="text-gray-600">
                Demonstrate measurable achievements like cost reductions, revenue growth, process 
                improvements, and successful financial initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Finance Managers */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Finance Management Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of finance manager CVs and provides targeted feedback 
              to help you succeed in financial leadership applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💼 Executive Finance Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for finance manager, director, and C-suite financial leadership positions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📈 Strategic Planning</h3>
              <p className="text-gray-600">
                Optimize how you present your strategic financial planning, forecasting, and business analysis skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">👥 Leadership Experience</h3>
              <p className="text-gray-600">
                Highlight your team management, stakeholder communication, and cross-functional collaboration.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Executive ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV for executive search firms and corporate leadership Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Results Quantification</h3>
              <p className="text-gray-600">
                Emphasize quantifiable business results, ROI improvements, and financial performance achievements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice finance leadership interview questions with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Finance Management Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Finance Managers in All Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From finance managers to CFOs, we provide specialized CV review for all 
              financial leadership positions across different industries and company sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Finance Manager',
              'Finance Director',
              'Chief Financial Officer',
              'Treasury Manager',
              'Financial Planning Manager',
              'Corporate Finance Manager',
              'Financial Controller',
              'Budget Manager',
              'Investment Manager',
              'Risk Manager',
              'Financial Operations Manager',
              'Business Finance Partner'
            ].map((role, index) => (
              <div key={index} className="bg-green-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-700 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Finance Leadership Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your finance manager CV reviewed today and increase your chances of landing your ideal 
            financial leadership position. Our AI provides instant, professional feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cv-review"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Start Your CV Review
            </a>
            <a
              href="/pricing"
              className="border-2 border-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered finance leadership interview preparation to help you ace your executive interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
