export default function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Right Content (Arabic RTL) */}
          <div className="text-center lg:text-right">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
              فاحص السيرة الذاتية <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ATS مجاني</span> ومراجعة السيرة الذاتية
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in-up animation-delay-200">
              ارفع سيرتك الذاتية واحصل على فحص فوري. تحقق من توافق ATS، وحسّن الكلمات المفتاحية، واحصل على نصائح مُثبتة من خدمة مراجعة السيرة الذاتية المدعومة بالذكاء الاصطناعي لجعل أصحاب العمل يقولون "نعم".
            </p>
            <div className="animate-fade-in-up animation-delay-400">
              <a href="/ar/cv-review">
                <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative flex items-center justify-center">
                    <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                    </svg>
                    ابدأ فحص السيرة الذاتية المجاني
                  </span>
                </button>
              </a>
              <p className="text-sm text-gray-500 mt-3">
                تحليل مجاني • لا حاجة للتسجيل • النتائج خلال 60 ثانية
              </p>
            </div>
          </div>

          {/* Left Visual (Arabic RTL) */}
          <div className="flex justify-center lg:justify-start animate-fade-in-up animation-delay-600">
            <div className="relative">
              {/* CV Document Mockup */}
              <div className="bg-white rounded-lg shadow-2xl p-8 w-80 h-96 relative transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="space-y-4">
                  <div className="h-4 bg-gray-800 rounded w-3/4 mr-auto"></div>
                  <div className="h-2 bg-gray-400 rounded w-1/2 mr-auto"></div>
                  <div className="space-y-2 mt-6">
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded w-5/6"></div>
                    <div className="h-2 bg-gray-300 rounded w-4/6"></div>
                  </div>
                  <div className="space-y-2 mt-6">
                    <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-300 rounded"></div>
                    <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                  </div>
                </div>

                {/* AI Checkmarks */}
                {/* <div className="absolute -top-2 -left-2 bg-green-500 rounded-full p-2 animate-bounce">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="absolute top-10 -right-3 bg-blue-500 rounded-full p-2 animate-pulse">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 -left-4 bg-purple-500 rounded-full p-2 animate-ping">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div> */}
              </div>

              {/* Floating Stats */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 animate-float">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">98%</div>
                  <div className="text-sm text-gray-600">نقاط ATS (تقديرية)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
