'use client'

import { useState } from 'react'

interface PricingPlan {
  id: string
  name: string
  players: string
  price: number
  originalPrice?: number
  features: string[]
  popular?: boolean
  color: string
  bgColor: string
}

const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: '入門版',
    players: '25-50 玩家',
    price: 299,
    features: [
      '2GB RAM',
      '20GB SSD 儲存',
      '基礎插件支援',
      '每週清檔',
      '24/7 技術支援',
      '基礎 DDoS 防護'
    ],
    color: 'from-blue-500 to-cyan-600',
    bgColor: 'from-blue-50 to-cyan-50'
  },
  {
    id: 'professional',
    name: '專業版',
    players: '75-100 玩家',
    price: 499,
    originalPrice: 599,
    popular: true,
    features: [
      '4GB RAM',
      '40GB SSD 儲存',
      '完整插件庫',
      '自定義清檔週期',
      '優先技術支援',
      '進階 DDoS 防護',
      '自動備份功能',
      '管理面板權限'
    ],
    color: 'from-orange-500 to-red-600',
    bgColor: 'from-orange-50 to-red-50'
  },
  {
    id: 'enterprise',
    name: '企業版',
    players: '150-200 玩家',
    price: 899,
    features: [
      '8GB RAM',
      '80GB SSD 儲存',
      '所有插件 + 自定義',
      '完全自定義設定',
      '專屬客服專員',
      '企業級安全防護',
      '每日自動備份',
      '完整管理權限',
      '專屬 IP 地址',
      '效能監控報告'
    ],
    color: 'from-purple-500 to-pink-600',
    bgColor: 'from-purple-50 to-pink-50'
  }
]

export default function RustPricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  const getPrice = (price: number) => {
    return billingCycle === 'yearly' ? Math.floor(price * 10) : price
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Rust 伺服器方案
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            選擇最適合您需求的方案，立即開始您的 Rust 生存之旅
          </p>
          
          {/* 計費週期切換 */}
          <div className="inline-flex items-center bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              月付
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              年付
              <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                省 2 個月
              </span>
            </button>
          </div>
        </div>

        {/* 方案卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 ${
                plan.popular 
                  ? 'ring-2 ring-orange-500 shadow-xl scale-105' 
                  : 'shadow-lg hover:shadow-xl'
              }`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              {/* 熱門標籤 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                    最受歡迎
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* 方案名稱與圖標 */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600">{plan.players}</p>
                  </div>
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${plan.color}`}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                </div>

                {/* 價格 */}
                <div className="mb-6">
                  <div className="flex items-end space-x-2">
                    <span className="text-4xl font-bold text-gray-900">
                      NT${getPrice(plan.price)}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === 'monthly' ? '月' : '年'}
                    </span>
                  </div>
                  {plan.originalPrice && billingCycle === 'monthly' && (
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-gray-500 line-through">
                        NT${plan.originalPrice}
                      </span>
                      <span className="text-green-600 text-sm font-medium">
                        省 NT${plan.originalPrice - plan.price}
                      </span>
                    </div>
                  )}
                </div>

                {/* 功能列表 */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <div className={`p-1 rounded-full bg-gradient-to-br ${plan.color} flex-shrink-0 mt-0.5`}>
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* 選擇按鈕 */}
                <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg hover:shadow-xl hover:from-orange-700 hover:to-red-700'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}>
                  {plan.popular ? '立即選擇' : '選擇方案'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 底部說明 */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              還有疑問嗎？
            </h3>
            <p className="text-gray-600 mb-6">
              我們提供 7 天無條件退款保證，讓您安心試用我們的服務
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-6 py-3 bg-gray-900 text-white font-medium rounded-xl hover:bg-gray-800 transition-all duration-300">
                聯繫客服
              </button>
              <button className="inline-flex items-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-xl hover:border-gray-400 hover:bg-gray-50 transition-all duration-300">
                查看 FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}