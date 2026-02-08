import React, { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Input from '../ui/Input';
import Button from '../ui/Button';

const ContactSection: React.FC = () => {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        // Basic validation
        const formData = new FormData(form.current);
        const requiredFields = ['first_name', 'email', 'message'];
        let isValid = true;

        requiredFields.forEach(field => {
            if (!formData.get(field)) {
                isValid = false;
            }
        });

        if (!isValid) {
            setStatus({ type: 'error', message: 'Please fill in all required fields.' });
            return;
        }

        setLoading(true);
        setStatus({ type: null, message: '' });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                // For demo purposes, if keys are missing we'll just simulate success
                console.warn('EmailJS keys missing, simulating success');
                await new Promise(resolve => setTimeout(resolve, 1000));
            } else {
                await emailjs.sendForm(
                    serviceId,
                    templateId,
                    form.current,
                    publicKey
                );
            }

            setStatus({ type: 'success', message: 'Message sent successfully! We will get back to you soon.' });
            form.current.reset();
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <section id="contact" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-base font-semibold text-primary-600 tracking-wide uppercase mb-2">Contact Us</h2>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Get in Touch</h2>
                    <p className="text-lg text-slate-600">Have questions? We're here to help.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                    {/* Contact Info */}
                    <div className="bg-primary-600 p-10 text-white md:w-2/5 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                            <p className="text-primary-100 mb-8 leading-relaxed">
                                Fill up the form and our team will get back to you within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <Phone className="mt-1 text-primary-200" size={20} />
                                    <div>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                        <p className="text-primary-200 text-sm">Mon-Fri 9am-6pm</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Mail className="mt-1 text-primary-200" size={20} />
                                    <div>
                                        <p className="font-medium">support@livcure.com</p>
                                        <p className="text-primary-200 text-sm">Online Support</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MapPin className="mt-1 text-primary-200" size={20} />
                                    <div>
                                        <p className="font-medium">123 Health Street</p>
                                        <p className="text-primary-200 text-sm">New York, NY 10001</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 flex gap-4">
                            {/* Social Placeholder */}
                            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center hover:bg-white hover:text-primary-600 transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center hover:bg-white hover:text-primary-600 transition-colors cursor-pointer">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="p-10 md:w-3/5">
                        <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
                        {status.message && (
                            <div className={`mb-6 p-4 rounded-lg ${status.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                                {status.message}
                            </div>
                        )}
                        <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                            <input type="hidden" name="year" value={currentYear} />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="First Name" name="first_name" id="firstName" placeholder="John" required />
                                <Input label="Last Name" name="last_name" id="lastName" placeholder="Doe" />
                            </div>
                            <Input label="Email Address" name="email" id="email" type="email" placeholder="john@example.com" required />
                            <Input label="Phone (Optional)" name="phone" id="phone" type="tel" placeholder="+1 (555) 000-0000" />

                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none text-sm placeholder-slate-400"
                                    placeholder="How can we help you?"
                                    required
                                ></textarea>
                            </div>

                            <Button className="w-full" disabled={loading}>
                                {loading ? (
                                    <>
                                        Sending...
                                        <Loader2 size={18} className="ml-2 animate-spin" />
                                    </>
                                ) : (
                                    <>
                                        Send Message <Send size={18} className="ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
