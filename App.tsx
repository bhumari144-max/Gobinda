
import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
import { 
  Home, 
  Map as MapIcon, 
  Users, 
  Calendar, 
  User, 
  ShieldAlert, 
  MessageCircle, 
  LayoutDashboard,
  Search,
  Bell,
  Navigation,
  Globe,
  Wind
} from 'lucide-react';

import HomePage from './pages/HomePage';
import DestinationsPage from './pages/DestinationsPage';
import GuidesPage from './pages/GuidesPage';
import ProfilePage from './pages/ProfilePage';
import AdminDashboard from './pages/AdminDashboard';
import ItineraryPlanner from './pages/ItineraryPlanner';
import SOSPage from './pages/SOSPage';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <HashRouter>
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 pb-20 md:pb-0">
        {/* Header - Hidden on small mobile to feel more app-like, or simplified */}
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 px-4 py-3 flex justify-between items-center shadow-sm">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-red-600 p-1.5 rounded-lg">
              <Globe className="text-white w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-800">Namaste Nepal</span>
          </Link>
          
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-slate-100 rounded-full text-slate-600 relative">
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <Link to="/sos" className="p-2 hover:bg-red-50 rounded-full text-red-600">
              <ShieldAlert size={20} />
            </Link>
          </div>
        </header>

        {/* Desktop Sidebar (visible on md+) */}
        <div className="flex flex-1 overflow-hidden">
          <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 p-4 gap-2">
            <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-red-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Home size={20} /> <span>Explore</span>
            </NavLink>
            <NavLink to="/destinations" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-red-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>
              <MapIcon size={20} /> <span>Destinations</span>
            </NavLink>
            <NavLink to="/guides" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-red-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Users size={20} /> <span>Local Guides</span>
            </NavLink>
            <NavLink to="/planner" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-red-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'}`}>
              <Calendar size={20} /> <span>Itinerary</span>
            </NavLink>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <NavLink to="/profile" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                <User size={20} /> <span>My Profile</span>
              </NavLink>
              <NavLink to="/admin" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive ? 'bg-slate-800 text-white' : 'text-slate-600 hover:bg-slate-100'}`}>
                <LayoutDashboard size={20} /> <span>Admin Panel</span>
              </NavLink>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1 overflow-y-auto pb-10">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/destinations" element={<DestinationsPage />} />
              <Route path="/guides" element={<GuidesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/planner" element={<ItineraryPlanner />} />
              <Route path="/sos" element={<SOSPage />} />
            </Routes>
          </main>
        </div>

        {/* Mobile Navigation (Bottom Bar) */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex justify-around items-center py-2 px-4 z-50">
          <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg ${isActive ? 'text-red-600' : 'text-slate-400'}`}>
            <Home size={22} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Home</span>
          </NavLink>
          <NavLink to="/destinations" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg ${isActive ? 'text-red-600' : 'text-slate-400'}`}>
            <MapIcon size={22} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Places</span>
          </NavLink>
          <NavLink to="/planner" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg ${isActive ? 'text-red-600' : 'text-slate-400'}`}>
            <div className="bg-red-600 text-white p-2.5 rounded-full -mt-8 shadow-lg shadow-red-200">
              <Navigation size={22} />
            </div>
            <span className="text-[10px] font-medium uppercase tracking-wider mt-1">Plan</span>
          </NavLink>
          <NavLink to="/guides" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg ${isActive ? 'text-red-600' : 'text-slate-400'}`}>
            <Users size={22} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Guides</span>
          </NavLink>
          <NavLink to="/profile" className={({ isActive }) => `flex flex-col items-center gap-1 p-2 rounded-lg ${isActive ? 'text-red-600' : 'text-slate-400'}`}>
            <User size={22} />
            <span className="text-[10px] font-medium uppercase tracking-wider">Profile</span>
          </NavLink>
        </nav>

        {/* Floating Chat Bot Toggle */}
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="fixed bottom-24 right-6 md:bottom-8 md:right-8 bg-red-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all z-50 flex items-center justify-center"
        >
          {isChatOpen ? <Wind size={24} /> : <MessageCircle size={24} />}
        </button>

        {isChatOpen && <ChatBot onClose={() => setIsChatOpen(false)} />}
      </div>
    </HashRouter>
  );
};

export default App;
