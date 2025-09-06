export default function ComingSoon() {
  const upcomingFeatures = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a2 2 0 01-2-2v-6a2 2 0 012-2h2m-3 6l3-3 3 3m-3-3v12" />
        </svg>
      ),
      title: "Suggestions de Lettres de Motivation",
      description: "Générez automatiquement des lettres de motivation personnalisées basées sur votre CV et la description du poste.",
      status: "Bientôt Disponible"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Optimisation Poste en Temps Réel",
      description: "Saisissez une description de poste et obtenez des suggestions de CV adaptées instantanément.",
      status: "En Développement"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Suivi des Candidatures",
      description: "Gardez une trace de vos candidatures et obtenez des insights sur les taux de réponse.",
      status: "Planifié Q2 2024"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      title: "Révisions par des Experts",
      description: "Connectez-vous avec des conseillers en carrière certifiés pour des révisions personnalisées.",
      status: "Version Bêta"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Prochaines <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Fonctionnalités</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nous développons constamment de nouvelles fonctionnalités pour faire de notre plateforme l'outil de carrière le plus complet disponible.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {upcomingFeatures.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              {/* Status Badge */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                    <div className="text-blue-600">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full">
                  {feature.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Soyez le Premier à Savoir
          </h3>
          <p className="text-gray-600 mb-8">
            Inscrivez-vous pour être notifié lorsque ces nouvelles fonctionnalités seront disponibles et obtenez un accès anticipé en version bêta.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              M'Informer
            </button>
          </div>
          
          <p className="text-sm text-gray-500 mt-4">
            Pas de spam. Désabonnez-vous à tout moment.
          </p>
        </div>

        {/* Current Features CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            En Attendant, Testez Nos Fonctionnalités Actuelles
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre vérificateur de CV alimenté par IA est déjà rempli de fonctionnalités puissantes pour vous aider à améliorer votre CV dès aujourd'hui.
          </p>
          <a
            href="/fr/cv-review"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Essayer Maintenant - Gratuit
          </a>
        </div>
      </div>
    </section>
  );
}