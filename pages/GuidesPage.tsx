
import React from 'react';
import { Star, MessageCircle, Calendar, ShieldCheck, Languages, Award } from 'lucide-react';
import { GUIDES } from '../constants';

const GuidesPage: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-bold">Trusted Local Guides</h1>
          <p className="text-slate-500 mt-2">Every guide is certified by the Nepal Tourism Board and has been vetted for safety, knowledge, and hospitality.</p>
        </div>
        <div className="flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-2xl text-sm font-bold border border-emerald-100">
          <ShieldCheck size={18} /> Verified 100%
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {GUIDES.map((guide) => (
          <div key={guide.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row gap-6">
            <div className="relative w-full sm:w-48 h-64 sm:h-auto rounded-2xl overflow-hidden shrink-0">
              <img src={guide.image} alt={guide.name} className="w-full h-full object-cover" />
              {guide.availability && (
                <span className="absolute top-3 left-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-widest shadow-lg">
                  Available Now
                </span>
              )}
            </div>

            <div className="flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-slate-800">{guide.name}</h3>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={16} className="text-amber-500 fill-amber-500" />
                    <span className="font-bold text-slate-700">{guide.rating}</span>
                    <span className="text-slate-400 text-sm">({guide.reviewsCount} reviews)</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-red-600">${guide.pricePerDay}</span>
                  <span className="text-slate-400 text-xs block">/ day</span>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-start gap-2">
                  <Award size={16} className="text-slate-400 mt-1 shrink-0" />
                  <div className="flex flex-wrap gap-1">
                    {guide.expertise.map(exp => (
                      <span key={exp} className="bg-slate-100 text-slate-600 text-[11px] font-medium px-2.5 py-1 rounded-lg">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Languages size={16} className="text-slate-400 shrink-0" />
                  <p className="text-slate-600 text-xs font-medium">
                    {guide.languages.join(', ')}
                  </p>
                </div>
              </div>

              <div className="mt-auto pt-6 flex gap-3">
                <button className="flex-1 bg-slate-900 text-white font-bold py-3 rounded-xl hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
                  <Calendar size={18} /> Book Guide
                </button>
                <button className="w-12 h-12 flex items-center justify-center border border-slate-200 rounded-xl hover:bg-slate-50 transition-all text-slate-600">
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-red-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-red-100">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="text-xl font-bold text-red-900">Are you a professional guide?</h3>
          <p className="text-red-700 max-w-md">Join our platform and connect with thousands of international travelers visiting Nepal.</p>
        </div>
        <button className="bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-700 transition-all shadow-lg shadow-red-200">
          Register as Guide
        </button>
      </div>
    </div>
  );
};

export default GuidesPage;
