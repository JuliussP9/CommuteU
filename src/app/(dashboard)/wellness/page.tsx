const weekGrid = [
  { day: 'Mon', time: '1h 22m', status: 'Normal', variant: 'green' },
  { day: 'Tue', time: '—', status: 'No class', variant: 'gray' },
  { day: 'Wed', time: '2h 44m', status: 'Late finish', variant: 'red' },
  { day: 'Thu', time: '1h 22m', status: 'Normal', variant: 'green' },
  { day: 'Fri', time: '2h 44m', status: 'Late finish', variant: 'red' },
]

const variantStyles: Record<string, { dot: string; time: string; pill: string; pillText: string }> =
  {
    green: {
      dot: '#4ADE80',
      time: '#4ADE80',
      pill: 'rgba(74,222,128,0.12)',
      pillText: '#4ADE80',
    },
    red: {
      dot: '#F87171',
      time: '#F87171',
      pill: 'rgba(248,113,113,0.12)',
      pillText: '#F87171',
    },
    gray: {
      dot: '#334155',
      time: '#475569',
      pill: 'rgba(71,85,105,0.2)',
      pillText: '#64748B',
    },
  }

const CARD = { backgroundColor: '#131C2E', border: '0.5px solid rgba(255,255,255,0.07)' }
const syne = { fontFamily: 'var(--font-syne)' }

export default function WellnessPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold" style={{ ...syne, color: '#F1F5F9' }}>
        Wellness
      </h1>

      {/* Warning card */}
      <div
        className="rounded-xl p-4"
        style={{
          backgroundColor: 'rgba(255,199,0,0.06)',
          border: '1.5px solid rgba(255,199,0,0.25)',
        }}
      >
        <div className="flex items-start gap-3">
          <span className="text-xl flex-shrink-0">⚠️</span>
          <div>
            <p className="font-semibold text-sm" style={{ ...syne, color: '#F1F5F9' }}>
              Heads up — heavy week ahead
            </p>
            <p className="text-sm mt-1 leading-relaxed" style={{ color: '#94A3B8' }}>
              You have 4 commute days this week, including 2 late finishes after 8 PM. Consider
              shifting Friday's review session to Thursday on campus.
            </p>
          </div>
        </div>
      </div>

      {/* Week grid */}
      <div className="rounded-xl p-4" style={CARD}>
        <h2 className="font-bold text-sm mb-4" style={{ ...syne, color: '#F1F5F9' }}>
          This week at a glance
        </h2>
        <div className="grid grid-cols-5 gap-3">
          {weekGrid.map((entry) => {
            const s = variantStyles[entry.variant]
            return (
              <div
                key={entry.day}
                className="flex flex-col items-center gap-2 rounded-xl py-4 px-2"
                style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-wide"
                  style={{ color: '#475569' }}
                >
                  {entry.day}
                </p>
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: s.dot }}
                />
                <p className="text-sm font-bold" style={{ color: s.time, ...syne }}>
                  {entry.time}
                </p>
                <span
                  className="text-xs px-2 py-0.5 rounded-full font-medium text-center leading-tight"
                  style={{ backgroundColor: s.pill, color: s.pillText }}
                >
                  {entry.status}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4">
        <div className="rounded-xl p-4" style={CARD}>
          <p className="text-xs font-medium" style={{ color: '#64748B' }}>
            Weekly commute time
          </p>
          <p className="text-2xl font-bold mt-1" style={{ color: '#F87171', ...syne }}>
            8h 12m
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#F87171' }}>
            Above average
          </p>
        </div>
        <div className="rounded-xl p-4" style={CARD}>
          <p className="text-xs font-medium" style={{ color: '#64748B' }}>
            Days on campus
          </p>
          <p className="text-2xl font-bold mt-1" style={{ color: '#F1F5F9', ...syne }}>
            4 / 5
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#475569' }}>
            This week
          </p>
        </div>
      </div>
    </div>
  )
}
