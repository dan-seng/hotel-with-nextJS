import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import Masonry from 'react-responsive-masonry';
import { ImageWithFallback } from './imagefall/ImageWithFallback';
import OnDev from './OnDev';
const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NDQwMDUxNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Luxury Hotel Lobby',
    height: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1534612899740-55c821a90129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN3aW1taW5nJTIwcG9vbHxlbnwxfHx8fDE3NjQ0MjE0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Swimming Pool',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1621873495868-6c5774cf6012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc2NDQwMzA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Fine Dining',
    height: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NjQ0NTQ0NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Spa & Wellness',
    height: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1729606452108-6ede0e040cc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJvb2Z0b3AlMjBiYXJ8ZW58MXx8fHwxNzY0NDAzMDQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Rooftop Bar',
    height: 'short',
  },
  {
    src: 'https://images.unsplash.com/photo-1653892793073-b44de72fd003?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQ0MTMxMDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Modern Architecture',
    height: 'medium',
  },
  {
    src: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGJlZHJvb218ZW58MXx8fHwxNzY0NDA2NzUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Luxury Bedroom',
    height: 'tall',
  },
  {
    src: 'https://images.unsplash.com/photo-1702411200201-3061d0eea802?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzdWl0ZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NDQ5NTEzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    alt: 'Suite Interior',
    height: 'short',
  },
];

export function GallerySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const bgOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3]);

  return (
    <section id="gallery" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity: bgOpacity }}
        className="absolute inset-0 -z-10"
      >
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1758194090785-8e09b7288199?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG90ZWwlMjBsb3VuZ2V8ZW58MXx8fHwxNzY0NDk3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Elegant Hotel Lounge"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90" />
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
            Visual Journey
          </motion.span>
          <h2 className="text-neutral-900 mb-6">
            Gallery
          </h2>
          <p className="text-neutral-600">
            Immerse yourself in the elegance and sophistication that defines our property
          </p>
        </motion.div>

        {/* Masonry Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 1 }}
        >
          <Masonry columnsCount={3} gutter="1.5rem">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="relative group overflow-hidden rounded-2xl cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    <ImageWithFallback
                      src={image.src}
                      alt={image.alt}
                      width={500}
                      height={750}
                      className={`w-full object-cover ${
                        image.height === 'tall' ? 'h-[600px]' :
                        image.height === 'short' ? 'h-[450px]' :
                        'h-[500px]'
                      }`}
                    />
                  </motion.div>
                  
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileHover={{ scale: 1, opacity: 1 }}
                      className="text-white text-center"
                    >
                      <p className="tracking-wider">{image.alt}</p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Masonry>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-16 lg:mt-24"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-neutral-900 text-white rounded-full hover:bg-neutral-800 transition-colors duration-300"
            onClick={() => alert('This page is under development.')}
          >
            View Full Gallery
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}