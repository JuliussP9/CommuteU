'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/schedule', label: 'Schedule' },
  { href: '/wellness', label: 'Wellness' },
  { href: '/map', label: 'Map' },  
  { href: '/profile', label: 'Profile' },
]

export default function NavBar() {
  const pathname = usePathname()

  return (
    <nav
      className="flex items-center px-8 h-14 flex-shrink-0"
      style={{
        backgroundColor: '#0D1526',
        borderBottom: '0.5px solid rgba(255,255,255,0.07)',
      }}
    >
      {/* Logo */}
      <div className="flex-shrink-0 w-40">
        <span
          className="text-lg font-bold tracking-tight"
          style={{ fontFamily: 'var(--font-syne)', color: '#F1F5F9' }}
        >
          Commute<span style={{ color: '#FFC700' }}>U</span>
        </span>
      </div>

      {/* Center nav links */}
      <div className="flex-1 flex justify-center items-center gap-8">
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors"
              style={{
                color: isActive ? '#F1F5F9' : '#64748B',
                borderBottom: isActive ? '2px solid #FFC700' : '2px solid transparent',
                paddingBottom: '2px',
              }}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Avatar */}
      <div className="flex-shrink-0 w-40 flex justify-end">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold text-white select-none"
          style={{ backgroundColor: '#003D7C' }}
        >
          Z
        </div>
      </div>
    </nav>
  )



}
