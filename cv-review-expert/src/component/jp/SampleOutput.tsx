export default function SampleOutput() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            サンプル <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ATS履歴書チェッカー</span> & CV分析レポート
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            取得する正確なフィードバックをプレビュー：ATS互換性スコア、キーワードマッチ、フォーマット修正、アクションステップ—スクリーニングを通過し採用担当者を感動させるために必要なすべて。
          </p>
        </div>

        {/* Demo Report */}
        <div id="sample-report" className="max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Report Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">CV & 履歴書分析レポート</h3>
                  <p className="text-blue-100">田中太郎 - ソフトウェアエンジニア</p>
                  <p className="text-blue-200 text-sm mt-1">分析日: {new Date().toLocaleDateString('ja-JP')}</p>
                </div>
                <div className="text-right">
                  <div className="text-4xl font-bold mb-1">87/100</div>
                  <div className="text-blue-100">総合スコア</div>
                  <div className="flex items-center mt-2">
                    {[...Array(4)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-300 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <svg className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Report Content */}
            <div className="p-8">
              {/* Comprehensive Score Breakdown */}
              <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-2xl font-bold text-green-600 mb-1">92</div>
                  <div className="text-xs text-gray-600">ATS互換性</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85</div>
                  <div className="text-xs text-gray-600">キーワードマッチ</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-2xl font-bold text-purple-600 mb-1">90</div>
                  <div className="text-xs text-gray-600">フォーマット品質</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="text-2xl font-bold text-orange-600 mb-1">81</div>
                  <div className="text-xs text-gray-600">コンテンツスコア</div>
                </div>
                <div className="text-center p-4 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-2xl font-bold text-indigo-600 mb-1">88</div>
                  <div className="text-xs text-gray-600">文法チェック</div>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="text-2xl font-bold text-teal-600 mb-1">83</div>
                  <div className="text-xs text-gray-600">個人化</div>
                </div>
              </div>

              {/* 1. Summary Analysis */}
              <div className="mb-8 p-6 bg-gray-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </span>
                  概要分析
                </h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-2">✅ 強調された強み</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 強力な技術スキルのプレゼンテーション</li>
                      <li>• アクション動詞の効果的な使用</li>
                      <li>• 定量化された成果を含む</li>
                      <li>• プロフェッショナルなメール形式</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-600 mb-2">⚠️ 改善領域</h5>
                    <ul className="text-sm space-y-1 text-gray-600">
                      <li>• 業界固有のキーワードが不足</li>
                      <li>• 一部の役職で定量化できる成果が不足</li>
                      <li>• プロフェッショナル要約の強化が必要</li>
                      <li>• 連絡先セクションの最適化が可能</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-semibold text-blue-600 mb-2">📊 スコア詳細</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>関連性:</span>
                        <span className="font-semibold">85/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>明瞭性:</span>
                        <span className="font-semibold">90/100</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>フォーマット:</span>
                        <span className="font-semibold">88/100</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2. Skill & Keyword Match */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </span>
                  スキル & キーワード分析
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-semibold text-green-600 mb-3">✅ 履歴書で見つかったスキル</h5>
                    <div className="flex flex-wrap gap-2">
                      {["JavaScript", "React", "Node.js", "Python", "Git", "Agile", "SQL", "AWS"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">8つの関連スキルが検出されました</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-red-600 mb-3">❌ 不足している重要なキーワード</h5>
                    <div className="flex flex-wrap gap-2">
                      {["Docker", "Kubernetes", "Microservices", "CI/CD", "Machine Learning", "DevOps"].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 mt-2">追加すべき高優先度のスキル6つ</p>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white">
                <h4 className="text-2xl font-bold mb-4">あなたの履歴書を改善する準備はできていますか？</h4>
                <p className="mb-6 text-blue-100">
                  このような詳細な分析と実行可能な推奨事項を数秒で取得してください。
                </p>
                <a
                  href="/jp/cv-review"
                  className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors duration-300"
                >
                  無料分析を今すぐ開始
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
