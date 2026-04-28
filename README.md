# CommuteU 🚇

A smart commute assistant built specifically for Toronto Metropolitan University students. CommuteU combines live transit data, academic schedules, and productivity tools to help students commute smarter, reduce stress, and make the most of their time on and off campus.

---

## The Problem

TMU is one of Canada's most commuter-heavy universities. Students travel daily from Mississauga, Brampton, Scarborough, Markham, Ajax, and beyond — spending 1–3 hours in transit each day. Common pain points include:

- TTC and GO delays causing missed classes
- Wasted time during gaps between classes
- Burnout from long commutes paired with heavy course loads
- Difficulty staying connected to campus life

---

## The Solution

CommuteU is a personalized commuter assistant that integrates your class schedule with live transit data to help you leave on time, use your gaps wisely, and avoid burnout.

---

## Features

### 🗺️ Smart Route Planner
Enter your home address and class schedule — CommuteU calculates the optimal departure time and route using live TTC and GO Transit data. Get "leave now" alerts when delays are detected.

### 📍 Gap Optimizer
Have 2 hours between classes? CommuteU suggests nearby study rooms, cafés, the gym, or campus events happening right now based on how much time you have.

### 🔔 Burnout Prevention Alerts
CommuteU analyzes your weekly schedule and flags overloaded weeks — like when you have 4 commute days back-to-back with late finishes — and suggests adjustments before you burn out.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 16 + TypeScript |
| Styling | Tailwind CSS |
| Auth + Database | Firebase Auth + Firestore |
| Hosting | Vercel |
| Transit Data | TTC GTFS Realtime + Metrolinx GO API |
| Mapping | Google Maps Directions API |
| Notifications | Firebase Cloud Messaging |

---

## Project Structure

```
commuteu/
├── src/
│   ├── app/              # Next.js pages and routes
│   ├── components/       # Reusable UI components
│   ├── lib/              # Firebase and API helpers
│   ├── hooks/            # Custom React hooks
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
├── .env.local            # API keys (not committed)
└── README.md
```

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- A Firebase project
- Google Maps API key

### Installation

```bash
# Clone the repo
git clone https://github.com/YOUR-USERNAME/commuteu.git
cd commuteu

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in your API keys in .env.local

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Environment Variables

Create a `.env.local` file in the root with the following:

```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
TTC_GTFS_REALTIME_URL=
GO_TRANSIT_API_KEY=
```

---

## Team

| Name | Role |
|---|---|
| [Julius](https://github.com/JuliussP9) | Backend |
| [Hussain](https://github.com/Hussainabbas-web/) | Backend |
| [Aiven]() | Frontend |
| [Jun]() | Frontend |

---

## Branch Strategy

```
main     ← stable, deployed version
dev      ← active development
feature/ ← individual feature branches
```

All work goes into feature branches → PR into `dev` → `dev` merges into `main` for releases. Never push directly to `main`.

---

## Roadmap

- [x] Project setup + repo initialization
- [ ] Firebase Auth + user profiles
- [ ] Class schedule input
- [ ] TTC + GO Transit API integration
- [ ] Smart Route Planner
- [ ] Gap Optimizer
- [ ] Burnout Alerts
- [ ] Push notifications
- [ ] Public launch

---

## License

MIT