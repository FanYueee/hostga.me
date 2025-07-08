'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MinecraftFeatures() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const plans = [
    {
      id: 0,
      name: '創意新手',
      cpu: '4 核心',
      memory: '8 GB',
      storage: '50 GB SSD',
      network: '100 Mbps',
      players: '10-20 人',
      features: ['DDoS 防護', '自動備份', '基礎支援', '世界管理工具'],
      price: 'NT$ 599/月',
      popular: false
    },
    {
      id: 1,
      name: '建築大師',
      cpu: '8 核心',
      memory: '16 GB',
      storage: '100 GB SSD',
      network: '250 Mbps',
      players: '20-50 人',
      features: ['DDoS 防護', '自動備份', '優先支援', '免費子網域', '外掛支援'],
      price: 'NT$ 999/月',
      popular: true
    },
    {
      id: 2,
      name: '紅石專家',
      cpu: '16 核心',
      memory: '32 GB',
      storage: '200 GB SSD',
      network: '500 Mbps',
      players: '50-100 人',
      features: ['DDoS 防護', '自動備份', '24/7 專屬支援', '免費子網域', '效能優化', '定制地圖'],
      price: 'NT$ 1999/月',
      popular: false
    }
  ]

  return (
    <section id="minecraft-pricing" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題區 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            選擇最適合的方案
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            專為 Minecraft 方塊世界優化的伺服器配置，釋放你的創造力
          </p>
        </div>

        {/* 方案卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 mt-8">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`group relative bg-white rounded-2xl transition-all duration-300 cursor-pointer ${
                plan.popular 
                  ? 'shadow-xl scale-105 mt-8 lg:mt-0' 
                  : 'shadow-md hover:shadow-lg'
              }`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* 熱門標籤 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-green-500 to-amber-500 text-white px-4 lg:px-5 py-1 lg:py-1.5 rounded-full text-xs lg:text-sm font-semibold shadow-md">
                    最受歡迎
                  </div>
                </div>
              )}

              {/* 熱門方案的微妙邊框 */}
              {plan.popular && (
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-amber-400/20 rounded-2xl -m-0.5 z-0"></div>
              )}

              <div className="relative z-10 p-6">
                {/* 方案名稱 */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <div className="text-2xl font-bold text-green-600 mb-6">{plan.price}</div>

                {/* 主要規格 */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-2.5">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{plan.cpu}</div>
                      <div className="text-xs text-gray-500">處理器核心</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-amber-100 rounded-md flex items-center justify-center mr-2.5">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{plan.memory}</div>
                      <div className="text-xs text-gray-500">記憶體</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-yellow-100 rounded-md flex items-center justify-center mr-2.5">
                      <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{plan.storage}</div>
                      <div className="text-xs text-gray-500">儲存空間</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-lime-100 rounded-md flex items-center justify-center mr-2.5">
                      <svg className="w-5 h-5 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{plan.network}</div>
                      <div className="text-xs text-gray-500">網路速度</div>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-md flex items-center justify-center mr-2.5">
                      <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 text-sm">{plan.players}</div>
                      <div className="text-xs text-gray-500">建議人數</div>
                    </div>
                  </div>
                </div>

                {/* 特色功能 */}
                <div className="border-t pt-4">
                  <div className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-xs text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* 購買按鈕 */}
                <Link
                  href="/shop"
                  className={`block w-full mt-6 py-2.5 px-4 rounded-lg font-medium text-sm text-center transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-amber-500 text-white hover:shadow-lg hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  立即購買
                </Link>
              </div>

              {/* 簡潔 Hover 效果 */}
              <div className={`absolute inset-0 rounded-2xl transition-all duration-300 ${
                hoveredPlan === plan.id 
                  ? 'bg-gradient-to-br from-green-50/80 to-amber-50/80 shadow-lg shadow-green-200/50 scale-105' 
                  : ''
              }`}></div>
            </div>
          ))}
        </div>

        {/* 訂製方案 Banner */}
        <div className="relative bg-gradient-to-r from-green-900 to-amber-800 rounded-2xl p-6 overflow-hidden">
          {/* 背景裝飾 */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }}></div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                需要訂製方案嗎？
              </h3>
              <p className="text-green-100 text-lg">
                我們提供客製化的 Minecraft 伺服器配置，打造獨特的方塊世界
              </p>
            </div>
            
            <Link
              href="/customer-center"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              聯絡客服中心
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
    </section>
  )
}