import React from 'react';
import { Pill, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary-950 text-slate-400 py-16 mt-auto">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 font-bold text-2xl text-white">
                            <div className="bg-primary-500 p-1.5 rounded-lg flex items-center justify-center shadow-lg shadow-primary-900/50">
                                <Pill size={20} className="text-white" />
                            </div>
                            <span className="text-white">LivCure</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-slate-400">
                            Your trusted partner for fast and safe medicine delivery. We bring healthcare to your doorstep with care and precision.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300"><Facebook size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full bg-primary-900/50 flex items-center justify-center text-slate-400 hover:bg-primary-500 hover:text-white transition-all duration-300"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-lg font-semibold">Quick Links</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a href="/" className="hover:text-primary-400 transition-colors">Home</a></li>
                            <li><a href="/medicines" className="hover:text-primary-400 transition-colors">Medicines</a></li>
                            <li><a href="/about" className="hover:text-primary-400 transition-colors">About Us</a></li>
                            <li><a href="/contact" className="hover:text-primary-400 transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-lg font-semibold">Services</h3>
                        <ul className="flex flex-col gap-3">
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Online Consultation</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Prescription Upload</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Medicine Refill</a></li>
                            <li><a href="#" className="hover:text-primary-400 transition-colors">Health Blog</a></li>
                        </ul>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h3 className="text-white text-lg font-semibold">Contact</h3>
                        <ul className="flex flex-col gap-3 text-sm">
                            <li className="flex items-center gap-3"><MapPin size={16} className="text-primary-500" /> Varanasi, Uttar Pradesh</li>
                            <li className="flex items-center gap-3"><Phone size={16} className="text-primary-500" /> +91 8934053743</li>
                            <li className="flex items-center gap-3"><Mail size={16} className="text-primary-500" /> makashkumarg@gmail.com</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-900 pt-8 text-center text-sm text-slate-500">
                    <p>&copy; {new Date().getFullYear()} LivCure. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
