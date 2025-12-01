import { motion } from 'motion/react';
import { Calendar, Users, Bed, CreditCard } from 'lucide-react';
import { useState, useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function BookingSection() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: 'deluxe',
  });

  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking submission
    console.log('Booking submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="booking" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity: bgOpacity }}
        className="absolute inset-0 -z-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1729606452108-6ede0e040cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb2Z0b3AlMjBiYXJ8ZW58MXx8fHwxNzY0NDAzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Rooftop Bar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-900/93" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block text-white/60 tracking-[0.3em] mb-4 uppercase"
            >
              Reserve Your Experience
            </motion.span>
            <h2 className="text-white mb-6">
              Book Your Stay
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Choose your dates and preferences to begin your journey into luxury. Our team is ready to make your stay extraordinary.
            </p>

            {/* Features List */}
            <div className="space-y-4">
              {[
                { icon: CreditCard, text: 'Flexible payment options' },
                { icon: Calendar, text: 'Free cancellation up to 48 hours' },
                { icon: Bed, text: 'Best rate guarantee' },
                { icon: Users, text: 'Personalized concierge service' },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="flex items-center gap-4 text-white/80"
                >
                  <div className="w-10 h-10 glass rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <span>{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="glass p-8 lg:p-10 rounded-3xl backdrop-blur-xl">
              <div className="space-y-6">
                {/* Check In */}
                <div>
                  <label htmlFor="checkIn" className="block text-white mb-2">
                    Check In
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Check Out */}
                <div>
                  <label htmlFor="checkOut" className="block text-white mb-2">
                    Check Out
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-white/40 transition-colors"
                      required
                    />
                  </div>
                </div>

                {/* Guests */}
                <div>
                  <label htmlFor="guests" className="block text-white mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num} className="bg-neutral-900">
                          {num} {num === 1 ? 'Guest' : 'Guests'}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label htmlFor="roomType" className="block text-white mb-2">
                    Room Type
                  </label>
                  <div className="relative">
                    <Bed className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                    <select
                      id="roomType"
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-white/40 transition-colors appearance-none cursor-pointer"
                    >
                      <option value="deluxe" className="bg-neutral-900">Deluxe Suite</option>
                      <option value="executive" className="bg-neutral-900">Executive Suite</option>
                      <option value="presidential" className="bg-neutral-900">Presidential Suite</option>
                      <option value="penthouse" className="bg-neutral-900">Penthouse</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-white text-neutral-900 rounded-xl hover:bg-white/90 transition-colors duration-300 mt-2"
                >
                  Check Availability
                </motion.button>

                {/* Help Text */}
                <p className="text-white/50 text-center text-sm">
                  Need assistance? Call us at{' '}
                  <a href="tel:+1234567890" className="text-white hover:underline">
                    +1 (234) 567-890
                  </a>
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}