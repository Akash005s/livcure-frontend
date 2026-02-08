import React from 'react';
import { Link } from 'react-router-dom';
import { Pill, ShoppingCart } from 'lucide-react';

const UserNavbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm transition-all duration-300">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo & Name */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
                            <Pill size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                            LivCure
                        </span>
                    </Link>

                    {/* Right Side Actions */}
                    <div className="flex gap-4 items-center">
                        {/* Cart */}
                        <button className="p-2 text-slate-600 hover:text-primary-600 transition-colors relative group">
                            <ShoppingCart size={24} />
                            <span className="absolute top-1 right-0 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white transform scale-0 group-hover:scale-100 transition-transform"></span>
                        </button>

                        {/* Login Button */}
                        <Link
                            to="/login"
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default UserNavbar;
