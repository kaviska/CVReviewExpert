export default function Testimonials() {
  const testimonials = [
    {
      name: "佐藤さら",
      role: "マーケティングマネージャー",
      company: "テックコープ",
      image: "👩‍💼",
      rating: 5,
      text: "このAI CV・履歴書チェッカーは、私のCVを完璧に最適化してくれました。キーワード提案とATSのヒントを使って、たった2週間で面接の電話が2倍になりました！",
      improvement: "面接数2倍"
    },
    {
      name: "チェン・マイケル",
      role: "ソフトウェア開発者",
      company: "スタートアップXYZ",
      image: "👨‍💻",
      rating: 5,
      text: "ATSが私の応募を拒否することに悩んでいました。このツールで履歴書をスキャンした後、1週間で3つの面接を獲得しました！ATS対応CVには強くお勧めします。",
      improvement: "ATSスコア90%"
    },
    {
      name: "ロドリゲス・エミリー",
      role: "データサイエンティスト",
      company: "アナリティクスプロ",
      image: "👩‍🔬",
      rating: 5,
      text: "フォーマットとCVテンプレートのガイダンスが素晴らしかったです。私のCVと履歴書は今、プロフェッショナルで採用担当者フレンドリー、そしてATS最適化されています。",
      improvement: "夢の仕事のオファー"
    },
    {
      name: "トンプソン・デビッド",
      role: "プロジェクトマネージャー",
      company: "グローバルソリューションズ",
      image: "👨‍💼",
      rating: 5,
      text: "スキルギャップ分析で不足している資格を特定できました。求人の説明に合わせてCVと履歴書を更新し、すぐに注目されました。",
      improvement: "キャリア転換"
    },
    {
      name: "ワン・リサ",
      role: "UXデザイナー",
      company: "デザインスタジオ",
      image: "👩‍🎨",
      rating: 5,
      text: "文法、言語、レイアウトのフィードバックでCVがより洗練されました。ATS対応フォーマットのおかげで、今は複数の面接が並んでいます。",
      improvement: "5つの求人オファー"
    },
    {
      name: "ミラー・ジェームズ",
      role: "営業エグゼクティブ",
      company: "セールスフォース株式会社",
      image: "👨‍💼",
      rating: 5,
      text: "このAI履歴書スキャナーを使用する前、私のCVはそこそこでした。今はATSと採用担当者に最適化され、より高い給与オファーも受けました！",
      improvement: "給与30%アップ"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ユーザーの <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">声</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            当社のAI履歴書チェッカーとATS対応テンプレートで面接を改善した何千人ものプロフェッショナルに参加してください。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                ))}
                <span className="ml-2 text-sm font-medium text-green-600 bg-green-100 px-2 py-1 rounded-full">
                  {testimonial.improvement}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-gray-600 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center">
                <div className="text-3xl mr-4">{testimonial.image}</div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                  <div className="text-sm text-blue-600">{testimonial.company}</div>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              次はあなたの番です！
            </h3>
            <p className="text-gray-600 mb-6">
              何千人ものプロフェッショナルのように、CV分析で面接の機会を増やしましょう。
            </p>
            <a
              href="/jp/cv-review"
              className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white px-12 py-5 rounded-2xl text-lg font-bold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 shadow-xl overflow-hidden group inline-block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative">今すぐ無料分析を開始</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
