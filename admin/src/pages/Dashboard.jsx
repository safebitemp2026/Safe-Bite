import { 
  Users, AlertTriangle, Package, ScanLine, 
  TrendingUp, TrendingDown, Clock
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '0', change: '+ 15%', isUp: true, icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-end">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          </div>
          <p className="text-gray-500 mt-1">Welcome to the admin dashboard.</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>

            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
