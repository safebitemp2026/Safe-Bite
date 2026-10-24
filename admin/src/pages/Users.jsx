import { useState } from 'react';
import { 
  Users, UserCheck, ShieldAlert, 
  Download, Plus, MoreHorizontal, CheckCircle, AlertTriangle, Clock
} from 'lucide-react';
import UserActionModal from '../components/UserActionModal';
import { useUsers } from '../context/UsersContext';

const UsersPage = () => {
  const { users, updateUserStatus, deleteUser } = useUsers();
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
              {users.map((user, i) => (
                <tr key={user.id || i} onClick={() => handleRowClick(user)} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                  <td className="px-6 py-4">
                    <span className="font-semibold text-gray-900">{user.name}</span>
                  </td>
                  <td className="px-6 py-4">
                    {user.status === 'Active' && <span className="flex items-center gap-1 text-green-600 text-xs font-semibold"><CheckCircle size={14}/> Active</span>}
                    {user.status === 'Blocked' && <span className="flex items-center gap-1 text-red-600 text-xs font-semibold"><AlertTriangle size={14}/> Blocked</span>}
                    {user.status === 'Suspended' && <span className="flex items-center gap-1 text-amber-600 text-xs font-semibold"><Clock size={14}/> Suspended</span>}
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
          onUpdateStatus={updateUserStatus}
          onDeleteUser={deleteUser}
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
