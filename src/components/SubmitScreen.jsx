import { useEffect, useRef, useState } from 'react'
import { injuryData } from '../data/injuryData'

function buildInjuryText(selectedConditions) {
  const lines = ['VA DISABILITY CLAIM — SELECTED SERVICE-CONNECTED CONDITIONS', '']
  Object.entries(selectedConditions).forEach(([regionId, conditions]) => {
    if (!conditions.length) return
    const region = injuryData[regionId]
    lines.push(`${region?.label?.toUpperCase()}:`)
    conditions.forEach((c) => lines.push(`  • ${c}`))
    lines.push('')
  })
  lines.push('---')
  lines.push('Generated via VA Disability Claims Assistant')
  return lines.join('\n')
}

export default function SubmitScreen({ selectedConditions, onBack }) {
  const [copied, setCopied] = useState(false)
  const scriptRef = useRef(null)
  const injuryText = buildInjuryText(selectedConditions)

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

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(injuryText)
      } else {
        const ta = document.createElement('textarea')
        ta.value = injuryText
        ta.style.position = 'fixed'
        ta.style.opacity = '0'
        document.body.appendChild(ta)
        ta.focus()
        ta.select()
        document.execCommand('copy')
        document.body.removeChild(ta)
      }
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
    } catch {
      setCopied(false)
    }
  }

  const totalCount = Object.values(selectedConditions).reduce((sum, c) => sum + c.length, 0)

  return (
    <div className="max-w-2xl mx-auto w-full space-y-6">
      {/* Summary */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c1121f] px-6 py-5">
          <h2 className="text-white text-xl font-bold">Your Injury Summary</h2>
          <p className="text-blue-200 text-sm mt-1">{totalCount} condition{totalCount !== 1 ? 's' : ''} selected</p>
        </div>
        <div className="p-5 space-y-3">
          {Object.entries(selectedConditions).map(([regionId, conditions]) => {
            if (!conditions.length) return null
            const region = injuryData[regionId]
            return (
              <div key={regionId} className="bg-blue-50 rounded-lg p-3 border border-blue-100">
                <h4 className="text-xs font-bold text-[#1e3a6e] uppercase tracking-wide mb-1">{region?.label}</h4>
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

      {/* Copy box */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-[#c9a227] flex items-center justify-between">
          <div>
            <h3 className="text-white font-bold text-base">Copy Your Injuries</h3>
            <p className="text-yellow-100 text-xs mt-0.5">Paste this into the "Notes" field in the form below</p>
          </div>
          <button
            onClick={handleCopy}
            className={`px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
              copied
                ? 'bg-green-500 border-green-500 text-white'
                : 'bg-white border-white text-[#c9a227] hover:bg-yellow-50'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy to Clipboard'}
          </button>
        </div>
        <div className="p-5">
          <textarea
            readOnly
            value={injuryText}
            rows={10}
            className="w-full text-xs font-mono bg-gray-50 border border-gray-200 rounded-lg p-3 resize-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
        </div>
      </div>

      {/* GHL Form */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c1121f] px-6 py-4">
          <h3 className="text-white font-bold text-base">Submit Your Claim Information</h3>
          <p className="text-blue-200 text-xs mt-0.5">Fill out the form below — a claims specialist will contact you</p>
        </div>
        <div className="p-4">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/8pQ9tSlsddVkPThwoVbJ"
            style={{ width: '100%', border: 'none', minHeight: '600px' }}
            id="inline-8pQ9tSlsddVkPThwoVbJ"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            title="VA Claims Form"
          />
        </div>
      </div>

      <div className="pb-4">
        <button
          onClick={onBack}
          className="w-full py-3 border-2 border-[#c1121f] text-[#1e3a6e] rounded-xl font-semibold hover:bg-blue-50 transition-colors bg-white"
        >
          ← Back to Review
        </button>
      </div>
    </div>
  )
}
