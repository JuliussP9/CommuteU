'use client'

import { useState } from 'react'

type Tab = 'this-week' | 'next-week' | 'full-semester'

interface ClassEntry {
  course: string
  time: string
  room: string
  note: string
  badge: { label: string; bg: string; color: string }
}

interface DayGroup {
  day: string
  classes: ClassEntry[]
}

const schedule: DayGroup[] = [
  {
    day: 'Monday',
    classes: [
      {
        course: 'CPS 406 Software Engineering',
        time: '9:00 – 10:50',
        room: 'ENG 103',
        note: 'Leave by 7:28 AM',
        badge: { label: 'On campus', bg: 'rgba(147,197,253,0.12)', color: '#93C5FD' },
      },
      {
        course: 'CPS 510 Databases',
        time: '1:00 – 2:50',
        room: 'KHS 119',
        note: '2h gap before',
        badge: { label: 'Gap', bg: 'rgba(251,191,36,0.12)', color: '#FBBF24' },
      },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      {
        course: 'CPS 406 Software Engineering',
        time: '10:00 – 11:50',
        room: 'ENG 103',
        note: 'Leave by 8:14 AM',
        badge: { label: 'Today', bg: 'rgba(74,222,128,0.12)', color: '#4ADE80' },
      },
      {
        course: 'CPS 530 Web Systems',
        time: '6:00 – 8:50',
        room: 'POD 250',
        note: 'Late finish',
        badge: { label: 'Late', bg: 'rgba(248,113,113,0.12)', color: '#F87171' },
      },
    ],
  },
  {
    day: 'Friday',
    classes: [
      {
        course: 'CPS 510 Databases',
        time: '11:00 – 12:50',
        room: 'KHS 119',
        note: 'Leave by 9:22 AM',
        badge: { label: 'On campus', bg: 'rgba(147,197,253,0.12)', color: '#93C5FD' },
      },
    ],
  },
]

const tabs: { id: Tab; label: string }[] = [
  { id: 'this-week', label: 'This week' },
  { id: 'next-week', label: 'Next week' },
  { id: 'full-semester', label: 'Full semester' },
]

const syne = { fontFamily: 'var(--font-syne)' }
const CARD = { backgroundColor: '#131C2E', border: '0.5px solid rgba(255,255,255,0.07)' }
const DIVIDER = { borderTop: '0.5px solid rgba(255,255,255,0.06)' }

export default function SchedulePage() {
  const [activeTab, setActiveTab] = useState<Tab>('this-week')

  return (
    <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold" style={{ ...syne, color: '#F1F5F9' }}>
        Schedule
      </h1>

      {/* Tabs */}
      <div
        className="flex gap-1 p-1 rounded-xl w-fit"
        style={{ backgroundColor: '#0D1526', border: '0.5px solid rgba(255,255,255,0.07)' }}
      >
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
              style={
                isActive
                  ? {
                      backgroundColor: '#1A2540',
                      color: '#F1F5F9',
                      border: '0.5px solid rgba(255,255,255,0.1)',
                    }
                  : { color: '#64748B' }
              }
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      {/* This week content */}
      {activeTab === 'this-week' && (
        <div className="flex flex-col gap-6">
          {schedule.map((group) => (
            <div key={group.day} className="flex flex-col gap-2">
              <h2
                className="text-xs font-semibold uppercase tracking-widest"
                style={{ color: '#475569' }}
              >
                {group.day}
              </h2>
              <div className="flex flex-col gap-2">
                {group.classes.map((cls, i) => (
                  <div
                    key={cls.course + i}
                    className="rounded-xl flex items-stretch overflow-hidden"
                    style={CARD}
                  >
                    {/* Time block */}
                    <div className="flex flex-col justify-center px-4 py-3 w-28 flex-shrink-0">
                      <p className="text-xs font-semibold" style={{ color: '#94A3B8' }}>
                        {cls.time}
                      </p>
                    </div>

                    {/* Vertical divider */}
                    <div
                      className="w-px my-3"
                      style={{ backgroundColor: 'rgba(255,255,255,0.07)' }}
                    />

                    {/* Course info */}
                    <div className="flex-1 flex items-center gap-3 px-4 py-3">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold truncate" style={{ color: '#E2E8F0' }}>
                          {cls.course}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: '#475569' }}>
                          {cls.room} · {cls.note}
                        </p>
                      </div>
                      <span
                        className="text-xs px-2.5 py-1 rounded-full font-medium flex-shrink-0"
                        style={{ backgroundColor: cls.badge.bg, color: cls.badge.color }}
                      >
                        {cls.badge.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'next-week' && (
        <div
          className="flex items-center justify-center py-16 text-sm"
          style={{ color: '#475569' }}
        >
          Next week's schedule will appear here.
        </div>
      )}

      {activeTab === 'full-semester' && (
        <div
          className="flex items-center justify-center py-16 text-sm"
          style={{ color: '#475569' }}
        >
          Full semester view coming soon.
        </div>
      )}

      {/* Suppress unused variable warning */}
      <div style={DIVIDER} className="hidden" />
    </div>
  )
}
