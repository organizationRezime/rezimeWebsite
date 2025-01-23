import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-md`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src='/LogoBg.png' alt='Rezime Edtech Logo' className='w-[10rem]' />
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" active={location.pathname === "/"}>
                Home
              </NavLink>
              <NavLink to="/about" active={location.pathname === "/about"}>
                About Us
              </NavLink>
              <NavLink to="/contact" active={location.pathname === "/contact"}>
                Contact Us
              </NavLink>
            </div>
          </div>
          <div className="hidden md:block">
            <a 
              target='_blank' 
              href="https://forms.gle/KX16pa8iL7LDRs826" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Invite Us
            </a>
          </div>
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-gray-800 hover:text-gray-600"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" active={location.pathname === "/"}>
              Home
            </MobileNavLink>
            <MobileNavLink to="/about" active={location.pathname === "/about"}>
              About Us
            </MobileNavLink>
            <MobileNavLink to="/contact" active={location.pathname === "/contact"}>
              Contact Us
            </MobileNavLink>
          </div>
          <div className="px-4 py-3">
            <a 
              target='_blank' 
              href='https://forms.gle/KX16pa8iL7LDRs826' 
              className="block text-center w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105"
            >
              Invite Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function NavLink({ to, children, active }) {
  return (
    <Link 
      to={to} 
      className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out
        ${active 
          ? 'text-indigo-600 font-semibold bg-indigo-50' 
          : 'text-gray-800 hover:text-indigo-600 hover:bg-indigo-50'
        }`}
    >
      {children}
    </Link>
  );
}

function MobileNavLink({ to, children, active }) {
  return (
    <Link 
      to={to} 
      className={`block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out
        ${active 
          ? 'text-indigo-600 bg-indigo-50 font-semibold' 
          : 'text-gray-800 hover:bg-indigo-50 hover:text-indigo-600'
        }`}
    >
      {children}
    </Link>
  );
}