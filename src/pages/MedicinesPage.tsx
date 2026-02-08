import React from 'react';
import { Search, Filter, ShoppingCart, Plus } from 'lucide-react';
import Button from '../components/ui/Button';

const MedicinesPage: React.FC = () => {
    const categories = ['All', 'Pain Relief', 'Antibiotics', 'Vitamins', 'First Aid', 'Skincare'];

    const products = [
        { id: 1, name: 'Paracetamol 500mg', category: 'Pain Relief', price: '$12.00', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400', stock: true },
        { id: 2, name: 'Amoxicillin 250mg', category: 'Antibiotics', price: '$24.50', image: 'https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&q=80&w=400', stock: true },
        { id: 3, name: 'Vitamin C 1000mg', category: 'Vitamins', price: '$18.00', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=400', stock: true },
        { id: 4, name: 'Bandages Pack', category: 'First Aid', price: '$5.50', image: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400', stock: true },
        { id: 5, name: 'Aloe Vera Gel', category: 'Skincare', price: '$15.00', image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=400', stock: true },
        { id: 6, name: 'Ibuprofen 400mg', category: 'Pain Relief', price: '$10.00', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=400', stock: false },
    ];

    return (
        <div className="py-12 bg-gray-50/50 min-h-screen">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">Medicines</h1>
                        <p className="text-slate-500 mt-1">Browse and order your required medicines</p>
                    </div>
                    <div className="w-full md:w-auto flex gap-3">
                        <div className="relative flex-1 md:w-80">
                            <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Search medicines..."
                                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500 transition-all text-sm"
                            />
                        </div>
                        <button className="p-2.5 bg-white border border-slate-200 rounded-xl text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors">
                            <Filter size={20} />
                        </button>
                    </div>
                </div>

                {/* Categories */}
                <div className="flex overflow-x-auto pb-4 gap-3 mb-8 no-scrollbar">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all
                            ${index === 0
                                    ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:border-slate-300'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group">
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100 mb-4">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                {!product.stock && (
                                    <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center">
                                        <span className="px-3 py-1 bg-slate-800 text-white text-xs font-bold rounded-full">Out of Stock</span>
                                    </div>
                                )}
                                {product.stock && (
                                    <button className="absolute bottom-3 right-3 p-2 bg-white rounded-full shadow-lg text-slate-700 hover:text-primary-600 hover:scale-110 transition-all opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                                        <Plus size={20} />
                                    </button>
                                )}
                            </div>
                            <div>
                                <span className="text-xs text-primary-600 font-semibold uppercase tracking-wider">{product.category}</span>
                                <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2 group-hover:text-primary-700 transition-colors">{product.name}</h3>
                                <div className="flex items-center justify-between">
                                    <span className="text-xl font-bold text-slate-900">{product.price}</span>
                                    <Button size="sm" variant={product.stock ? 'primary' : 'secondary'} disabled={!product.stock} className="rounded-lg">
                                        <ShoppingCart size={16} className="mr-2" />
                                        Add
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MedicinesPage;
