
import React, { useState } from 'react';
import { Calendar, Plus, Trash2, MapPin, Sparkles, Loader2, Save } from 'lucide-react';
import { generateItinerary } from '../services/geminiService';

interface ItineraryDay {
  day: number;
  activity: string;
  location: string;
  time: string;
  description?: string;
}

const ItineraryPlanner: React.FC = () => {
  const [preferences, setPreferences] = useState('');
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = async () => {
    if (!preferences.trim()) return;
    setIsGenerating(true);
    const result = await generateItinerary(preferences);
    setItinerary(result);
    setIsGenerating(false);
  };

  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          AI Itinerary Builder <Sparkles className="text-amber-500 fill-amber-500" />
        </h1>
        <p className="text-slate-500 mt-2">Describe your perfect trip, and our AI will craft a personalized 3-day itinerary for you.</p>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
        <div className="space-y-4">
          <label className="text-sm font-bold text-slate-700 block uppercase tracking-wider">What kind of experience are you looking for?</label>
          <textarea 
            value={preferences}
            onChange={(e) => setPreferences(e.target.value)}
            placeholder="E.g. I want to see cultural sites in Kathmandu and then go for a short trek in Pokhara. I love spicy food and morning sunrise views."
            className="w-full h-32 p-4 bg-slate-50 border border-slate-200 rounded-2xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none transition-all resize-none"
          />
          <div className="flex flex-wrap gap-2">
            {['Adventure', 'Culture', 'Foodie', 'Relaxation', 'Hiking'].map(tag => (
              <button 
                key={tag}
                onClick={() => setPreferences(prev => prev + (prev ? ' ' : '') + tag)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition-all"
              >
                + {tag}
              </button>
            ))}
          </div>
          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !preferences}
            className="w-full bg-red-600 text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 shadow-lg shadow-red-100 hover:bg-red-700 transition-all disabled:opacity-50"
          >
            {isGenerating ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
            {isGenerating ? 'Drafting your Himalayan Journey...' : 'Generate Itinerary'}
          </button>
        </div>
      </div>

      {itinerary.length > 0 && (
        <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-800">Your Nepal Adventure</h2>
            <button className="flex items-center gap-2 text-slate-600 font-bold text-sm bg-white border border-slate-200 px-4 py-2 rounded-xl hover:bg-slate-50 transition-all">
              <Save size={18} /> Save Plan
            </button>
          </div>

          <div className="relative space-y-8 before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
            {itinerary.map((item, idx) => (
              <div key={idx} className="relative pl-12">
                <div className="absolute left-0 top-1 w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold shadow-lg shadow-red-100 z-10 border-4 border-white">
                  {item.day}
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-red-100 transition-all">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-red-600 text-xs font-bold uppercase tracking-widest">{item.time}</span>
                      <h3 className="text-xl font-bold text-slate-800 mt-1">{item.activity}</h3>
                      <p className="flex items-center gap-1 text-slate-400 text-sm mt-1 font-medium">
                        <MapPin size={14} className="text-slate-400" /> {item.location}
                      </p>
                    </div>
                  </div>
                  {item.description && (
                    <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  <div className="mt-6 pt-4 border-t border-slate-50 flex gap-4">
                    <button className="text-xs font-bold text-slate-400 hover:text-red-600 transition-colors">Edit</button>
                    <button className="text-xs font-bold text-slate-400 hover:text-slate-600 transition-colors">Add Notes</button>
                    <button className="text-xs font-bold text-red-300 hover:text-red-600 ml-auto transition-colors"><Trash2 size={14}/></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="px-8 py-3 bg-slate-900 text-white rounded-2xl font-bold flex items-center gap-2 hover:bg-red-600 transition-all">
               <Plus size={20} /> Add Day
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItineraryPlanner;
