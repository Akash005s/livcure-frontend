import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Pill } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { useAuth } from '../../context/AuthContext';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleMockLogin = async (role: 'admin' | 'pharmacist' | 'user') => {
        setIsLoading(true);
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 800));
        login(role);
        setIsLoading(false);
        if (role === 'admin' || role === 'pharmacist') {
            navigate('/admin');
        } else {
            navigate('/medicines');
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // Default to user login for standard form submit
        handleMockLogin('user');
    };

    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 md:p-12 w-full max-w-[450px] relative z-10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-100">
                <div className="text-center mb-10">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
                            <Pill size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                            LivCure
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Welcome Back</h1>
                    <p className="text-slate-500">Login to access your account</p>
                </div>

                <div className="flex flex-col gap-3 mb-6">
                    <p className="text-xs text-center text-slate-400 uppercase tracking-widest font-semibold">Mock Login</p>
                    <div className="grid grid-cols-3 gap-2">
                        <button
                            onClick={() => handleMockLogin('admin')}
                            className="px-3 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                        >
                            Admin
                        </button>
                        <button
                            onClick={() => handleMockLogin('pharmacist')}
                            className="px-3 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                        >
                            Pharmacist
                        </button>
                        <button
                            onClick={() => handleMockLogin('user')}
                            className="px-3 py-2 text-xs font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg transition-colors"
                        >
                            User
                        </button>
                    </div>
                    <div className="relative flex py-2 items-center">
                        <div className="flex-grow border-t border-slate-200"></div>
                        <span className="flex-shrink mx-4 text-slate-400 text-xs">OR</span>
                        <div className="flex-grow border-t border-slate-200"></div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="space-y-5">
                        <Input
                            id="email"
                            type="email"
                            label="Email Address"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-500/30 transition-all cursor-pointer" />
                            <span className="text-slate-500 group-hover:text-slate-700">Remember me</span>
                        </label>
                        <a href="#" className="text-primary-600 font-medium hover:text-primary-700 hover:underline">Forgot Password?</a>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="lg"
                        isLoading={isLoading}
                        className="mt-2 group"
                    >
                        Login
                        {!isLoading && <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-600">
                    <p>Don't have an account? <Link to="/signup" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
