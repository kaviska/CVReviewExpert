export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
  title: "Téléchargez votre CV",
  description: "Glissez-déposez un document PDF ou Word. Notre vérificateur de CV sécurisé supporte tous les formats majeurs et garde vos données privées."
    },
    {
      number: "02",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
  title: "Scan CV IA",
  description: "Notre vérificateur de CV ATS analyse les mots-clés, compétences, formatage, et la compatibilité avec les systèmes de suivi des candidatures en secondes."
    },
    {
      number: "03",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
  title: "Obtenez Votre Rapport",
  description: "Téléchargez un plan d'action clair avec des corrections de mots-clés ciblées, des ajustements de formatage, et des recommandations de correspondance d'emploi pour booster les entretiens."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Comment Ça <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fonctionne</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenez des retours professionnels sur votre CV en 3 étapes simples—optimisé pour ATS et vrais recruteurs.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300"></div>
          <div className="hidden md:block absolute top-24 left-2/3 right-0 h-0.5 bg-gradient-to-r from-blue-300 to-purple-300 transform translate-x-8"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Step Card */}
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4 flex justify-center">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Prêt à Améliorer Votre CV ?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Rejoignez des milliers de professionnels qui ont amélioré leurs chances d'emploi avec notre vérificateur de CV alimenté par IA.
            </p>
            <a
              href="/fr/cv-review"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group inline-block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                </svg>
                Commencer Maintenant - Gratuit
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}