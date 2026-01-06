
import React from 'react';
import { Link } from 'react-router-dom';
// Fix: Added missing Users and ShieldAlert icons to the lucide-react imports
import { Compass, Thermometer, Cloud, MapPin, ArrowRight, Star, Users, ShieldAlert } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const HomePage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="relative h-[300px] md:h-[450px] rounded-3xl overflow-hidden shadow-2xl">
        <img 
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000&auto=format&fit=crop" 
          alt="Everest Peaks" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-12">
          <div className="space-y-2">
            <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full uppercase tracking-widest">Adventure Awaits</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Explore the Sacred<br/>Peaks of Nepal</h1>
            <p className="text-slate-200 text-sm md:text-lg max-w-xl">From the bustling streets of Kathmandu to the serene silence of the Himalayas, discover your next soul-stirring journey.</p>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/planner" className="px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-2">
              Start Planning <ArrowRight size={18} />
            </Link>
            <Link to="/destinations" className="px-6 py-3 bg-red-600/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-xl hover:bg-red-600/30 transition-colors">
              Browse Destinations
            </Link>
          </div>
        </div>
      </section>

      {/* Info Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-blue-50 p-3 rounded-xl text-blue-600"><Thermometer /></div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Kathmandu Temp</p>
            <p className="font-bold text-lg">22°C <span className="text-xs font-normal text-slate-400">Sunny</span></p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-amber-50 p-3 rounded-xl text-amber-600"><Cloud /></div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Everest Visibility</p>
            <p className="font-bold text-lg">High <span className="text-xs font-normal text-slate-400">Clear Sky</span></p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-red-50 p-3 rounded-xl text-red-600"><Compass /></div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Trekking Status</p>
            <p className="font-bold text-lg text-green-600">Open</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center gap-4">
          <div className="bg-emerald-50 p-3 rounded-xl text-emerald-600"><Users /></div>
          <div>
            <p className="text-xs text-slate-500 font-medium">Active Guides</p>
            <p className="font-bold text-lg">450+</p>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Top Destinations</h2>
            <p className="text-slate-500 text-sm">Most loved places by travelers last month</p>
          </div>
          <Link to="/destinations" className="text-red-600 font-bold text-sm flex items-center gap-1 hover:underline">
            View All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DESTINATIONS.slice(0, 4).map((dest) => (
            <div key={dest.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg text-xs font-bold flex items-center gap-1">
                  <Star size={12} className="text-amber-500 fill-amber-500" /> {dest.rating}
                </div>
              </div>
              <div className="p-4 flex flex-col flex-1">
                <div className="flex items-center gap-1 text-red-600 text-[10px] font-bold uppercase tracking-wider mb-1">
                  <MapPin size={10} /> {dest.location}
                </div>
                <h3 className="font-bold text-slate-800 text-lg group-hover:text-red-600 transition-colors">{dest.name}</h3>
                <p className="text-slate-500 text-sm mt-2 line-clamp-2">{dest.description}</p>
                <div className="mt-auto pt-4 flex justify-between items-center">
                  <span className="font-bold text-slate-700">{dest.priceRange}</span>
                  <button className="text-red-600 font-bold text-sm bg-red-50 px-4 py-2 rounded-xl group-hover:bg-red-600 group-hover:text-white transition-all">Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Local Services Highlight */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold">Safe Travels in Nepal</h2>
            <p className="text-slate-400 max-w-sm">We provide real-time GPS tracking and emergency SOS support for all trekkers and travelers across Nepal.</p>
            <Link to="/sos" className="inline-flex px-6 py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-colors gap-2 items-center shadow-lg shadow-red-900/40">
              <ShieldAlert size={20} /> Safety Dashboard
            </Link>
          </div>
          <ShieldAlert className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 group-hover:scale-110 transition-transform duration-700" />
        </div>

        <div className="bg-white rounded-[2.5rem] p-8 text-slate-800 border border-slate-200 relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl font-bold">Trusted Guides</h2>
            <p className="text-slate-500 max-w-sm">Book certified local guides who speak your language and know every hidden trail in the Himalayas.</p>
            <Link to="/guides" className="inline-flex px-6 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors gap-2 items-center">
              <Users size={20} /> Find a Guide
            </Link>
          </div>
          <Users className="absolute -bottom-10 -right-10 w-64 h-64 text-slate-100 group-hover:scale-110 transition-transform duration-700" />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
