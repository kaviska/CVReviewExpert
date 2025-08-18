import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Front Desk Officers - Professional Reception & Customer Service Resume Analysis | CVReviewExpert',
  description: 'Get your front desk officer CV professionally reviewed by AI. Optimize your reception and customer service resume for hotels, offices, and service industries. Expert feedback for front desk professionals.',
  keywords: [
    'front desk officer CV review',
    'receptionist resume review',
    'customer service CV',
    'front desk agent resume',
    'hotel reception CV',
    'office receptionist resume',
    'guest services CV',
    'front office career',
    'reception desk resume',
    'customer service representative CV',
    'hospitality front desk',
    'reception interview preparation'
  ],
};

export default function FrontDeskOfficersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Front Desk Officers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your front desk CV reviewed by AI experts. Stand out in customer service applications 
              and secure positions in hotels, corporate offices, healthcare facilities, and service industries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Front Desk CV Now
              </a>
              <a
                href="/about"
                className="border-2 border-white hover:bg-white hover:text-purple-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Front Desk Officers Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Front Desk CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Front desk roles are the face of organizations, requiring excellent communication skills, 
              professionalism, and customer service expertise. Your CV must showcase these essential qualities.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-pink-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Communication Excellence</h3>
              <p className="text-gray-600">
                Highlight your verbal and written communication skills, multilingual abilities, 
                and professional phone etiquette essential for front desk roles.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Service Focus</h3>
              <p className="text-gray-600">
                Showcase your customer service experience, problem-solving abilities, and track record 
                of maintaining high customer satisfaction ratings.
              </p>
            </div>
            
            <div className="bg-indigo-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Administrative Skills</h3>
              <p className="text-gray-600">
                Demonstrate your organizational abilities, multitasking skills, and proficiency with 
                front desk software and administrative systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Front Desk Officers */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Front Desk Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of front desk CVs and provides targeted feedback 
              to help you succeed in customer service and reception applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏢 Multi-Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for hotels, corporate offices, healthcare facilities, and service industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💬 Communication Skills</h3>
              <p className="text-gray-600">
                Optimize how you present your verbal, written, and interpersonal communication abilities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🌟 Customer Service Excellence</h3>
              <p className="text-gray-600">
                Highlight your customer service achievements, satisfaction scores, and problem resolution skills.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Service Industry ATS</h3>
              <p className="text-gray-600">
                Format your CV for hospitality and service industry Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💻 Technology Proficiency</h3>
              <p className="text-gray-600">
                Emphasize your skills with front desk software, PMS systems, and office technology.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice front desk interview questions with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Front Desk Career Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Front Desk Professionals in All Industries
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From hotel reception to corporate front desk, we provide specialized CV review for all 
              front desk positions across different industries and organizational settings.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Hotel Front Desk Agent',
              'Office Receptionist',
              'Medical Receptionist',
              'Concierge',
              'Guest Services Representative',
              'Corporate Reception',
              'Dental Receptionist',
              'Gym Front Desk',
              'Spa Receptionist',
              'Clinic Reception',
              'Customer Service Representative',
              'Administrative Assistant'
            ].map((role, index) => (
              <div key={index} className="bg-pink-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-pink-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Front Desk Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your front desk CV reviewed today and increase your chances of landing your ideal 
            customer service position. Our AI provides instant, professional feedback.
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
              className="border-2 border-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered customer service interview preparation to help you ace your front desk interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
