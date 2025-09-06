export default function WhyChooseUs() {
  const benefits = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Velocidade Surpreendente",
      description: "Obtenha uma verificação ATS abrangente do currículo em menos de 60 segundos",
      metric: "< 1 min",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      title: "Acessível e Começo Gratuito",
      description: "Análise gratuita hoje, upgrades profissionais conforme necessário",
      metric: "Gratuito",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
        </svg>
      ),
      title: "Compatibilidade Universal",
      description: "Funciona para qualquer indústria, função, nível de experiência—desde recém-formados a executivos",
      metric: "Todas as Funções",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Privado e Seguro",
      description: "O seu CV é encriptado, nunca partilhado e pode ser eliminado a qualquer momento",
      metric: "100% Seguro",
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Porquê <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Escolher-nos</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos comprometidos em ajudá-lo a conseguir o seu próximo emprego com análise CV IA comprovada, confiada por profissionais em todo o mundo.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon Container */}
              <div className="relative mb-6">
                <div className={`inline-flex p-6 rounded-2xl bg-gradient-to-r ${benefit.color} text-white shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  {benefit.icon}
                </div>
                {/* Floating Metric */}
                <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 text-sm font-bold text-gray-800 shadow-lg border-2 border-gray-100">
                  {benefit.metric}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-blue-100">CVs Analisados</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-4xl font-bold mb-2">94%</div>
              <div className="text-blue-100">Taxa de Melhoria</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-blue-100">Classificação de Utilizador</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
       
      </div>
    </section>
  );
}
