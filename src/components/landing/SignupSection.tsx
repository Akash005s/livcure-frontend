import React, { useState } from 'react';
import { ArrowRight, Pill } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const SignupSection: React.FC = () => {
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
        // Simulate signup
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Signup:', formData);
        setIsLoading(false);
        // OTP Simulation
        alert('OTP Sent! (Simulation)');
    };


    return (
        <section id="signup" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-200/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-primary-300/20 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 flex justify-center">
                <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/50 p-8 md:p-12 w-full max-w-[500px] transition-all duration-300 hover:shadow-2xl hover:shadow-primary-100">
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 mb-6 group">
                            <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
                                <Pill size={24} className="text-white" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
                                LivCure
                            </span>
                        </div>
                        <h1 className="text-3xl font-bold text-slate-800 mb-2">Create Account</h1>
                        <p className="text-slate-500">Join LivCure for fast, reliable medicine delivery</p>
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
                            Create Account
                            {!isLoading && <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />}
                        </Button>
                    </form>

                    <div className="mt-8 text-center text-sm text-slate-600">
                        <p>Already have an account? <a href="#login" className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">Login here</a></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignupSection;
