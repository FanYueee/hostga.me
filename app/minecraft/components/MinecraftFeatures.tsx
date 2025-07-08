'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function MinecraftFeatures() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null)

  const plans = [
    {
      id: 0,
      name: '極致型',
      configurations: [
        {
          location: '台灣',
          flag: '🇹🇼',
          cpu: 'AMD Ryzen 9 9950X',
          cores: '高達 5.7GHz',
          memory: 'DDR5 高速記憶體',
          storage: '美光 T500 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/mcs-tw-e'
        }
      ],
      popular: false,
      color: 'from-purple-500 to-indigo-600'
    },
    {
      id: 1,
      name: '高階型',
      configurations: [
        {
          location: '台灣',
          flag: '🇹🇼',
          cpu: 'AMD Ryzen 9 7950X',
          cores: '高達 5.7GHz',
          memory: 'DDR5 高速記憶體',
          storage: '高速 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/mcs-tw-h'
        }
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 2,
      name: '中階型',
      configurations: [
        {
          location: '台灣',
          flag: '🇹🇼',
          cpu: 'AMD Ryzen 9 5950X',
          cores: '高達 4.9GHz',
          memory: 'DDR4 高速記憶體',
          storage: '高速 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/mcs-tw-m'
        },
        {
          location: '新加坡',
          flag: '🇸🇬',
          cpu: 'AMD Ryzen 5800X',
          cores: '高達 4.7GHz',
          memory: 'DDR4 ECC 高速記憶體',
          storage: '高速 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/mcs-sg-m'
        }
      ],
      popular: true,
      color: 'from-indigo-500 to-purple-600'
    },
    {
      id: 3,
      name: '標準型',
      configurations: [
        {
          location: '台灣',
          flag: '🇹🇼',
          cpu: 'AMD Ryzen 5 5800X3D 或 Intel i7-12700K',
          cores: '高達 4.5GHz / 5.0GHz',
          memory: 'DDR4 高速記憶體',
          storage: '高速 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/mcs-tw-a'
        }
      ],
      popular: false,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 4,
      name: '基本型',
      configurations: [
        {
          location: '台灣',
          flag: '🇹🇼',
          cpu: 'Intel i7-8700K',
          cores: '高達 4.7GHz',
          memory: 'DDR4 高速記憶體',
          storage: '高速 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/mcs-tw-b'
        }
      ],
      popular: false,
      color: 'from-yellow-500 to-orange-600'
    },
    {
      id: 5,
      name: '輕量型',
      configurations: [
        {
          location: '香港',
          flag: '🇭🇰',
          cpu: 'Intel Xeon Gold 6138',
          cores: '高達 3.7GHz',
          memory: 'DDR4 ECC 高速記憶體',
          storage: '高速 NVMe SSD',
          shopUrl: 'https://client.vproxy.cloud/index.php?rp=/store/minecraft'
        }
      ],
      popular: false,
      color: 'from-gray-500 to-slate-600'
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
            為您的 Minecraft 伺服器選擇最適合的配置方案
          </p>
        </div>

        {/* 橫向方案列表 */}
        <div className="space-y-10">
          {plans.map((plan, index) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 transform ${
                plan.popular 
                  ? 'border-green-400 scale-105 shadow-2xl' 
                  : 'border-gray-200 hover:border-green-300 hover:shadow-xl hover:scale-102'
              } ${hoveredPlan === plan.id ? 'shadow-2xl' : ''}`}
              onMouseEnter={() => setHoveredPlan(plan.id)}
              onMouseLeave={() => setHoveredPlan(null)}
            >
              {/* 熱門標籤 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    最受歡迎
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* 方案名稱 */}
                <div className="mb-6">
                  <h3 className={`text-3xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent text-center`}>
                    {plan.name}
                  </h3>
                </div>

                {/* 配置列表（如果有多個地區就上下排列） */}
                <div className="space-y-6">
                  {plan.configurations.map((config, configIndex) => (
                    <div key={configIndex} className={`${plan.configurations.length > 1 && configIndex > 0 ? 'border-t-2 border-dashed border-gray-200 pt-6' : ''}`}>
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                        {/* 地區標示 */}
                        <div className="lg:col-span-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl">{config.flag}</span>
                            <div>
                              <div className="font-semibold text-gray-900">{config.location}</div>
                              <div className="text-sm text-gray-600">節點</div>
                            </div>
                          </div>
                        </div>

                        {/* 配置資訊 */}
                        <div className="lg:col-span-7">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {/* CPU */}
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="text-xs text-gray-600 mb-1">處理器</div>
                              <div className="font-semibold text-gray-900 text-sm">{config.cpu}</div>
                              <div className="text-xs text-gray-600 mt-1">{config.cores}</div>
                            </div>
                            
                            {/* 記憶體 */}
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="text-xs text-gray-600 mb-1">記憶體</div>
                              <div className="font-semibold text-gray-900">{config.memory}</div>
                            </div>
                            
                            {/* 儲存 */}
                            <div className="bg-gray-50 rounded-lg p-4">
                              <div className="text-xs text-gray-600 mb-1">儲存空間</div>
                              <div className="font-semibold text-gray-900">{config.storage}</div>
                            </div>
                          </div>
                        </div>

                        {/* 按鈕 */}
                        <div className="lg:col-span-3 flex justify-end">
                          <Link
                            href={config.shopUrl}
                            className={`inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r ${plan.color} text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-sm`}
                          >
                            前往商城
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 底部 CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-amber-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              需要訂製方案嗎？
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              我們提供客製化的 Minecraft 伺服器配置，打造獨特的遊戲體驗
            </p>
            
            <Link
              href="https://discord.vproxy.cloud"
              className="group inline-flex items-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              聯絡客服
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