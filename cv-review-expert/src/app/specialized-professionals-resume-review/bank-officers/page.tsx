import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Bank Officers - Professional Banking Resume Analysis | CVReviewExpert',
  description: 'Get your banking CV professionally reviewed by AI. Optimize your bank officer resume for financial institutions, credit unions, and investment banks. Expert feedback for banking professionals.',
  keywords: [
    'bank officer CV review',
    'banking resume review',
    'loan officer CV analysis',
    'banking professional resume',
    'financial services CV',
    'bank manager resume',
    'banking career',
    'credit analyst CV',
    'relationship manager resume',
    'banking job application',
    'banking interview preparation',
    'financial advisor CV'
  ],
};

export default function BankOfficersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Bank Officers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your banking CV reviewed by AI experts. Stand out in financial services applications 
              and secure positions in banks, credit unions, and financial institutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Banking CV Now
              </a>
              <a
                href="#features"
                className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bank Officers Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Banking CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Banking employers seek professionals with strong financial knowledge, customer service skills, 
              and regulatory compliance experience. Your CV must demonstrate these competencies effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Financial Expertise</h3>
              <p className="text-gray-600">
                Highlight your knowledge of banking products, financial analysis, credit assessment, 
                and investment strategies to demonstrate your financial acumen.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Relationship Management</h3>
              <p className="text-gray-600">
                Showcase your experience in building client relationships, managing portfolios, 
                and delivering exceptional customer service in banking environments.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12a11.955 11.955 0 01-4.382 9.016M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Demonstrate your understanding of banking regulations, risk management, and compliance 
                procedures essential for modern banking operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Bank Officers */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Banking Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of banking CVs and provides targeted feedback 
              to help you succeed in financial services applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏦 Banking Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for commercial banks, investment banks, credit unions, and financial institutions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💰 Financial Skills Highlighting</h3>
              <p className="text-gray-600">
                Optimize how you present your knowledge of banking products, loans, investments, and financial analysis.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🤝 Relationship Management</h3>
              <p className="text-gray-600">
                Highlight your client relationship skills, sales achievements, and customer satisfaction metrics.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Banking ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV to pass through banking industry Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Performance Metrics</h3>
              <p className="text-gray-600">
                Emphasize quantifiable achievements like loan volumes, portfolio growth, and revenue generation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice banking interview questions and scenarios with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Banking Career Paths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Banking Professionals in All Roles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From entry-level bank tellers to senior relationship managers, we provide specialized 
              CV review for all banking positions and career levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Bank Teller',
              'Loan Officer',
              'Credit Analyst',
              'Relationship Manager',
              'Branch Manager',
              'Investment Advisor',
              'Mortgage Specialist',
              'Commercial Banker',
              'Private Banker',
              'Risk Analyst',
              'Compliance Officer',
              'Operations Manager'
            ].map((role, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Banking Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your banking CV reviewed today and increase your chances of landing your ideal 
            position in financial services. Our AI provides instant, professional feedback.
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
              className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered banking interview preparation to help you ace your financial services interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
