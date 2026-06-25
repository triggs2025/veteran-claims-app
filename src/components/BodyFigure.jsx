import { useState } from 'react'
import { injuryData } from '../data/injuryData'

function RegionPath({ id, d, cx, cy, rx, ry, type = 'path', selectedConditions, activeRegion, onClick, title, transform }) {
  const hasSelections = selectedConditions[id] && selectedConditions[id].length > 0
  const isActive = activeRegion === id
  const isSelected = hasSelections

  let fillColor = '#d1d5db'
  if (isActive) fillColor = '#f59e0b'
  else if (isSelected) fillColor = '#1e40af'

  const commonProps = {
    className: 'body-region',
    onClick: () => onClick(id),
    style: { fill: fillColor, stroke: isActive || isSelected ? '#fff' : '#9ca3af', strokeWidth: isSelected ? 1.5 : 0.5, cursor: 'pointer' },
    onMouseEnter: (e) => { if (!isActive && !isSelected) e.currentTarget.style.fill = '#fbbf24' },
    onMouseLeave: (e) => { e.currentTarget.style.fill = fillColor },
  }

  return (
    <g>
      <title>{title}</title>
      {type === 'ellipse'
        ? <ellipse cx={cx} cy={cy} rx={rx} ry={ry} transform={transform} {...commonProps} />
        : <path d={d} transform={transform} {...commonProps} />
      }
      {isSelected && !isActive && (
        <g transform={transform}>
          <circle
            cx={type === 'ellipse' ? cx : undefined}
            cy={type === 'ellipse' ? cy : undefined}
            r={8}
            fill="#22c55e"
            stroke="#fff"
            strokeWidth={1}
            style={{ pointerEvents: 'none' }}
          />
          <text
            x={type === 'ellipse' ? cx : undefined}
            y={type === 'ellipse' ? (cy + 4) : undefined}
            textAnchor="middle"
            fill="white"
            fontSize="10"
            fontWeight="bold"
            style={{ pointerEvents: 'none' }}
          >✓</text>
        </g>
      )}
    </g>
  )
}

export default function BodyFigure({ selectedConditions, activeRegion, onRegionClick, gender, onGenderToggle }) {
  const reg = (id) => ({
    selectedConditions,
    activeRegion,
    onClick: onRegionClick,
    title: injuryData[id]?.label || id,
  })

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={onGenderToggle}
        className="mb-3 px-4 py-2 rounded-full text-sm font-semibold border-2 border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227] hover:text-white transition-all"
      >
        {gender === 'male' ? '♀ Switch to Female View' : '♂ Switch to Male View'}
      </button>

      <div className="relative" style={{ width: 260, height: 560 }}>
        <svg
          viewBox="0 0 260 560"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%' }}
        >
          {/* ── MALE FIGURE ── */}
          {gender === 'male' && (
            <g>
              {/* Neck */}
              <RegionPath id="neck" type="path" d="M118 68 L142 68 L145 90 L115 90 Z" {...reg('neck')} />

              {/* Head */}
              <RegionPath id="head" type="ellipse" cx={130} cy={42} rx={32} ry={38} {...reg('head')} />

              {/* Left ear (viewer left = figure's right) */}
              <RegionPath id="earRight" type="ellipse" cx={98} cy={42} rx={7} ry={11} {...reg('earRight')} />
              {/* Right ear */}
              <RegionPath id="earLeft" type="ellipse" cx={162} cy={42} rx={7} ry={11} {...reg('earLeft')} />

              {/* Left eye */}
              <RegionPath id="eyeLeft" type="ellipse" cx={120} cy={36} rx={8} ry={5} {...reg('eyeLeft')} />
              {/* Right eye */}
              <RegionPath id="eyeRight" type="ellipse" cx={140} cy={36} rx={8} ry={5} {...reg('eyeRight')} />

              {/* Torso / Chest */}
              <RegionPath id="chest" type="path"
                d="M100 92 L160 92 L168 150 L92 150 Z"
                {...reg('chest')} />

              {/* Abdomen */}
              <RegionPath id="abdomen" type="path"
                d="M92 150 L168 150 L165 210 L95 210 Z"
                {...reg('abdomen')} />

              {/* Left lung (inside chest, overlaid) */}
              <RegionPath id="lungRight" type="ellipse" cx={113} cy={118} rx={14} ry={22} {...reg('lungRight')} />
              {/* Right lung */}
              <RegionPath id="lungLeft" type="ellipse" cx={147} cy={118} rx={14} ry={22} {...reg('lungLeft')} />

              {/* Heart */}
              <RegionPath id="heart" type="ellipse" cx={124} cy={116} rx={9} ry={10} {...reg('heart')} />

              {/* Upper Back (shown as band across shoulders on back—represented here as a back label zone behind torso) */}
              {/* We'll surface it as a clickable label button separately */}

              {/* Lower Back */}
              <RegionPath id="lowerBack" type="path"
                d="M100 155 L160 155 L162 200 L98 200 Z"
                {...reg('lowerBack')} style={{opacity: 0}}
              />

              {/* Left shoulder */}
              <RegionPath id="shoulderRight" type="ellipse" cx={84} cy={100} rx={20} ry={16} {...reg('shoulderRight')} />
              {/* Right shoulder */}
              <RegionPath id="shoulderLeft" type="ellipse" cx={176} cy={100} rx={20} ry={16} {...reg('shoulderLeft')} />

              {/* Left upper arm */}
              <RegionPath id="upperArmRight" type="path"
                d="M66 110 L86 110 L90 155 L62 155 Z"
                {...reg('upperArmRight')} />
              {/* Right upper arm */}
              <RegionPath id="upperArmLeft" type="path"
                d="M174 110 L194 110 L198 155 L170 155 Z"
                {...reg('upperArmLeft')} />

              {/* Left forearm */}
              <RegionPath id="forearmRight" type="path"
                d="M60 158 L88 158 L84 205 L56 205 Z"
                {...reg('forearmRight')} />
              {/* Right forearm */}
              <RegionPath id="forearmLeft" type="path"
                d="M172 158 L200 158 L204 205 L176 205 Z"
                {...reg('forearmLeft')} />

              {/* Left hip */}
              <RegionPath id="hipRight" type="ellipse" cx={106} cy={218} rx={22} ry={16} {...reg('hipRight')} />
              {/* Right hip */}
              <RegionPath id="hipLeft" type="ellipse" cx={154} cy={218} rx={22} ry={16} {...reg('hipLeft')} />

              {/* Left thigh/upper leg */}
              <RegionPath id="kneeRight" type="path"
                d="M88 228 L118 228 L116 300 L86 300 Z"
                {...reg('kneeRight')} />
              {/* Right thigh/upper leg */}
              <RegionPath id="kneeLeft" type="path"
                d="M142 228 L172 228 L174 300 L144 300 Z"
                {...reg('kneeLeft')} />

              {/* Left shin */}
              <RegionPath id="shinRight" type="path"
                d="M86 305 L114 305 L112 385 L84 385 Z"
                {...reg('shinRight')} />
              {/* Right shin */}
              <RegionPath id="shinLeft" type="path"
                d="M146 305 L174 305 L176 385 L148 385 Z"
                {...reg('shinLeft')} />

              {/* Left ankle/foot */}
              <RegionPath id="ankleRight" type="path"
                d="M82 388 L114 388 L116 415 L78 415 L74 425 L116 425 L116 435 L74 435 Z"
                {...reg('ankleRight')} />
              {/* Right ankle/foot */}
              <RegionPath id="ankleLeft" type="path"
                d="M146 388 L178 388 L186 435 L146 435 L146 425 L184 425 L184 415 L146 415 Z"
                {...reg('ankleLeft')} />

              {/* Mental health brain icon on upper head */}
              <g onClick={() => onRegionClick('mentalHealth')} style={{ cursor: 'pointer' }}>
                <title>Mental Health</title>
                <ellipse
                  cx={130} cy={20} rx={14} ry={10}
                  fill={
                    activeRegion === 'mentalHealth'
                      ? '#f59e0b'
                      : (selectedConditions['mentalHealth']?.length > 0 ? '#1e40af' : '#7c3aed')
                  }
                  stroke="#fff" strokeWidth={1.2}
                  onMouseEnter={(e) => { e.currentTarget.style.fill = '#fbbf24' }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fill = activeRegion === 'mentalHealth'
                      ? '#f59e0b'
                      : (selectedConditions['mentalHealth']?.length > 0 ? '#1e40af' : '#7c3aed')
                  }}
                />
                <text x={130} y={24} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" style={{ pointerEvents: 'none' }}>MH</text>
              </g>
            </g>
          )}

          {/* ── FEMALE FIGURE ── */}
          {gender === 'female' && (
            <g>
              {/* Neck */}
              <RegionPath id="neck" type="path" d="M120 66 L140 66 L142 88 L118 88 Z" {...reg('neck')} />

              {/* Head — slightly smaller/rounder */}
              <RegionPath id="head" type="ellipse" cx={130} cy={40} rx={29} ry={36} {...reg('head')} />

              {/* Ears */}
              <RegionPath id="earRight" type="ellipse" cx={101} cy={40} rx={6} ry={10} {...reg('earRight')} />
              <RegionPath id="earLeft" type="ellipse" cx={159} cy={40} rx={6} ry={10} {...reg('earLeft')} />

              {/* Eyes */}
              <RegionPath id="eyeLeft" type="ellipse" cx={121} cy={35} rx={7} ry={4} {...reg('eyeLeft')} />
              <RegionPath id="eyeRight" type="ellipse" cx={139} cy={35} rx={7} ry={4} {...reg('eyeRight')} />

              {/* Chest/Torso — hourglass shape */}
              <RegionPath id="chest" type="path"
                d="M104 90 L156 90 L162 140 L98 140 Z"
                {...reg('chest')} />

              {/* Bust area */}
              <RegionPath id="lungRight" type="ellipse" cx={113} cy={115} rx={16} ry={18} {...reg('lungRight')} />
              <RegionPath id="lungLeft" type="ellipse" cx={147} cy={115} rx={16} ry={18} {...reg('lungLeft')} />

              {/* Heart */}
              <RegionPath id="heart" type="ellipse" cx={124} cy={112} rx={8} ry={9} {...reg('heart')} />

              {/* Waist + abdomen — hourglass */}
              <RegionPath id="abdomen" type="path"
                d="M100 142 L160 142 L168 205 L92 205 Z"
                {...reg('abdomen')} />

              {/* Shoulders — narrower */}
              <RegionPath id="shoulderRight" type="ellipse" cx={87} cy={98} rx={18} ry={14} {...reg('shoulderRight')} />
              <RegionPath id="shoulderLeft" type="ellipse" cx={173} cy={98} rx={18} ry={14} {...reg('shoulderLeft')} />

              {/* Upper arms */}
              <RegionPath id="upperArmRight" type="path"
                d="M70 108 L88 108 L90 155 L66 155 Z"
                {...reg('upperArmRight')} />
              <RegionPath id="upperArmLeft" type="path"
                d="M172 108 L190 108 L194 155 L170 155 Z"
                {...reg('upperArmLeft')} />

              {/* Forearms */}
              <RegionPath id="forearmRight" type="path"
                d="M64 158 L88 158 L84 202 L60 202 Z"
                {...reg('forearmRight')} />
              <RegionPath id="forearmLeft" type="path"
                d="M172 158 L196 158 L200 202 L176 202 Z"
                {...reg('forearmLeft')} />

              {/* Hips — wider for female */}
              <RegionPath id="hipRight" type="ellipse" cx={104} cy={216} rx={26} ry={18} {...reg('hipRight')} />
              <RegionPath id="hipLeft" type="ellipse" cx={156} cy={216} rx={26} ry={18} {...reg('hipLeft')} />

              {/* Thighs/Knees */}
              <RegionPath id="kneeRight" type="path"
                d="M84 228 L116 228 L114 300 L82 300 Z"
                {...reg('kneeRight')} />
              <RegionPath id="kneeLeft" type="path"
                d="M144 228 L176 228 L178 300 L146 300 Z"
                {...reg('kneeLeft')} />

              {/* Shins */}
              <RegionPath id="shinRight" type="path"
                d="M82 304 L112 304 L110 382 L80 382 Z"
                {...reg('shinRight')} />
              <RegionPath id="shinLeft" type="path"
                d="M148 304 L178 304 L180 382 L150 382 Z"
                {...reg('shinLeft')} />

              {/* Ankles/Feet */}
              <RegionPath id="ankleRight" type="path"
                d="M78 385 L112 385 L114 412 L76 412 L72 422 L114 422 L114 432 L72 432 Z"
                {...reg('ankleRight')} />
              <RegionPath id="ankleLeft" type="path"
                d="M148 385 L182 385 L188 432 L148 432 L148 422 L186 422 L186 412 L148 412 Z"
                {...reg('ankleLeft')} />

              {/* Mental health */}
              <g onClick={() => onRegionClick('mentalHealth')} style={{ cursor: 'pointer' }}>
                <title>Mental Health</title>
                <ellipse
                  cx={130} cy={18} rx={13} ry={9}
                  fill={
                    activeRegion === 'mentalHealth'
                      ? '#f59e0b'
                      : (selectedConditions['mentalHealth']?.length > 0 ? '#1e40af' : '#7c3aed')
                  }
                  stroke="#fff" strokeWidth={1.2}
                  onMouseEnter={(e) => { e.currentTarget.style.fill = '#fbbf24' }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.fill = activeRegion === 'mentalHealth'
                      ? '#f59e0b'
                      : (selectedConditions['mentalHealth']?.length > 0 ? '#1e40af' : '#7c3aed')
                  }}
                />
                <text x={130} y={22} textAnchor="middle" fill="white" fontSize="9" fontWeight="bold" style={{ pointerEvents: 'none' }}>MH</text>
              </g>
            </g>
          )}

          {/* Shared label: Lower Back overlay (invisible, clickable) */}
          <g onClick={() => onRegionClick('lowerBack')} style={{ cursor: 'pointer' }}>
            <title>Lower Back & Lumbar Spine</title>
          </g>
        </svg>

        {/* Skin & Back buttons beside figure */}
      </div>

      {/* Extra region buttons below figure */}
      <div className="flex flex-wrap gap-2 mt-3 justify-center max-w-sm">
        {[
          'upperBack', 'lowerBack', 'skin', 'mentalHealth',
          'neurological', 'endocrine', 'hematologic', 'infectiousDisease',
          gender === 'male' ? 'genitourinaryMale' : 'genitourinaryFemale',
          ...(gender === 'female' ? ['gynecological'] : []),
        ].map((id) => {
          const region = injuryData[id]
          if (!region) return null
          const hasSelections = selectedConditions[id]?.length > 0
          const isActive = activeRegion === id
          return (
            <button
              key={id}
              onClick={() => onRegionClick(id)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border-2 transition-all ${
                isActive
                  ? 'bg-amber-400 border-amber-400 text-white'
                  : hasSelections
                  ? 'bg-[#1e40af] border-[#1e40af] text-white'
                  : 'bg-white border-gray-300 text-gray-600 hover:border-amber-400 hover:text-amber-600'
              }`}
            >
              {hasSelections && !isActive && '✓ '}
              {region.label}
            </button>
          )
        })}
      </div>

      {/* Legend */}
      <div className="flex gap-4 mt-4 text-xs text-gray-500">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-gray-300 border border-gray-400" />
          <span>Not selected</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-amber-400 border border-amber-500" />
          <span>Active</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 rounded-full bg-[#1e40af] border border-blue-700" />
          <span>Selected</span>
        </div>
      </div>
    </div>
  )
}
