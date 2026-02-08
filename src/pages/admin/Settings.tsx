import React from 'react';
import { Bell, Lock, User, Globe, Moon } from 'lucide-react';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';

const Settings: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
                    <p className="text-slate-500">Manage your account preferences</p>
                </div>
                <Button>Save Changes</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Sidebar Navigation (Mock) */}
                <div className="space-y-2">
                    <button className="w-full text-left px-4 py-2 rounded-lg bg-primary-50 text-primary-700 font-medium flex items-center gap-3">
                        <User size={18} /> Profile
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors">
                        <Bell size={18} /> Notifications
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors">
                        <Lock size={18} /> Security
                    </button>
                    <button className="w-full text-left px-4 py-2 rounded-lg text-slate-600 hover:bg-slate-50 flex items-center gap-3 transition-colors">
                        <Globe size={18} /> Language
                    </button>
                </div>

                {/* Main Content */}
                <div className="md:col-span-2 space-y-6">
                    {/* Profile Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-900 mb-6">Profile Information</h2>

                        <div className="flex items-center gap-6 mb-8">
                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150" alt="Profile" className="w-20 h-20 rounded-full object-cover border-4 border-slate-50" />
                            <div>
                                <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200 transition-colors">Change Photo</button>
                                <p className="text-xs text-slate-400 mt-2">JPG, GIF or PNG. Max size of 800K</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input label="First Name" id="firstName" placeholder="John" defaultValue="Admin" />
                            <Input label="Last Name" id="lastName" placeholder="Doe" defaultValue="User" />
                            <Input label="Email Address" id="email" type="email" placeholder="john@example.com" defaultValue="admin@livcure.com" />
                            <Input label="Phone Number" id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                        </div>
                    </div>

                    {/* Preferences Section */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                        <h2 className="text-lg font-bold text-slate-900 mb-6">Preferences</h2>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                        <Bell size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-900">Email Notifications</h3>
                                        <p className="text-xs text-slate-500">Receive emails about your account activity</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                                </label>
                            </div>

                            <div className="flex items-center justify-between p-4 rounded-xl border border-slate-100 hover:border-slate-200 transition-colors">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                                        <Moon size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-medium text-slate-900">Dark Mode</h3>
                                        <p className="text-xs text-slate-500">Switch to dark theme (Coming Soon)</p>
                                    </div>
                                </div>
                                <label className="relative inline-flex items-center cursor-not-allowed opacity-60">
                                    <input type="checkbox" className="sr-only peer" disabled />
                                    <div className="w-11 h-6 bg-slate-200 rounded-full peer after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5"></div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
