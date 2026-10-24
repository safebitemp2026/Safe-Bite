import React, { createContext, useContext, useState } from 'react';

export const initialBaseUsers = [
  { id: 'SB10294', name: 'Rahul Kumar', initial: 'RK', email: 'rahul@gmail.com', allergies: ['Peanut', 'Milk', 'Wheat'], conditions: 'Asthma', status: 'Active', joined: '12 Aug 2026', lastActive: 'Today, 10:24 AM', color: 'bg-green-500' },
  { id: 'SB10293', name: 'Anu Thomas', initial: 'AT', img: 'https://i.pravatar.cc/150?u=1', email: 'anu@gmail.com', allergies: ['None'], conditions: 'None', status: 'Active', joined: '08 Aug 2026', lastActive: 'Today, 09:12 AM', color: 'bg-blue-500' },
  { id: 'SB10292', name: 'Arjun S', initial: 'AS', email: 'arjun@gmail.com', allergies: ['Nuts'], conditions: 'Diabetes', status: 'Blocked', joined: '01 Aug 2026', lastActive: '3 days ago', color: 'bg-purple-500' },
  { id: 'SB10291', name: 'Sneha Nair', initial: 'SN', img: 'https://i.pravatar.cc/150?u=2', email: 'sneha@gmail.com', allergies: ['None'], conditions: 'None', status: 'Active', joined: '28 Jul 2026', lastActive: 'Today, 11:03 AM', color: 'bg-pink-500' },
  { id: 'SB10290', name: 'Vishnu P', initial: 'VP', email: 'vishnu@gmail.com', allergies: ['Food Allergy'], conditions: 'Asthma', status: 'Active', joined: '24 Jul 2026', lastActive: 'Yesterday, 06:45 PM', color: 'bg-indigo-500' },
  { id: 'SB10289', name: 'Meera K', initial: 'MK', img: 'https://i.pravatar.cc/150?u=3', email: 'meera@gmail.com', allergies: ['None'], conditions: 'Thyroid', status: 'Active', joined: '20 Jul 2026', lastActive: 'Yesterday, 02:18 PM', color: 'bg-yellow-500' },
  { id: 'SB10288', name: 'Karthik R', initial: 'KR', email: 'karthik@gmail.com', allergies: ['Peanut'], conditions: 'None', status: 'Active', joined: '18 Jul 2026', lastActive: '2 days ago', color: 'bg-blue-400' },
  { id: 'SB10287', name: 'Fathima S', initial: 'FS', img: 'https://i.pravatar.cc/150?u=4', email: 'fathima@gmail.com', allergies: ['Milk'], conditions: 'Asthma', status: 'Suspended', joined: '12 Jul 2026', lastActive: '1 week ago', color: 'bg-red-400' },
  { id: 'SB10286', name: 'Sajith D', initial: 'SD', email: 'sajith@gmail.com', allergies: ['Wheat'], conditions: 'None', status: 'Active', joined: '05 Jul 2026', lastActive: 'Yesterday, 09:31 AM', color: 'bg-indigo-600' },
  { id: 'SB10285', name: 'Divya R', initial: 'DR', img: 'https://i.pravatar.cc/150?u=5', email: 'divya@gmail.com', allergies: ['Soy'], conditions: 'PCOS', status: 'Active', joined: '28 Jun 2026', lastActive: '3 days ago', color: 'bg-pink-400' },
];

const generateInitialUsers = () => {
  return Array(5)
    .fill(initialBaseUsers)
    .flat()
    .map((user, i) => {
      // For demonstration of active, blocked, and suspended across the dataset:
      // Fathima S instances are Suspended
      return {
        ...user,
        id: `SB10${294 - i}`,
      };
    });
};

const UsersContext = createContext(null);

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState(generateInitialUsers);

  const updateUserStatus = (idOrName, newStatus) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) => {
        if (u.id === idOrName || u.name === idOrName) {
          return { ...u, status: newStatus };
        }
        return u;
      })
    );
  };

  const deleteUser = (idOrName) => {
    setUsers((prevUsers) =>
      prevUsers.filter((u) => u.id !== idOrName && u.name !== idOrName)
    );
  };

  return (
    <UsersContext.Provider value={{ users, updateUserStatus, deleteUser }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsers = () => {
  const context = useContext(UsersContext);
  if (!context) {
    throw new Error('useUsers must be used within a UsersProvider');
  }
  return context;
};
