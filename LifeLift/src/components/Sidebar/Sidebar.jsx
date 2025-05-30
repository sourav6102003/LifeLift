import React from 'react';
import {
  Home,
  Calendar,
  User,
  FileText,
  LogOut,
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-green-900 text-white flex flex-col justify-between">
      <div>
        <div className="p-6 text-2xl font-bold">Dr. Dashboard</div>
        <nav className="flex flex-col gap-4 px-4">
          <SidebarItem icon={<Home size={20} />} label="Home" />
          <SidebarItem icon={<Calendar size={20} />} label="Appointments" />
          <SidebarItem icon={<User size={20} />} label="Patients" />
          <SidebarItem icon={<FileText size={20} />} label="Reports" />
        </nav>
      </div>
      <div className="px-4 py-6">
        <SidebarItem icon={<LogOut size={20} />} label="Logout" />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-3 px-2 py-2 hover:bg-blue-700 rounded cursor-pointer">
    {icon}
    <span>{label}</span>
  </div>
);

export default Sidebar;
