import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Pill } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';

const LoginPage: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate login
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Login:', { email, password });
        setIsLoading(false);
        navigate('/');
    };


    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-300/20 rounded-full blur-3xl"></div>
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
                    <p className="text-slate-500">Login to access your medicines and orders</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="space-y-5">
                        <Input
                            id="email"
                            type="text"
                            label="Email or Mobile Number"
                            placeholder="Enter your email or mobile"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="text-right text-sm">
                        <a href="#" className="text-primary-600 font-medium hover:text-primary-700 transition-colors">Forgot Password?</a>
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="lg"
                        isLoading={isLoading}
                        className="group"
                    >
                        Login
                        {!isLoading && <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-600">
                    <p>Don't have an account? <Link to="/signup" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
