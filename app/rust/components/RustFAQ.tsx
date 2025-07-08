'use client'

import { useState } from 'react'

export default function RustFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Rust 伺服器支援多少玩家同時在線？",
      answer: "根據不同方案，有不同支援的人數，您可以選擇適合的方案，我們只對資源做限制，而不限制玩家數量。"
    },
    {
      question: "伺服器的地圖和插件可以自訂嗎？",
      answer: "是的！您可以完全自訂地圖大小、種子值。"
    },
    {
      question: "如果遇到技術問題，如何獲得支援？",
      answer: "我們提供 12/7 技術支援。對於我們提供的主機問題我們可以提供支援，但對於伺服器內狀況我們無法提供協助。"
    },
    {
      question: "可以免費試用嗎？",
      answer: "抱歉，我們沒有提供免費試用服務。"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            常見問題
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            關於 Rust 伺服器託管的常見疑問解答
          </p>
        </div>

        {/* FAQ 列表 */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-orange-500 rotate-180' : ''
                }`}>
                  <svg 
                    className={`w-4 h-4 transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-orange-600'
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              還有其他問題？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              我們的技術團隊隨時為您提供專業諮詢服務
            </p>
            <a
              href="/customer-center"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              聯絡技術支援
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}