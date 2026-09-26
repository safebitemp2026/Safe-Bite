import { useState } from 'react';
import { 
  Users, UserCheck, UserX, ShieldAlert, 
  Download, Plus, MoreHorizontal, CheckCircle, AlertTriangle
} from 'lucide-react';

const UsersPage = () => {
  const stats = [
    { title: 'Total Users', value: '12,546', change: '+ 15%', isUp: true, icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Active Users', value: '10,892', change: '+ 12%', isUp: true, icon: UserCheck, color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'Blocked Users', value: '842', change: '- 5%', isUp: false, icon: UserX, color: 'text-orange-500', bg: 'bg-orange-100' },
    { title: 'Users with Allergies', value: '6,431', change: '+ 18%', isUp: true, icon: ShieldAlert, color: 'text-purple-500', bg: 'bg-purple-100' },
  ];

  const usersData = [
    { id: 'SB10294', name: 'Rahul Kumar', initial: 'RK', email: 'rahul@gmail.com', allergies: ['Peanut', 'Milk', 'Wheat'], conditions: 'Asthma', status: 'Active', joined: '12 Aug 2026', lastActive: 'Today, 10:24 AM', color: 'bg-green-500' },
    { id: 'SB10293', name: 'Anu Thomas', initial: 'AT', img: 'https://i.pravatar.cc/150?u=1', email: 'anu@gmail.com', allergies: ['None'], conditions: 'None', status: 'Active', joined: '08 Aug 2026', lastActive: 'Today, 09:12 AM', color: 'bg-blue-500' },
    { id: 'SB10292', name: 'Arjun S', initial: 'AS', email: 'arjun@gmail.com', allergies: ['Nuts'], conditions: 'Diabetes', status: 'Blocked', joined: '01 Aug 2026', lastActive: '3 days ago', color: 'bg-purple-500' },
    { id: 'SB10291', name: 'Sneha Nair', initial: 'SN', img: 'https://i.pravatar.cc/150?u=2', email: 'sneha@gmail.com', allergies: ['None'], conditions: 'None', status: 'Active', joined: '28 Jul 2026', lastActive: 'Today, 11:03 AM', color: 'bg-pink-500' },
    { id: 'SB10290', name: 'Vishnu P', initial: 'VP', email: 'vishnu@gmail.com', allergies: ['Food Allergy'], conditions: 'Asthma', status: 'Active', joined: '24 Jul 2026', lastActive: 'Yesterday, 06:45 PM', color: 'bg-indigo-500' },
    { id: 'SB10289', name: 'Meera K', initial: 'MK', img: 'https://i.pravatar.cc/150?u=3', email: 'meera@gmail.com', allergies: ['None'], conditions: 'Thyroid', status: 'Active', joined: '20 Jul 2026', lastActive: 'Yesterday, 02:18 PM', color: 'bg-yellow-500' },
    { id: 'SB10288', name: 'Karthik R', initial: 'KR', email: 'karthik@gmail.com', allergies: ['Peanut'], conditions: 'None', status: 'Active', joined: '18 Jul 2026', lastActive: '2 days ago', color: 'bg-blue-400' },
    { id: 'SB10287', name: 'Fathima S', initial: 'FS', img: 'https://i.pravatar.cc/150?u=4', email: 'fathima@gmail.com', allergies: ['Milk'], conditions: 'Asthma', status: 'Inactive', joined: '12 Jul 2026', lastActive: '1 week ago', color: 'bg-red-400' },
    { id: 'SB10286', name: 'Sajith D', initial: 'SD', email: 'sajith@gmail.com', allergies: ['Wheat'], conditions: 'None', status: 'Active', joined: '05 Jul 2026', lastActive: 'Yesterday, 09:31 AM', color: 'bg-indigo-600' },
    { id: 'SB10285', name: 'Divya R', initial: 'DR', img: 'https://i.pravatar.cc/150?u=5', email: 'divya@gmail.com', allergies: ['Soy'], conditions: 'PCOS', status: 'Active', joined: '28 Jun 2026', lastActive: '3 days ago', color: 'bg-pink-400' },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-primary">
            <Users size={20} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Users</h1>
            <p className="text-gray-500 text-sm">Manage SafeBite users and their profiles. View, edit and take action on user accounts.</p>
          </div>
        </div>
        <button className="btn btn-primary">
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <div key={i} className="card flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 font-medium mb-1">{stat.title}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <div className={`flex items-center gap-1 text-xs font-semibold ${stat.isUp ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last month
              </div>
            </div>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${stat.bg} ${stat.color}`}>
              <stat.icon size={24} />
            </div>
          </div>
        ))}
      </div>

      {/* Table Section */}
      <div className="card !p-0 overflow-hidden">
        {/* Filters */}
        <div className="p-4 border-b border-gray-100 flex gap-4 bg-gray-50/50">
           <div className="flex-1">
             <input type="text" placeholder="Search by name, email, or user ID..." className="w-full max-w-sm px-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:border-primary" />
           </div>
           <select className="border border-gray-200 rounded-md text-sm px-4 py-2 bg-white text-gray-600 min-w-[120px]">
             <option>Status: All</option>
           </select>
           <select className="border border-gray-200 rounded-md text-sm px-4 py-2 bg-white text-gray-600 min-w-[120px]">
             <option>Allergies: All</option>
           </select>
           <select className="border border-gray-200 rounded-md text-sm px-4 py-2 bg-white text-gray-600 min-w-[120px]">
             <option>Join Date: All</option>
           </select>
           <button className="btn btn-outline border-gray-200 bg-white">
             <Download size={16} /> Export
           </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4 w-12"><input type="checkbox" className="rounded border-gray-300" /></th>
                <th className="px-6 py-4">User ID &uarr;</th>
                <th className="px-6 py-4">Name &darr;</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Allergies</th>
                <th className="px-6 py-4">Medical Conditions &darr;</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Joined &darr;</th>
                <th className="px-6 py-4">Last Active &darr;</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {usersData.map((user, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4"><input type="checkbox" className="rounded border-gray-300" /></td>
                  <td className="px-6 py-4 text-gray-500">{user.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      {user.img ? (
                        <img src={user.img} alt={user.name} className="w-8 h-8 rounded-full" />
                      ) : (
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-medium ${user.color}`}>
                          {user.initial}
                        </div>
                      )}
                      <span className="font-semibold text-gray-900">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1 flex-wrap max-w-[180px]">
                      {user.allergies.map((allergy, index) => (
                        <span key={index} className={`px-2 py-0.5 rounded text-[11px] font-medium ${
                          allergy === 'None' ? 'bg-gray-100 text-gray-600' : 'bg-red-50 text-red-600 border border-red-100'
                        }`}>
                          {allergy}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-blue-600 text-xs font-medium">{user.conditions !== 'None' ? user.conditions : <span className="text-gray-400">None</span>}</td>
                  <td className="px-6 py-4">
                    {user.status === 'Active' && <span className="flex items-center gap-1 text-green-600 text-xs font-semibold"><CheckCircle size={14}/> Active</span>}
                    {user.status === 'Blocked' && <span className="flex items-center gap-1 text-red-600 text-xs font-semibold"><AlertTriangle size={14}/> Blocked</span>}
                    {user.status === 'Inactive' && <span className="flex items-center gap-1 text-gray-500 text-xs font-semibold"><UserX size={14}/> Inactive</span>}
                  </td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{user.joined}</td>
                  <td className="px-6 py-4 text-gray-500 text-xs">{user.lastActive}</td>
                  <td className="px-6 py-4 text-gray-400 cursor-pointer hover:text-gray-600"><MoreHorizontal size={18} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between">
           <span className="text-sm text-gray-500">Showing 1 to 10 of 12,546 users</span>
           <div className="flex gap-1">
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50">&lt;</button>
             <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-medium">1</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium">2</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium">3</button>
             <span className="w-8 h-8 flex items-center justify-center text-gray-400">...</span>
             <button className="w-auto px-2 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 font-medium">1255</button>
             <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50">&gt;</button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
