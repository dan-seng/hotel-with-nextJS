import { motion } from 'motion/react';
import { Users, Maximize, Wifi, Coffee } from 'lucide-react';
import { ImageWithFallback } from './imagefall/ImageWithFallback';
import { useState, useRef } from 'react';
import { RoomDetailModal } from './RoomDetailModal';
import { useScroll, useTransform } from 'motion/react';

const rooms = [
  {
    id: 1,
    name: 'Deluxe Suite',
    price: '450',
    image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY0NDA2NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '450 sq ft',
    capacity: '2 Guests',
    description: 'Elegant retreat with modern amenities and stunning city views.',
    features: ['King Bed', 'City View', 'Marble Bathroom'],
  },
  {
    id: 2,
    name: 'Executive Suite',
    price: '680',
    image: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWl0ZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDQ5NTEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '650 sq ft',
    capacity: '3 Guests',
    description: 'Sophisticated space perfect for business and leisure travelers.',
    features: ['Premium Bedding', 'Work Desk', 'Living Area'],
  },
  {
    id: 3,
    name: 'Presidential Suite',
    price: '1200',
    image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY0NDA2NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '1200 sq ft',
    capacity: '4 Guests',
    description: 'Ultimate luxury with panoramic views and exclusive amenities.',
    features: ['Panoramic Views', 'Butler Service', 'Private Terrace'],
  },
  {
    id: 4,
    name: 'Penthouse',
    price: '2500',
    image: 'https://images.unsplash.com/photo-1723465308831-29da05e011f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NDQ3ODEyNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    size: '2000 sq ft',
    capacity: '6 Guests',
    description: 'Unparalleled opulence across two floors with private elevator access.',
    features: ['Private Pool', 'Wine Cellar', 'Cinema Room'],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export function RoomShowcase() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="rooms" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1693585576674-2e1b7166f583?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJhbGNvbnl8ZW58MXx8fHwxNzY0NDk3ODE2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Hotel Balcony"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white/95" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24"
        >
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-neutral-500 tracking-[0.3em] mb-4 uppercase"
          >
            Our Accommodations
          </motion.span>
          <h2 className="text-neutral-900 mb-6">
            Signature Rooms & Suites
          </h2>
          <p className="text-neutral-600">
            Each room is a masterpiece of design and comfort, crafted to provide an unforgettable experience
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={itemVariants}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                className="relative overflow-hidden rounded-3xl bg-white luxury-shadow"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Price Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="absolute top-6 right-6 glass-light px-4 py-2 rounded-full"
                  >
                    <span className="text-neutral-900">
                      ${room.price}<span className="text-sm text-neutral-600">/night</span>
                    </span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-neutral-900 mb-3">{room.name}</h3>
                  <p className="text-neutral-600 mb-4">{room.description}</p>

                  {/* Room Info */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Maximize className="w-4 h-4" />
                      <span className="text-sm">{room.size}</span>
                    </div>
                    <div className="flex items-center gap-2 text-neutral-500">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{room.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-neutral-100 text-neutral-700 rounded-full text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    onClick={() => setSelectedRoom(room)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300 cursor-pointer"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Room Detail Modal */}
      {selectedRoom && (
        <RoomDetailModal
          isOpen={!!selectedRoom}
          onClose={() => setSelectedRoom(null)}
          room={selectedRoom}
        />
      )}
    </section>
  );
}