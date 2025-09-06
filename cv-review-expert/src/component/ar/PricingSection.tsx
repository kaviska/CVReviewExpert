'use client';

import { useState } from 'react';

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'المجاني',
      description: 'مثالي للمبتدئين',
      price: { monthly: 0, annual: 0 },
      currency: 'ريال',
      features: [
        'تحليل أساسي للسيرة الذاتية',
        'تقرير مبسط',
        'فحص توافق ATS أساسي',
        'نصائح عامة للتحسين',
        'دعم عبر البريد الإلكتروني'
      ],
      limitations: [
        'تحليل واحد في اليوم',
        'تقرير محدود',
        'لا يتضمن تحليل متقدم'
      ],
      color: 'gray',
      popular: false,
      buttonText: 'البدء مجاناً',
      buttonStyle: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
    },
    {
      name: 'الاحترافي',
      description: 'للباحثين عن عمل الجادين',
      price: { monthly: 49, annual: 490 },
      currency: 'ريال',
      features: [
        'تحليل شامل ومتقدم',
        'تقرير مفصل مع اقتراحات',
        'فحص ATS متقدم',
        'تحليل الكلمات المفتاحية',
        'مقارنة مع معايير الصناعة',
        '10 تحليلات شهرياً',
        'دعم ذات أولوية'
      ],
      limitations: [],
      color: 'blue',
      popular: true,
      buttonText: 'اختر الاحترافي',
      buttonStyle: 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:shadow-lg'
    },
    {
      name: 'المؤسسي',
      description: 'للشركات والمؤسسات',
      price: { monthly: 149, annual: 1490 },
      currency: 'ريال',
      features: [
        'جميع ميزات الخطة الاحترافية',
        'تحليلات غير محدودة',
        'تقارير مخصصة للعلامة التجارية',
        'لوحة تحكم الفريق',
        'تدريب مخصص',
        'مدير حساب مخصص',
        'دعم فوري 24/7',
        'تكامل مع أنظمة HR'
      ],
      limitations: [],
      color: 'purple',
      popular: false,
      buttonText: 'تواصل معنا',
      buttonStyle: 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          border: 'border-blue-500',
          badge: 'bg-blue-500 text-white',
          accent: 'text-blue-600'
        };
      case 'purple':
        return {
          border: 'border-purple-500',
          badge: 'bg-purple-500 text-white',
          accent: 'text-purple-600'
        };
      case 'gray':
        return {
          border: 'border-gray-300',
          badge: 'bg-gray-500 text-white',
          accent: 'text-gray-600'
        };
      default:
        return {
          border: 'border-gray-300',
          badge: 'bg-gray-500 text-white',
          accent: 'text-gray-600'
        };
    }
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            خطط الأسعار
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            اختر الخطة المناسبة لك
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            خطط مرنة تناسب جميع الاحتياجات، من الأفراد إلى المؤسسات الكبيرة
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8">
            <div className="bg-white rounded-full p-1 border border-gray-200">
              <div className="flex items-center">
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    !isAnnual
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  شهري
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    isAnnual
                      ? 'bg-blue-500 text-white shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  سنوي
                  <span className="mr-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    وفر 20%
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const colors = getColorClasses(plan.color);
            const price = isAnnual ? plan.price.annual : plan.price.monthly;
            const monthlyPrice = isAnnual ? plan.price.annual / 12 : plan.price.monthly;
            
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg border-2 ${
                  plan.popular ? colors.border : 'border-gray-200'
                } hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  plan.popular ? 'scale-105' : ''
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 ${colors.badge} rounded-full text-sm font-medium`}>
                    الأكثر شعبية
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-8">
                    <div className="flex items-baseline justify-center">
                      <span className="text-5xl font-bold text-gray-900">
                        {price === 0 ? 'مجاني' : price}
                      </span>
                      {price > 0 && (
                        <>
                          <span className="text-xl text-gray-600 mr-2">{plan.currency}</span>
                          <span className="text-gray-500">/{isAnnual ? 'سنة' : 'شهر'}</span>
                        </>
                      )}
                    </div>
                    {isAnnual && price > 0 && (
                      <p className="text-sm text-gray-500 mt-2">
                        {monthlyPrice.toFixed(0)} {plan.currency}/شهر عند الدفع سنوياً
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">ما تحصل عليه:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 space-x-reverse">
                          <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Limitations */}
                    {plan.limitations.length > 0 && (
                      <div className="mt-6">
                        <h4 className="font-semibold text-gray-900 mb-4">القيود:</h4>
                        <ul className="space-y-3">
                          {plan.limitations.map((limitation, limitationIndex) => (
                            <li key={limitationIndex} className="flex items-start space-x-3 space-x-reverse">
                              <svg className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
                              </svg>
                              <span className="text-gray-600">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 ${plan.buttonStyle}`}>
                    {plan.buttonText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            أسئلة شائعة حول الأسعار
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">هل يمكنني تغيير خطتي لاحقاً؟</h4>
              <p className="text-gray-600">نعم، يمكنك الترقية أو التخفيض في أي وقت. سيتم تطبيق التغييرات في دورة الفوترة التالية.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">هل هناك ضمان استرداد الأموال؟</h4>
              <p className="text-gray-600">نعم، نوفر ضمان استرداد الأموال لمدة 30 يوماً على جميع الخطط المدفوعة.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">كيف يتم الدفع؟</h4>
              <p className="text-gray-600">نقبل جميع بطاقات الائتمان الرئيسية، والتحويل البنكي، وطرق الدفع الإلكترونية المحلية.</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-3">هل تقدمون خصومات للطلاب؟</h4>
              <p className="text-gray-600">نعم، نوفر خصم 50% للطلاب المسجلين. تواصل معنا للحصول على كود الخصم.</p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            تحتاج إلى خطة مخصصة؟ تواصل معنا
          </p>
          <a
            href="/ar/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            تواصل معنا
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
