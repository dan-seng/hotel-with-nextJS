import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email.trim()) {
      setError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    // If we get here, email is valid
    alert(`Subscribed to ${email}`);
    setEmail('');
  };

  const footerLinks = {
    explore: [
      { name: 'Rooms & Suites', href: '#rooms' },
      { name: 'Amenities', href: '#amenities' },
      { name: 'Gallery', href: '#gallery' },
      { name: 'Testimonials', href: '#testimonials' },
    ],
    services: [
      { name: 'Dining', href: '#' },
      { name: 'Spa & Wellness', href: '#' },
      { name: 'Events', href: '#' },
      { name: 'Business Center', href: '#' },
    ],
    policies: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cancellation Policy', href: '#' },
      { name: 'Accessibility', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      text: 'Addis Ababa, Ethiopia',
      href: '#',
    },
    {
      icon: Phone,
      text: '+251 945 012123',
      href: 'tel:+251945012123',
    },
    {
      icon: Mail,
      text: 'info@imperial.com',
      href: 'mailto:da16gi@gmail.com',
    },
  ];

  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <div className="flex flex-col">
                  <span className="text-white tracking-[0.3em] uppercase mb-1">Imperial</span>
                  <span className="text-white/60 tracking-[0.2em]">Residence</span>
                </div>
              </div>
              <p className="text-white/60 mb-8 leading-relaxed">
                Where timeless elegance meets modern luxury. Experience the pinnacle of hospitality in the heart of Manhattan.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-white mb-6">Explore</h4>
              <ul className="space-y-3">
                {footerLinks.explore.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors inline-block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-white mb-6">Contact</h4>
              <ul className="space-y-4">
                {contactInfo.map((info, index) => (
                  <li key={index}>
                    <a
                      href={info.href}
                      className="flex items-start gap-3 text-white/60 hover:text-white transition-colors group"
                    >
                      <info.icon className="w-5 h-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                      <span>{info.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-white mb-4">Stay Updated</h4>
            <p className="text-white/60 mb-6">
              Subscribe to receive exclusive offers and updates
            </p>
           <form 
  onSubmit={handleSubscribe} 
  className="flex flex-col gap-2 max-w-md mx-auto w-full"
>
  <div className="flex flex-col sm:flex-row gap-4 w-full">
    <div className="relative flex-1">
      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
        className={`w-full px-6 py-3 bg-white/10 border rounded-full text-white placeholder-white/40 focus:outline-none transition-colors ${
          error ? 'border-red-500' : 'border-white/20 focus:border-white/40'
        }`}
        aria-label="Email address"
        aria-invalid={!!error}
        aria-describedby={error ? 'email-error' : undefined}
      />
      {error && (
        <p 
          id="email-error" 
          className="absolute left-6 -bottom-5 text-red-400 text-xs mt-1 font-medium"
        >
          {error}
        </p>
      )}
    </div>
    <motion.button
      type="submit"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
    >
      Subscribe
    </motion.button>
  </div>
</form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              © 2026 Imperial Residence. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {footerLinks.policies.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-white/40 hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </footer>
  );
}
