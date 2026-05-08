export default function MapPage() {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 dark:bg-black">
      <main className="flex flex-1 w-full flex-col p-8 gap-6">

        {/* Header */}
        <div>
          <h1
            className="text-2xl font-bold tracking-tight text-black dark:text-zinc-50"
            style={{ fontFamily: 'var(--font-syne)' }}
          >
            Campus Map
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            TMU Campus Store · 17 Gould St, Toronto, ON
          </p>
        </div>

        {/* Map */}
        <div
          className="flex-1 rounded-2xl overflow-hidden shadow-md border border-zinc-200 dark:border-zinc-800"
          style={{ minHeight: '600px' }}
        >
          <iframe
            title="TMU Campus Map"
            src="https://maps.google.com/maps?q=17+Gould+St,+Toronto,+ON+M5B+2L5&output=embed"
            width="100%"
            height="100%"
            style={{ border: 'none', minHeight: '600px' }}
            allowFullScreen
            loading="lazy"
          />
        </div>

      </main>
    </div>
  )
}