import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Nurses - Professional Nursing Resume Analysis | CVReviewExpert',
  description: 'Get your nursing CV professionally reviewed by AI. Optimize your nursing resume for hospitals, clinics, and healthcare facilities. Expert feedback for registered nurses, nurse practitioners, and nursing students.',
  keywords: [
    'nursing CV review',
    'nurse resume review',
    'nursing CV analysis',
    'healthcare CV review',
    'registered nurse resume',
    'nursing job application',
    'nurse practitioner CV',
    'nursing career',
    'hospital job application',
    'nursing resume writing',
    'nursing interview preparation'
  ],
};

export default function NursesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Nurses</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your nursing CV reviewed by AI experts. Stand out in healthcare job applications 
              and land your dream nursing position in hospitals, clinics, and healthcare facilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Nursing CV Now
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

      {/* Why Nurses Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Nursing CVs Need Special Attention
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Healthcare employers look for specific qualifications, certifications, and experience. 
              Your nursing CV must highlight these critical elements effectively.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Certification Verification</h3>
              <p className="text-gray-600">
                Ensure your nursing licenses, certifications (BLS, ACLS, PALS), and specializations 
                are prominently displayed and properly formatted.
              </p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Clinical Experience</h3>
              <p className="text-gray-600">
                Highlight your clinical rotations, patient care experience, and specialized nursing 
                areas like ICU, ER, pediatrics, or surgical nursing.
              </p>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Patient Care Skills</h3>
              <p className="text-gray-600">
                Showcase your patient communication, care coordination, and multidisciplinary 
                team collaboration skills that are essential in nursing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Nurses */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Nursing Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of nursing CVs and provides targeted feedback 
              to help you succeed in healthcare job applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏥 Healthcare Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback specifically for hospital, clinic, and healthcare facility applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📋 Certification Optimization</h3>
              <p className="text-gray-600">
                Ensure your nursing licenses, BLS, ACLS, and specialty certifications are highlighted effectively.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">👩‍⚕️ Clinical Experience Formatting</h3>
              <p className="text-gray-600">
                Optimize how you present your clinical rotations, patient care experience, and nursing specialties.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV to pass through healthcare Applicant Tracking Systems used by hospitals.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">💬 Soft Skills Highlighting</h3>
              <p className="text-gray-600">
                Emphasize compassion, communication, and teamwork skills essential for nursing roles.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice nursing interview questions and scenarios with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nursing Specialties */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Nurses in All Specialties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a new graduate or experienced nurse, we provide specialized CV review 
              for all nursing areas and career levels.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Registered Nurses (RN)',
              'Licensed Practical Nurses (LPN)',
              'Nurse Practitioners (NP)',
              'ICU/Critical Care Nurses',
              'Emergency Room Nurses',
              'Pediatric Nurses',
              'Surgical Nurses',
              'Psychiatric Nurses',
              'Labor & Delivery Nurses',
              'Oncology Nurses',
              'Geriatric Nurses',
              'Home Health Nurses'
            ].map((specialty, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Nursing Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your nursing CV reviewed today and increase your chances of landing your ideal 
            nursing position. Our AI provides instant, professional feedback.
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
            🎯 <strong>Coming Soon:</strong> AI-powered nursing interview preparation to help you ace your nursing job interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
