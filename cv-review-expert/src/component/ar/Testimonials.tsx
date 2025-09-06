'use client';

import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'أحمد محمد',
      role: 'مطور برمجيات',
      company: 'شركة التقنية المتقدمة',
      image: '/profile.avif',
      rating: 5,
      text: 'أداة رائعة ساعدتني كثيراً في تحسين سيرتي الذاتية. النصائح كانت دقيقة ومفيدة جداً. حصلت على وظيفة أحلامي بفضل التحسينات المقترحة!',
      highlight: 'حصلت على وظيفة أحلامي'
    },
    {
      id: 2,
      name: 'فاطمة العلي',
      role: 'مديرة تسويق',
      company: 'وكالة الإبداع الرقمي',
      image: '/profile.avif',
      rating: 5,
      text: 'التحليل كان شاملاً ومفصلاً. أعجبني خاصة تحليل الكلمات المفتاحية وتحسين توافق ATS. زادت معدل استجابة أصحاب العمل بشكل ملحوظ.',
      highlight: 'زيادة معدل الاستجابة'
    },
    {
      id: 3,
      name: 'محمد الخالدي',
      role: 'محاسب قانوني',
      company: 'مكتب المحاماة الدولي',
      image: '/profile.avif',
      rating: 5,
      text: 'خدمة احترافية ومجانية! التقرير المفصل أظهر لي نقاط ضعف لم أكن أعرفها. الآن سيرتي الذاتية أصبحت أقوى وأكثر جاذبية.',
      highlight: 'سيرة ذاتية أقوى'
    },
    {
      id: 4,
      name: 'سارة أحمد',
      role: 'مصممة جرافيك',
      company: 'ستوديو الفن الحديث',
      image: '/profile.avif',
      rating: 5,
      text: 'أسلوب مبتكر لتحليل السيرة الذاتية. النصائح عملية ومباشرة. ساعدتني في إعادة هيكلة سيرتي الذاتية بطريقة احترافية.',
      highlight: 'إعادة هيكلة احترافية'
    },
    {
      id: 5,
      name: 'عبدالله الراشد',
      role: 'مهندس مدني',
      company: 'شركة الإنشاءات الكبرى',
      image: '/profile.avif',
      rating: 5,
      text: 'تحليل دقيق ونصائح مفيدة. أقدر خاصة تحليل التنسيق والبنية. الأداة سهلة الاستخدام والنتائج فورية.',
      highlight: 'تحليل دقيق ونتائج فورية'
    },
    {
      id: 6,
      name: 'نورا القحطاني',
      role: 'أخصائية موارد بشرية',
      company: 'مجموعة الاستثمار الوطني',
      image: '/profile.avif',
      rating: 5,
      text: 'كوني أعمل في مجال الموارد البشرية، أقدر جودة هذه الأداة. التحليل شامل ودقيق، والاقتراحات عملية ومفيدة جداً.',
      highlight: 'جودة احترافية'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const visibleTestimonials = testimonials.slice(currentSlide * 3, (currentSlide + 1) * 3);

  return (
    <section className="py-20 bg-white" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-yellow-100 rounded-full text-yellow-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            آراء العملاء
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ماذا يقول عملاؤنا؟
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            انضم إلى آلاف المحترفين الذين حسنوا سيرهم الذاتية وحققوا أهدافهم المهنية
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute -right-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute -left-6 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 flex items-center justify-center hover:shadow-xl transition-all duration-200 hover:scale-110"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 space-x-reverse mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </blockquote>

                {/* Highlight */}
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-6">
                  <p className="text-sm font-medium text-blue-800">
                    💫 {testimonial.highlight}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center space-x-4 space-x-reverse">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 space-x-reverse mt-8">
            {Array(Math.ceil(testimonials.length / 3)).fill(0).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index 
                    ? 'bg-blue-600 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">50,000+</div>
              <div className="text-gray-600">عميل راضٍ</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">4.9/5</div>
              <div className="text-gray-600">متوسط التقييم</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">معدل الرضا</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">دعم مستمر</div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            انضم إليهم واحصل على سيرة ذاتية متميزة
          </p>
          <a
            href="/ar/cv-review"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            ابدأ رحلتك الآن
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
