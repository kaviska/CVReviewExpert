export default function CTAFooter() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full opacity-10"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white rounded-full opacity-5"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white rounded-full opacity-15"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          今すぐCV分析を開始して
          <span className="block">面接のチャンスを増やしましょう</span>
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          何千人ものプロフェッショナルのように、当社の無料AI履歴書チェッカーでATSを通過し、採用担当者の注目を集めましょう。
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <a
            href="/jp/cv-review"
            className="relative bg-white text-blue-600 px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group"
          >
            <span className="absolute inset-0 bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
              </svg>
              無料CV分析を開始
            </span>
          </a>
          
          <a
            href="/jp/ats-analysis"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
          >
            ATS分析について詳しく
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>100% 無料</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>登録不要</span>
          </div>
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>60秒で結果</span>
          </div>
        </div>
      </div>
    </section>
  );
}
