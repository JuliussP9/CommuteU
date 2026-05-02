const CARD = { backgroundColor: '#131C2E', border: '0.5px solid rgba(255,255,255,0.07)' }
const syne = { fontFamily: 'var(--font-syne)' }

const routeSteps = [
  { icon: '🚶', label: 'Walk to Ajax GO', time: '8 min', bg: 'rgba(148,163,184,0.1)' },
  { icon: '🚆', label: 'GO Lakeshore East to Union', time: '52 min', bg: 'rgba(74,222,128,0.12)' },
  { icon: '🚇', label: 'Line 1 to Dundas St', time: '12 min', bg: 'rgba(147,197,253,0.12)' },
  { icon: '🚶', label: 'Walk to campus', time: '6 min', bg: 'rgba(148,163,184,0.1)' },
]

const gapItems = [
  {
    icon: '📚',
    name: 'SLC Study Room 402',
    detail: 'Available now · Quiet zone',
    distance: '3 min walk',
    bg: 'rgba(147,197,253,0.1)',
  },
  {
    icon: '💪',
    name: 'RAC Fitness Centre',
    detail: 'Open until 9 PM · Not busy',
    distance: '6 min walk',
    bg: 'rgba(74,222,128,0.1)',
  },
  {
    icon: '📣',
    name: 'Blueprint Info Night',
    detail: '3:00 PM · ENG 210',
    distance: 'Now',
    bg: 'rgba(251,191,36,0.1)',
  },
]

export default function DashboardPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-5">
      {/* Greeting */}
      <div>
        <h1 className="text-3xl font-bold" style={{ ...syne, color: '#F1F5F9' }}>
          Good morning, Zayn
        </h1>
        <p className="mt-1 text-sm" style={{ color: '#64748B' }}>
          Wednesday — 3 classes today. Leave by 8:14 AM.
        </p>
      </div>

      {/* Alert banner */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-xl"
        style={{
          backgroundColor: 'rgba(34,197,94,0.08)',
          border: '1px solid rgba(34,197,94,0.2)',
        }}
      >
        <span
          className="w-2 h-2 rounded-full flex-shrink-0"
          style={{ backgroundColor: '#4ADE80' }}
        />
        <p className="text-sm" style={{ color: '#86EFAC' }}>
          Line 1 delays near Bloor — backup route ready via GO + 504 streetcar
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="rounded-xl p-4" style={CARD}>
          <p className="text-xs font-medium" style={{ color: '#64748B' }}>
            Leave by
          </p>
          <p className="text-2xl font-bold mt-1" style={{ color: '#4ADE80', ...syne }}>
            8:14
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#475569' }}>
            AM today
          </p>
        </div>
        <div className="rounded-xl p-4" style={CARD}>
          <p className="text-xs font-medium" style={{ color: '#64748B' }}>
            Commute time
          </p>
          <p className="text-2xl font-bold mt-1" style={{ color: '#F1F5F9', ...syne }}>
            1h 22m
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#475569' }}>
            Via GO + TTC
          </p>
        </div>
        <div className="rounded-xl p-4" style={CARD}>
          <p className="text-xs font-medium" style={{ color: '#64748B' }}>
            Gap today
          </p>
          <p className="text-2xl font-bold mt-1" style={{ color: '#FBBF24', ...syne }}>
            2h 30m
          </p>
          <p className="text-xs mt-0.5" style={{ color: '#475569' }}>
            2:30 – 5:00 PM
          </p>
        </div>
      </div>

      {/* Route card */}
      <div className="rounded-xl p-4" style={CARD}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-bold" style={{ ...syne, color: '#F1F5F9' }}>
            Today's route
          </h2>
          <span
            className="text-xs px-2.5 py-1 rounded-full font-medium"
            style={{ backgroundColor: 'rgba(74,222,128,0.12)', color: '#4ADE80' }}
          >
            On schedule
          </span>
        </div>
        <div className="flex flex-col gap-3">
          {routeSteps.map((step) => (
            <div key={step.label} className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base flex-shrink-0"
                style={{ background: step.bg }}
              >
                {step.icon}
              </div>
              <span className="flex-1 text-sm" style={{ color: '#94A3B8' }}>
                {step.label}
              </span>
              <span className="text-sm" style={{ color: '#475569' }}>
                {step.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Gap optimizer */}
      <div className="rounded-xl p-4" style={CARD}>
        <h2 className="font-bold mb-4" style={{ ...syne, color: '#F1F5F9' }}>
          Gap optimizer — 2:30 PM to 5:00 PM
        </h2>
        <div className="flex flex-col gap-3">
          {gapItems.map((item) => (
            <div key={item.name} className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-xl flex-shrink-0"
                style={{ background: item.bg }}
              >
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium" style={{ color: '#E2E8F0' }}>
                  {item.name}
                </p>
                <p className="text-xs" style={{ color: '#475569' }}>
                  {item.detail}
                </p>
              </div>
              <span className="text-xs flex-shrink-0" style={{ color: '#475569' }}>
                {item.distance}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
