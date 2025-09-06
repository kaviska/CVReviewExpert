export default function CTAFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            Pronto para <span className="text-blue-200">Transformar</span> o Seu CV?
          </h2>
          
          <p className="text-xl text-blue-100 mb-12">
            Junte-se a milhares de profissionais que melhoraram os seus CVs e conseguiram mais entrevistas com o nosso verificador de currículo ATS alimentado por IA.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60s</div>
              <div className="text-blue-200">Análise Rápida</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">94%</div>
              <div className="text-blue-200">Taxa de Sucesso</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200">CVs Melhorados</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/pt/cv-review"
              className="bg-white text-blue-600 px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              Analisar Meu CV Grátis
            </a>
            
            <div className="flex items-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">Sem registo • 100% seguro • Resultados instantâneos</span>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-blue-100">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Compatibilidade ATS Verificada</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Otimização de Palavras-chave</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Feedback Instantâneo</span>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
            <blockquote className="text-xl italic text-white mb-4">
              "O verificador de CV da AUCAL ajudou-me a conseguir 3 entrevistas numa semana. A análise ATS foi um divisor de águas!"
            </blockquote>
            <div className="flex items-center justify-center">
              <img src="/profile.avif" alt="Cliente satisfeito" className="w-12 h-12 rounded-full mr-4" />
              <div className="text-left">
                <div className="text-white font-semibold">Sofia Ferreira</div>
                <div className="text-blue-200 text-sm">Engenheira de Software</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
