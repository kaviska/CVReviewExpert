export default function KeyFeatures() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Verificación de Compatibilidad ATS",
      description: "Asegúrate de que tu CV o currículum pase por los sistemas de seguimiento de candidatos. Obtén consejos prácticos para mejorar la puntuación ATS y evitar rechazos automáticos.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      ),
      title: "Optimización de Palabras Clave",
      description: "Coincide automáticamente con palabras clave de descripciones de trabajo. Nuestra IA destaca términos faltantes que los reclutadores y escáneres ATS esperan ver.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Retroalimentación de Formato CV & Currículum",
      description: "Obtén consejos profesionales sobre diseño, fuentes, espaciado y jerarquía para hacer tu currículum limpio, legible y amigable para reclutadores.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Análisis de Brechas de Habilidades",
      description: "Identifica habilidades y calificaciones faltantes. Obtén recomendaciones claras para fortalecer tu perfil para roles específicos.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      title: "Verificación de Gramática e Idioma",
      description: "Detecta errores instantáneamente y refina el tono con verificación de idioma avanzada para un acabado profesional y confiado.",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Características <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Principales</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra plataforma impulsada por IA ofrece una verificación completa de CV y currículum diseñada para mejorar entrevistas—rápida, asequible y probada.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Listo para mejorar tu CV o currículum?
            </h3>
            <p className="text-gray-600 mb-6">
              Confiado por miles. Optimiza tu CV con nuestro verificador de currículum IA y hazte listo para reclutadores hoy.
            </p>
            <a
              href="/es/cv-review"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group inline-block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2v1a1 1 0 102 0V3h4v1a1 1 0 102 0V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h6a1 1 0 100-2H7z" clipRule="evenodd"/>
              </svg>
              Analizar CV & Currículum Ahora
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
