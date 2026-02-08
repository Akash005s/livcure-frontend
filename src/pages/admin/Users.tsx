import React from 'react';
import { MoreVertical, User, Mail, Shield, CheckCircle, XCircle } from 'lucide-react';

const Users: React.FC = () => {
    const users = [
        { id: 1, name: 'Alex Johnson', email: 'alex@example.com', role: 'User', status: 'Active', avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150' },
        { id: 2, name: 'Maria Garcia', email: 'maria@example.com', role: 'Admin', status: 'Active', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150' },
        { id: 3, name: 'James Smith', email: 'james@example.com', role: 'User', status: 'Inactive', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150' },
        { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', role: 'User', status: 'Active', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150' },
        { id: 5, name: 'Michael Brown', email: 'michael@example.com', role: 'Pharmacy', status: 'Active', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">User Management</h1>
                    <p className="text-slate-500">Manage system users and their roles</p>
                </div>
                <button className="px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-medium hover:bg-primary-700 shadow-md shadow-primary-500/20 transition-all">
                    Add User
                </button>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-100">
                                <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">User</th>
                                <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Role</th>
                                <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">Status</th>
                                <th className="p-4 text-xs font-semibold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover border border-slate-200" />
                                            <div>
                                                <div className="font-medium text-slate-900">{user.name}</div>
                                                <div className="text-xs text-slate-500">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            {user.role === 'Admin' ? <Shield size={16} className="text-purple-500" /> : <User size={16} className="text-slate-400" />}
                                            <span className={`text-sm ${user.role === 'Admin' ? 'text-purple-700 font-medium' : 'text-slate-600'}`}>{user.role}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${user.status === 'Active'
                                                ? 'bg-green-50 text-green-700 border-green-200'
                                                : 'bg-slate-100 text-slate-500 border-slate-200'
                                            }`}>
                                            {user.status === 'Active' ? <CheckCircle size={12} /> : <XCircle size={12} />}
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <button className="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-slate-600 transition-colors">
                                            <MoreVertical size={18} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="p-4 border-t border-slate-100 flex justify-center">
                    <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default Users;
