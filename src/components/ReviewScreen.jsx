import { injuryData } from '../data/injuryData'

export default function ReviewScreen({ selectedConditions, onBack, onNext, onRemoveCondition, onStartOver }) {
  const totalCount = Object.values(selectedConditions).reduce((sum, c) => sum + c.length, 0)
  const hasAny = totalCount > 0

  return (
    <div className="max-w-2xl mx-auto w-full">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="bg-[#c1121f] px-6 py-5">
          <h2 className="text-white text-xl font-bold">Review Your Selected Injuries</h2>
          <p className="text-red-200 text-sm mt-1">
            {totalCount} condition{totalCount !== 1 ? 's' : ''} selected across{' '}
            {Object.values(selectedConditions).filter((c) => c.length > 0).length} body region{Object.values(selectedConditions).filter((c) => c.length > 0).length !== 1 ? 's' : ''}
          </p>
        </div>

        <div className="p-6">
          {!hasAny ? (
            <div className="text-center py-12 text-gray-400">
              <p className="text-lg">No injuries selected yet.</p>
              <p className="text-sm mt-2">Go back and click body regions to add conditions.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {Object.entries(selectedConditions).map(([regionId, conditions]) => {
                if (!conditions.length) return null
                const region = injuryData[regionId]
                return (
                  <div key={regionId} className="border border-gray-200 rounded-xl overflow-hidden">
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
                      <h3 className="font-bold text-[#c1121f] text-sm uppercase tracking-wide">
                        {region?.label}
                      </h3>
                    </div>
                    <div className="divide-y divide-gray-100">
                      {conditions.map((condition) => (
                        <div key={condition} className="flex items-center justify-between px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <span className="text-green-500 text-sm">✓</span>
                            <span className="text-sm text-gray-800">{condition}</span>
                          </div>
                          <button
                            onClick={() => onRemoveCondition(regionId, condition)}
                            className="text-red-400 hover:text-red-600 transition-colors p-1"
                            aria-label="Remove condition"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className="px-6 pb-6 flex flex-col gap-3">
          <div className="flex gap-3">
            <button
              onClick={onBack}
              className="flex-1 py-3 border-2 border-[#c1121f] text-[#c1121f] rounded-xl font-semibold hover:bg-red-50 transition-colors"
            >
              ← Back to Body Map
            </button>
            <button
              onClick={onNext}
              disabled={!hasAny}
              className={`flex-1 py-3 rounded-xl font-semibold transition-colors ${
                hasAny
                  ? 'bg-[#c9a227] text-white hover:bg-[#b8911f]'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              Proceed to Submit →
            </button>
          </div>
          <button
            onClick={onStartOver}
            className="w-full py-2.5 text-sm font-black text-gray-400 hover:text-red-600 transition-colors border border-gray-200 rounded-xl hover:border-red-300"
          >
            ↺ Start Over & Clear All Selections
          </button>
        </div>
      </div>
    </div>
  )
}
