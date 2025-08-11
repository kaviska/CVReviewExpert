export default function PricingSection() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for trying our service",
      features: [
        "1 CV analysis per month",
        "Basic ATS compatibility check",
        "Keyword matching",
        "Basic formatting feedback",
        "Email support"
      ],
      buttonText: "Get Started Free",
      buttonStyle: "bg-gray-600 hover:bg-gray-700",
      popular: false
    },
    {
      name: "Pro",
      price: "$19",
      period: "per month",
      description: "Best for job seekers",
      features: [
        "Unlimited CV analyses",
        "Advanced ATS optimization",
        "Industry-specific keywords",
        "Detailed improvement guide",
        "Grammar & language check",
        "Skill gap analysis",
        "Priority support",
        "Download reports as PDF"
      ],
      buttonText: "Start Free Trial",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
      popular: true
    },
    {
      name: "Premium",
      price: "$39",
      period: "per month",
      description: "For professionals & career changers",
      features: [
        "Everything in Pro",
        "1-on-1 CV consultation",
        "Cover letter analysis",
        "LinkedIn profile optimization",
        "Interview preparation tips",
        "Career coaching session",
        "Job market insights",
        "Custom branding advice"
      ],
      buttonText: "Contact Sales",
      buttonStyle: "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your career goals. Start free and upgrade when you need more features.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl shadow-lg p-8 relative transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/ {plan.period}</span>
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
              <button className={`relative w-full ${plan.buttonStyle} text-white py-5 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden group`}>
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    {plan.name === "Basic" && (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                    )}
                    {plan.name === "Pro" && (
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                    )}
                    {plan.name === "Enterprise" && (
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    )}
                  </svg>
                  {plan.buttonText}
                </span>
              </button>

              {/* Additional Info */}
              {plan.name === "Pro" && (
                <p className="text-center text-sm text-gray-500 mt-4">
                  14-day free trial • Cancel anytime
                </p>
              )}
            </div>
          ))}
        </div>

        {/* FAQ Preview */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            Questions about pricing? Check our{' '}
            <a href="#faq" className="text-blue-600 hover:text-blue-700 font-medium">FAQ section</a>{' '}
            or{' '}
            <a href="#contact" className="text-blue-600 hover:text-blue-700 font-medium">contact us</a>
          </p>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center max-w-2xl mx-auto shadow-lg">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">30-Day Money-Back Guarantee</h3>
          <p className="text-gray-600">
            Not satisfied with your results? Get a full refund within 30 days, no questions asked.
          </p>
        </div>
      </div>
    </section>
  );
}
