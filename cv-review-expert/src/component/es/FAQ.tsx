'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: "¿Qué es un verificador de currículum ATS?",
      answer: "Un verificador de currículum ATS es una herramienta que analiza tu CV para asegurar que sea compatible con los Sistemas de Seguimiento de Candidatos (ATS) que usan los empleadores. Verifica formato, palabras clave y estructura para maximizar tus posibilidades de pasar la selección inicial automatizada."
    },
    {
      question: "¿Cómo funciona el análisis gratuito de CV?",
      answer: "Simplemente sube tu CV en formato PDF o Word. Nuestro verificador de currículum IA analiza instantáneamente tu documento en busca de compatibilidad ATS, palabras clave, formato y más. Recibes un informe detallado con sugerencias accionables en menos de 60 segundos."
    },
    {
      question: "¿Mis datos están seguros y privados?",
      answer: "Absolutamente. Tu CV está encriptado durante el procesamiento y nunca se comparte con terceros. Puedes eliminar tus datos en cualquier momento. Nos tomamos muy en serio la privacidad de datos y cumplimos con todos los estándares de protección de datos."
    },
    {
      question: "¿Qué tipos de trabajos y industrias soportan?",
      answer: "Nuestro verificador de CV funciona para todas las industrias y niveles de trabajo - desde puestos de nivel inicial hasta roles ejecutivos en tecnología, finanzas, salud, marketing, educación y más. La herramienta se adapta a diferentes formatos de CV y requisitos específicos de la industria."
    },
    {
      question: "¿Con qué frecuencia debo verificar mi CV?",
      answer: "Recomendamos verificar tu CV cada vez que apliques a un tipo diferente de trabajo o industria, o cuando actualices tu experiencia. También es buena práctica revisar tu CV cada 3-6 meses para asegurar que se mantenga optimizado con las tendencias actuales de ATS."
    },
    {
      question: "¿Qué formatos de archivo son compatibles?",
      answer: "Aceptamos archivos PDF, Word (.doc, .docx) y archivos de texto plano. Para mejores resultados, recomendamos formato PDF ya que preserva el formato y es ampliamente aceptado por los sistemas ATS."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Frecuentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Todo lo que necesitas saber sobre nuestro verificador de currículum ATS
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-6 h-6 text-blue-600 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div
                className={`px-8 transition-all duration-300 ease-in-out ${
                  openIndex === index 
                    ? 'pb-6 opacity-100 max-h-96' 
                    : 'pb-0 opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿Aún tienes preguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nuestro equipo de soporte está aquí para ayudarte con cualquier pregunta sobre nuestro verificador de CV.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contáctanos
              </a>
              <a
                href="/es/cv-review"
                className="bg-gray-100 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-300"
              >
                Probar Verificador Gratuito
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
