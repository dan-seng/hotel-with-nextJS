import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Rooms', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Booking', href: '#booking' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass py-3' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            className="relative z-50"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex flex-col">
              <span className="text-white tracking-[0.3em] uppercase impr">Imperial</span>
              <span className="text-white/60 tracking-[0.2em] -mt-1 impr">Residence</span>
            </div>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-white/80 hover:text-white transition-colors duration-300 tracking-wide"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a
              href="tel:+1234567890"
              className="flex items-center gap-2 text-white/80 hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Phone className="w-4 h-4" />
              <span>+251 945 012123</span>
            </motion.a>
            <motion.a
              href="#booking"
              className="px-6 py-2.5 bg-white text-black rounded-full hover:bg-white/90 transition-all duration-300 tracking-wide"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(255,255,255,0.3)' }}
              whileTap={{ scale: 0.95 }}
            >
              Book Now
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden text-white z-50 relative"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className="text-white text-2xl tracking-wide"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="#booking"
                className="px-8 py-3 bg-white text-black rounded-full mt-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
