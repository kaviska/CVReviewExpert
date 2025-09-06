export default function PricingSection() {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "pour toujours",
      description: "Parfait pour commencer avec les fonctionnalités essentielles",
      features: [
        "1 analyse de CV gratuite",
        "Score de compatibilité ATS basique",
        "Vérification de formatage",
        "Suggestions de mots-clés limitées",
        "Rapport PDF basique"
      ],
      buttonText: "Commencer Gratuitement",
      buttonClass: "border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",
      popular: false
    },
    {
      name: "Pro",
      price: "29€",
      period: "par mois",
      description: "Idéal pour les chercheurs d'emploi actifs qui veulent plus de fonctionnalités",
      features: [
        "Analyses illimitées de CV",
        "Score de compatibilité ATS avancé",
        "Optimisation de mots-clés IA",
        "Correspondance d'emploi personnalisée",
        "Rapports PDF détaillés",
        "Modèles de lettre de motivation",
        "Support par email prioritaire"
      ],
      buttonText: "Commencer l'Essai Gratuit",
      buttonClass: "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-xl",
      popular: true
    },
    {
      name: "Premium",
      price: "59€",
      period: "par mois",
      description: "Pour les professionnels qui veulent un avantage concurrentiel complet",
      features: [
        "Tout du plan Pro",
        "Consultation 1-on-1 avec un expert",
        "Révision personnalisée de CV",
        "Optimisation LinkedIn",
        "Préparation aux entretiens",
        "Suivi des candidatures",
        "Support téléphonique",
        "Accès anticipé aux nouvelles fonctionnalités"
      ],
      buttonText: "Commencer Premium",
      buttonClass: "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tarifs <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simples et Transparents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez le plan qui correspond à vos besoins de carrière. Commencez gratuitement et passez à un plan supérieur quand vous êtes prêt.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50 scale-105' : ''}`}>
              {/* Popular Badge */}
              {plan.popular && (
                <div className="text-center">
                  <span className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold -mt-4">
                    Le Plus Populaire
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${plan.buttonClass}`}>
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <svg className="w-12 h-12 text-green-500 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-2xl font-bold text-gray-900">Garantie Satisfait ou Remboursé 30 Jours</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Nous sommes si confiants que vous aimerez notre service que nous offrons une garantie de remboursement complet de 30 jours sur tous les plans payants.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Aucun engagement</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Annulation facile</span>
              </div>
              <div className="flex items-center justify-center">
                <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span>Support 24/7</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Des questions sur nos tarifs ? 
            <a href="/fr#faq" className="text-blue-600 hover:text-blue-700 font-semibold ml-1">
              Consultez notre FAQ
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}