'use client';

import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "هل سيرتي الذاتية وبياناتي الشخصية آمنة؟",
      answer: "بالطبع. سيرتك الذاتية ومعلوماتك الشخصية مشفرة أثناء النقل والتخزين. نحن لا نبيع أو نشارك البيانات مطلقاً، ويمكنك حذف الملفات المرفوعة في أي وقت. نتبع معايير GDPR وأفضل ممارسات الأمان في الصناعة."
    },
    {
      question: "هل يمكنني استخدام فاحص السيرة الذاتية بالذكاء الاصطناعي لأي نوع وظيفة؟",
      answer: "نعم. يحلل الذكاء الاصطناعي لدينا السير الذاتية عبر جميع الصناعات ومستويات الوظائف - من المستوى المبتدئ إلى التنفيذي. يتكيف مع كل وصف وظيفة ويقدم تعليقات مخصصة ومتوافقة مع أنظمة ATS."
    },
    {
      question: "ما هي صيغ الملفات المدعومة؟",
      answer: "PDF وDOC وDOCX. للحصول على أفضل النتائج، ارفع الملف بصيغة PDF للحفاظ على التنسيق. يستخرج الذكاء الاصطناعي لدينا النص تلقائياً مع الحفاظ على التخطيط وسلامة الكلمات المفتاحية."
    },
    {
      question: "ما مدى دقة تحليل الذكاء الاصطناعي؟",
      answer: "الذكاء الاصطناعي لدينا مدرب على مجموعات بيانات كبيرة من السير الذاتية وإعلانات الوظائف. يحدد الكلمات المفتاحية المفقودة ومشاكل التنسيق وفجوات المهارات بدقة عالية حتى تتمكن من تحسين سيرتك الذاتية وزيادة المقابلات."
    },
    {
      question: "هل تقدمون استرداد الأموال؟",
      answer: "نعم. جميع الخطط المدفوعة تتضمن ضمان استرداد الأموال لمدة 30 يوماً. إذا لم تكن راضياً، تواصل مع الدعم للحصول على استرداد كامل. يمكن للمستخدمين المجانيين الترقية أو التخفيض في أي وقت."
    },
    {
      question: "كم من الوقت يستغرق تحليل السيرة الذاتية؟",
      answer: "معظم تحليلات السير الذاتية تكتمل في أقل من 60 ثانية. الاستشارات الفردية (عند توفرها) تقدم رؤى مفصلة خلال 24-48 ساعة."
    },
    {
      question: "هل يمكنني تحليل نسخ متعددة من سيرتي الذاتية؟",
      answer: "نعم. خطط Pro وPremium تتضمن تحليلات غير محدودة حتى تتمكن من اختبار النسخ وتتبع التحسينات وتخصيصها لكل وظيفة."
    },
    {
      question: "هل تقدمون تعليقات خاصة بالصناعة؟",
      answer: "نعم. الذكاء الاصطناعي لدينا يتعرف على العديد من الصناعات ويقدم تعليقات بناءً على الكلمات المفتاحية والمهارات وتفضيلات التنسيق الخاصة بكل قطاع حتى تكون سيرتك الذاتية جاهزة لأنظمة ATS وودودة للمجندين."
    },
    {
      question: "ما هي السيرة الذاتية وكيف تختلف عن الـ Resume؟",
      answer: "السيرة الذاتية (CV) هي تاريخ أكاديمي ومهني مفصل، غالباً ما يكون أطول من صفحة واحدة. الـ Resume هو ملخص موجز وخاص بالدور (عادة 1-2 صفحة). استخدم Resume لمعظم الوظائف؛ استخدم CV للأكاديميا أو بعض الأدوار الدولية."
    },
    {
      question: "لماذا السيرة الذاتية مهمة؟",
      answer: "سيرتك الذاتية هي انطباعك الأول. السيرة الذاتية الواضحة والمحسنة بالكلمات المفتاحية والمتوافقة مع أنظمة ATS تساعدك على اجتياز عمليات الفرز وإظهار التأثير والفوز بالمقابلات - بشكل أسرع."
    },
    {
      question: "هل هذه الخدمة مجانية؟",
      answer: "نعم، البدء مجاني - بدون رسوم خفية. ارفع سيرتك الذاتية واحصل على تعليقات احترافية مدعومة بالذكاء الاصطناعي مع تحليل مفصل واقتراحات لتحسين سيرتك الذاتية."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            الأسئلة <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">الشائعة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اعثر على إجابات حول أداة تحليل السيرة الذاتية المدعومة بالذكاء الاصطناعي وتحسين ATS وكيفية الحصول على المزيد من مكالمات المقابلات.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-6 text-right flex items-center justify-between focus:outline-none focus:bg-gray-100 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 pl-4 flex-1">
                  {faq.question}
                </h3>
                <div className={`flex-shrink-0 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`transition-all duration-300 ease-in-out ${
                openIndex === index 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">ما زالت لديك أسئلة؟</h3>
          <p className="text-gray-600 mb-6">فريق الدعم لدينا يساعد في استفسارات السيرة الذاتية وأنظمة ATS وتحليل الذكاء الاصطناعي. توقع رد خلال 24 ساعة.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-lg overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                تواصل مع الدعم
              </span>
            </a>
            <a
              href="https://wa.me/44782099178"
              target="_blank"
              rel="noopener noreferrer"
              className="relative border-3 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-600 hover:text-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                جدولة مكالمة
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
