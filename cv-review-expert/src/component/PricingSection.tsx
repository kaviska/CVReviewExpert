export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations - subtle */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-green-200 rounded-full opacity-20 blur-2xl" />
        <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-blue-200 rounded-full opacity-20 blur-2xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Free banner */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-9.95a1 1 0 00-1.414-1.414L9 9.293 7.879 8.172a1 1 0 10-1.414 1.414l1.999 1.999a1 1 0 001.414 0l3.658-3.535z" clipRule="evenodd" />
            </svg>
            100% Free — No credit card required
          </span>
        </div>

        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            All Resume Tools are <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Completely Free</span>
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy unlimited CV/Resume analyses, ATS checks, keyword insights, and expert guidance — no paywalls, no limits, just value.
          </p>
        </div>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/cv-review"
            className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-blue-700 transition-all"
          >
            Start Free
            <svg className="ml-2 w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414-1.414L13.586 10H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#how-it-works" className="text-blue-700 hover:text-blue-800 font-medium">See how it works</a>
        </div>

        {/* Highlights */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-green-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center mb-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4 2 2-6 6-4-4 2-2z"/></svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Unlimited analyses</h3>
            <p className="text-gray-600 text-sm">Run as many CV/Resume checks as you like.</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-blue-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l4 4-4 4-4-4 4-4zm-6 10h12v2H6v-2zm0 4h12v2H6v-2z"/></svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Full premium features</h3>
            <p className="text-gray-600 text-sm">ATS optimization, keywords, formatting tips, and PDFs.</p>
          </div>
          <div className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-purple-100 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-3">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3h14v2H5V3zm2 4h10v2H7V7zm-2 4h14v2H5v-2zm2 4h10v2H7v-2zM5 19h14v2H5v-2z"/></svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">Instant access</h3>
            <p className="text-gray-600 text-sm">No signup hurdles — get started in seconds.</p>
          </div>
        </div>

        {/* Soft reassurance */}
        <p className="mt-10 text-center text-sm text-gray-500">
          Questions? Visit the FAQ below or contact us — we're here to help.
        </p>
      </div>
    </section>
  );
}
