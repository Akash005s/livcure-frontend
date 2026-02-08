import React from 'react';
import { Upload, Search, Truck } from 'lucide-react';

const HowItWorks: React.FC = () => {
    const steps = [
        {
            id: 1,
            icon: <Upload size={32} />,
            title: 'Upload Prescription',
            description: 'Upload your doctor\'s prescription instantly via our secure platform.',
        },
        {
            id: 2,
            icon: <Search size={32} />,
            title: 'Choose Medicines',
            description: 'Select the medicines you need from our wide range of genuine products.',
        },
        {
            id: 3,
            icon: <Truck size={32} />,
            title: 'Fast Delivery',
            description: 'Get your medicines delivered to your doorstep within hours.',
        },
    ];

    return (
        <section id="how-it-works" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">Simple Process</h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How It Works</h2>
                    <p className="text-lg text-slate-600">Get your medicines delivered in just 3 simple steps</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                    {/* Connecting line for desktop */}
                    <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary-200 to-transparent z-0"></div>

                    {steps.map((step) => (
                        <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
                            <div className="w-20 h-20 rounded-2xl bg-white border border-slate-100 flex items-center justify-center mb-6 shadow-lg shadow-slate-200/50 transition-all duration-300 group-hover:shadow-primary-500/30 group-hover:border-primary-200 group-hover:-translate-y-2 group-hover:scale-110">
                                <div className="text-primary-500 group-hover:text-primary-600 transition-colors">
                                    {step.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">{step.title}</h3>
                            <p className="text-slate-600 leading-relaxed max-w-xs">{step.description}</p>

                            {/* Step Number Badge */}
                            <div className="absolute top-0 right-1/2 translate-x-10 -translate-y-2 w-8 h-8 rounded-full bg-primary-100 border-2 border-white flex items-center justify-center text-sm font-bold text-primary-700 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                {step.id}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
