export default function KeyFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Vérification de Compatibilité ATS",
      description: "Assurez-vous que votre CV passe les systèmes de suivi des candidatures avec notre vérificateur ATS alimenté par IA."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Optimisation des Mots-clés",
      description: "Identifiez les mots-clés manquants et optimisez votre CV pour des emplois spécifiques avec des suggestions IA intelligentes."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Analyse de Score Détaillée",
      description: "Obtenez des scores détaillés sur le formatage, les compétences, l'expérience et la compatibilité globale avec les attentes des recruteurs."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Retours Instantanés",
      description: "Recevez une analyse complète de votre CV en moins de 60 secondes avec des recommandations d'action immédiate."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Sécurisé et Privé",
      description: "Vos données sont chiffrées et sécurisées. Nous ne stockons jamais vos CV et respectons des normes de confidentialité strictes."
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Conseils d'Amélioration",
      description: "Obtenez des suggestions spécifiques et actionnables pour améliorer votre CV et augmenter vos chances d'obtenir des entretiens."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Fonctionnalités <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Puissantes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre vérificateur de CV alimenté par IA fournit une analyse complète pour vous aider à décrocher plus d'entretiens et à faire progresser votre carrière.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 group">
              {/* Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Testez Toutes les Fonctionnalités Gratuitement
            </h3>
            <p className="text-gray-600 mb-6">
              Aucune carte de crédit requise. Obtenez un rapport d'analyse complet de votre CV en moins d'une minute.
            </p>
            <a
              href="/fr/cv-review"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Analyser Mon CV Maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}