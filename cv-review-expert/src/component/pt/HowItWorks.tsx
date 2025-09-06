export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      title: "Carregar CV",
      description: "Arraste e solte o seu documento PDF ou Word. O nosso verificador de currículo seguro suporta todos os principais formatos e mantém os seus dados privados."
    },
    {
      number: "02",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Verificação CV com IA",
      description: "O nosso verificador de currículo ATS analisa palavras-chave, competências, formatação e compatibilidade com sistemas de rastreamento de candidatos em segundos."
    },
    {
      number: "03",
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Obter Relatório",
      description: "Descarregue um plano de ação claro com correções de palavras-chave alvo, ajustes de formatação e recomendações de correspondência de empregos para conseguir mais entrevistas."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Como <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Funciona</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtenha feedback profissional do CV em 3 passos simples—otimizado para ATS e recrutadores reais.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-16 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-blue-200 to-purple-200"></div>
          
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Step Number */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-xl font-bold mb-6 group-hover:shadow-lg transition-shadow duration-300">
                {step.number}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-100 transition-colors duration-300">
                  {step.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-8">
                  <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a href="/pt/cv-review">
            <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 10.793a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd"/>
                </svg>
                Iniciar Análise Gratuita
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
