
import React from 'react';
import { Settings, CreditCard, LogOut, Heart, Map, Clock, ChevronRight } from 'lucide-react';

const ProfilePage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop" 
            alt="User" 
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl object-cover"
          />
          <button className="absolute bottom-1 right-1 bg-red-600 text-white p-2 rounded-full shadow-lg border-2 border-white">
            <Settings size={16} />
          </button>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold">Alexander Traveler</h1>
          <p className="text-slate-500">alex@example.com</p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
        <div className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-sm">
          <p className="text-2xl font-bold text-red-600">12</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Trips</p>
        </div>
        <div className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-sm">
          <p className="text-2xl font-bold text-red-600">4.9</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Rating</p>
        </div>
        <div className="bg-white p-4 rounded-2xl text-center border border-slate-100 shadow-sm">
          <p className="text-2xl font-bold text-red-600">54</p>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Saves</p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-4">
        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <div className="p-4 border-b border-slate-50 font-bold text-slate-400 uppercase text-[10px] tracking-widest">Travel Activity</div>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-2.5 rounded-xl text-red-600"><Clock size={20}/></div>
              <span className="font-semibold text-slate-700">Recent Bookings</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-amber-50 p-2.5 rounded-xl text-amber-600"><Heart size={20}/></div>
              <span className="font-semibold text-slate-700">Wishlist</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-2.5 rounded-xl text-blue-600"><Map size={20}/></div>
              <span className="font-semibold text-slate-700">My Itineraries</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
        </div>

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100">
          <div className="p-4 border-b border-slate-50 font-bold text-slate-400 uppercase text-[10px] tracking-widest">Account & Safety</div>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 p-2.5 rounded-xl text-slate-600"><CreditCard size={20}/></div>
              <span className="font-semibold text-slate-700">Payments</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors">
            <div className="flex items-center gap-4">
              <div className="bg-slate-100 p-2.5 rounded-xl text-slate-600"><Settings size={20}/></div>
              <span className="font-semibold text-slate-700">Settings</span>
            </div>
            <ChevronRight size={18} className="text-slate-300" />
          </button>
          <button className="w-full flex items-center justify-between p-4 hover:bg-red-50 transition-colors text-red-600">
            <div className="flex items-center gap-4">
              <div className="bg-red-50 p-2.5 rounded-xl"><LogOut size={20}/></div>
              <span className="font-semibold">Log Out</span>
            </div>
            <ChevronRight size={18} className="opacity-30" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
