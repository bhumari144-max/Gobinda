
import React, { useState } from 'react';
import { ShieldAlert, Phone, MapPin, Navigation, History, User, HeartPulse, Wind } from 'lucide-react';

const SOSPage: React.FC = () => {
  const [isActivating, setIsActivating] = useState(false);
  const [sosSent, setSosSent] = useState(false);

  const handleSOS = () => {
    setIsActivating(true);
    setTimeout(() => {
      setIsActivating(false);
      setSosSent(true);
    }, 3000);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500 min-h-screen flex flex-col">
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-slate-800">Safety & Support</h1>
        <p className="text-slate-500">Immediate assistance wherever you are in Nepal</p>
      </div>

      <div className="flex flex-col items-center justify-center flex-1 max-w-lg mx-auto w-full gap-8">
        <div className="relative">
          {/* Pulsing rings when activating */}
          {isActivating && (
            <>
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
              <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping delay-300"></div>
            </>
          )}
          
          <button 
            onMouseDown={handleSOS}
            onMouseUp={() => !sosSent && setIsActivating(false)}
            onMouseLeave={() => !sosSent && setIsActivating(false)}
            onTouchStart={handleSOS}
            onTouchEnd={() => !sosSent && setIsActivating(false)}
            className={`relative w-48 h-48 rounded-full flex flex-col items-center justify-center transition-all duration-300 shadow-2xl ${
              sosSent ? 'bg-green-500' : isActivating ? 'bg-red-700 scale-95' : 'bg-red-600 hover:bg-red-700'
            } text-white group`}
          >
            {sosSent ? (
              <div className="flex flex-col items-center gap-2">
                <ShieldAlert size={48} className="animate-bounce" />
                <span className="font-bold text-lg">Alert Sent</span>
              </div>
            ) : (
              <>
                <ShieldAlert size={48} className={`${isActivating ? 'animate-pulse' : 'group-hover:scale-110 transition-transform'}`} />
                <span className="font-bold text-xl mt-2 uppercase tracking-widest">{isActivating ? 'Hold...' : 'Panic SOS'}</span>
                <p className="text-[10px] opacity-60 mt-1">Press & Hold 3s</p>
              </>
            )}
          </button>
        </div>

        {sosSent && (
          <div className="bg-green-50 text-green-700 p-4 rounded-2xl border border-green-200 text-center animate-in slide-in-from-top-2">
            <p className="font-bold">Authorities notified.</p>
            <p className="text-sm">Stay where you are. Rescue team is being dispatched to your coordinates.</p>
          </div>
        )}

        <div className="w-full grid grid-cols-2 gap-4">
           <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-3">
              <div className="bg-blue-50 p-3 rounded-full text-blue-600"><Phone /></div>
              <div className="text-center">
                <span className="text-xs font-bold text-slate-400 block uppercase">Emergency</span>
                <span className="font-bold text-lg">100 / 103</span>
              </div>
           </div>
           <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center gap-3">
              <div className="bg-emerald-50 p-3 rounded-full text-emerald-600"><Navigation /></div>
              <div className="text-center">
                <span className="text-xs font-bold text-slate-400 block uppercase">Coordinates</span>
                <span className="font-bold text-sm">27.717°N, 85.324°E</span>
              </div>
           </div>
        </div>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto w-full">
        <h2 className="font-bold text-slate-700 uppercase text-xs tracking-widest">Live Safety Stats</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
             <HeartPulse size={20} className="text-rose-500" />
             <div>
                <p className="text-[10px] font-bold text-slate-400">Heart Rate</p>
                <p className="font-bold">78 BPM</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
             <Wind size={20} className="text-blue-500" />
             <div>
                <p className="text-[10px] font-bold text-slate-400">Oxygen (SpO2)</p>
                <p className="font-bold">96%</p>
             </div>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
             <History size={20} className="text-slate-400" />
             <div>
                <p className="text-[10px] font-bold text-slate-400">Altitude</p>
                <p className="font-bold">1,400m</p>
             </div>
          </div>
        </div>
      </div>

      <div className="mt-auto bg-slate-900 text-white p-6 rounded-3xl flex items-center gap-4">
        <User size={32} className="opacity-40" />
        <div className="flex-1">
          <h3 className="font-bold">Emergency Contact</h3>
          <p className="text-xs text-slate-400">Aashish (Brother) • +977-9800000000</p>
        </div>
        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-xl text-sm font-bold transition-all">Edit</button>
      </div>
    </div>
  );
};

export default SOSPage;
