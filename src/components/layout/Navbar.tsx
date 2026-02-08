import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Pill } from 'lucide-react';
import classNames from 'classnames';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/#home' },
    { name: 'How It Works', path: '/#how-it-works' },
    { name: 'Medicines', path: '/medicines' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b border-white/20 shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo(0, 0)}>
            <div className="bg-gradient-to-br from-primary-400 to-primary-600 p-2 rounded-xl shadow-lg shadow-primary-500/30 group-hover:shadow-primary-500/50 transition-all duration-300">
              <Pill size={24} className="text-white" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-700 to-primary-500">
              LivCure
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.path}
                className={classNames('text-sm font-medium transition-all duration-200 hover:text-primary-600 relative py-1', {
                  'text-primary-600': location.hash === link.path.substring(1),
                  'text-slate-600': location.hash !== link.path.substring(1),
                })}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex gap-4 items-center">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary-600 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-primary-500 to-primary-600 rounded-full shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={classNames(
          'md:hidden absolute top-16 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl transition-all duration-300 ease-in-out origin-top',
          {
            'opacity-100 scale-y-100': isOpen,
            'opacity-0 scale-y-0': !isOpen,
          }
        )}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={classNames('block px-4 py-3 rounded-xl text-base font-medium transition-colors', {
                'bg-primary-50 text-primary-700': location.hash === link.path.substring(1),
                'text-slate-600 hover:bg-slate-50 hover:text-primary-600': location.hash !== link.path.substring(1),
              })}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 mt-4 border-t border-slate-100 grid grid-cols-2 gap-4">
            <Link
              to="/login"
              className="flex justify-center items-center px-4 py-3 rounded-xl border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="flex justify-center items-center px-4 py-3 rounded-xl bg-primary-500 text-white font-medium hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/30"
              onClick={() => setIsOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};


export default Navbar;
