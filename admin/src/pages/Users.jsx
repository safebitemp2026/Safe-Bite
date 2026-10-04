import { useState } from 'react';
import { 
  Users, UserCheck, UserX, ShieldAlert, 
  Download, Plus, MoreHorizontal, CheckCircle, AlertTriangle
} from 'lucide-react';
import UserActionModal from '../components/UserActionModal';

const UsersPage = () => {
  const stats = [
    { title: 'Total Users', value: '12,546', change: '+ 15%', isUp: true, icon: Users, color: 'text-green-600', bg: 'bg-green-100' },
    { title: 'Active Users', value: '10,892', change: '+ 12%', isUp: true, icon: UserCheck, color: 'text-blue-500', bg: 'bg-blue-100' },
    { title: 'Blocked Users', value: '842', change: '- 5%', isUp: false, icon: UserX, color: 'text-orange-500', bg: 'bg-orange-100' },
    { title: 'Users with Allergies', value: '6,431', change: '+ 18%', isUp: true, icon: ShieldAlert, color: 'text-purple-500', bg: 'bg-purple-100' },
  ];

  const baseUsers = [
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
  
  // Duplicate the 10 users 5 times to make 50 users for demonstration
  const usersData = Array(5).fill(baseUsers).flat().map((user, i) => ({...user, id: `SB10${294 - i}`}));

  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRowClick = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

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
            <p className="text-gray-500 text-sm">Manage SafeBite users.</p>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="card !p-0 overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 border-b border-gray-100 text-gray-500 font-medium">
              <tr>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {usersData.map((user, i) => (
                <tr key={i} onClick={() => handleRowClick(user)} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{user.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    {user.status === 'Active' && <span className="flex items-center gap-1 text-green-600 text-xs font-semibold"><CheckCircle size={14}/> Active</span>}
                    {user.status === 'Blocked' && <span className="flex items-center gap-1 text-red-600 text-xs font-semibold"><AlertTriangle size={14}/> Blocked</span>}
                    {user.status === 'Inactive' && <span className="flex items-center gap-1 text-gray-500 text-xs font-semibold"><UserX size={14}/> Inactive</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* User Actions Modal */}
      {isModalOpen && selectedUser && (
        <UserActionModal 
          selectedUser={selectedUser} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }} 
        />
      )}

    </div>
  );
};

export default UsersPage;
