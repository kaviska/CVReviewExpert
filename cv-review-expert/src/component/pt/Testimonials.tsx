export default function Testimonials() {
  const testimonials = [
    {
      name: "Maria Santos",
      role: "Desenvolvedora Frontend",
      company: "Tech Startup",
      image: "/profile.avif",
      text: "O verificador de CV da AUCAL identificou lacunas importantes no meu currículo. Após implementar as sugestões, recebi 3 entrevistas numa semana!",
      rating: 5
    },
    {
      name: "Carlos Silva",
      role: "Gestor de Marketing",
      company: "E-commerce",
      image: "/profile.avif",
      text: "A análise ATS foi reveladora. O meu CV estava a ser rejeitado automaticamente. Agora passa em todos os sistemas de rastreamento.",
      rating: 5
    },
    {
      name: "Ana Costa",
      role: "Analista de Dados",
      company: "Consultoria",
      image: "/profile.avif",
      text: "Interface simples, resultados rápidos. O relatório detalhado ajudou-me a reescrever completamente o meu CV. Vale cada cêntimo!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O Que Dizem os Nossos <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Utilizadores</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Milhares de profissionais já melhoraram os seus CVs e conseguiram mais entrevistas com a nossa análise IA.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.company}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/pt/cv-review"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
          >
            Junte-se aos Nossos Utilizadores Satisfeitos
          </a>
        </div>
      </div>
    </section>
  );
}
