import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Car, Menu, X } from "lucide-react";
import { Button } from "./lightswind/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/inventory", label: "Inventory" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const activeLinkStyle = {
    color: '#3b82f6', // blue-500
  };

  const getLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-zinc-300 hover:text-blue-400 transition-colors duration-300 ${isActive ? 'text-blue-500 font-semibold' : ''}`;


  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-lg border-b border-zinc-800">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2">
          <Car className="w-8 h-8 text-blue-500" />
          <span className="text-2xl font-bold text-white">AutoLux</span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={getLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" className="text-white border-zinc-700 hover:bg-zinc-800 hover:text-white">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Sign Up
            </Button>
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-white p-2">
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black z-50 lg:hidden"
          >
            <div className="flex justify-between items-center p-4 border-b border-zinc-800 h-20">
              <Link to="/" className="flex items-center gap-2">
                <Car className="w-8 h-8 text-blue-500" />
                <span className="text-2xl font-bold text-white">AutoLux</span>
              </Link>
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                  className="text-2xl text-zinc-300 hover:text-blue-400 transition-colors duration-300"
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex flex-col gap-4 w-full px-8 mt-8">
                  <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
                    <Button variant="outline" className="w-full text-white border-zinc-700 hover:bg-zinc-800 hover:text-white text-lg py-6">
                      Log In
                    </Button>
                  </Link>
                  <Link to="/register" onClick={() => setMobileMenuOpen(false)}>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-lg py-6">
                      Sign Up
                    </Button>
                  </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
