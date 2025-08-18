export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      originalPrice: "$9",
      price: "FREE",
      period: "limited time",
      description: "Perfect for trying our service",
      features: [
        "3 CV/Resume analyses",
        "Basic ATS compatibility check",
        "Keyword matching analysis",
        "Basic formatting feedback",
        "Email support",
        "Download PDF reports"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
      popular: false,
      savings: "Save $9"
    },
    {
      name: "Professional",
      originalPrice: "$29",
      price: "FREE",
      period: "limited time",
      description: "Best for serious job seekers",
      features: [
        "Unlimited CV/Resume analyses",
        "Advanced ATS optimization",
        "Industry-specific keywords",
        "Detailed improvement guide",
        "Grammar & language check",
        "Skill gap analysis",
        "Priority support",
        "Download all reports as PDF",
        "Before/After comparisons"
      ],
      buttonText: "Claim Free Access",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
      popular: true,
      savings: "Save $29"
    },
    {
      name: "Premium+",
      originalPrice: "$59",
      price: "FREE",
      period: "limited time",
      description: "For professionals & career changers",
      features: [
        "Everything in Professional",
        "1-on-1 CV consultation call",
        "Cover letter analysis",
        "LinkedIn profile optimization",
        "Interview preparation guide",
        "Career coaching resources",
        "Job market insights",
        "Custom branding advice",
        "24/7 priority support"
      ],
      buttonText: "Get Premium Free",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: false,
      savings: "Save $59"
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-16 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-300"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-20 animate-pulse delay-700"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Special Offer Banner */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-full text-lg font-bold shadow-lg animate-bounce">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd"/>
            </svg>
            🔥 LIMITED TIME OFFER - Everything is FREE!
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">All Premium Resume Tools</span>{' '}
            <span className="text-gray-900">Now FREE!</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            We&apos;re launching CVReviewExpert—get unlimited access to our resume review service, ATS checker, and pro tips at no cost.
          </p>
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold">
            ⏰ Limited time launch offer - Claim your free access now!
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                plan.popular 
                  ? 'ring-4 ring-green-400 scale-105 border-green-500' 
                  : 'border-green-200 hover:border-green-300'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* FREE Badge for all plans */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                  {plan.popular ? '🚀 MOST POPULAR - FREE!' : '🎉 NOW FREE!'}
                </span>
              </div>

              {/* Savings Badge */}
              <div className="absolute -top-2 -right-2">
                <div className="bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full transform rotate-12 shadow-lg">
                  {plan.savings}
                </div>
              </div>

              {/* Plan Header */}
              <div className="text-center mb-8 mt-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                {/* Price Display */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3">
                    {/* Original Price (crossed out) */}
                    <span className="text-2xl text-gray-400 line-through font-semibold">
                      {plan.originalPrice}
                    </span>
                    
                    {/* Free Price */}
                    <span className="text-5xl font-bold text-green-600 animate-pulse">
                      {plan.price}
                    </span>
                  </div>
                  <span className="text-green-600 font-semibold text-lg">/ {plan.period}</span>
                  
                  {/* Value proposition */}
                  <div className="mt-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      🎁 Usually {plan.originalPrice}/month
                    </span>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`relative w-full ${plan.buttonStyle} text-white py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden group border-2 border-transparent hover:border-white`}>
                <span className="absolute inset-0 bg-gradient-to-r from-white via-white to-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                  </svg>
                  {plan.buttonText}
                </span>
              </button>

              {/* Limited Time Notice */}
              <div className="text-center mt-4">
                <p className="text-sm text-green-600 font-semibold">
                  ⚡ Limited time offer
                </p>
                <p className="text-xs text-gray-500">
                  No credit card required • Instant access
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">No Hidden Fees</h4>
              <p className="text-sm text-gray-600">Completely free during launch</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Instant Access</h4>
              <p className="text-sm text-gray-600">Start analyzing immediately</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">All Features</h4>
              <p className="text-sm text-gray-600">Full premium functionality</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clipRule="evenodd"/>
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900">Expert Support</h4>
              <p className="text-sm text-gray-600">Get help when you need it</p>
            </div>
          </div>
          
          <p className="text-gray-600 mb-4">
            Questions about our free launch offer? Check our{' '}
            <a href="#faq" className="text-blue-600 hover:text-blue-700 font-medium">FAQ section</a>{' '}
            or{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">contact us</a>
          </p>
        </div>

        {/* Special Launch Guarantee */}
        <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 text-center max-w-3xl mx-auto shadow-lg border-2 border-green-200">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3">🚀 Launch Special - Everything FREE!</h3>
          <p className="text-lg text-gray-700 mb-4">
            We're so confident in our CV Review Expert platform that we're giving away <strong>all premium features for free</strong> during our launch period. 
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="bg-white p-3 rounded-lg">
              <span className="font-semibold text-green-600">✅ No Credit Card</span>
              <p className="text-gray-600">Required to get started</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="font-semibold text-green-600">✅ Unlimited Access</span>
              <p className="text-gray-600">All features, no restrictions</p>
            </div>
            <div className="bg-white p-3 rounded-lg">
              <span className="font-semibold text-green-600">✅ Launch Period</span>
              <p className="text-gray-600">Limited time opportunity</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-100 rounded-lg">
            <p className="text-sm text-yellow-800 font-semibold">
              ⏰ <strong>Act Fast!</strong> This launch offer won't last forever. Join thousands of job seekers who are already improving their CVs and resumes with our free platform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
