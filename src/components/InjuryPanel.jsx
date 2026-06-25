import { useEffect, useRef } from 'react'
import { injuryData } from '../data/injuryData'

export default function InjuryPanel({ activeRegion, selectedConditions, onToggleCondition, onClose }) {
  const panelRef = useRef(null)

  useEffect(() => {
    if (activeRegion && panelRef.current) {
      panelRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [activeRegion])

  if (!activeRegion) return null
  const region = injuryData[activeRegion]
  if (!region) return null

  const selected = selectedConditions[activeRegion] || []

  return (
    <div ref={panelRef} className="w-full max-w-2xl mx-auto mt-6 scroll-mt-4">
      <div className="bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden border border-gray-200">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-[#c1121f] rounded-t-2xl">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{region.label}</h3>
            <p className="text-red-200 text-xs mt-0.5">38 CFR Recognized Conditions</p>
          </div>
          <button
            onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close panel"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-5 py-4">
          <p className="text-sm text-gray-500 mb-3">Select all conditions that apply to your service-connected injuries:</p>
          <div className="space-y-2">
            {region.conditions.map((condition) => {
              const isChecked = selected.includes(condition)
              return (
                <label
                  key={condition}
                  className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    isChecked
                      ? 'border-[#c1121f] bg-red-50'
                      : 'border-gray-200 hover:border-red-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleCondition(activeRegion, condition)}
                    className="mt-0.5 w-4 h-4 accent-[#c1121f] cursor-pointer shrink-0"
                  />
                  <span className={`text-sm leading-snug ${isChecked ? 'text-[#c1121f] font-medium' : 'text-gray-700'}`}>
                    {condition}
                  </span>
                </label>
              )
            })}
          </div>
        </div>

        <div className="px-5 py-4 border-t border-gray-200 bg-gray-50 rounded-b-2xl">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">
              {selected.length > 0
                ? `${selected.length} condition${selected.length > 1 ? 's' : ''} selected`
                : 'No conditions selected'}
            </span>
            <button
              onClick={() => { onClose(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              className="px-5 py-2 bg-[#c1121f] text-white rounded-lg text-sm font-semibold hover:bg-[#a00e19] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
