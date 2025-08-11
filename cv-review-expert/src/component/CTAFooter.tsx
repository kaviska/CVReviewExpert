export default function CTAFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main CTA Content */}
        <div className="animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your Next Job Starts with a Better CV
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Don&apos;t let a poorly optimized CV hold you back. Get AI-powered insights that help you stand out from the competition and land more interviews.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="relative bg-white text-blue-600 px-10 py-5 rounded-2xl text-lg font-bold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
              <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
                Upload Your CV Now
              </span>
            </button>
            <button className="relative border-3 border-white text-white px-10 py-5 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-600 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                Start Free Trial
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-blue-100 text-sm">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free to start
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card required
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Results in 60 seconds
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              100% secure & private
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-blue-500 pt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-4">CVReviewExpert</h3>
              <p className="text-blue-100 mb-6">
                AI-powered CV analysis that helps you land your dream job faster.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#features" className="text-blue-100 hover:text-white transition-colors duration-200">Features</a></li>
                <li><a href="#pricing" className="text-blue-100 hover:text-white transition-colors duration-200">Pricing</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">API</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Integrations</a></li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-blue-100 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Blog</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Careers</a></li>
                <li><a href="#contact" className="text-blue-100 hover:text-white transition-colors duration-200">Contact</a></li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-blue-100 hover:text-white transition-colors duration-200">FAQ</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Help Center</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Privacy Policy</a></li>
                <li><a href="#" className="text-blue-100 hover:text-white transition-colors duration-200">Terms of Service</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-blue-500 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2024 CVReviewExpert. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">Privacy</a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">Terms</a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors duration-200">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
