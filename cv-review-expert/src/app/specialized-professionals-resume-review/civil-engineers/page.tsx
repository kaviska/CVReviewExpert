import { Metadata } from 'next';
import Navbar from '../../../component/Navbar';
import Footer from '../../../component/Footer';

export const metadata: Metadata = {
  title: 'CV Review for Civil Engineers - Professional Engineering Resume Analysis | CVReviewExpert',
  description: 'Get your civil engineering CV professionally reviewed by AI. Optimize your engineering resume for construction companies, government agencies, and consulting firms. Expert feedback for civil engineers.',
  keywords: [
    'civil engineer CV review',
    'engineering resume review',
    'structural engineer CV',
    'construction engineer resume',
    'civil engineering career',
    'engineering project manager CV',
    'infrastructure engineer resume',
    'PE license engineer CV',
    'engineering consultant resume',
    'civil engineering job application',
    'engineering interview preparation',
    'AutoCAD engineer CV'
  ],
};

export default function CivilEngineersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-700 via-gray-700 to-zinc-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Professional CV Review for <span className="text-yellow-300">Civil Engineers</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
              Get your civil engineering CV reviewed by AI experts. Stand out in engineering applications 
              and secure positions in construction companies, government agencies, and consulting firms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/cv-review"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Review My Engineering CV Now
              </a>
              <a
                href="#features"
                className="border-2 border-white hover:bg-white hover:text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Civil Engineers Need Professional CV Review */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Civil Engineering CVs Require Specialized Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Civil engineering roles demand technical expertise, project management skills, and regulatory knowledge. 
              Your CV must effectively demonstrate these engineering competencies and project achievements.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-slate-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Technical Engineering Skills</h3>
              <p className="text-gray-600">
                Highlight your proficiency in AutoCAD, Revit, SAP2000, design software, and engineering 
                analysis tools essential for modern civil engineering projects.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-gray-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Project Management</h3>
              <p className="text-gray-600">
                Showcase your experience managing construction projects, coordinating with contractors, 
                and delivering infrastructure projects on time and within budget.
              </p>
            </div>
            
            <div className="bg-zinc-50 p-8 rounded-xl text-center">
              <div className="w-16 h-16 bg-zinc-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12a11.955 11.955 0 01-4.382 9.016M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Demonstrate your knowledge of building codes, safety regulations, environmental standards, 
                and professional engineering licensure requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features for Civil Engineers */}
      <section id="features" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Specialized CV Review for Civil Engineering Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI understands the unique requirements of civil engineering CVs and provides targeted feedback 
              to help you succeed in engineering job applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏗️ Engineering Industry Focus</h3>
              <p className="text-gray-600">
                Tailored feedback for construction companies, consulting firms, government agencies, and infrastructure projects.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">📐 Technical Skills</h3>
              <p className="text-gray-600">
                Optimize how you present your CAD software, structural analysis, and engineering design expertise.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎓 Professional Licensing</h3>
              <p className="text-gray-600">
                Highlight your PE license, EIT certification, and other professional engineering credentials.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Engineering ATS Optimization</h3>
              <p className="text-gray-600">
                Format your CV for engineering firms and construction company Applicant Tracking Systems.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🏆 Project Achievements</h3>
              <p className="text-gray-600">
                Emphasize successful project completions, cost savings, and engineering innovation achievements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">🚀 Coming Soon: AI Interview Prep</h3>
              <p className="text-gray-600">
                Practice civil engineering interview questions with our upcoming AI interview feature.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Civil Engineering Specializations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              We Help Civil Engineers in All Specializations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From junior engineers to senior project managers, we provide specialized CV review for all 
              civil engineering roles and specializations across different sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Structural Engineer',
              'Transportation Engineer',
              'Geotechnical Engineer',
              'Water Resources Engineer',
              'Construction Manager',
              'Project Engineer',
              'Design Engineer',
              'Site Engineer',
              'Infrastructure Engineer',
              'Environmental Engineer',
              'Bridge Engineer',
              'Highway Engineer'
            ].map((specialization, index) => (
              <div key={index} className="bg-slate-50 p-4 rounded-lg text-center">
                <p className="font-medium text-gray-900">{specialization}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-slate-700 to-zinc-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Advance Your Civil Engineering Career?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get your civil engineering CV reviewed today and increase your chances of landing your ideal 
            engineering position. Our AI provides instant, professional feedback.
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
              className="border-2 border-white hover:bg-white hover:text-gray-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300"
            >
              View Pricing
            </a>
          </div>
          <p className="mt-6 text-lg opacity-90">
            🎯 <strong>Coming Soon:</strong> AI-powered engineering interview preparation to help you ace your civil engineering interviews!
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
