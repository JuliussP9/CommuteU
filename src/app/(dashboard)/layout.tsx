import NavBar from './_components/NavBar'

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#0B1120' }}>
      <NavBar />
      <main className="flex-1">{children}</main>
    </div>
  )
}
