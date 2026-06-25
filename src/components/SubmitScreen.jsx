import { useEffect, useRef } from 'react'
import { injuryData } from '../data/injuryData'

function buildInjuryText(selectedConditions) {
  const lines = []
  Object.entries(selectedConditions).forEach(([regionId, conditions]) => {
    if (!conditions.length) return
    const region = injuryData[regionId]
    lines.push(`${region?.label?.toUpperCase()}:`)
    conditions.forEach((c) => lines.push(`  • ${c}`))
    lines.push('')
  })
  return lines.join('\n').trim()
}

export default function SubmitScreen({ selectedConditions, onBack, onStartOver }) {
  const scriptRef = useRef(null)
  const injuryText = buildInjuryText(selectedConditions)
  const encodedInjuries = encodeURIComponent(injuryText)
  const ghlUrl = `https://api.leadconnectorhq.com/widget/form/8pQ9tSlsddVkPThwoVbJ?multi_line_3fbi=${encodedInjuries}`

  useEffect(() => {
    if (scriptRef.current) return
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    scriptRef.current = script
    document.body.appendChild(script)
    return () => {
      if (scriptRef.current && document.body.contains(scriptRef.current)) {
        document.body.removeChild(scriptRef.current)
        scriptRef.current = null
      }
    }
  }, [])

  const totalCount = Object.values(selectedConditions).reduce((sum, c) => sum + c.length, 0)

  return (
    <div className="max-w-2xl mx-auto w-full space-y-6">
      {/* Summary */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c1121f] px-6 py-5">
          <h2 className="text-white text-xl font-bold">Your Injury Summary</h2>
          <p className="text-red-200 text-sm mt-1">{totalCount} condition{totalCount !== 1 ? 's' : ''} selected</p>
        </div>
        <div className="p-5 space-y-3">
          {Object.entries(selectedConditions).map(([regionId, conditions]) => {
            if (!conditions.length) return null
            const region = injuryData[regionId]
            return (
              <div key={regionId} className="bg-red-50 rounded-lg p-3 border border-red-100">
                <h4 className="text-xs font-bold text-[#c1121f] uppercase tracking-wide mb-1">{region?.label}</h4>
                <ul className="space-y-0.5">
                  {conditions.map((c) => (
                    <li key={c} className="text-sm text-gray-700 flex items-start gap-1.5">
                      <span className="text-green-500 shrink-0 mt-0.5">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Info banner */}
      <div className="bg-green-50 border border-green-200 rounded-xl px-5 py-3 flex items-center gap-3">
        <svg className="w-5 h-5 text-green-600 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <p className="text-sm text-green-800 font-medium">
          Your selected injuries have been automatically added to the form below.
        </p>
      </div>

      {/* GHL Form */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c1121f] px-6 py-4">
          <h3 className="text-white font-bold text-base">Submit Your Claim Information</h3>
          <p className="text-red-200 text-xs mt-0.5">Fill out the form below — a claims specialist will contact you</p>
        </div>
        <div className="p-2 sm:p-4">
          <iframe
            src={ghlUrl}
            style={{ width: '100%', border: 'none', minHeight: '900px', display: 'block' }}
            id="inline-8pQ9tSlsddVkPThwoVbJ"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            title="VA Claims Form"
          />
        </div>
      </div>

      <div className="pb-4 flex flex-col gap-3">
        <button
          onClick={onBack}
          className="w-full py-3 border-2 border-[#c1121f] text-[#c1121f] rounded-xl font-semibold hover:bg-red-50 transition-colors bg-white"
        >
          ← Back to Review
        </button>
        <button
          onClick={onStartOver}
          className="w-full py-2.5 text-sm font-black text-gray-400 hover:text-red-600 transition-colors border border-gray-200 rounded-xl hover:border-red-300 bg-white"
        >
          ↺ Start Over & Clear All Selections
        </button>
      </div>
    </div>
  )
}
