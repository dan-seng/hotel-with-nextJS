import { motion, easeOut } from 'motion/react';
import { Waves, Utensils, Dumbbell, Wifi, Car, Wind, Sparkles, Wine } from 'lucide-react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './imagefall/ImageWithFallback';

const amenities = [
  {
    icon: Waves,
    title: 'Infinity Pool',
    description: 'Rooftop infinity pool with panoramic city skyline views',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Utensils,
    title: 'Fine Dining',
    description: 'Michelin-starred restaurant and 24/7 room service',
    image: 'https://www.visitstaugustine.com/sites/default/files/styles/hero_desktop/public/2022-08/fine-dining-st-augustine-25x15-WEB.jpg?itok=wrNM3_fo',
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym with personal training available',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Sparkles,
    title: 'Luxury Spa',
    description: 'Full-service spa with rejuvenating treatments',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJnT828hlOAKhZ3tgPwQuqh5nhs5RGb4WzLg&s',
  },
  {
    icon: Wine,
    title: 'Rooftop Bar',
    description: 'Premium cocktails and wines with stunning sunset views',
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Wifi,
    title: 'High-Speed WiFi',
    description: 'Complimentary fiber-optic internet throughout',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.1.0&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: Car,
    title: 'Valet Service',
    description: 'Premium valet parking and luxury car rental',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4YJTgda9GOOMFgPzWxEYDb9luUxrhgLbGy8fcejpA0rkC0es4epqlDxPZQI2YPKK4A0&usqp=CAU',
  },
  {
    icon: Wind,
    title: 'Climate Control',
    description: 'Smart climate systems in every room',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsD8ihlWOEhH4TjaqeyVZgpuJK-PdLr1AyuA&s',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOut,
    },
  },
};

export function AmenitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.5, 1, 1, 0.5]);

  return (
    <section id="amenities" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1574755851171-8959b8334d6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGd5bSUyMGZpdG5lc3N8ZW58MXx8fHwxNzY0NDk3ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Fitness Center"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
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
            className="inline-block text-white/60 tracking-[0.3em] mb-4 uppercase"
          >
            World-Class Facilities
          </motion.span>
          <h2 className="text-white mb-6">
            Premium Amenities
          </h2>
          <p className="text-white/70">
            Every detail curated to elevate your experience beyond expectations
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
         {amenities.map((amenity, index) => {
  const Icon = amenity.icon;
  return (
    <motion.div
      key={index}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group relative overflow-hidden rounded-2xl h-[300px]"
    >
      {/* Image Background */}
      <div className="absolute inset-0 -z-10">
        <ImageWithFallback
          src={amenity.image}
          alt={amenity.title}
          className="w-full h-full object-cover"
        />
        {/* Dim Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative p-8 h-full flex flex-col justify-end transition-all duration-500 bg-black/40">
        {/* Icon Container */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:bg-white/30 transition-all duration-500"
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>

        {/* Content */}
        <h4 className="text-white text-2xl font-bold mb-2 drop-shadow-md">{amenity.title}</h4>
        <p className="text-white text-sm rounded-2xl p-5 leading-relaxed drop-shadow-sm">
          {amenity.description}
        </p>

        {/* Hover Effect */}
        <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/20 transition-all duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
})}

        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 lg:mt-24"
        >
          <p className="text-white/60 mb-6">
            Discover more exclusive services and personalized experiences
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass-light text-neutral-900 rounded-full hover:bg-white transition-all duration-300"
          >
            View All Amenities
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}