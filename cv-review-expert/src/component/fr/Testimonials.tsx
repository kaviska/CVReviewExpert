export default function Testimonials() {
  const testimonials = [
    {
      name: "Marie Dubois",
      role: "Ingénieure Logiciel",
      company: "TechCorp",
      image: "/profile.avif",
      rating: 5,
      text: "Ce vérificateur de CV a transformé ma recherche d'emploi ! J'ai reçu 3x plus de réponses après avoir optimisé mon CV avec leurs suggestions IA. L'analyse ATS était particulièrement utile."
    },
    {
      name: "Jean Martin",
      role: "Gestionnaire Marketing",
      company: "DigitalFirst",
      image: "/profile.avif",
      rating: 5,
      text: "Incroyable précision dans l'analyse ! Les suggestions de mots-clés m'ont aidé à adapter mon CV pour différents postes. L'interface est super intuitive et les résultats sont instantanés."
    },
    {
      name: "Sophie Laurent",
      role: "Analyste Financière",
      company: "FinanceCore",
      image: "/profile.avif",
      rating: 5,
      text: "J'étais sceptique au début, mais les insights détaillés étaient exactement ce dont j'avais besoin. Mon CV passe maintenant tous les scanners ATS et j'obtiens plus d'entretiens."
    },
    {
      name: "Pierre Moreau",
      role: "Chef de Projet",
      company: "InnovateHub",
      image: "/profile.avif",
      rating: 5,
      text: "Le meilleur investissement pour ma carrière ! La vérification gratuite m'a montré tant de problèmes que je n'avais pas remarqués. Maintenant j'obtiens des réponses de recruteurs top niveau."
    },
    {
      name: "Emma Rousseau",
      role: "Designer UX",
      company: "CreativeWorks",
      image: "/profile.avif",
      rating: 5,
      text: "Rapide, précis et incroyablement utile. Les retours sur le formatage et la mise en page ont amélioré l'apparence professionnelle de mon CV. Fortement recommandé !"
    },
    {
      name: "Lucas Bernard",
      role: "Consultant Business",
      company: "StrategyPlus",
      image: "/profile.avif",
      rating: 5,
      text: "Ce service a changé la donne. L'analyse IA a identifié des lacunes dans mes mots-clés que j'aurais manquées. Mon taux de réponse aux candidatures a doublé !"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ce Que Disent Nos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Utilisateurs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment notre vérificateur de CV alimenté par IA a aidé des milliers de professionnels à améliorer leurs perspectives de carrière et à décrocher des emplois de rêve.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role} chez {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Résultats Qui Comptent
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">50K+</div>
              <div className="text-blue-100">CV Améliorés</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">3x</div>
              <div className="text-blue-100">Plus de Réponses</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">95%</div>
              <div className="text-blue-100">Taux de Satisfaction</div>
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
            Rejoignez Nos Utilisateurs Satisfaits
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Découvrez pourquoi des milliers de professionnels nous font confiance pour optimiser leurs CV et accélérer leur carrière.
          </p>
          <a
            href="/fr/cv-review"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-block"
          >
            Essayer Gratuitement
          </a>
        </div>
      </div>
    </section>
  );
}