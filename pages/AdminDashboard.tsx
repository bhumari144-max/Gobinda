
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { Users, MapPin, DollarSign, Activity, ChevronRight, MoreHorizontal } from 'lucide-react';

const visitData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
  { name: 'Jun', value: 700 },
];

const categoryData = [
  { name: 'Trekking', value: 45 },
  { name: 'Culture', value: 25 },
  { name: 'Leisure', value: 20 },
  { name: 'Pilgrimage', value: 10 },
];

const COLORS = ['#ef4444', '#f59e0b', '#3b82f6', '#10b981'];

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-slate-500">Overview of tourism activity in Nepal</p>
        </div>
        <div className="flex gap-2">
          <button className="bg-white border border-slate-200 px-4 py-2 rounded-xl text-sm font-bold shadow-sm">Export Report</button>
          <button className="bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-bold shadow-sm">Add New Resource</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
           <div className="flex justify-between items-start">
             <div className="bg-blue-50 p-3 rounded-2xl text-blue-600"><Users size={24}/></div>
             <span className="text-emerald-500 text-xs font-bold">+12.5%</span>
           </div>
           <div>
             <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Tourists</h3>
             <p className="text-3xl font-extrabold mt-1">14,290</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
           <div className="flex justify-between items-start">
             <div className="bg-amber-50 p-3 rounded-2xl text-amber-600"><MapPin size={24}/></div>
             <span className="text-emerald-500 text-xs font-bold">+5.2%</span>
           </div>
           <div>
             <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Active Bookings</h3>
             <p className="text-3xl font-extrabold mt-1">2,841</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
           <div className="flex justify-between items-start">
             <div className="bg-emerald-50 p-3 rounded-2xl text-emerald-600"><DollarSign size={24}/></div>
             <span className="text-emerald-500 text-xs font-bold">+18.1%</span>
           </div>
           <div>
             <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">Total Revenue</h3>
             <p className="text-3xl font-extrabold mt-1">$1.2M</p>
           </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
           <div className="flex justify-between items-start">
             <div className="bg-rose-50 p-3 rounded-2xl text-rose-600"><Activity size={24}/></div>
             <span className="text-rose-500 text-xs font-bold">-2.1%</span>
           </div>
           <div>
             <h3 className="text-slate-500 text-xs font-bold uppercase tracking-widest">SOS Alerts</h3>
             <p className="text-3xl font-extrabold mt-1">3</p>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <div className="flex justify-between items-center mb-6">
             <h3 className="font-bold text-lg">Tourist Visits (Monthly)</h3>
             <select className="bg-slate-50 border-none rounded-lg text-xs font-bold p-2 focus:ring-0">
                <option>Year 2024</option>
                <option>Year 2023</option>
             </select>
           </div>
           <div className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={visitData}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} dy={10} />
                 <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                 <Tooltip cursor={{fill: '#f8fafc'}} contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}} />
                 <Bar dataKey="value" fill="#ef4444" radius={[6, 6, 0, 0]} barSize={40} />
               </BarChart>
             </ResponsiveContainer>
           </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
           <h3 className="font-bold text-lg mb-6">Revenue by Category</h3>
           <div className="h-[250px] relative">
             <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                 <Pie
                   data={categoryData}
                   cx="50%"
                   cy="50%"
                   innerRadius={60}
                   outerRadius={80}
                   paddingAngle={5}
                   dataKey="value"
                 >
                   {categoryData.map((entry, index) => (
                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                   ))}
                 </Pie>
                 <Tooltip />
               </PieChart>
             </ResponsiveContainer>
             <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-2xl font-bold">$1.2M</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">Total</span>
             </div>
           </div>
           <div className="mt-4 space-y-3">
             {categoryData.map((item, idx) => (
               <div key={item.name} className="flex justify-between items-center text-sm">
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full" style={{backgroundColor: COLORS[idx]}}></div>
                   <span className="text-slate-600 font-medium">{item.name}</span>
                 </div>
                 <span className="font-bold">{item.value}%</span>
               </div>
             ))}
           </div>
        </div>
      </div>

      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex justify-between items-center">
          <h3 className="font-bold text-lg">Pending Approvals</h3>
          <button className="text-red-600 font-bold text-xs flex items-center gap-1 hover:underline">
            View All <ChevronRight size={14} />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Resource</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Location</th>
                <th className="px-6 py-4">Submitted</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Hotel Yak & Yeti', type: 'Accommodation', loc: 'Kathmandu', date: '2 hours ago', status: 'Pending' },
                { name: 'Larke Peak Trek', type: 'Package', loc: 'Manaslu', date: '5 hours ago', status: 'Pending' },
                { name: 'Pema Sherpa', type: 'Guide', loc: 'Solu', date: 'Yesterday', status: 'Pending' },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-800">{row.name}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{row.type}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{row.loc}</td>
                  <td className="px-6 py-4 text-slate-500 text-sm">{row.date}</td>
                  <td className="px-6 py-4">
                    <span className="bg-amber-50 text-amber-600 px-2 py-1 rounded-lg text-[10px] font-bold uppercase">{row.status}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-slate-600"><MoreHorizontal size={18}/></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
