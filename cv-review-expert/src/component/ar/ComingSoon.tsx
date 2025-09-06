export default function ComingSoon() {
  const upcomingFeatures = [
    {
      title: 'محرر السيرة الذاتية التفاعلي',
      description: 'أداة تحرير مباشرة لتحسين سيرتك الذاتية في الوقت الفعلي',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      eta: 'الربع الأول 2024',
      color: 'blue'
    },
    {
      title: 'مطابقة الوظائف الذكية',
      description: 'خوارزمية ذكية لمطابقة ملفك الشخصي مع الوظائف المناسبة',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      eta: 'الربع الثاني 2024',
      color: 'green'
    },
    {
      title: 'قوالب احترافية متقدمة',
      description: 'مجموعة من القوالب الحديثة المصممة خصيصاً لكل مجال',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      eta: 'الربع الثالث 2024',
      color: 'purple'
    },
    {
      title: 'تحليل مقابلات العمل',
      description: 'محاكاة مقابلات العمل مع تحليل الأداء وتقديم النصائح',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      eta: 'الربع الرابع 2024',
      color: 'orange'
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full text-purple-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            قريباً جداً
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ميزات مثيرة في الطريق
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نعمل باستمرار على تطوير أدوات جديدة ومبتكرة لمساعدتك في رحلتك المهنية. 
            اطلع على ما هو قادم قريباً!
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden lg:block absolute right-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-purple-200 to-orange-200"></div>
          
          <div className="space-y-12">
            {upcomingFeatures.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} flex-col lg:gap-8`}>
                  {/* Timeline dot */}
                  <div className="hidden lg:block absolute right-1/2 transform translate-x-1/2 w-4 h-4 bg-white border-4 border-purple-300 rounded-full z-10"></div>
                  
                  {/* Content */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:text-left' : 'lg:text-right'}`}>
                    <div className={`bg-white rounded-2xl p-8 shadow-lg border ${colors.border} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                      {/* Badge */}
                      <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${colors.badge} mb-4`}>
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {feature.eta}
                      </div>

                      {/* Icon */}
                      <div className={`w-16 h-16 ${colors.bgLight} rounded-xl flex items-center justify-center mb-6 mx-auto lg:mx-0`}>
                        <div className={colors.text}>
                          {feature.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Progress indicator */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-2">
                          <span>التطوير</span>
                          <span>60%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`h-2 rounded-full ${colors.bg} w-3/5`}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for large screens */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              كن أول من يعرف
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              اشترك في النشرة الإخبارية للحصول على إشعارات فورية عند إطلاق الميزات الجديدة
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-200">
                اشتراك
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-3 text-center">
              لن نرسل لك رسائل مزعجة، وعدٌ!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            لا تريد الانتظار؟ جرب أداتنا الحالية الآن!
          </p>
          <a
            href="/ar/cv-review"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ابدأ تحليل السيرة الذاتية
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
