export default function ProgressBar({ step }) {
  const steps = [
    { num: 1, label: 'Select Injuries' },
    { num: 2, label: 'Review Selections' },
    { num: 3, label: 'Submit Form' },
  ]

  return (
    <div className="flex items-center justify-center gap-0 py-4">
      {steps.map((s, i) => (
        <div key={s.num} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
                step > s.num
                  ? 'bg-green-600 border-green-600 text-white'
                  : step === s.num
                  ? 'bg-[#1e3a6e] border-[#1e3a6e] text-white'
                  : 'bg-white border-gray-300 text-gray-400'
              }`}
            >
              {step > s.num ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                s.num
              )}
            </div>
            <span
              className={`text-xs mt-1 font-medium whitespace-nowrap ${
                step === s.num ? 'text-[#1e3a6e]' : 'text-gray-400'
              }`}
            >
              {s.label}
            </span>
          </div>
          {i < steps.length - 1 && (
            <div
              className={`h-0.5 w-16 sm:w-24 mx-1 mb-4 transition-all ${
                step > s.num ? 'bg-green-600' : 'bg-gray-300'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  )
}
