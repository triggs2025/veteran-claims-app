import { useState, useEffect, useRef } from 'react'
import BodyFigure from './components/BodyFigure'
import InjuryPanel from './components/InjuryPanel'
import InjurySummary from './components/InjurySummary'
import ReviewScreen from './components/ReviewScreen'
import SubmitScreen from './components/SubmitScreen'
import ProgressBar from './components/ProgressBar'

export default function App() {
  const [step, setStep] = useState(1)
  const [gender, setGender] = useState('male')
  const [activeRegion, setActiveRegion] = useState(null)
  const [selectedConditions, setSelectedConditions] = useState({})
  const topRef = useRef(null)

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
    try { window.parent.postMessage({ type: 'scrollToTop' }, '*') } catch {}
  }

  useEffect(() => {
    scrollToTop()
  }, [step])

  const handleRegionClick = (regionId) => {
    setActiveRegion((prev) => (prev === regionId ? null : regionId))
  }

  const handleToggleCondition = (regionId, condition) => {
    setSelectedConditions((prev) => {
      const current = prev[regionId] || []
      const next = current.includes(condition)
        ? current.filter((c) => c !== condition)
        : [...current, condition]
      return { ...prev, [regionId]: next }
    })
  }

  const handleRemoveCondition = (regionId, condition) => {
    setSelectedConditions((prev) => {
      const next = (prev[regionId] || []).filter((c) => c !== condition)
      return { ...prev, [regionId]: next }
    })
  }

  const handleStartOver = () => {
    setStep(1)
    setActiveRegion(null)
    setSelectedConditions({})
    setGender('male')
  }

  const totalSelected = Object.values(selectedConditions).reduce((sum, c) => sum + c.length, 0)

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div ref={topRef} />
      {/* Header */}
      <header className="bg-[#c1121f] border-b border-red-900 shadow-lg">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c9a227] flex items-center justify-center shrink-0">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">New Conditions Only</h1>
              <p className="text-red-200 text-xs">Use this form only if the condition has never been claimed with the VA before. Do not use for previously denied conditions or requests for increased ratings.</p>
            </div>
          </div>
          {step > 1 && (
            <button
              onClick={handleStartOver}
              className="shrink-0 px-3 py-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-black rounded-lg border border-white/30 transition-colors"
            >
              ↺ Start Over
            </button>
          )}
        </div>
      </header>

      {/* Progress */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <ProgressBar step={step} />
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-6">
        {step === 1 && (
          <>
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Body figure */}
              <div className="bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center lg:w-80 shrink-0">
                <h2 className="text-[#c1121f] font-bold text-base mb-1">Body Map</h2>
                <p className="text-gray-500 text-xs text-center mb-4">Click any region to select injuries</p>
                <BodyFigure
                  selectedConditions={selectedConditions}
                  activeRegion={activeRegion}
                  onRegionClick={handleRegionClick}
                  gender={gender}
                  onGenderToggle={() => setGender((g) => (g === 'male' ? 'female' : 'male'))}
                />
              </div>

              {/* Right panel */}
              <div className="flex-1 flex flex-col gap-4 min-w-0">
                <div className="bg-white rounded-2xl shadow-lg p-5 flex-1 overflow-y-auto" style={{ maxHeight: '640px' }}>
                  <InjurySummary
                    selectedConditions={selectedConditions}
                    onRegionClick={handleRegionClick}
                  />
                </div>

                {totalSelected > 0 && (
                  <button
                    onClick={() => { setActiveRegion(null); setStep(2) }}
                    className="w-full py-4 bg-[#c9a227] text-white rounded-2xl font-bold text-base shadow-lg hover:bg-[#b8911f] transition-colors"
                  >
                    Review {totalSelected} Selected Condition{totalSelected !== 1 ? 's' : ''} →
                  </button>
                )}
              </div>
            </div>

            {/* Injury panel - inline below body map */}
            {activeRegion && (
              <InjuryPanel
                activeRegion={activeRegion}
                selectedConditions={selectedConditions}
                onToggleCondition={handleToggleCondition}
                onClose={() => { setActiveRegion(null); scrollToTop() }}
              />
            )}
          </>
        )}

        {step === 2 && (
          <ReviewScreen
            selectedConditions={selectedConditions}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
            onRemoveCondition={handleRemoveCondition}
            onStartOver={handleStartOver}
          />
        )}

        {step === 3 && (
          <SubmitScreen
            selectedConditions={selectedConditions}
            onBack={() => setStep(2)}
            onStartOver={handleStartOver}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="bg-[#c1121f] border-t border-red-900 mt-auto">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <p className="text-red-200 text-xs text-center leading-relaxed">
            This tool is for informational purposes only and does not constitute legal or medical advice.
            Always consult a VA-accredited claims agent or attorney.
          </p>
        </div>
      </footer>
    </div>
  )
}
