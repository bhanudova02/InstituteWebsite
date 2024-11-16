import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Laptop, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Events', href: '/events' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <Laptop className="h-8 w-8 text-blue-600" />
              <GraduationCap className="h-8 w-8 text-green-600" />
              <span className="font-bold text-xl text-gray-900">TechEdu Institute</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                } px-3 py-2 text-sm font-medium transition-colors duration-200`}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/registration"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Enroll Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  isActive(item.href)
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/registration"
              className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Enroll Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;