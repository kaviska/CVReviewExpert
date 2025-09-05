'use client';

import React from 'react';
import { useEffect } from 'react';

const ComingSoon = () => {
  useEffect(() => {
  const fetchData = async () => {
    const apiKey = 'AIzaSyDmNNilZI6EsXrd2G7KobszmrzSBiqO5OM'; // Replace with your actual API key
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;
    const body = {
      contents: [
        {
          role: 'user',
          parts: [{ text: 'Give me seo rich blog post about how to review cv word count 1200-1500' }]
        }
      ]
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchData();
}, []);
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            エキサイティングな機能が近日公開
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            あなたのキャリアを次のレベルに押し上げる革新的な面接準備機能を開発中です
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* AI-Powered Interview Feature */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                🤖 AIパワード
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              AI面接シミュレーター
            </h3>
            
            <p className="text-gray-600 mb-6 text-center">
              あなたの回答に適応し、面接パフォーマンスにリアルタイムフィードバックを提供する高度なAIで練習しましょう。
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">パーソナライズされた面接質問</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">リアルタイムパフォーマンス分析</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">業界固有のシナリオ</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">音声・動画練習</span>
              </div>
            </div>
            
            <div className="text-center">
              <button className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  利用可能時に通知
                </span>
              </button>
            </div>
          </div>

          {/* Human-Powered Expert Interview Feature */}
          <div className="bg-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="text-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <span className="inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-3 py-1 rounded-full mb-4">
                👥 専門家主導
              </span>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              専門家面接コーチング
            </h3>
            
            <p className="text-gray-600 mb-6 text-center">
              採用マネージャーが何を求めているかを正確に知っている業界プロフェッショナルからパーソナライズされたコーチングを受けましょう。
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">1対1の専門家セッション</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">業界インサイダーの洞察</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">パーソナライズされたフィードバック</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span className="text-gray-700">フォローアップアクションプラン</span>
              </div>
            </div>
            
            <div className="text-center">
              <button className="relative bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 text-white font-bold py-4 px-10 rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
                <span className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  ウェイトリストに参加
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            最初に知る
          </h3>
          <p className="text-gray-600 mb-6">
            これらのエキサイティングな機能が開始されたときに通知を受け取り、独占的な早期アクセスを受け取りましょう。
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="メールアドレスを入力"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm hover:shadow-md transition-shadow duration-300"
            />
            <button className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="relative flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
                </svg>
                購読
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
