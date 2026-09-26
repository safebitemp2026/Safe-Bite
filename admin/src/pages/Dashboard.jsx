import { 
  Users, AlertTriangle, Package, ScanLine, 
  TrendingUp, TrendingDown, Clock, ShieldAlert, FileText, UserPlus, FileSignature, ShieldCheck
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '12,546', change: '+ 15%', isUp: true, icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Allergy Reports', value: '6,482', change: '+ 8%', isUp: true, icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-100' },
    { title: 'Food Products', value: '4,832', change: '+ 12%', isUp: true, icon: Package, color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'Total Scans', value: '56,421', change: '+ 22%', isUp: true, icon: ScanLine, color: 'text-purple-500', bg: 'bg-purple-100' },
  ];

  const lineData = [
    { name: 'Sep 24', value: 100 },
    { name: 'Sep 25', value: 80 },
    { name: 'Sep 26', value: 200 },
    { name: 'Sep 27', value: 250 },
    { name: 'Sep 28', value: 300 },
    { name: 'Sep 29', value: 220 },
    { name: 'Sep 30', value: 320 },
  ];

  const pieData = [
    { name: 'Peanut', value: 28, color: '#F97316' },
    { name: 'Milk', value: 22, color: '#3B82F6' },
    { name: 'Soy', value: 18, color: '#8B5CF6' },
    { name: 'Tree Nuts', value: 16, color: '#10B981' },
    { name: 'Wheat', value: 10, color: '#F59E0B' },
    { name: 'Others', value: 6, color: '#6B7280' },
  ];

  const recentFood = [
    { name: 'Lays Classic Salted', category: 'Snacks', allergens: 'Peanut, Milk', added: '2 hours ago', safe: true, img: 'https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/inventory/product/f1f106ee-2fa0-48e0-a92c-293e506b12a3-2R1Zc5c9yFjFm0Vl4t2Wv.jpg' },
    { name: 'Maggi Noodles', category: 'Instant Noodles', allergens: 'Wheat, Soy', added: '5 hours ago', safe: true, img: 'https://cdn.zeptonow.com/production///tr:w-600,ar-100-100,pr-true,f-auto,q-80/inventory/product/7281f9b3-4b95-46be-a719-722129e7edb3-N8_L_6_a_r_g_e.jpg' },
    { name: 'Coca Cola', category: 'Beverages', allergens: 'None', added: '6 hours ago', safe: true, img: 'https://m.media-amazon.com/images/I/61y8B84wB1L.jpg' },
    { name: 'Oreo Cookies', category: 'Biscuits', allergens: 'Wheat, Soy', added: '8 hours ago', contains: true, img: 'https://m.media-amazon.com/images/I/61Nl-HqKhmL.jpg' },
  ];

  const recentActivity = [
    { title: 'Lays Classic Salted', desc: 'Marked as allergenic for Peanut', time: '2 hours ago', icon: AlertTriangle, color: 'text-red-500', bg: 'bg-red-50' },
    { title: 'New user report', desc: 'Aarav S. uploaded health & allergy report', time: '3 hours ago', icon: FileText, color: 'text-green-500', bg: 'bg-green-50' },
    { title: 'New food added', desc: 'Kurkure Masala Munch', time: '5 hours ago', icon: Package, color: 'text-blue-500', bg: 'bg-blue-50' },
    { title: 'Report generated', desc: 'User ID: SB10294 - Lays Classic Salted', time: '6 hours ago', icon: FileSignature, color: 'text-purple-500', bg: 'bg-purple-50' },
    { title: 'Allergen mapping updated', desc: 'Soy added for Maggi Noodles', time: '8 hours ago', icon: ShieldAlert, color: 'text-green-500', bg: 'bg-green-50' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3">
            <TrendingUp className="text-primary" size={28} />
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <p className="text-gray-500 mt-1">Overview of system activity, food analysis and user reports.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium">
          <Clock size={16} className="text-gray-400" />
          Sep 24, 2025 - Oct 24, 2025
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.isUp ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                {stat.change} from last month
              </div>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 font-semibold text-gray-800">
              <TrendingUp className="text-green-500" size={20} />
              Allergy Reports Overview
            </div>
            <select className="border border-gray-200 rounded-md text-sm px-2 py-1 outline-none text-gray-600">
              <option>Last 7 Days</option>
            </select>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={lineData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dx={-10} />
                <RechartsTooltip />
                <Line type="monotone" dataKey="value" stroke="#10B981" strokeWidth={3} dot={{r: 4, fill: '#10B981', strokeWidth: 2, stroke: 'white'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center gap-2 font-semibold text-gray-800 mb-6">
            <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600">
              <ShieldAlert size={12} />
            </div>
            Top Allergens
          </div>
          <div className="h-48 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={2} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm mt-4">
            {pieData.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></span>
                  <span className="text-gray-600 text-xs">{item.name}</span>
                </div>
                <span className="font-semibold text-xs">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-3 gap-6">
        <div className="card col-span-2">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 font-semibold text-gray-800">
              <Package className="text-green-500" size={20} />
              Recently Added / Updated Food Products
            </div>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-primary">View All &rarr;</a>
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {recentFood.map((food, i) => (
              <div key={i} className="border border-gray-100 rounded-lg p-3 hover:shadow-md transition-shadow">
                <div className="flex justify-between mb-2">
                  <img src={food.img} alt={food.name} className="w-16 h-16 object-contain" />
                  {food.safe ? (
                     <div className="flex items-center gap-1 text-[10px] text-green-600 font-medium h-fit bg-green-50 px-2 py-1 rounded">
                       <ShieldCheck size={12}/> Safe
                     </div>
                  ) : (
                     <div className="flex items-center gap-1 text-[10px] text-orange-600 font-medium h-fit bg-orange-50 px-2 py-1 rounded">
                       <AlertTriangle size={12}/> Contains
                     </div>
                  )}
                </div>
                <h4 className="font-semibold text-sm text-gray-900 truncate mb-1">{food.name}</h4>
                <p className="text-xs text-gray-500 mb-1">Category: {food.category}</p>
                <p className="text-xs text-gray-500 mb-1">Allergens: {food.allergens}</p>
                <p className="text-xs text-gray-400 mt-2">Added: {food.added}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2 font-semibold text-gray-800">
              <Clock className="text-green-500" size={20} />
              Recent Activity
            </div>
            <a href="#" className="text-sm font-medium text-gray-500 hover:text-primary">View All &rarr;</a>
          </div>
          <div className="flex flex-col gap-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activity.bg} ${activity.color}`}>
                  <activity.icon size={14} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-800">{activity.title}</h4>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.desc}</p>
                  <p className="text-[10px] text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
