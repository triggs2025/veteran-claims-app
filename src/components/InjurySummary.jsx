import { injuryData } from '../data/injuryData'

export default function InjurySummary({ selectedConditions, onRegionClick }) {
  const hasAny = Object.values(selectedConditions).some((c) => c.length > 0)

  if (!hasAny) {
    return (
      <div className="text-center py-8 text-gray-400">
        <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="text-sm">Click a body region to start selecting injuries</p>
      </div>
    )
  }

  return (
    <div className="space-y-3">
      <h3 className="text-sm font-bold text-gray-700 uppercase tracking-wide">Selected Injuries</h3>
      {Object.entries(selectedConditions).map(([regionId, conditions]) => {
        if (!conditions.length) return null
        const region = injuryData[regionId]
        return (
          <div key={regionId} className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-xs font-bold text-[#c1121f] uppercase tracking-wide mb-1 flex-1">
                {region?.label}
              </h4>
              {onRegionClick && (
                <button
                  onClick={() => onRegionClick(regionId)}
                  className="text-xs text-blue-500 hover:text-blue-700 shrink-0"
                >
                  Edit
                </button>
              )}
            </div>
            <ul className="space-y-0.5">
              {conditions.map((c) => (
                <li key={c} className="text-xs text-gray-700 flex items-start gap-1">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
