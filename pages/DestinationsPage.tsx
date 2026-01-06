
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, Heart } from 'lucide-react';
import { DESTINATIONS } from '../constants';

const DestinationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Adventure', 'Culture', 'Nature', 'Pilgrimage', 'Relaxation'];

  const filtered = DESTINATIONS.filter(d => {
    const matchesSearch = d.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          d.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = selectedTag === 'All' || d.tags.includes(selectedTag);
    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Nepal Destinations</h1>
          <p className="text-slate-500">Find the perfect spot for your next adventure</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-red-500 transition-colors" size={18} />
            <input 
              type="text" 
              placeholder="Search places..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-red-500/20 focus:border-red-500 outline-none w-full sm:w-64 transition-all"
            />
          </div>
          <div className="flex items-center bg-white border border-slate-200 rounded-xl p-1">
             <Filter size={18} className="mx-2 text-slate-400" />
             <select 
               className="bg-transparent text-sm font-medium focus:ring-0 border-none outline-none pr-8 py-1.5"
               value={selectedTag}
               onChange={(e) => setSelectedTag(e.target.value)}
             >
               {tags.map(t => <option key={t} value={t}>{t}</option>)}
             </select>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.map((dest) => (
          <div key={dest.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-100 flex flex-col">
            <div className="relative h-56 overflow-hidden">
              <img 
                src={dest.image} 
                alt={dest.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <button className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-white hover:text-red-600 transition-all border border-white/20">
                <Heart size={18} />
              </button>
              <div className="absolute bottom-4 left-4 flex gap-1">
                {dest.tags.map(tag => (
                  <span key={tag} className="bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold text-slate-800 text-xl">{dest.name}</h3>
                  <p className="flex items-center gap-1 text-slate-500 text-xs mt-1">
                    <MapPin size={12} className="text-red-500" /> {dest.location}
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-amber-50 text-amber-700 px-2 py-1 rounded-lg text-xs font-bold">
                  <Star size={12} className="fill-amber-500" /> {dest.rating}
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-3 line-clamp-3">
                {dest.description}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
                <div>
                  <span className="text-slate-400 text-xs block">Experience</span>
                  <span className="font-bold text-slate-800">{dest.priceRange === '$$$' ? 'Premium' : dest.priceRange === '$$' ? 'Standard' : 'Budget'}</span>
                </div>
                <button className="bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-red-600 transition-all">Explore</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filtered.length === 0 && (
        <div className="py-20 text-center space-y-4">
          <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto text-slate-400">
            <MapPin size={32} />
          </div>
          <h3 className="text-xl font-bold text-slate-700">No destinations found</h3>
          <p className="text-slate-500">Try adjusting your search or filters to find more places.</p>
          <button 
            onClick={() => {setSearchTerm(''); setSelectedTag('All');}}
            className="text-red-600 font-bold hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
};

export default DestinationsPage;
