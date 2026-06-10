@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&family=Orbitron:wght@400;500;600;700;800;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222 47% 6%;
    --foreground: 210 40% 92%;
    --card: 222 44% 9%;
    --card-foreground: 210 40% 92%;
    --popover: 222 44% 9%;
    --popover-foreground: 210 40% 92%;
    --primary: 189 94% 43%;
    --primary-foreground: 222 47% 6%;
    --secondary: 222 30% 16%;
    --secondary-foreground: 210 40% 85%;
    --muted: 222 30% 14%;
    --muted-foreground: 215 20% 55%;
    --accent: 142 70% 45%;
    --accent-foreground: 222 47% 6%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 222 30% 18%;
    --input: 222 30% 18%;
    --ring: 189 94% 43%;
    --chart-1: 189 94% 43%;
    --chart-2: 142 70% 45%;
    --chart-3: 45 93% 58%;
    --chart-4: 280 65% 60%;
    --chart-5: 0 84% 60%;
    --radius: 0.5rem;
    --font-heading: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
    --font-body: 'Inter', ui-sans-serif, system-ui, sans-serif;
    --font-display: 'Orbitron', ui-sans-serif, system-ui, sans-serif;
    --font-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular, monospace;
    --sidebar-background: 222 44% 7%;
    --sidebar-foreground: 210 40% 85%;
    --sidebar-primary: 189 94% 43%;
    --sidebar-primary-foreground: 222 47% 6%;
    --sidebar-accent: 222 30% 14%;
    --sidebar-accent-foreground: 210 40% 92%;
    --sidebar-border: 222 30% 15%;
    --sidebar-ring: 189 94% 43%;
    --warning: 45 93% 58%;
    --success: 142 70% 45%;
    --info: 189 94% 43%;
  }
  .dark {
    --background: 222 47% 6%;
    --foreground: 210 40% 92%;
    --card: 222 44% 9%;
    --card-foreground: 210 40% 92%;
    --popover: 222 44% 9%;
    --popover-foreground: 210 40% 92%;
    --primary: 189 94% 43%;
    --primary-foreground: 222 47% 6%;
    --secondary: 222 30% 16%;
    --secondary-foreground: 210 40% 85%;
    --muted: 222 30% 14%;
    --muted-foreground: 215 20% 55%;
    --accent: 142 70% 45%;
    --accent-foreground: 222 47% 6%;
    --destructive: 0 84% 60%;
    --destructive-foreground: 0 0% 98%;
    --border: 222 30% 18%;
    --input: 222 30% 18%;
    --ring: 189 94% 43%;
    --sidebar-background: 222 44% 7%;
    --sidebar-foreground: 210 40% 85%;
    --sidebar-primary: 189 94% 43%;
    --sidebar-primary-foreground: 222 47% 6%;
    --sidebar-accent: 222 30% 14%;
    --sidebar-accent-foreground: 210 40% 92%;
    --sidebar-border: 222 30% 15%;
    --sidebar-ring: 189 94% 43%;
  }
}

@layer base {
  * { @apply border-border outline-ring/50; }
  body { @apply bg-background text-foreground font-body; }
}

@layer utilities {
  .glow-cyan { box-shadow: 0 0 15px rgba(0,188,212,0.3), 0 0 30px rgba(0,188,212,0.1); }
  .glow-green { box-shadow: 0 0 15px rgba(34,197,94,0.3), 0 0 30px rgba(34,197,94,0.1); }
  .glow-red { box-shadow: 0 0 15px rgba(239,68,68,0.3), 0 0 30px rgba(239,68,68,0.1); }
  .glow-amber { box-shadow: 0 0 15px rgba(245,185,42,0.3), 0 0 30px rgba(245,185,42,0.1); }
  .scanline {
    background: linear-gradient(transparent 50%, rgba(0,188,212,0.02) 50%);
    background-size: 100% 4px;
    pointer-events: none;
  }
}
📁 tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      borderRadius: { lg: 'var(--radius)', md: 'calc(var(--radius) - 2px)', sm: 'calc(var(--radius) - 4px)' },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: { DEFAULT: 'hsl(var(--card))', foreground: 'hsl(var(--card-foreground))' },
        popover: { DEFAULT: 'hsl(var(--popover))', foreground: 'hsl(var(--popover-foreground))' },
        primary: { DEFAULT: 'hsl(var(--primary))', foreground: 'hsl(var(--primary-foreground))' },
        secondary: { DEFAULT: 'hsl(var(--secondary))', foreground: 'hsl(var(--secondary-foreground))' },
        muted: { DEFAULT: 'hsl(var(--muted))', foreground: 'hsl(var(--muted-foreground))' },
        accent: { DEFAULT: 'hsl(var(--accent))', foreground: 'hsl(var(--accent-foreground))' },
        destructive: { DEFAULT: 'hsl(var(--destructive))', foreground: 'hsl(var(--destructive-foreground))' },
        border: 'hsl(var(--border))', input: 'hsl(var(--input))', ring: 'hsl(var(--ring))',
        warning: 'hsl(var(--warning))', success: 'hsl(var(--success))', info: 'hsl(var(--info))',
        chart: { '1': 'hsl(var(--chart-1))', '2': 'hsl(var(--chart-2))', '3': 'hsl(var(--chart-3))', '4': 'hsl(var(--chart-4))', '5': 'hsl(var(--chart-5))' },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))', foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))', 'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))', 'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))', ring: 'hsl(var(--sidebar-ring))'
        }
      },
      fontFamily: {
        heading: ['var(--font-heading)'], body: ['var(--font-body)'],
        display: ['var(--font-display)'], mono: ['var(--font-mono)']
      },
      keyframes: {
        'accordion-down': { from: { height: '0' }, to: { height: 'var(--radix-accordion-content-height)' } },
        'accordion-up': { from: { height: 'var(--radix-accordion-content-height)' }, to: { height: '0' } },
        'pulse-glow': { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0.5' } },
        'radar-sweep': { '0%': { transform: 'rotate(0deg)' }, '100%': { transform: 'rotate(360deg)' } }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}
📁 App.jsx
import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import ProtectedRoute from '@/components/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Dashboard from './pages/Dashboard';
import DroneFleet from './pages/DroneFleet';
import Radar from './pages/Radar';
import RunwayOps from './pages/RunwayOps';
import DelayPredictor from './pages/DelayPredictor';
import FlightRisk from './pages/FlightRisk';
import VehicleTracking from './pages/VehicleTracking';
import AircraftHealth from './pages/AircraftHealth';
import EngineerReports from './pages/EngineerReports';
import Alerts from './pages/Alerts';
import SystemLogs from './pages/SystemLogs';
import Settings from './pages/Settings';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();
  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest">Initializing AMS·AI</p>
        </div>
      </div>
    );
  }
  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    else if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route element={<ProtectedRoute unauthenticatedElement={<Navigate to="/login" replace />} />}>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/drone-fleet" element={<DroneFleet />} />
          <Route path="/radar" element={<Radar />} />
          <Route path="/runway-ops" element={<RunwayOps />} />
          <Route path="/delay-predictor" element={<DelayPredictor />} />
          <Route path="/flight-risk" element={<FlightRisk />} />
          <Route path="/vehicle-tracking" element={<VehicleTracking />} />
          <Route path="/aircraft-health" element={<AircraftHealth />} />
          <Route path="/engineer-reports" element={<EngineerReports />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/logs" element={<SystemLogs />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  )
