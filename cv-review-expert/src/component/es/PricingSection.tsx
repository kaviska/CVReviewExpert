export default function PricingSection() {
  const plans = [
    {
      name: "Verificación Gratuita",
      price: "0€",
      period: "siempre",
      description: "Perfecto para empezar con análisis básico del CV",
      features: [
        "Verificación ATS básica",
        "Puntuación de compatibilidad",
        "Sugerencias de palabras clave",
        "Retroalimentación de formato",
        "1 CV por mes"
      ],
      buttonText: "Comenzar Gratis",
      buttonStyle: "bg-gray-600 hover:bg-gray-700",
      popular: false
    },
    {
      name: "Profesional",
      price: "9€",
      period: "mes",
      description: "Para profesionales que buscan análisis detallados",
      features: [
        "Todo en el plan Gratuito",
        "Análisis detallado de palabras clave",
        "Comparación con descripciones de trabajo",
        "Sugerencias de mejora",
        "CVs ilimitados",
        "Soporte prioritario"
      ],
      buttonText: "Elegir Profesional",
      buttonStyle: "bg-gradient-to-r from-blue-600 to-purple-600 hover:shadow-lg",
      popular: true
    },
    {
      name: "Empresarial",
      price: "29€",
      period: "mes",
      description: "Para equipos y empresas de reclutamiento",
      features: [
        "Todo en el plan Profesional",
        "Gestión de equipos",
        "Análisis en lote",
        "Integración API",
        "Informes avanzados",
        "Soporte dedicado"
      ],
      buttonText: "Contactar Ventas",
      buttonStyle: "bg-gray-800 hover:bg-gray-900",
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Planes <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Simples</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el plan perfecto para tus necesidades. Mejora tu CV y consigue más entrevistas hoy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl ${
                plan.popular 
                  ? 'border-blue-500 transform scale-105' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">/{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 px-6 rounded-xl text-white font-semibold transition-all duration-300 transform hover:scale-105 ${plan.buttonStyle}`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            ¿Necesitas algo personalizado? <a href="/contact" className="text-blue-600 hover:underline">Contáctanos</a>
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <span className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Sin tarifas ocultas
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancela en cualquier momento
            </span>
            <span className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Garantía de 30 días
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
