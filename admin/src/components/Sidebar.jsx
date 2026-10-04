import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, BarChart3, Database, ShieldAlert, FileText, Settings, LogOut, ShieldCheck } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Users', path: '/dashboard/users', icon: Users },
  ];

  return (
    <aside className="sidebar">
      <div className="p-6 flex items-center gap-3" style={{ marginBottom: '20px' }}>
        <ShieldCheck size={32} color="white" />
        <span className="text-xl font-bold">SafeBite</span>
      </div>

      <nav className="flex-1 px-4 py-4 flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-white text-primary' 
                  : 'text-white hover:bg-primary-hover'
              }`}
            >
              <item.icon size={20} />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 mt-auto">
        <div className="mb-6 opacity-70">
           <div className="text-sm font-handwriting transform -rotate-6 mb-2">Safe Food.</div>
           <div className="text-sm font-handwriting transform -rotate-6">Healthier Lives.</div>
        </div>
        <Link to="/login" className="flex items-center justify-end gap-3 px-4 py-3 text-white hover:bg-primary-hover rounded-lg text-sm font-medium transition-colors">
          Logout
          <LogOut size={20} />
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
