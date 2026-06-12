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

export default function SubmitScreen({ selectedConditions, onBack, onStartOver }) {
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

  const handleCopy = () => {
    const ta = document.createElement('textarea')
    ta.value = injuryText
    ta.setAttribute('readonly', '')
    ta.style.cssText = 'position:fixed;top:0;left:0;width:2em;height:2em;padding:0;border:none;outline:none;box-shadow:none;background:transparent;opacity:0;'
    document.body.appendChild(ta)
    ta.focus()
    ta.select()
    ta.setSelectionRange(0, 99999)
    let success = false
    try {
      success = document.execCommand('copy')
    } catch {}
    document.body.removeChild(ta)
    if (success) {
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
      return
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(injuryText).then(() => {
        setCopied(true)
        setTimeout(() => setCopied(false), 3000)
      }).catch(() => setCopied(false))
    }
  }

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

      {/* Copy box */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 bg-[#c9a227] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h3 className="text-white font-bold text-base">Copy Your Injuries</h3>
            <p className="text-yellow-100 text-xs mt-0.5">Paste this into the "Selected Injuries" field in the form below</p>
          </div>
          <button
            onClick={handleCopy}
            className={`w-full sm:w-auto px-4 py-2 rounded-lg text-sm font-bold border-2 transition-all ${
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
            className="w-full text-xs font-mono bg-gray-50 border border-gray-200 rounded-lg p-3 resize-none text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300"
          />
        </div>
      </div>

      {/* GHL Form */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c1121f] px-6 py-4">
          <h3 className="text-white font-bold text-base">Submit Your Claim Information</h3>
          <p className="text-red-200 text-xs mt-0.5">Fill out the form below — a claims specialist will contact you</p>
        </div>
        <div className="p-2 sm:p-4">
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/8pQ9tSlsddVkPThwoVbJ"
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
