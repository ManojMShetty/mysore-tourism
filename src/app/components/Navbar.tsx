import { Link, useLocation } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export function Navbar() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-gradient-to-r from-amber-600 to-orange-500 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <MapPin className="h-8 w-8" />
            <div>
              <h1 className="text-2xl font-bold">Mysore Tourism</h1>
              <p className="text-sm text-amber-100">by Manoj MC</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/') ? 'bg-white text-amber-600 font-semibold' : 'hover:bg-amber-500'
              }`}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/gallery') ? 'bg-white text-amber-600 font-semibold' : 'hover:bg-amber-500'
              }`}
            >
              Gallery
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg transition-all ${
                isActive('/contact') ? 'bg-white text-amber-600 font-semibold' : 'hover:bg-amber-500'
              }`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+918951521128" className="flex items-center gap-2 hover:text-amber-100 transition">
              <Phone className="h-4 w-4" />
              <span className="text-sm">+91 8951521128</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
