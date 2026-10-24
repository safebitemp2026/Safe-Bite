import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import { UsersProvider } from '../context/UsersContext';

const DashboardLayout = () => {
  return (
    <UsersProvider>
      <div className="dashboard-layout">
        <Sidebar />
        <main className="main-content">
          <Topbar />
          <div className="page-content">
            <Outlet />
          </div>
        </main>
      </div>
    </UsersProvider>
  );
};

export default DashboardLayout;

