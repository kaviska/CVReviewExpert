export default function FAQ() {
  const faqs = [
    {
      question: "Como funciona o verificador de currículo ATS?",
      answer: "O nosso verificador de currículo ATS usa IA avançada para analisar o seu CV tal como os sistemas de rastreamento de candidatos reais fazem. Verifica formatação, palavras-chave, estrutura e compatibilidade para garantir que o seu currículo passa nos filtros automáticos e chega aos recrutadores humanos."
    },
    {
      question: "A análise é realmente gratuita?",
      answer: "Sim! Oferecemos uma análise gratuita básica que inclui verificação ATS, pontuação de compatibilidade e sugestões fundamentais. Para análises mais detalhadas e funcionalidades avançadas, oferecemos planos premium acessíveis."
    },
    {
      question: "Quanto tempo demora a obter os resultados?",
      answer: "A nossa análise AI é incrivelmente rápida - receberá o seu relatório detalhado em menos de 60 segundos após carregar o seu CV. Não há tempos de espera ou demoras."
    },
    {
      question: "Os meus dados estão seguros?",
      answer: "Absolutamente. Levamos a privacidade a sério. O seu CV é encriptado durante o carregamento, processado de forma segura, e nunca partilhado com terceiros. Pode eliminar os seus dados a qualquer momento."
    },
    {
      question: "Que formatos de ficheiro são suportados?",
      answer: "Suportamos todos os formatos de CV principais incluindo PDF, Word (.doc, .docx), e ficheiros de texto. O PDF é recomendado para melhor compatibilidade ATS."
    },
    {
      question: "Funciona para todas as indústrias?",
      answer: "Sim! O nosso AI é treinado numa vasta gama de indústrias e tipos de emprego, desde tecnologia e finanças até cuidados de saúde e educação. Adapta-se automaticamente às normas específicas da sua área."
    },
    {
      question: "Posso usar isto para múltiplas candidaturas de emprego?",
      answer: "Definitivamente! De facto, recomendamos adaptar o seu CV para cada candidatura. O nosso serviço ajuda-o a otimizar o seu currículo para descrições de emprego específicas e diferentes empresas."
    },
    {
      question: "E se não estiver satisfeito com os resultados?",
      answer: "Oferecemos uma garantia de satisfação de 30 dias nos nossos planos pagos. Se não estiver completamente satisfeito, reembolsaremos integralmente o seu pagamento, sem perguntas."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que precisa de saber sobre o nosso verificador de currículo ATS
          </p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-start">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4 flex-shrink-0 mt-1">
                  {index + 1}
                </span>
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed ml-12">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ainda tem perguntas?
            </h3>
            <p className="text-gray-600 mb-6">
              A nossa equipa de suporte está aqui para ajudar. Entre em contacto connosco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              >
                Contactar Suporte
              </a>
              <a
                href="/pt/cv-review"
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                Começar Agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
