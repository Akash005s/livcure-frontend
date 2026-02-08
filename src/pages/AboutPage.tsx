import React from 'react';
import { Shield, Users, Target, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="relative py-20 bg-primary-50 overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-primary-100 blur-3xl opacity-50"></div>
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Empowering Healthier Lives</h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        At LivCure, we believe that access to healthcare should be simple, affordable, and accessible to everyone, everywhere.
                    </p>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">Our Mission</div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Making Healthcare Accessible</h2>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                We are on a mission to revolutionize the pharmacy experience by bridging the gap between patients and licensed pharmacies. We strive to ensure that genuine medicines are delivered safely and strictly on time.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <Shield className="text-primary-600" size={20} />
                                    <span>100% Genuine Medicines</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <Target className="text-primary-600" size={20} />
                                    <span>Fast & Reliable Delivery</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <Award className="text-primary-600" size={20} />
                                    <span>Certified Pharmacists</span>
                                </li>
                            </ul>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-200 rounded-3xl transform rotate-3"></div>
                            <img
                                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                                alt="Team Meeting"
                                className="relative rounded-3xl shadow-xl w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-extrabold text-primary-400 mb-2">1M+</div>
                            <div className="text-slate-400">Happy Customers</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary-400 mb-2">50k+</div>
                            <div className="text-slate-400">Medicines Available</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary-400 mb-2">100+</div>
                            <div className="text-slate-400">Cities Covered</div>
                        </div>
                        <div>
                            <div className="text-4xl font-extrabold text-primary-400 mb-2">4.8/5</div>
                            <div className="text-slate-400">Customer Rating</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
