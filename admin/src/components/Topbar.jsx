import { useState } from 'react';
import { Search as SearchIcon, CheckCircle, AlertTriangle, UserX } from 'lucide-react';
import UserActionModal from './UserActionModal';

const usersData = [
  { name: 'Rahul Kumar', status: 'Active' },
  { name: 'Anu Thomas', status: 'Active' },
  { name: 'Arjun S', status: 'Blocked' },
  { name: 'Sneha Nair', status: 'Active' },
  { name: 'Vishnu P', status: 'Active' },
  { name: 'Meera K', status: 'Active' },
  { name: 'Karthik R', status: 'Active' },
  { name: 'Fathima S', status: 'Inactive' },
  { name: 'Sajith D', status: 'Active' },
  { name: 'Divya R', status: 'Active' },
];

const Topbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <header className="topbar">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search users" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            className="w-full pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            style={{ paddingLeft: '40px' }}
          />

          {isFocused && searchQuery && (
            <div className="absolute top-full left-0 mt-2 w-[700px] bg-white border border-gray-200 rounded-xl shadow-2xl z-50 max-h-[400px] overflow-y-auto">
              {filteredUsers.length > 0 ? (
                <ul className="py-2">
                  {filteredUsers.map((user, index) => (
                    <li 
                      key={index} 
                      onMouseDown={(e) => {
                        e.preventDefault();
                        setSelectedUser(user);
                        setIsModalOpen(true);
                        setIsFocused(false);
                      }}
                      className="px-6 py-4 hover:bg-gray-50 flex justify-between items-center cursor-pointer border-b border-gray-50 last:border-0 transition-colors"
                    >
                      <span className="text-base font-semibold text-gray-900">{user.name}</span>
                      {user.status === 'Active' && <span className="flex items-center gap-2 text-green-600 text-sm font-semibold"><CheckCircle size={16}/> Active</span>}
                      {user.status === 'Blocked' && <span className="flex items-center gap-2 text-red-600 text-sm font-semibold"><AlertTriangle size={16}/> Blocked</span>}
                      {user.status === 'Inactive' && <span className="flex items-center gap-2 text-gray-500 text-sm font-semibold"><UserX size={16}/> Inactive</span>}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="p-8 text-base text-gray-500 text-center">No users found</div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Admin</div>
          </div>
        </div>
      </div>

      {/* Render the modal from the Topbar as well */}
      {isModalOpen && selectedUser && (
        <UserActionModal 
          selectedUser={selectedUser} 
          onClose={() => {
            setIsModalOpen(false);
            setSelectedUser(null);
          }} 
        />
      )}
    </header>
  );
};

export default Topbar;
