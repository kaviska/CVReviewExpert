import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Hotel Managers - Professional Hospitality Management Resume Analysis | CVReviewExpert',
  description: 'Get your hotel manager CV professionally reviewed by AI. Optimize your hospitality management resume for hotels, resorts, and hospitality chains. Expert feedback for hospitality leaders.',
  keywords: [
    'hotel manager CV review',
    'hospitality manager resume',
    'hotel general manager CV',
    'resort manager resume',
    'hospitality career',
    'hotel management CV',
    'hospitality leadership resume',
    'hotel operations manager CV',
    'guest services manager resume',
    'hotel industry CV',
    'hospitality interview preparation',
    'hotel director resume'
  ],
};

export default function HotelManagersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Hotel Managers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your hotel management CV reviewed by AI experts. Stand out in hospitality applications 
              and secure leadership positions in hotels, resorts, and hospitality chains worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Hotel CV Now
              </a>
              <a
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Hotel Managers Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Hotel Management CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hotel management roles demand exceptional leadership, customer service excellence, and operational expertise. 
              Your CV must demonstrate these hospitality competencies and guest satisfaction achievements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-amber-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Guest Experience Excellence</h3>
              <p className="text-gray-600">
                Highlight your track record of delivering exceptional guest experiences, managing customer 
                satisfaction, and building guest loyalty programs.
              </p>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Operations Management</h3>
              <p className="text-gray-600">
                Showcase your expertise in hotel operations, housekeeping management, F&B operations, 
                and facility maintenance coordination.
              </p>
            </div>
            
            <div className="bg-red-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Team Leadership</h3>
              <p className="text-gray-600">
                Demonstrate your ability to lead diverse hospitality teams, manage staff training, 
                and maintain high service standards across departments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Hotel Managers */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Hotel Management Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of hotel management CVs and provides targeted feedback 
              to help you succeed in hospitality leadership applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏨 Hospitality Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for luxury hotels, resorts, boutique properties, and hospitality chains.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Guest Satisfaction</h3>
              <p className="text-gray-600">
                Optimize how you present guest satisfaction scores, review ratings, and customer service achievements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📊 Revenue Management</h3>
              <p className="text-gray-600">
                Highlight your experience in revenue optimization, occupancy management, and profit improvement.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Hospitality ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV for hotel chains and hospitality company Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌟 Service Excellence</h3>
              <p className="text-gray-600">
                Emphasize your commitment to service quality, staff training, and hospitality standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice hotel management interview questions with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel Management Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Hotel Managers in All Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From department managers to general managers, we provide specialized CV review for all 
              hotel management positions across different property types and hospitality segments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'General Manager',
              'Assistant Manager',
              'Operations Manager',
              'Guest Services Manager',
              'Food & Beverage Manager',
              'Housekeeping Manager',
              'Sales Manager',
              'Events Manager',
              'Revenue Manager',
              'Front Office Manager',
              'Maintenance Manager',
              'Training Manager'
            ].map((role, index) => (
              <div key={index} className="bg-amber-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Hotel Management Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your hotel management CV reviewed today and increase your chances of landing your ideal 
            hospitality leadership position. Our AI provides instant, professional feedback.
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
              className="border-2 border-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered hospitality interview preparation to help you ace your hotel management interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
