'use client'

import { useEffect, useState } from 'react'

export default function RustPromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })
  const [isLoaded, setIsLoaded] = useState(false)
  const [flipAnimation, setFlipAnimation] = useState({
    days: false,
    hours: false,
    minutes: false,
    seconds: false
  })

  useEffect(() => {
    setIsLoaded(true)

    const calculateTimeLeft = () => {
      // 獲取當前時間
      const now = new Date()
      
      // 計算下個週日的時間（優惠結束時間）
      const currentDay = now.getDay()
      const daysUntilSunday = currentDay === 0 ? 7 : 7 - currentDay
      const nextSunday = new Date(now)
      nextSunday.setDate(now.getDate() + daysUntilSunday)
      nextSunday.setHours(23, 59, 59, 999)

      // 計算剩餘時間
      const difference = nextSunday.getTime() - now.getTime()

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        // 檢查數值變化並觸發動畫
        setTimeLeft(prev => {
          const newFlips = { ...flipAnimation }
          if (prev.days !== days) newFlips.days = true
          if (prev.hours !== hours) newFlips.hours = true
          if (prev.minutes !== minutes) newFlips.minutes = true
          if (prev.seconds !== seconds) newFlips.seconds = true
          
          setFlipAnimation(newFlips)
          
          // 300ms 後重置動畫
          setTimeout(() => {
            setFlipAnimation({ days: false, hours: false, minutes: false, seconds: false })
          }, 300)
          
          return { days, hours, minutes, seconds }
        })
      } else {
        // 如果時間到了，重置為下週
        calculateTimeLeft()
      }
    }

    // 立即計算一次
    calculateTimeLeft()

    // 每秒更新
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 transform ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {/* Banner 容器 */}
          <div className="relative bg-gradient-to-r from-orange-900 via-red-900 to-orange-900 rounded-3xl overflow-hidden shadow-2xl">
            {/* 背景裝飾 */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/10 to-transparent"></div>
              
              {/* 動態光效 */}
              <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-orange-500/30 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-40 h-40 bg-red-500/30 rounded-full blur-2xl animate-pulse [animation-delay:2s]"></div>
            </div>

            <div className="relative z-10 px-8 py-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-6">
                {/* 左側優惠內容 */}
                <div className="flex flex-col lg:flex-row items-center gap-4 mb-4 lg:mb-0">
                  {/* 優惠標籤 */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 blur-lg opacity-60 animate-pulse"></div>
                    <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-5 py-2 rounded-full font-black text-lg shadow-2xl">
                      <span className="drop-shadow-lg">限時優惠</span>
                    </div>
                  </div>

                  {/* 優惠文字 */}
                  <div className="text-center lg:text-left">
                    <h3 className="text-xl lg:text-2xl font-bold text-white">
                      首月享受 
                      <span className="text-yellow-300 text-2xl lg:text-3xl mx-1">20%</span>
                      折扣優惠
                    </h3>
                    <p className="text-orange-200 text-sm mt-1">
                      新用戶專屬特別優惠，使用優惠碼 <span className="font-bold">Rust20</span>！
                    </p>
                  </div>
                </div>

                {/* 右側倒數計時 */}
                <div className="relative">
                  {/* 背景光效 */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-2xl animate-pulse"></div>
                  
                  {/* 倒數容器 */}
                  <div className="relative bg-black/50 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-orange-500/30">
                    <div className="flex items-center justify-center gap-2 lg:gap-4">
                      {/* 天 */}
                      <div className="text-center">
                        <div className={`text-2xl lg:text-4xl font-black font-mono text-orange-300 transition-all duration-500 ${
                          flipAnimation.days ? 'scale-110' : ''
                        }`} style={{
                          textShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.3)'
                        }}>
                          {String(timeLeft.days).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-orange-200/70 mt-1 font-medium">天</div>
                      </div>

                      <div className="text-orange-400/60 text-xl lg:text-3xl font-bold">:</div>

                      {/* 時 */}
                      <div className="text-center">
                        <div className={`text-2xl lg:text-4xl font-black font-mono text-orange-300 transition-all duration-500 ${
                          flipAnimation.hours ? 'scale-110' : ''
                        }`} style={{
                          textShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.3)'
                        }}>
                          {String(timeLeft.hours).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-orange-200/70 mt-1 font-medium">時</div>
                      </div>

                      <div className="text-orange-400/60 text-xl lg:text-3xl font-bold">:</div>

                      {/* 分 */}
                      <div className="text-center">
                        <div className={`text-2xl lg:text-4xl font-black font-mono text-orange-300 transition-all duration-500 ${
                          flipAnimation.minutes ? 'scale-110' : ''
                        }`} style={{
                          textShadow: '0 0 20px rgba(251, 146, 60, 0.6), 0 0 40px rgba(251, 146, 60, 0.3)'
                        }}>
                          {String(timeLeft.minutes).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-orange-200/70 mt-1 font-medium">分</div>
                      </div>

                      <div className="text-red-400/60 text-xl lg:text-3xl font-bold animate-pulse">:</div>

                      {/* 秒 */}
                      <div className="text-center">
                        <div className={`text-2xl lg:text-4xl font-black font-mono text-red-300 transition-all duration-300 ${
                          flipAnimation.seconds ? 'scale-125' : 'animate-pulse'
                        }`} style={{
                          textShadow: '0 0 25px rgba(248, 113, 113, 0.8), 0 0 50px rgba(248, 113, 113, 0.4)'
                        }}>
                          {String(timeLeft.seconds).padStart(2, '0')}
                        </div>
                        <div className="text-xs text-red-200/70 mt-1 font-medium">秒</div>
                      </div>
                    </div>
                    
                    {/* 底部發光線條 */}
                    <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  )
}