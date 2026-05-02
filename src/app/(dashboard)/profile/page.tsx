'use client'

import { useState } from 'react'

const commuteSettings = [
  { label: 'Home address', value: 'Ajax, ON' },
  { label: 'Default transit', value: 'GO + TTC' },
  { label: 'Buffer time', value: '15 min before class' },
]

type ToggleKey = 'leaveNow' | 'delays' | 'gaps' | 'burnout'

const notifications: { key: ToggleKey; label: string }[] = [
  { key: 'leaveNow', label: 'Leave now alerts' },
  { key: 'delays', label: 'Delay warnings' },
  { key: 'gaps', label: 'Gap suggestions' },
  { key: 'burnout', label: 'Burnout alerts' },
]

const CARD = { backgroundColor: '#131C2E', border: '0.5px solid rgba(255,255,255,0.07)' }
const DIVIDER = { borderTop: '0.5px solid rgba(255,255,255,0.07)' }
const SECTION_HEADER = { borderBottom: '0.5px solid rgba(255,255,255,0.07)' }
const syne = { fontFamily: 'var(--font-syne)' }

function Toggle({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      role="switch"
      aria-checked={on}
      className="relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-1"
      style={{ backgroundColor: on ? '#003D7C' : '#1E293B' }}
    >
      <span
        className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm transition-transform duration-200"
        style={{ transform: on ? 'translateX(20px)' : 'translateX(0)' }}
      />
    </button>
  )
}

export default function ProfilePage() {
  const [toggles, setToggles] = useState<Record<ToggleKey, boolean>>({
    leaveNow: true,
    delays: true,
    gaps: true,
    burnout: false,
  })

  function toggle(key: ToggleKey) {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col gap-6">
      {/* Profile header */}
      <div className="rounded-xl p-6 flex items-center gap-5" style={CARD}>
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold text-white flex-shrink-0 select-none"
          style={{ backgroundColor: '#0D9488' }}
        >
          Z
        </div>
        <div>
          <h1 className="text-2xl font-bold" style={{ ...syne, color: '#F1F5F9' }}>
            Zayn
          </h1>
          <p className="text-sm mt-0.5" style={{ color: '#64748B' }}>
            zayn@torontomu.ca
          </p>
        </div>
      </div>

      {/* Commute settings */}
      <div className="rounded-xl overflow-hidden" style={CARD}>
        <div className="px-4 py-3" style={SECTION_HEADER}>
          <h2 className="text-sm font-bold" style={{ ...syne, color: '#F1F5F9' }}>
            Commute settings
          </h2>
        </div>
        {commuteSettings.map((setting, i) => (
          <div
            key={setting.label}
            className="flex items-center justify-between px-4 py-3"
            style={i > 0 ? DIVIDER : {}}
          >
            <span className="text-sm" style={{ color: '#64748B' }}>
              {setting.label}
            </span>
            <span className="text-sm font-medium" style={{ color: '#E2E8F0' }}>
              {setting.value}
            </span>
          </div>
        ))}
      </div>

      {/* Notifications */}
      <div className="rounded-xl overflow-hidden" style={CARD}>
        <div className="px-4 py-3" style={SECTION_HEADER}>
          <h2 className="text-sm font-bold" style={{ ...syne, color: '#F1F5F9' }}>
            Notifications
          </h2>
        </div>
        {notifications.map(({ key, label }, i) => (
          <div
            key={key}
            className="flex items-center justify-between px-4 py-3"
            style={i > 0 ? DIVIDER : {}}
          >
            <span className="text-sm" style={{ color: '#94A3B8' }}>
              {label}
            </span>
            <Toggle on={toggles[key]} onToggle={() => toggle(key)} />
          </div>
        ))}
      </div>
    </div>
  )
}
