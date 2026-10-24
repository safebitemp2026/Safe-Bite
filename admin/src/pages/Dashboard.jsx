import { 
  Users, CheckCircle, AlertTriangle, Clock
} from 'lucide-react';
import { useUsers } from '../context/UsersContext';

const Dashboard = () => {
  const { users } = useUsers();

  const totalUsers = users.length;
  const activeUsers = users.filter(u => u.status === 'Active').length;
  const blockedUsers = users.filter(u => u.status === 'Blocked').length;
  const suspendedUsers = users.filter(u => u.status === 'Suspended').length;

  const stats = [
    { title: 'Total Users', value: totalUsers, icon: Users, color: 'text-primary', bg: 'bg-green-100' },
    { title: 'Active Users', value: activeUsers, icon: CheckCircle, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { title: 'Blocked Users', value: blockedUsers, icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' },
    { title: 'Suspended Users', value: suspendedUsers, icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' },
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-0">{stat.value}</h3>
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
