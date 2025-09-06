'use client';

import { useState } from 'react';

export default function SampleOutput() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'نظرة عامة', icon: '📊' },
    { id: 'ats', label: 'تحليل ATS', icon: '🤖' },
    { id: 'keywords', label: 'الكلمات المفتاحية', icon: '🔍' },
    { id: 'suggestions', label: 'التحسينات', icon: '💡' }
  ];

  const sampleData = {
    overview: {
      score: 85,
      grade: 'ممتاز',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      metrics: [
        { label: 'التوافق مع ATS', value: '90%', color: 'text-blue-600' },
        { label: 'جودة المحتوى', value: '85%', color: 'text-green-600' },
        { label: 'التنسيق', value: '80%', color: 'text-purple-600' },
        { label: 'الكلمات المفتاحية', value: '88%', color: 'text-orange-600' }
      ]
    },
    ats: {
      items: [
        { status: 'pass', text: 'تنسيق PDF متوافق مع ATS' },
        { status: 'pass', text: 'استخدام خطوط قياسية' },
        { status: 'warning', text: 'تحسين استخدام العناوين' },
        { status: 'pass', text: 'معلومات الاتصال واضحة' },
        { status: 'fail', text: 'إضافة مهارات تقنية أكثر' }
      ]
    },
    keywords: {
      found: ['إدارة المشاريع', 'تطوير البرمجيات', 'قيادة الفريق', 'JavaScript', 'React'],
      missing: ['التحليل', 'Agile', 'Scrum', 'Node.js', 'DevOps'],
      density: '3.2%'
    },
    suggestions: [
      {
        type: 'critical',
        title: 'أضف قسم المهارات التقنية',
        description: 'قم بإضافة قسم منفصل للمهارات التقنية مع أحدث التقنيات في مجالك'
      },
      {
        type: 'important',
        title: 'حسّن وصف الخبرات',
        description: 'استخدم أرقام وإنجازات محددة لوصف تأثيرك في الأدوار السابقة'
      },
      {
        type: 'suggestion',
        title: 'تحسين الكلمات المفتاحية',
        description: 'أضف المزيد من الكلمات المفتاحية ذات الصلة بالوظيفة المستهدفة'
      }
    ]
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pass':
        return <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>;
      case 'warning':
        return <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>;
      case 'fail':
        return <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>;
      default:
        return null;
    }
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'critical':
        return '🚨';
      case 'important':
        return '⚠️';
      case 'suggestion':
        return '💡';
      default:
        return '📝';
    }
  };

  return (
    <section className="py-20 bg-gray-50" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-blue-800 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            نموذج التقرير
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            شاهد مثالاً على تقرير التحليل
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            اطلع على نموذج لتقرير شامل ومفصل ستحصل عليه بعد تحليل سيرتك الذاتية
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Report Card */}
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
              <div className="flex items-center justify-between text-white">
                <div>
                  <h3 className="text-xl font-bold">تقرير تحليل السيرة الذاتية</h3>
                  <p className="text-blue-100">أحمد محمد - مطور برمجيات</p>
                </div>
                <div className="text-left">
                  <div className="text-3xl font-bold">85/100</div>
                  <div className="text-blue-100">النتيجة الإجمالية</div>
                </div>
              </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-6 py-4 font-medium text-sm whitespace-nowrap border-b-2 transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'border-blue-500 text-blue-600 bg-blue-50'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <span className="mr-2">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  {/* Score Circle */}
                  <div className="text-center">
                    <div className="relative inline-flex items-center justify-center w-32 h-32 mb-4">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
                        <circle cx="60" cy="60" r="50" stroke="#e5e7eb" strokeWidth="8" fill="none" />
                        <circle
                          cx="60"
                          cy="60"
                          r="50"
                          stroke="#10b981"
                          strokeWidth="8"
                          fill="none"
                          strokeDasharray={`${2 * Math.PI * 50}`}
                          strokeDashoffset={`${2 * Math.PI * 50 * (1 - sampleData.overview.score / 100)}`}
                          className="transition-all duration-1000 ease-out"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-gray-900">{sampleData.overview.score}</div>
                          <div className="text-sm text-gray-500">من 100</div>
                        </div>
                      </div>
                    </div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${sampleData.overview.bgColor} ${sampleData.overview.color}`}>
                      {sampleData.overview.grade}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {sampleData.overview.metrics.map((metric, index) => (
                      <div key={index} className="bg-gray-50 rounded-xl p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-700 font-medium">{metric.label}</span>
                          <span className={`font-bold ${metric.color}`}>{metric.value}</span>
                        </div>
                        <div className="mt-2 bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${metric.color.replace('text-', 'bg-')}`}
                            style={{ width: metric.value }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ATS Tab */}
              {activeTab === 'ats' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">نتائج فحص ATS</h4>
                  {sampleData.ats.items.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 space-x-reverse p-4 bg-gray-50 rounded-xl">
                      {getStatusIcon(item.status)}
                      <span className="text-gray-700">{item.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Keywords Tab */}
              {activeTab === 'keywords' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">الكلمات المفتاحية الموجودة</h4>
                    <div className="flex flex-wrap gap-2">
                      {sampleData.keywords.found.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-4">كلمات مفتاحية مقترحة</h4>
                    <div className="flex flex-wrap gap-2">
                      {sampleData.keywords.missing.map((keyword, index) => (
                        <span key={index} className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-4">
                    <h5 className="font-medium text-blue-900 mb-2">كثافة الكلمات المفتاحية</h5>
                    <div className="text-2xl font-bold text-blue-600">{sampleData.keywords.density}</div>
                    <p className="text-blue-700 text-sm">النسبة المثلى: 2-4%</p>
                  </div>
                </div>
              )}

              {/* Suggestions Tab */}
              {activeTab === 'suggestions' && (
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">اقتراحات للتحسين</h4>
                  {sampleData.suggestions.map((suggestion, index) => (
                    <div key={index} className="border border-gray-200 rounded-xl p-4">
                      <div className="flex items-start space-x-3 space-x-reverse">
                        <span className="text-2xl">{getSuggestionIcon(suggestion.type)}</span>
                        <div className="flex-1">
                          <h5 className="font-semibold text-gray-900 mb-2">{suggestion.title}</h5>
                          <p className="text-gray-600">{suggestion.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              جاهز للحصول على تقرير مخصص لسيرتك الذاتية؟
            </p>
            <a
              href="/ar/cv-review"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              احصل على تقريرك المجاني
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
