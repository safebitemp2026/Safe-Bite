
import { Search as SearchIcon, Bell as BellIcon } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="topbar">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input 
            type="text" 
            placeholder="Search users, foods, or reports..." 
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <BellIcon size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 border-l pl-6 border-gray-200">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
            A
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Admin</div>
            <div className="text-xs text-gray-500">Super Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;
