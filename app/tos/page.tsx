'use client'

import { useState, useEffect } from 'react'

export default function TermsOfServicePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [pdfError, setPdfError] = useState(false)
  
  useEffect(() => {
    setIsLoaded(true)
  }, [])
  
  const handlePdfError = () => {
    setPdfError(true)
  }
  
  const openPdfInNewTab = () => {
    window.open('https://vproxy-legal.pages.dev/vProxyCloud_ToS.pdf', '_blank')
  }
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* 標題區域 */}
        <div className={`text-center mb-12 transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            服務條款
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            請仔細閱讀我們的服務條款，了解您的權利與義務
          </p>
          
          {/* 無法閱讀按鈕 */}
          <button
            onClick={openPdfInNewTab}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-8"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            無法閱讀？點我下載 PDF
          </button>
        </div>
        
        {/* PDF 嵌入區域 */}
        <div className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-1000 delay-300 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {pdfError ? (
            /* PDF 載入失敗時的備用內容 */
            <div className="flex flex-col items-center justify-center py-20 px-8 text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">無法載入 PDF 文件</h3>
              <p className="text-gray-600 mb-6 max-w-md">
                很抱歉，PDF 文件暫時無法顯示。請點擊下方按鈕在新視窗中開啟文件。
              </p>
              <button
                onClick={openPdfInNewTab}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                在新視窗中開啟
              </button>
            </div>
          ) : (
            /* PDF 嵌入 */
            <div className="relative" style={{ height: '120vh' }}>
              <iframe
                src="https://vproxy-legal.pages.dev/vProxyCloud_ToS.pdf#toolbar=1&navpanes=1&scrollbar=1"
                className="w-full h-full border-0"
                title="服務條款 PDF"
                allow="fullscreen"
                loading="lazy"
              />
            </div>
          )}
        </div>
        
      </div>
    </main>
  )
}