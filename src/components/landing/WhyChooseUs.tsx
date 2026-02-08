import React from 'react';
import { ShieldCheck, Clock, Award, HeartHandshake } from 'lucide-react';

const WhyChooseUs: React.FC = () => {
    const features = [
        {
            id: 1,
            icon: <ShieldCheck size={28} />,
            title: 'Genuine Medicines',
            description: 'We source directly from licensed manufacturers to ensure 100% authenticity.',
        },
        {
            id: 2,
            icon: <Award size={28} />,
            title: 'Licensed Pharmacy',
            description: 'Fully compliant with all pharmacy regulations and safety standards.',
        },
        {
            id: 3,
            icon: <Clock size={28} />,
            title: '24/7 Support',
            description: 'Our pharmacists and support team are available round the clock.',
        },
        {
            id: 4,
            icon: <HeartHandshake size={28} />,
            title: 'Fast & Secure',
            description: 'Safe packaging and speedy delivery to your doorstep.',
        },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">Why Choose Us</h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Trusted Healthcare Partner</h2>
                    <p className="text-lg text-slate-600">We are committed to providing the best healthcare experience.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="group bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 hover:border-primary-100 transition-all duration-300 hover:-translate-y-1">
                            <div className="w-14 h-14 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-primary-700 transition-colors">{feature.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
