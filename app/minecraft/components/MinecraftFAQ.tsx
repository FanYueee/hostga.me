'use client'

import { useState } from 'react'

export default function MinecraftFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Minecraft 伺服器支援多少玩家同時在線？",
      answer: "根據不同方案，我們的伺服器可支援 10-100 名玩家同時在線。入門方案適合 10-20 人的小型創作團隊，標準方案支援 20-50 人的中型社群，專業方案可承載 50-100 人的大型建築社群。"
    },
    {
      question: "伺服器支援哪些模組和外掛？",
      answer: "我們完整支援各種熱門模組和外掛！包括 Bukkit、Spigot、Paper、Forge、Fabric 等平台。熱門外掛如 WorldEdit、EssentialsX、LuckPerms、Dynmap、MCMMO 等都可一鍵安裝。我們還支援定制模組包和整合包。"
    },
    {
      question: "可以自訂世界生成設定和遊戲規則嗎？",
      answer: "絕對可以！您可以完全控制世界生成參數，包括地形、結構、生物群系分布等。遊戲規則如 PvP、死亡掉落、生物生成、日夜循環等都可自由調整。我們提供直觀的控制面板來管理這些設定。"
    },
    {
      question: "如果遇到技術問題，如何獲得支援？",
      answer: "我們提供 24/7 全天候技術支援。您可以透過即時聊天、工單系統或電話聯繫我們的技術團隊。我們的團隊熟悉各種 Minecraft 技術問題，平均回應時間不超過 30 分鐘。"
    },
    {
      question: "伺服器資料會自動備份嗎？",
      answer: "是的，我們每日自動備份您的伺服器資料，包括世界檔案、玩家數據、外掛配置和建築作品。您也可以隨時手動創建備份點，並在需要時快速還原到任意時間點，確保您的創作永不遺失。"
    },
    {
      question: "可以免費試用嗎？",
      answer: "我們提供 7 天免費試用期，讓您充分體驗我們的服務品質。試用期內享有完整功能，無任何限制。您可以測試所有功能、安裝外掛、邀請朋友一起遊戲。滿意後再決定是否續費。"
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
            關於 Minecraft 伺服器託管的常見疑問解答
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
                <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center transition-all duration-300 ${
                  openIndex === index ? 'bg-green-500 rotate-180' : ''
                }`}>
                  <svg 
                    className={`w-4 h-4 transition-colors duration-300 ${
                      openIndex === index ? 'text-white' : 'text-green-600'
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
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              還有其他問題？
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              我們的技術團隊隨時為您提供專業諮詢服務
            </p>
            <a
              href="/customer-center"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-green-600 to-amber-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-amber-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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