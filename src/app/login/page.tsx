import { DM_Sans, Syne } from 'next/font/google'

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
})

const stats = [
  {
    icon: '🚇',
    title: 'Live TTC + GO alerts',
    subtitle: 'Know before you leave',
  },
  {
    icon: '📍',
    title: 'Gap optimizer',
    subtitle: 'Make every hour count',
  },
  {
    icon: '🔔',
    title: 'Burnout alerts',
    subtitle: 'Before the week gets heavy',
  },
]

export default function LoginPage() {
  return (
    <div
      className={`min-h-screen flex ${dmSans.variable} ${syne.variable}`}
      style={{ fontFamily: 'var(--font-dm-sans)' }}
    >
      {/* LEFT PANEL */}
      <div
        className="relative flex flex-col overflow-hidden"
        style={{ backgroundColor: '#003D7C', flex: '1 1 50%' }}
      >
        {/* Decorative circles */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 480, height: 480, background: 'rgba(255,199,0,0.08)', top: -140, right: -120 }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 320, height: 320, background: 'rgba(255,255,255,0.05)', bottom: 60, left: -100 }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 220, height: 220, background: 'rgba(255,199,0,0.06)', top: '38%', left: '58%' }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 130, height: 130, background: 'rgba(255,255,255,0.04)', top: '18%', left: '8%' }}
        />
        <div
          className="absolute rounded-full pointer-events-none"
          style={{ width: 80, height: 80, background: 'rgba(255,199,0,0.1)', bottom: '28%', right: '12%' }}
        />

        {/* Logo */}
        <div className="relative z-10 p-10">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{ fontFamily: 'var(--font-syne)', color: 'white' }}
          >
            Commute<span style={{ color: '#FFC700' }}>U</span>
          </span>
        </div>

        {/* Center content */}
        <div className="relative z-10 flex-1 flex flex-col justify-center px-12 pb-8">
          <h1
            className="text-4xl font-bold leading-tight"
            style={{ fontFamily: 'var(--font-syne)', color: 'white' }}
          >
            Your smarter{' '}
            <span style={{ color: '#FFC700' }}>TMU</span> commute starts here.
          </h1>
          <p
            className="mt-5 text-base leading-relaxed max-w-sm"
            style={{ color: 'rgba(255,255,255,0.6)' }}
          >
            Live transit alerts, gap optimization, and burnout prevention — built for TMU students.
          </p>
        </div>

        {/* Stats */}
        <div className="relative z-10 px-12 pb-14 flex flex-col gap-5">
          {stats.map((stat) => (
            <div key={stat.title} className="flex items-center gap-4">
              <div
                className="flex items-center justify-center w-11 h-11 rounded-xl text-lg flex-shrink-0"
                style={{ background: 'rgba(255,199,0,0.15)' }}
              >
                {stat.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm leading-snug">{stat.title}</p>
                <p className="text-sm leading-snug" style={{ color: 'rgba(255,255,255,0.55)' }}>
                  {stat.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL — dark */}
      <div
        className="flex flex-col items-center justify-center px-16 py-16"
        style={{ flex: '1 1 50%', backgroundColor: '#0D1526' }}
      >
        <div className="w-full max-w-md flex flex-col gap-6">
          {/* Pill badge */}
          <div className="flex justify-center">
            <span
              className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{ backgroundColor: 'rgba(147,197,253,0.1)', color: '#93C5FD' }}
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#93C5FD' }}
              />
              Toronto Metropolitan University
            </span>
          </div>

          {/* Heading + subtext */}
          <div className="text-center">
            <h2
              className="text-3xl font-bold"
              style={{ fontFamily: 'var(--font-syne)', color: '#F1F5F9' }}
            >
              Sign in to CommuteU
            </h2>
            <p className="mt-2 text-sm" style={{ color: '#64748B' }}>
              Use your{' '}
              <span className="font-semibold" style={{ color: '#93C5FD' }}>
                @torontomu.ca
              </span>{' '}
              Google account to continue.
            </p>
          </div>

          {/* Notice box */}
          <div
            className="rounded-xl p-4 text-sm leading-relaxed"
            style={{
              backgroundColor: 'rgba(255,199,0,0.06)',
              border: '1.5px solid rgba(255,199,0,0.25)',
              color: '#FCD34D',
            }}
          >
            <span className="font-semibold">TMU students only.</span> This app is exclusive to
            Toronto Metropolitan University. Sign in with your university Google account.
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-3">
            {/* Google Sign-In */}
            <button
              type="button"
              className="flex items-center justify-center gap-3 w-full px-5 py-3 rounded-xl font-medium text-sm transition-colors cursor-pointer"
              style={{
                backgroundColor: '#131C2E',
                border: '0.5px solid rgba(255,255,255,0.1)',
                color: '#E2E8F0',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#4285F4" d="M47.5 24.6c0-1.7-.2-3.3-.4-4.9H24v9.3h13.2c-.6 3-2.3 5.5-5 7.2v6h8c4.7-4.3 7.3-10.7 7.3-17.6z" />
                <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-8-6c-2.1 1.4-4.8 2.3-7.9 2.3-6.1 0-11.2-4.1-13.1-9.6H2.7v6.2C6.7 42.8 14.8 48 24 48z" />
                <path fill="#FBBC05" d="M10.9 28.9c-.5-1.4-.7-2.9-.7-4.4s.3-3 .7-4.4v-6.2H2.7C1 17 0 20.4 0 24s1 7 2.7 10.1l8.2-5.2z" />
                <path fill="#EA4335" d="M24 9.6c3.4 0 6.5 1.2 8.9 3.5l6.6-6.6C35.9 2.5 30.5 0 24 0 14.8 0 6.7 5.2 2.7 13l8.2 5.1C12.8 13.7 17.9 9.6 24 9.6z" />
              </svg>
              Continue with Google
            </button>

            {/* TMU Sign-In */}
            <button
              type="button"
              className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl text-white font-semibold text-sm transition-opacity hover:opacity-90 cursor-pointer"
              style={{ backgroundColor: '#003D7C' }}
            >
              Sign in with TMU account
              <span style={{ color: '#FFC700' }}>→</span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }} />
            <span className="text-xs whitespace-nowrap" style={{ color: '#475569' }}>
              @torontomu.ca accounts only
            </span>
            <div className="flex-1 h-px" style={{ backgroundColor: 'rgba(255,255,255,0.07)' }} />
          </div>

          {/* Terms */}
          <p className="text-xs text-center leading-relaxed" style={{ color: '#475569' }}>
            By signing in, you agree to our{' '}
            <a href="#" className="underline underline-offset-2" style={{ color: '#64748B' }}>
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline underline-offset-2" style={{ color: '#64748B' }}>
              Privacy Policy
            </a>
            . We never share your data with third parties.
          </p>

          {/* Footer */}
          <div className="flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#FFC700' }} />
            <span className="text-xs" style={{ color: '#475569' }}>
              Built by TMU students, for TMU students
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
