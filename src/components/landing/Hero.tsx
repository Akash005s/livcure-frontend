import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../assets/Hero.png';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden py-20 lg:py-32 bg-white">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-50 to-transparent pointer-events-none opacity-60" />
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-200/30 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    <div className="flex-1 text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 animate-fade-in-up">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                            </span>
                            #1 Trusted Online Pharmacy
                        </div>
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 mb-6 tracking-tight">
                            Your Health, Delivered <br className="hidden lg:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">with Care</span>
                        </h1>
                        <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Experience the future of pharmacy. Fast, safe, and reliable medicine delivery from licensed pharmacies directly to your doorstep.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link to="/medicines" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:-translate-y-1 hover:from-primary-600 hover:to-primary-700">
                                Order Medicines
                            </Link>
                            <a href="#how-it-works" className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 transition-all bg-white border border-slate-200 rounded-full hover:bg-slate-50 hover:text-primary-600 hover:border-primary-200 hover:shadow-sm">
                                How It Works
                            </a>
                        </div>

                        <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 text-slate-500 text-sm font-medium">
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary-100/50 text-primary-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                100% Genuine
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary-100/50 text-primary-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                24/7 Support
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full bg-primary-100/50 text-primary-600">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </div>
                                Fast Delivery
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 w-full max-w-lg lg:max-w-none relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-transparent rounded-3xl transform rotate-3 scale-105 blur-2xl"></div>
                        <img
                            src={heroImage}
                            alt="Medicine Delivery Service"
                            className="relative rounded-3xl shadow-2xl w-full object-cover transform transition-transform hover:scale-[1.01] duration-500"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
