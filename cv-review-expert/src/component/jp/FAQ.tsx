export default function FAQ() {
  const faqs = [
    {
      question: "ATS履歴書チェッカーは何をチェックしますか？",
      answer: "当社のAIは、ATS互換性、キーワードマッチ、フォーマット、文法、スキルギャップ、全体的な最適化を分析します。すべてが無料で、アカウント作成は不要です。"
    },
    {
      question: "この履歴書スキャンツールは本当に無料ですか？",
      answer: "はい、100％無料です。隠れた料金、制限、アップセルはありません。すべての機能に完全にアクセスできます。"
    },
    {
      question: "どのファイル形式がサポートされていますか？",
      answer: "PDF、Word（.doc、.docx）、テキストファイルをサポートしています。ファイルをドラッグ&ドロップするか、アップロードボタンを使用してください。"
    },
    {
      question: "私のCVデータは安全ですか？",
      answer: "絶対に。すべてのファイルは暗号化され、分析後に自動的に削除されます。あなたのCVを保存、共有、販売することは決してありません。"
    },
    {
      question: "分析にはどのくらい時間がかかりますか？",
      answer: "ほとんどのCVは60秒以内に分析されます。大きなファイルや複雑なフォーマットの場合は少し長くかかる場合があります。"
    },
    {
      question: "どの業界や職種で効果がありますか？",
      answer: "テクノロジー、金融、ヘルスケア、マーケティング、教育など、すべての業界で機能します。新卒から役員レベルまで対応しています。"
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            よくある <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">質問</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ATS履歴書チェッカーとCV最適化ツールについて、よくある質問にお答えします。
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            他にご質問がありますか？お気軽にお問い合わせください。
          </p>
          <a
            href="/jp/contact"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            お問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}
