import { injuryData } from '../data/injuryData'

export default function InjuryPanel({ activeRegion, selectedConditions, onToggleCondition, onClose }) {
  if (!activeRegion) return null
  const region = injuryData[activeRegion]
  if (!region) return null

  const selected = selectedConditions[activeRegion] || []

  return (
    <div className="panel-slide-enter fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/40"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className="bg-white w-full sm:w-[480px] sm:max-w-full max-h-[80vh] rounded-t-2xl sm:rounded-2xl flex flex-col shadow-2xl">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 bg-[#1e3a6e] rounded-t-2xl sm:rounded-t-2xl">
          <div>
            <h3 className="text-white font-bold text-lg leading-tight">{region.label}</h3>
            <p className="text-blue-200 text-xs mt-0.5">38 CFR Recognized Conditions</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/70 hover:text-white transition-colors p-1"
            aria-label="Close panel"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="overflow-y-auto flex-1 px-5 py-4">
          <p className="text-sm text-gray-500 mb-3">Select all conditions that apply to your service-connected injuries:</p>
          <div className="space-y-2">
            {region.conditions.map((condition) => {
              const isChecked = selected.includes(condition)
              return (
                <label
                  key={condition}
                  className={`flex items-start gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    isChecked
                      ? 'border-[#1e3a6e] bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggleCondition(activeRegion, condition)}
                    className="mt-0.5 w-4 h-4 accent-[#1e3a6e] cursor-pointer shrink-0"
                  />
                  <span className={`text-sm leading-snug ${isChecked ? 'text-[#1e3a6e] font-medium' : 'text-gray-700'}`}>
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
              onClick={onClose}
              className="px-5 py-2 bg-[#1e3a6e] text-white rounded-lg text-sm font-semibold hover:bg-[#162d57] transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
