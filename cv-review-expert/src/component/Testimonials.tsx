export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Marketing Manager",
      company: "TechCorp",
      image: "👩‍💼",
      rating: 5,
      text: "This AI helped me double my interview calls in 2 weeks! The keyword suggestions were spot-on and helped me tailor my CV perfectly for each application.",
      improvement: "2x more interviews"
    },
    {
      name: "Michael Chen",
      role: "Software Developer",
      company: "StartupXYZ",
      image: "👨‍💻",
      rating: 5,
      text: "I was struggling with ATS systems rejecting my applications. After using this tool and implementing the suggestions, I landed 3 interviews in one week!",
      improvement: "90% ATS score"
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist",
      company: "Analytics Pro",
      image: "👩‍🔬",
      rating: 5,
      text: "The detailed analysis showed me exactly what was missing from my CV. The formatting feedback alone made my CV look so much more professional.",
      improvement: "Dream job offer"
    },
    {
      name: "David Thompson",
      role: "Project Manager",
      company: "Global Solutions",
      image: "👨‍💼",
      rating: 5,
      text: "As someone changing careers, the skill gap analysis was invaluable. It helped me identify which skills to highlight and which to develop further.",
      improvement: "Career transition"
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      company: "Design Studio",
      image: "👩‍🎨",
      rating: 5,
      text: "The grammar and language suggestions were incredibly helpful. My CV now reads much more professionally and confidently.",
      improvement: "5 job offers"
    },
    {
      name: "James Miller",
      role: "Sales Executive",
      company: "Sales Force Inc",
      image: "👨‍💼",
      rating: 5,
      text: "I thought my CV was already good, but this tool revealed so many areas for improvement. The before and after difference is amazing!",
      improvement: "30% salary increase"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Users Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of professionals who have transformed their careers with our AI-powered CV analysis.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-600 mb-6 leading-relaxed">
                &quot;{testimonial.text}&quot;
              </blockquote>

              {/* User Info */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="text-3xl mr-3">{testimonial.image}</div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                    <div className="text-sm text-gray-400">{testimonial.company}</div>
                  </div>
                </div>
                
                {/* Improvement Badge */}
                <div className="bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                  {testimonial.improvement}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Social Proof Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="animate-fade-in-up">
              <div className="text-3xl font-bold text-blue-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <div className="text-3xl font-bold text-green-600 mb-2">85%</div>
              <div className="text-gray-600">Get More Interviews</div>
            </div>
            <div className="animate-fade-in-up animation-delay-600">
              <div className="text-3xl font-bold text-orange-600 mb-2">48hrs</div>
              <div className="text-gray-600">Average Response Time</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to join them?
            </h3>
            <p className="text-gray-600 mb-6">
              Transform your CV today and start getting the interviews you deserve.
            </p>
            <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"/>
                </svg>
                Start Your Success Story
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
