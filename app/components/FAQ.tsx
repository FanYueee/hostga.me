'use client'

import { useState } from 'react'
import Link from 'next/link'

interface FAQItem {
  id: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 'setup',
    question: '多久可以開始使用伺服器？',
    answer: '一般情況下，您的伺服器在支付完成後 5-10 分鐘內就會自動部署完成。我們的自動化系統會為您安裝遊戲、配置預設設定。'
  },
  {
    id: 'backup',
    question: '如何進行資料備份和還原？',
    answer: '如有加購備份額度。您可以在控制面板中的備份管理手動建立備份。或是透過排程管理進行自動化的定時備份。。'
  },
  {
    id: 'performance',
    question: '伺服器資源不夠時可以升級嗎？',
    answer: '當然可以！您可以在客戶中心進行升級操作，付款完畢系統會自動處理升級。'
  },
  {
    id: 'support',
    question: '遇到問題時如何聯繫客服？',
    answer: '我們提供 12/7 客服支援。您可以在服務時間隨時聯繫我們，非服務時間我們將於服務時間內盡速處理。可透過客戶中心或是 Discord 聯繫我們的技術支援團隊。'
  },
  {
    id: 'mods',
    question: '可以安裝模組或插件嗎？',
    answer: '當然可以。您可以透過檔案管理或 SFTP 上傳模組至伺服器主機中。'
  }
]

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState<string | null>(null)

  const toggleFAQ = (id: string) => {
    setOpenFAQ(openFAQ === id ? null : id)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* 左側：介紹與文檔連結 */}
          <div className="space-y-8">
            {/* 標題 */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                還有疑問？
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                我們整理了最常見的問題和解答，希望能幫助您快速找到所需的資訊。
              </p>
            </div>
            
            {/* 詳細介紹 */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    可靠技術支援
                  </h3>
                  <p className="text-gray-700 mb-4">
                    我們的技術團隊擁有多年遊戲伺服器管理經驗，遇到問題我們能提供即時的協助。
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full">平均回應 10 分鐘</span>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full">12/7 在線</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm rounded-full">中文服務</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 文檔中心連結 */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-900">
                更多資源
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Link
                  href="/docs"
                  className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                        文檔中心
                      </h4>
                      <p className="text-sm text-gray-600">
                        詳細教學與指南
                      </p>
                    </div>
                  </div>
                </Link>
                
                <Link
                  href="/contact"
                  className="group p-4 bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                        聯繫客服
                      </h4>
                      <p className="text-sm text-gray-600">
                        即時在線協助
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          
          {/* 右側：FAQ 下拉列表 */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              常見問題
            </h3>
            
            {faqData.map((faq, index) => (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h4 className="text-lg font-medium text-gray-900 pr-4">
                    {faq.question}
                  </h4>
                  <div className={`transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openFAQ === faq.id 
                    ? 'max-h-96 opacity-100' 
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-6 pb-6">
                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}