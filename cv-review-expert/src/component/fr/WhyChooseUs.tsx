export default function WhyChooseUs() {
  const reasons = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Technologie IA Avancée",
      description: "Notre IA est entraînée sur des millions de CV et de descriptions d'emploi pour fournir les insights les plus précis et actionnables pour votre carrière."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Analyse Instantanée",
      description: "Obtenez des retours complets sur votre CV en moins de 60 secondes. Pas d'attente, pas de délais - juste des résultats rapides et précis."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Optimisation ATS Garantie",
      description: "Assurez-vous que votre CV passe les systèmes de suivi des candidatures utilisés par 95% des grandes entreprises et des recruteurs."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "100% Sécurisé et Privé",
      description: "Vos données sont chiffrées et ne sont jamais partagées. Nous respectons des normes de sécurité strictes et vous pouvez supprimer vos données à tout moment."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Utilisé par des Milliers",
      description: "Rejoignez plus de 50 000 professionnels qui ont amélioré leurs CV et augmenté leurs taux de réponse aux candidatures avec notre plateforme."
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Conseils Experts",
      description: "Obtenez des recommandations de niveau professionnel développées par des experts en RH et des recruteurs ayant des années d'expérience."
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Pourquoi Choisir <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Notre Plateforme</span> ?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez pourquoi notre vérificateur de CV alimenté par IA est le choix de confiance des professionnels du monde entier pour améliorer leurs chances d'emploi.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300 transform group-hover:scale-110">
                  <div className="text-blue-600 group-hover:text-purple-600 transition-colors duration-300">
                    {reason.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Résultats Éprouvés Qui Parlent d'Eux-Mêmes
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">CV Analysés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Taux de Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Plus de Réponses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">60s</div>
              <div className="text-blue-100">Analyse Moyenne</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à Transformer Votre CV ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Rejoignez des milliers de professionnels qui ont amélioré leurs perspectives de carrière avec notre vérificateur de CV alimenté par IA.
          </p>
          <a
            href="/fr/cv-review"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Commencer l'Analyse Gratuite
          </a>
        </div>
      </div>
    </section>
  );
}