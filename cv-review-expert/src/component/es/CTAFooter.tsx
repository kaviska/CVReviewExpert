export default function CTAFooter() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            ¿Listo para <span className="text-blue-200">Transformar</span> tu CV?
          </h2>
          
          <p className="text-xl text-blue-100 mb-12">
            Únete a miles de profesionales que han mejorado sus CVs y conseguido más entrevistas con nuestro verificador de currículum ATS impulsado por IA.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">60s</div>
              <div className="text-blue-200">Análisis Rápido</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">94%</div>
              <div className="text-blue-200">Tasa de Éxito</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-blue-200">CVs Mejorados</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/es/cv-review"
              className="bg-white text-blue-600 px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              Analizar Mi CV Gratis
            </a>
            
            <div className="flex items-center text-blue-100">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span className="text-sm">Sin registro • 100% seguro • Resultados instantáneos</span>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-blue-100">
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Compatibilidad ATS Verificada</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Optimización de Palabras Clave</span>
            </div>
            <div className="flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Retroalimentación Instantánea</span>
            </div>
          </div>

          <div className="mt-16 p-8 bg-white bg-opacity-10 rounded-2xl backdrop-blur-sm">
            <blockquote className="text-xl italic text-white mb-4">
              "El verificador de CV de AUCAL me ayudó a conseguir 3 entrevistas en una semana. ¡El análisis ATS fue un cambio de juego!"
            </blockquote>
            <div className="flex items-center justify-center">
              <img src="/profile.avif" alt="Cliente satisfecho" className="w-12 h-12 rounded-full mr-4" />
              <div className="text-left">
                <div className="text-white font-semibold">Sofía Fernández</div>
                <div className="text-blue-200 text-sm">Ingeniera de Software</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
