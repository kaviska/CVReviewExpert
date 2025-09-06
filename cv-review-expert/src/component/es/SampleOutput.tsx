export default function SampleOutput() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Muestra <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Verificador Currículum ATS</span> & Informe de Análisis CV
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Previsualiza la retroalimentación exacta que recibirás: puntuación de compatibilidad ATS, coincidencia de palabras clave, correcciones de formato, pasos de acción—todo lo que necesitas para pasar la selección e impresionar a los reclutadores.
          </p>
        </div>

        {/* Demo Report */}
        <div id="sample-report" className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Informe de Análisis CV & Currículum</h3>
                  <p className="text-blue-100">Juan García - Ingeniero de Software</p>
                  <p className="text-blue-200 text-sm mt-1">Fecha de Análisis: {new Date().toLocaleDateString('es-ES')}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">87/100</div>
                  <div className="text-blue-100">Puntuación General</div>
                  <div className="flex items-center mt-2">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              {/* Comprehensive Score Breakdown */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">92</div>
                  <div className="text-xs text-gray-600">Compatibilidad ATS</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85</div>
                  <div className="text-xs text-gray-600">Coincidencia Palabras Clave</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90</div>
                  <div className="text-xs text-gray-600">Formato</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">78</div>
                  <div className="text-xs text-gray-600">Optimización Contenido</div>
                </div>
                <div className="text-center p-4 bg-pink-50 rounded-lg border border-pink-200">
                  <div className="text-2xl font-bold text-pink-600 mb-1">88</div>
                  <div className="text-xs text-gray-600">Experiencia</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">82</div>
                  <div className="text-xs text-gray-600">Habilidades</div>
                </div>
              </div>

              {/* Key Recommendations */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-red-100 text-red-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">!</span>
                    Recomendaciones Críticas
                  </h4>
                  <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Agregar palabras clave: "JavaScript", "React", "Node.js" para mejorar coincidencia ATS
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        Incluir métricas cuantificables en logros (ej: "Aumentó rendimiento en 40%")
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <span className="bg-green-100 text-green-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3">✓</span>
                    Fortalezas
                  </h4>
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Excelente formato limpio y profesional
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        Buena coincidencia de habilidades técnicas con requisitos del puesto
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  ¿Listo para tu informe personalizado?
                </h3>
                <p className="text-gray-600 mb-6">
                  Obtén análisis detallado de tu CV en menos de 60 segundos
                </p>
                <a
                  href="/es/cv-review"
                  className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Analizar Mi CV Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
