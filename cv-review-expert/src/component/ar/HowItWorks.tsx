export default function HowItWorks() {
  const steps = [
    {
      step: '1',
      title: 'ارفع سيرتك الذاتية',
      description: 'قم بسحب وإفلات ملف السيرة الذاتية بصيغة PDF أو DOC',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      ),
      color: 'blue'
    },
    {
      step: '2',
      title: 'تحليل ذكي فوري',
      description: 'تحليل شامل باستخدام الذكاء الاصطناعي لفحص توافق ATS',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'green'
    },
    {
      step: '3',
      title: 'احصل على التقرير',
      description: 'تقرير مفصل مع نصائح وتحسينات لتطوير سيرتك الذاتية',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          bgLight: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200'
        };
      case 'green':
        return {
          bg: 'bg-green-500',
          bgLight: 'bg-green-100',
          text: 'text-green-600',
          border: 'border-green-200'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          bgLight: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200'
        };
      default:
        return {
          bg: 'bg-gray-500',
          bgLight: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200'
        };
    }
  };

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            كيف يعمل فاحص السيرة الذاتية؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            عملية بسيطة من ثلاث خطوات للحصول على تحليل شامل ومهني لسيرتك الذاتية 
            وتحسين فرصك في الحصول على الوظيفة المناسبة
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-purple-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const colors = getColorClasses(step.color);
              return (
                <div key={index} className="relative group">
                  {/* Card */}
                  <div className={`bg-white rounded-2xl p-8 border-2 ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                    {/* Step Number */}
                    <div className={`w-16 h-16 ${colors.bg} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                      <span className="text-2xl font-bold text-white">{step.step}</span>
                    </div>

                    {/* Icon */}
                    <div className={`w-20 h-20 ${colors.bgLight} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={colors.text}>
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Decorative Elements */}
                    <div className={`absolute -top-2 -right-2 w-4 h-4 ${colors.bg} rounded-full opacity-60`}></div>
                    <div className={`absolute -bottom-2 -left-2 w-3 h-3 ${colors.bg} rounded-full opacity-40`}></div>
                  </div>

                  {/* Arrow (Desktop only) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -left-6 transform -translate-y-1/2 z-20">
                      <div className={`w-12 h-12 ${colors.bgLight} rounded-full flex items-center justify-center border-2 ${colors.border}`}>
                        <svg className={`w-6 h-6 ${colors.text}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              جاهز لتحسين سيرتك الذاتية؟
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              ابدأ الآن واحصل على تحليل مجاني وشامل لسيرتك الذاتية في أقل من دقيقة واحدة
            </p>
            <a
              href="/ar/cv-review"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              ابدأ التحليل المجاني
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
