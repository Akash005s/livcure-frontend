import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, Settings, LogOut, Menu, X, Pill, Stethoscope, ShoppingBag, FileText, Truck, CreditCard, BarChart2, Package } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { adminMenu, pharmacistMenu } from '../../data/menu';

const AdminLayout: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const menus = user?.role === 'pharmacist' ? pharmacistMenu : adminMenu;

    const getIcon = (key: string) => {
        switch (key) {
            case 'dashboard': return <LayoutDashboard size={20} />;
            case 'users': return <Users size={20} />;
            case 'settings': return <Settings size={20} />;
            case 'pharmacies': return <Pill size={20} />;
            case 'medicines': return <Pill size={20} />;
            case 'categories': return <Pill size={20} />; // Placeholder
            case 'orders': return <ShoppingBag size={20} />;
            case 'prescriptions': return <FileText size={20} />;
            case 'customers': return <Users size={20} />;
            case 'delivery': return <Truck size={20} />;
            case 'payments': return <CreditCard size={20} />;
            case 'reports': return <BarChart2 size={20} />;
            case 'inventory': return <Package size={20} />;
            default: return <LayoutDashboard size={20} />;
        }
    };

    return (
        <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-xl shadow-slate-200/50 transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } lg:translate-x-0 lg:static lg:inset-0 border-r border-slate-100`}
            >
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <Link to="/admin" className="flex items-center gap-2">
                        <div className="bg-primary-500 p-1.5 rounded-lg shadow-lg shadow-primary-500/20">
                            {user?.role === 'pharmacist' ? <Stethoscope size={20} className="text-white" /> : <Pill size={20} className="text-white" />}
                        </div>
                        <span className="text-xl font-bold text-slate-800">LivCure {user?.role === 'pharmacist' ? 'Pharmacist' : 'Admin'}</span>
                    </Link>
                    <button onClick={toggleSidebar} className="lg:hidden text-slate-400 hover:text-slate-600">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-1">
                    {menus.map((item) => (
                        <Link
                            key={item.key}
                            to={item.path || '#'}
                            className="flex items-center gap-3 px-3 py-2.5 text-slate-600 rounded-lg hover:bg-primary-50 hover:text-primary-600 transition-colors group"
                        >
                            <span className="group-hover:text-primary-600">{getIcon(item.key)}</span>
                            <span>{item.label}</span>
                        </Link>
                    ))}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-slate-100">
                    <button onClick={handleLogout} className="flex items-center gap-3 px-3 py-2.5 w-full text-left text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                        <LogOut size={20} />
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
                {/* Header */}
                <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-100 h-16 flex items-center justify-between px-4 lg:px-8 z-10">
                    <button onClick={toggleSidebar} className="lg:hidden text-slate-500 hover:text-slate-700">
                        <Menu size={24} />
                    </button>
                    <div className="flex items-center gap-4 ml-auto">
                        <div className="flex flex-col text-right hidden sm:block">
                            <span className="text-sm font-medium text-slate-900">{user?.name}</span>
                            <span className="text-xs text-slate-500">{user?.email}</span>
                        </div>
                        <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-bold border border-primary-200">
                            {user?.name.charAt(0)}
                        </div>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 lg:p-8 bg-slate-50/50">
                    <Outlet />
                </main>
            </div>

            {/* Overlay for mobile sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}
        </div>
    );
};

export default AdminLayout;
