import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Pill, User, Stethoscope } from 'lucide-react';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import classNames from 'classnames';

const SignupPage: React.FC = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState<'user' | 'pharmacist'>('user');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        password: '',
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        // Simulate signup including role
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Signup:', { ...formData, role });
        setIsLoading(false);
        navigate('/verify-otp');
    };


    return (
        <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 md:p-12 w-full max-w-[500px] relative z-10 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-100">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
                        <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
                            <Pill size={24} className="text-white" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                            LivCure
                        </span>
                    </Link>
                    <h1 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h1>
                    <p className="text-slate-500">Join LivCure for fast, reliable medicine delivery</p>
                </div>

                {/* Role Selection */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                        type="button"
                        onClick={() => setRole('user')}
                        className={classNames(
                            'relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-3 group overflow-hidden',
                            {
                                'border-primary-500 bg-primary-50/50 shadow-md shadow-primary-500/10': role === 'user',
                                'border-slate-100 bg-white hover:border-primary-200 hover:bg-slate-50': role !== 'user',
                            }
                        )}
                    >
                        <div
                            className={classNames(
                                'p-3 rounded-full transition-colors duration-300',
                                {
                                    'bg-primary-500 text-white shadow-lg shadow-primary-500/30': role === 'user',
                                    'bg-slate-100 text-slate-500 group-hover:bg-primary-100 group-hover:text-primary-600': role !== 'user',
                                }
                            )}
                        >
                            <User size={24} />
                        </div>
                        <span
                            className={classNames(
                                'font-semibold transition-colors duration-300',
                                {
                                    'text-primary-700': role === 'user',
                                    'text-slate-600 group-hover:text-primary-600': role !== 'user',
                                }
                            )}
                        >
                            User
                        </span>
                        {role === 'user' && (
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setRole('pharmacist')}
                        className={classNames(
                            'relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-3 group overflow-hidden',
                            {
                                'border-primary-500 bg-primary-50/50 shadow-md shadow-primary-500/10': role === 'pharmacist',
                                'border-slate-100 bg-white hover:border-primary-200 hover:bg-slate-50': role !== 'pharmacist',
                            }
                        )}
                    >
                        <div
                            className={classNames(
                                'p-3 rounded-full transition-colors duration-300',
                                {
                                    'bg-primary-500 text-white shadow-lg shadow-primary-500/30': role === 'pharmacist',
                                    'bg-slate-100 text-slate-500 group-hover:bg-primary-100 group-hover:text-primary-600': role !== 'pharmacist',
                                }
                            )}
                        >
                            <Stethoscope size={24} />
                        </div>
                        <span
                            className={classNames(
                                'font-semibold transition-colors duration-300',
                                {
                                    'text-primary-700': role === 'pharmacist',
                                    'text-slate-600 group-hover:text-primary-600': role !== 'pharmacist',
                                }
                            )}
                        >
                            Pharmacist
                        </span>
                        {role === 'pharmacist' && (
                            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary-500 animate-pulse" />
                        )}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="space-y-5">
                        <Input
                            id="name"
                            label="Full Name"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
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
                            id="mobile"
                            type="tel"
                            label="Mobile Number"
                            placeholder="Enter your mobile number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />
                        <Input
                            id="password"
                            type="password"
                            label="Password"
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <Button
                        type="submit"
                        variant="primary"
                        fullWidth
                        size="lg"
                        isLoading={isLoading}
                        className="mt-2 group"
                    >
                        Create {role === 'pharmacist' ? 'Pharmacist' : 'User'} Account
                        {!isLoading && <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </form>

                <div className="mt-8 text-center text-sm text-slate-600">
                    <p>Already have an account? <Link to="/login" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">Login here</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
