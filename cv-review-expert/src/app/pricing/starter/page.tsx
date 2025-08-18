import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

export default function StarterPlanPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Starter Plan</h1>
        <p className="text-gray-600 mb-8">
          Perfect for trying our service. Includes 3 CV/Resume analyses, basic ATS compatibility check, keyword matching, and basic formatting feedback.
        </p>
        <a
          href="/cv-review"
          className="inline-flex items-center bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl font-bold shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
          Go to CV Review
        </a>
        <div className="mt-12 p-6 bg-gray-50 rounded-xl">
          <h2 className="text-xl font-semibold mb-3">What you get</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>3 CV/Resume analyses</li>
            <li>Basic ATS compatibility score</li>
            <li>Keyword match highlights</li>
            <li>Basic formatting feedback</li>
            <li>Download PDF reports</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
