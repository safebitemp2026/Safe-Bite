import React from 'react';
import { User, Ban, Unlock, Clock, Trash2, X } from 'lucide-react';

const UserActionModal = ({ selectedUser, onClose }) => {
  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 transition-all">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-primary text-white relative overflow-hidden shrink-0 w-full" style={{ padding: '24px 32px' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
          
          <div className="grid grid-cols-[auto_1fr_auto] gap-4 items-start relative z-10 w-full">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
              <User size={24} className="text-white" />
            </div>
            
            <div className="min-w-0 pr-4 text-left">
              <h2 className="text-xl font-bold truncate m-0 text-left">Manage Actions</h2>
              <p className="text-white/90 text-sm mt-1 font-medium truncate m-0 text-left">{selectedUser.name}</p>
              <p className="text-white/70 text-xs mt-1.5 whitespace-normal break-words m-0 text-left">Choose an action below.</p>
            </div>
            
            <button onClick={onClose} className="text-white/80 hover:text-white hover:bg-white/20 p-1.5 rounded-full transition-colors relative z-10 shrink-0 flex items-center justify-center mt-1">
               <X size={20} />
            </button>
          </div>
        </div>
        
        <div className="p-6 flex flex-col gap-4 overflow-y-auto bg-white">
          
          {/* Action 1: Block User */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center shadow-sm hover:shadow-md transition-shadow border-l-[6px] border-l-red-500 overflow-hidden">
             <div className="flex items-center gap-4 text-left w-full">
               <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                 <Ban size={24} />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 m-0 text-left">Block User</h3>
                 <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xl text-left">Immediately prevents the user from logging in — user sees "Account blocked" message on next login attempt.</p>
               </div>
             </div>
             <div className="flex justify-start sm:justify-end w-full">
               <button className="flex items-center gap-2 justify-center bg-red-500 text-white hover:bg-red-600 font-bold rounded-lg text-sm transition-colors shadow-sm" style={{ padding: '10px 20px', minWidth: '130px' }}>
                 <Ban size={16} /> Block User
               </button>
             </div>
          </div>

          {/* Action 2: Unblock User */}
          <div className="bg-green-50 border border-green-100 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center shadow-sm hover:shadow-md transition-shadow border-l-[6px] border-l-primary overflow-hidden">
             <div className="flex items-center gap-4 text-left w-full">
               <div className="w-12 h-12 rounded-full bg-green-100 text-primary flex items-center justify-center shrink-0">
                 <Unlock size={24} />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 m-0 text-left">Unblock User</h3>
                 <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xl text-left">Restores login access — user can sign in again immediately after being unblocked.</p>
               </div>
             </div>
             <div className="flex justify-start sm:justify-end w-full">
               <button className="flex items-center gap-2 justify-center bg-primary text-white hover:bg-primary/90 font-bold rounded-lg text-sm transition-colors shadow-sm" style={{ padding: '10px 20px', minWidth: '130px' }}>
                 <Unlock size={16} /> Unblock User
               </button>
             </div>
          </div>

          {/* Action 3: Suspend for N Days */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center shadow-sm hover:shadow-md transition-shadow border-l-[6px] border-l-blue-500 overflow-hidden">
             <div className="flex items-center gap-4 text-left w-full">
               <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-500 flex items-center justify-center shrink-0">
                 <Clock size={24} />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 m-0 text-left">Suspend for N Days</h3>
                 <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xl text-left">Temporarily restricts access for a specified number of days — user sees their suspension expiry date when they try to log in.</p>
               </div>
             </div>
             <div className="flex justify-start sm:justify-end items-center gap-3 w-full">
               <div className="flex items-center gap-2 bg-gray-100 p-1.5 rounded-lg border border-gray-200">
                 <input type="number" defaultValue="7" className="w-14 px-2 py-1 bg-white border border-gray-300 rounded-md text-sm font-medium focus:outline-none focus:border-blue-500 text-center" />
                 <span className="text-sm text-gray-600 font-medium px-2">Days</span>
               </div>
               <button className="flex items-center gap-2 justify-center bg-blue-500 text-white hover:bg-blue-600 font-bold rounded-lg text-sm transition-colors shadow-sm" style={{ padding: '10px 20px' }}>
                 <Clock size={16} /> Suspend
               </button>
             </div>
          </div>

          {/* Action 4: Delete User */}
          <div className="bg-red-50 border border-red-100 rounded-xl p-5 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center shadow-sm hover:shadow-md transition-shadow border-l-[6px] border-l-red-500 overflow-hidden">
             <div className="flex items-center gap-4 text-left w-full">
               <div className="w-12 h-12 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0">
                 <Trash2 size={24} />
               </div>
               <div>
                 <h3 className="text-base font-bold text-gray-900 m-0 text-left">Delete User</h3>
                 <p className="text-sm text-gray-500 mt-1 leading-relaxed max-w-xl text-left">Permanently removes the user's account and all personal scan history — anonymised community insights contributed by the user are retained.</p>
               </div>
             </div>
             <div className="flex justify-start sm:justify-end w-full">
               <button className="flex items-center gap-2 justify-center bg-red-500 text-white hover:bg-red-600 font-bold rounded-lg text-sm transition-colors shadow-sm" style={{ padding: '10px 20px', minWidth: '130px' }}>
                 <Trash2 size={16} /> Delete User
               </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserActionModal;
