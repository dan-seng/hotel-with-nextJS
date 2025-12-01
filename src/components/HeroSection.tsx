import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  return (
    <section ref={sectionRef} className="relative h-screen w-full overflow-hidden">
    <div className='mt-20'>
        {/* Parallax Background */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%]">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NDQwMDUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Luxury Hotel Lobby"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Content Container */}
      <motion.div style={{ opacity }} className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl">

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-white mb-6 text-center hero"
            >
               Where Elegance
              <br />
              Meets Perfection
            </motion.h1>

           <div   className='flex justify-between'>
             {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-white/80 max-w-2xl mb-8 lg:mb-8 hero-desc"
            >
              Experience unparalleled luxury in the heart of the city. Every moment crafted to perfection,
              every detail designed for your ultimate comfort.
            </motion.p>

                        {/* Glass Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex glass items-center p-2 rounded-full mb-10 text-white/50"
            >
             5-<Star className="w-2 h-2 text-yellow-400 fill-yellow-400" /> Luxury Experience
            </motion.div>

           </div>

            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex items-center gap-2 text-white/70 mb-10"
            >
              <MapPin className="w-5 h-5" />
              <span>Addis Ababa, Ethiopia</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.a
                href="#booking"
                className="px-8 py-4 bg-white text-black rounded-full inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-all duration-300 group"
                whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(255,255,255,0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Reserve Your Stay</span>
              </motion.a>

              <motion.a
                href="#rooms"
                className="px-8 py-4 glass text-white rounded-full inline-flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Rooms
              </motion.a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/60 cursor-pointer"
        >
          <span className="tracking-widest">SCROLL</span>
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Decorative Glass Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute top-1/4 right-10 w-32 h-32 glass rounded-full hidden xl:block"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
        className="absolute bottom-1/4 right-32 w-20 h-20 glass rounded-full hidden xl:block"
      />
    </div>
    </section>
  );
}
