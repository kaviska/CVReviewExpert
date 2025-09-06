export default function KeyFeatures() {
  const features = [
    {
      title: 'تحليل ATS متقدم',
      description: 'فحص شامل لتوافق سيرتك الذاتية مع أنظمة تتبع المتقدمين الحديثة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: 'blue',
      badge: 'ذكي'
    },
    {
      title: 'تحسين الكلمات المفتاحية',
      description: 'اقتراحات ذكية للكلمات المفتاحية المناسبة لمجال عملك ووظيفتك المستهدفة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
      color: 'green',
      badge: 'مُحسّن'
    },
    {
      title: 'تقييم التنسيق والبنية',
      description: 'فحص هيكل السيرة الذاتية وتنسيقها للتأكد من قابليتها للقراءة والاحترافية',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      color: 'purple',
      badge: 'احترافي'
    },
    {
      title: 'تحليل المحتوى',
      description: 'مراجعة شاملة لمحتوى السيرة الذاتية وتقديم اقتراحات للتحسين',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: 'orange',
      badge: 'مفصل'
    },
    {
      title: 'درجة قابلية القراءة',
      description: 'تقييم مدى سهولة قراءة وفهم السيرة الذاتية من قبل المسؤولين والنظم',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      color: 'teal',
      badge: 'سهل'
    },
    {
      title: 'اقتراحات فورية',
      description: 'نصائح عملية ومباشرة لتحسين فعالية السيرة الذاتية وزيادة فرص التوظيف',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'pink',
      badge: 'فوري'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'bg-blue-500',
          bgLight: 'bg-blue-50',
          text: 'text-blue-600',
          border: 'border-blue-200',
          badge: 'bg-blue-100 text-blue-800'
        };
      case 'green':
        return {
          bg: 'bg-green-500',
          bgLight: 'bg-green-50',
          text: 'text-green-600',
          border: 'border-green-200',
          badge: 'bg-green-100 text-green-800'
        };
      case 'purple':
        return {
          bg: 'bg-purple-500',
          bgLight: 'bg-purple-50',
          text: 'text-purple-600',
          border: 'border-purple-200',
          badge: 'bg-purple-100 text-purple-800'
        };
      case 'orange':
        return {
          bg: 'bg-orange-500',
          bgLight: 'bg-orange-50',
          text: 'text-orange-600',
          border: 'border-orange-200',
          badge: 'bg-orange-100 text-orange-800'
        };
      case 'teal':
        return {
          bg: 'bg-teal-500',
          bgLight: 'bg-teal-50',
          text: 'text-teal-600',
          border: 'border-teal-200',
          badge: 'bg-teal-100 text-teal-800'
        };
      case 'pink':
        return {
          bg: 'bg-pink-500',
          bgLight: 'bg-pink-50',
          text: 'text-pink-600',
          border: 'border-pink-200',
          badge: 'bg-pink-100 text-pink-800'
        };
      default:
        return {
          bg: 'bg-gray-500',
          bgLight: 'bg-gray-50',
          text: 'text-gray-600',
          border: 'border-gray-200',
          badge: 'bg-gray-100 text-gray-800'
        };
    }
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            الميزات الرئيسية
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            لماذا تختار فاحص السيرة الذاتية؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            مجموعة شاملة من الأدوات المتقدمة لتحليل وتحسين سيرتك الذاتية باستخدام أحدث تقنيات الذكاء الاصطناعي
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border ${colors.border} shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group`}
              >
                {/* Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.badge} mb-4`}>
                  {feature.badge}
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 ${colors.bgLight} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={colors.text}>
                    {feature.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative gradient line */}
                <div className={`mt-6 h-1 bg-gradient-to-r ${colors.bg.replace('bg-', 'from-')} to-transparent rounded-full`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              إحصائيات الأداء
            </h3>
            <p className="text-gray-600">
              أرقام حقيقية تثبت فعالية أداتنا
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">سيرة ذاتية تم تحليلها</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">تقييم المستخدمين</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <div className="text-gray-600">تحسن في معدل القبول</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">30 ثانية</div>
              <div className="text-gray-600">متوسط وقت التحليل</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a
            href="/ar/cv-review"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            جرب الآن مجاناً
          </a>
        </div>
      </div>
    </section>
  );
}
