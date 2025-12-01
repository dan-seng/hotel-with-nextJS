import { motion, easeOut } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    id: 1,
    name: 'Tsion',
    title: 'CEO, Tech Innovations',
    rating: 5,
    content: 'An absolutely breathtaking experience. The attention to detail, impeccable service, and stunning views made our anniversary celebration unforgettable. Worth every penny.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAXD4LRO9Hl_ki8fxVeUL5cT3D9Np89KPVKQ&s',
  },
  {
    id: 2,
    name: 'Hamelmal',
    title: 'Fashion Designer',
    rating: 5,
    content: "I've stayed in luxury hotels worldwide, but this one sets a new standard. The Presidential Suite is a masterpiece, and the staff anticipated every need before I could ask.",
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMNynlCBY6il67WpDys3igvkAA4laGOv9TRQ&s',
  },
  {
    id: 3,
    name: 'Getachew',
    title: 'Travel Blogger',
    rating: 5,
    content: 'Pure elegance and sophistication. From the moment you step into the lobby, you know you\'re somewhere special. The spa treatments were divine, and the rooftop bar at sunset is magical.',
    image: 'https://t4.ftcdn.net/jpg/04/17/02/97/360_F_417029760_68s9omoxN9o8UX1ipcJX9t1viOlXSCSP.jpg',
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

export function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity: bgOpacity }}
        className="absolute inset-0 -z-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmNpZXJnZSUyMGRlc2t8ZW58MXx8fHwxNzY0NDk3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Hotel Concierge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/95 via-white/90 to-white/95" />
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
            className="inline-block text-neutral-500 tracking-[0.3em] mb-4 uppercase"
          >
            Guest Experiences
          </motion.span>
          <h2 className="text-neutral-900 mb-6">
            What Our Guests Say
          </h2>
          <p className="text-neutral-600">
            Discover why discerning travelers choose us for their most memorable stays
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative bg-white p-8 rounded-3xl luxury-shadow h-full flex flex-col transition-all duration-500 hover:shadow-2xl">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neutral-900 rounded-full flex items-center justify-center">
                  <Quote className="w-6 h-6 text-white fill-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-neutral-700 mb-8 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-neutral-100">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-neutral-900">{testimonial.name}</h4>
                    <p className="text-neutral-500 text-sm">{testimonial.title}</p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-neutral-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 lg:mt-32"
        >
          {[
            { number: '98%', label: 'Guest Satisfaction' },
            { number: '4.9', label: 'Average Rating' },
            { number: '15K+', label: 'Happy Guests' },
            { number: '50+', label: 'Awards Won' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.4 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="mb-2"
              >
                <span className="text-neutral-900 block">{stat.number}</span>
              </motion.div>
              <p className="text-neutral-600">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}