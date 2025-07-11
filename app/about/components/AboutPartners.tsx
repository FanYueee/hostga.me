'use client'

import { useState, useEffect } from 'react'

export default function AboutPartners() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    const element = document.getElementById('partners-section')
    if (element) observer.observe(element)
    
    return () => {
      if (element) observer.unobserve(element)
    }
  }, [])
  
  const partners = [
    { name: 'Microsoft Azure', category: '雲端服務' },
    { name: 'AWS', category: '雲端服務' },
    { name: 'Cloudflare', category: '網路安全' },
    { name: 'Intel', category: '硬體供應商' },
    { name: 'NVIDIA', category: '硬體供應商' },
    { name: 'PayPal', category: '支付服務' },
    { name: 'Stripe', category: '支付服務' },
    { name: 'Discord', category: '社群平台' }
  ]
  
  const certifications = [
    { name: 'ISO 27001', desc: '資訊安全管理認證' },
    { name: 'PCI DSS', desc: '支付卡產業資料安全標準' },
    { name: 'GDPR', desc: '歐盟資料保護規範' },
    { name: 'SOC 2', desc: '服務組織控制認證' }
  ]
  
  return (
    <section id="partners-section" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 標題 */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            合作夥伴與認證
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            與業界領先企業合作，確保最高品質的服務標準
          </p>
        </div>
        
        {/* 合作夥伴網格 */}
        <div className={`mb-20 transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">技術合作夥伴</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="h-20 flex items-center justify-center mb-4">
                  <div className="text-3xl font-bold text-gray-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                    {partner.name}
                  </div>
                </div>
                <p className="text-sm text-gray-500 text-center">{partner.category}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 認證區域 */}
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-10">專業認證</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* 認證圖標 */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{cert.name}</h4>
                  <p className="text-sm text-gray-600">{cert.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* 統計數據 */}
        <div className={`mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white transition-all duration-1000 delay-600 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-blue-100">合作夥伴</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">8</div>
              <div className="text-blue-100">專業認證</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-blue-100">數據中心</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">全年無休</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}