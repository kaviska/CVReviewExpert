export default function WhyChooseUs() {
  const benefits = [
    {
      title: 'مجاني تماماً',
      description: 'استخدم أداتنا بدون أي رسوم أو اشتراكات مخفية',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'green',
      stat: '100%',
      statLabel: 'مجاني'
    },
    {
      title: 'تحليل فوري',
      description: 'احصل على النتائج في ثوانٍ معدودة بفضل تقنيتنا المتقدمة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'blue',
      stat: '30',
      statLabel: 'ثانية'
    },
    {
      title: 'دقة عالية',
      description: 'خوارزميات ذكية مدربة على آلاف السير الذاتية الناجحة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'purple',
      stat: '98%',
      statLabel: 'دقة'
    },
    {
      title: 'أمان البيانات',
      description: 'بياناتك محمية ولا نحتفظ بأي ملفات على خوادمنا',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: 'orange',
      stat: '256',
      statLabel: 'تشفير بت'
    }
  ];

  const features = [
    'تحليل شامل لتوافق ATS',
    'تحسين الكلمات المفتاحية',
    'تقييم هيكل السيرة الذاتية',
    'اقتراحات للتحسين',
    'تقرير مفصل بالنتائج',
    'دعم متعدد الصيغ'
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          bgLight: 'bg-blue-50',
          text: 'text-blue-600'
        };
      case 'green':
        return {
          bg: 'bg-green-500',
          bgLight: 'bg-green-50',
          text: 'text-green-600'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          bgLight: 'bg-purple-50',
          text: 'text-purple-600'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          bgLight: 'bg-orange-50',
          text: 'text-orange-600'
        };
      default:
        return {
          bg: 'bg-gray-500',
          bgLight: 'bg-gray-50',
          text: 'text-gray-600'
        };
    }
  };

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              لماذا نحن مختلفون؟
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              الخيار الأول للمحترفين
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              نقدم أفضل خدمة لتحليل السير الذاتية مع ضمان الجودة والدقة. 
              أداة شاملة تساعدك على تحسين فرصك في الحصول على الوظيفة المناسبة.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 space-x-reverse">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="/ar/cv-review"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              ابدأ التحليل الآن
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>

          {/* Benefits Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const colors = getColorClasses(benefit.color);
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Icon and Stat */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 ${colors.bgLight} rounded-xl flex items-center justify-center`}>
                      <div className={colors.text}>
                        {benefit.icon}
                      </div>
                    </div>
                    <div className="text-left">
                      <div className={`text-2xl font-bold ${colors.text}`}>
                        {benefit.stat}
                      </div>
                      <div className="text-xs text-gray-500">
                        {benefit.statLabel}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              يثق بنا الآلاف
            </h3>
            <p className="text-gray-600">
              انضم إلى مجتمع المحترفين الذين يثقون بخدماتنا
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50K+</div>
              <div className="text-sm text-gray-600">مستخدم راضٍ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">تقييم عالي</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
              <div className="text-sm text-gray-600">دعم متواصل</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">99%</div>
              <div className="text-sm text-gray-600">وقت تشغيل</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
