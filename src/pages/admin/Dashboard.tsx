import React from 'react';
import { Users, ShoppingBag, DollarSign, Activity, TrendingUp, Package } from 'lucide-react';

const Dashboard: React.FC = () => {
    const stats = [
        {
            title: 'Total Users',
            value: '12,345',
            change: '+12%',
            icon: <Users size={24} />,
            color: 'bg-blue-500',
            bgColor: 'bg-blue-50',
            textColor: 'text-blue-600',
        },
        {
            title: 'Total Orders',
            value: '1,234',
            change: '+23%',
            icon: <ShoppingBag size={24} />,
            color: 'bg-primary-500',
            bgColor: 'bg-primary-50',
            textColor: 'text-primary-600',
        },
        {
            title: 'Revenue',
            value: '$45,678',
            change: '+8%',
            icon: <DollarSign size={24} />,
            color: 'bg-green-500',
            bgColor: 'bg-green-50',
            textColor: 'text-green-600',
        },
        {
            title: 'Active Now',
            value: '567',
            change: '+5%',
            icon: <Activity size={24} />,
            color: 'bg-orange-500',
            bgColor: 'bg-orange-50',
            textColor: 'text-orange-600',
        },
    ];

    const recentOrders = [
        { id: '#ORD-7829', customer: 'Alex Johnson', date: '2 mins ago', amount: '$120.50', status: 'Processing' },
        { id: '#ORD-7828', customer: 'Maria Garcia', date: '15 mins ago', amount: '$75.20', status: 'Delivered' },
        { id: '#ORD-7827', customer: 'James Smith', date: '1 hour ago', amount: '$240.00', status: 'Shipped' },
        { id: '#ORD-7826', customer: 'Sarah Williams', date: '2 hours ago', amount: '$50.00', status: 'Pending' },
        { id: '#ORD-7825', customer: 'Michael Brown', date: '3 hours ago', amount: '$180.75', status: 'Delivered' },
    ];

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
                    <p className="text-slate-500">Welcome back, Admin</p>
                </div>
                <button className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-slate-600 text-sm font-medium hover:bg-slate-50 shadow-sm">
                    Download Report
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-xl ${stat.bgColor} ${stat.textColor}`}>
                                {stat.icon}
                            </div>
                            <span className="flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded-full">
                                <TrendingUp size={14} />
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-slate-500 text-sm font-medium">{stat.title}</h3>
                        <p className="text-2xl font-bold text-slate-800 mt-1">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Recent Orders & Charts Section (Placeholder for Chart) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Orders */}
                <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                    <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                        <h2 className="text-lg font-bold text-slate-900">Recent Orders</h2>
                        <a href="#" className="text-primary-600 text-sm font-medium hover:text-primary-700">View All</a>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50/50">
                                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Order ID</th>
                                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Customer</th>
                                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Date</th>
                                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Amount</th>
                                    <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-50">
                                {recentOrders.map((order) => (
                                    <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                                        <td className="p-4 text-sm font-medium text-slate-900">{order.id}</td>
                                        <td className="p-4 text-sm text-slate-600">{order.customer}</td>
                                        <td className="p-4 text-sm text-slate-500">{order.date}</td>
                                        <td className="p-4 text-sm font-medium text-slate-900">{order.amount}</td>
                                        <td className="p-4">
                                            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                                ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                                        order.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                                                            'bg-yellow-100 text-yellow-800'
                                                }`}>
                                                {order.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions / Notifications */}
                <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                    <h2 className="text-lg font-bold text-slate-900 mb-6">Quick Actions</h2>
                    <div className="space-y-4">
                        <button className="w-full p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:bg-slate-50 hover:border-primary-200 transition-all group">
                            <div className="p-3 bg-primary-50 rounded-lg text-primary-600 group-hover:bg-primary-500 group-hover:text-white transition-colors">
                                <Package size={20} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-sm font-bold text-slate-800">Add New Product</h3>
                                <p className="text-xs text-slate-500">Update inventory</p>
                            </div>
                        </button>
                        <button className="w-full p-4 rounded-xl border border-slate-200 flex items-center gap-4 hover:bg-slate-50 hover:border-primary-200 transition-all group">
                            <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <Users size={20} />
                            </div>
                            <div className="text-left">
                                <h3 className="text-sm font-bold text-slate-800">Manage Users</h3>
                                <p className="text-xs text-slate-500">Review accounts</p>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
