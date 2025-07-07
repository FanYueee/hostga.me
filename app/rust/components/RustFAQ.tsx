'use client'

import { useState } from 'react'

export default function RustFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Rust 伺服器支援多少玩家同時在線？",
      answer: "根據不同方案，我們的伺服器可支援 10-100 名玩家同時在線。入門方案適合 10-20 人，標準方案支援 20-50 人，專業方案可承載 50-100 人的大型社群。"
    },
    {
      question: "伺服器的地圖和插件可以自訂嗎？",
      answer: "是的！您可以完全自訂地圖大小、種子值，以及安裝各種 Oxide/uMod 插件。我們提供一鍵安裝熱門插件，包括經濟系統、商店、傳送點、排行榜等功能。"
    },
    {
      question: "多久會進行一次地圖清檔（Wipe）？",
      answer: "清檔週期完全由您決定！可以設定每週、每月或自訂週期清檔。我們也提供強制清檔和 BP 清檔的靈活選擇，讓您的伺服器保持新鮮感。"
    },
    {
      question: "如果遇到技術問題，如何獲得支援？",
      answer: "我們提供 24/7 全天候技術支援。您可以透過即時聊天、工單系統或電話聯繫我們的技術團隊。平均回應時間不超過 30 分鐘。"
    },
    {
      question: "伺服器資料會自動備份嗎？",
      answer: "是的，我們每日自動備份您的伺服器資料，包括地圖、玩家數據和配置文件。您也可以隨時手動創建備份點，並在需要時快速還原。"
    },
    {
      question: "可以免費試用嗎？",
      answer: "我們提供 7 天免費試用期，讓您充分體驗我們的服務品質。試用期內享有完整功能，無任何限制。滿意後再決定是否續費。"
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