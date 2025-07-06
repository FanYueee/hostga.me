'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [cpuCores, setCpuCores] = useState(4)
  const [memory, setMemory] = useState(8)
  const [storage, setStorage] = useState(30)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* 幾何背景裝飾 */}
      <div className="absolute inset-0">
        {/* 大圓形裝飾 */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-100 to-pink-200 rounded-full opacity-50 animate-pulse [animation-delay:2s]"></div>
        
        {/* 網格點陣 */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle, #6b7280 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* 浮動幾何形狀 */}
        <div className="absolute top-20 left-20 w-6 h-6 bg-blue-300 rounded-full opacity-40 animate-bounce [animation-delay:1s]"></div>
        <div className="absolute top-40 right-32 w-4 h-4 bg-purple-300 rotate-45 opacity-40 animate-pulse [animation-delay:3s]"></div>
        <div className="absolute bottom-32 left-32 w-8 h-8 bg-indigo-300 rounded-full opacity-30 animate-bounce [animation-delay:2s]"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-pink-300 rotate-45 opacity-40 animate-pulse [animation-delay:4s]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center pt-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          
          {/* 左側內容 */}
          <div className="text-left mt-8">
            {/* 小標籤 */}
            <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full text-blue-700 text-sm font-medium mb-8 transition-all duration-1000 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></span>
              #1 遊戲伺服器託管服務
            </div>

            {/* 主標題 */}
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 leading-tight mb-8 transition-all duration-1000 delay-200 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <span className="block">極致</span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                遊戲體驗
              </span>
              <span className="block text-gray-700 text-4xl sm:text-5xl lg:text-6xl font-bold mt-2">
                從這裡開始
              </span>
            </h1>

            {/* 副標題 */}
            <p className={`text-xl text-gray-600 leading-relaxed mb-10 max-w-lg transition-all duration-1000 delay-400 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              專業級 <span className="font-semibold text-blue-600">Minecraft</span>、
              <span className="font-semibold text-purple-600">ARK</span>、
              <span className="font-semibold text-indigo-600">RUST</span>、
              <span className="font-semibold text-pink-600">DAYZ</span> 
              遊戲伺服器託管服務。99.9% 穩定運行，24/7 技術支援。
            </p>

            {/* CTA 按鈕組 */}
            <div className={`flex flex-col sm:flex-row gap-4 mb-12 transition-all duration-1000 delay-600 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <Link
                href="/pricing"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center">
                  立即開始
                  <svg className="w-5 h-5 ml-2 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
              
              <Link
                href="/demo"
                className="group inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-2xl shadow-md hover:shadow-lg hover:border-gray-300 transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                觀看演示
              </Link>
            </div>

            {/* 統計數據 */}
            <div className={`grid grid-cols-3 gap-6 transition-all duration-1000 delay-800 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-gray-900 mb-1">99.9%</div>
                <div className="text-sm text-gray-600">穩定運行</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-gray-900 mb-1">24/7</div>
                <div className="text-sm text-gray-600">全天支援</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-black text-gray-900 mb-1">5000+</div>
                <div className="text-sm text-gray-600">滿意客戶</div>
              </div>
            </div>
          </div>

          {/* 右側視覺元素 */}
          <div className={`relative transition-all duration-1000 delay-400 transform -mt-16 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            <div className="relative">
              {/* 主要卡片 */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">自定義配置</h3>
                      <p className="text-sm text-gray-600">拖拉調整規格</p>
                    </div>
                  </div>
                  
                  <div className="space-y-5">
                    {/* CPU 核心 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">CPU 核心</span>
                        <span className="text-sm font-bold text-blue-600">{cpuCores} 核心</span>
                      </div>
                      <div className="relative">
                        <input 
                          type="range" 
                          min="1" 
                          max="8" 
                          value={cpuCores}
                          onChange={(e) => setCpuCores(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-blue-500 [&::-webkit-slider-thumb]:to-blue-700 [&::-webkit-slider-thumb]:shadow-lg"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>1</span>
                        <span>8</span>
                      </div>
                    </div>
                    
                    {/* 記憶體 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">記憶體</span>
                        <span className="text-sm font-bold text-purple-600">{memory} GB</span>
                      </div>
                      <div className="relative">
                        <input 
                          type="range" 
                          min="2" 
                          max="32" 
                          step="2"
                          value={memory}
                          onChange={(e) => setMemory(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-purple-500 [&::-webkit-slider-thumb]:to-purple-700 [&::-webkit-slider-thumb]:shadow-lg"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>2GB</span>
                        <span>32GB</span>
                      </div>
                    </div>
                    
                    {/* 儲存空間 */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">儲存空間</span>
                        <span className="text-sm font-bold text-green-600">{storage} GB</span>
                      </div>
                      <div className="relative">
                        <input 
                          type="range" 
                          min="10" 
                          max="100" 
                          step="10"
                          value={storage}
                          onChange={(e) => setStorage(Number(e.target.value))}
                          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-gradient-to-br [&::-webkit-slider-thumb]:from-green-500 [&::-webkit-slider-thumb]:to-green-700 [&::-webkit-slider-thumb]:shadow-lg"
                        />
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>10GB</span>
                        <span>100GB</span>
                      </div>
                    </div>
                  </div>
                  
                </div>
                
              </div>

              {/* 浮動小卡片 */}
              <div className="absolute -top-4 -left-4 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-4 shadow-lg animate-bounce">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-4 shadow-lg animate-pulse">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}