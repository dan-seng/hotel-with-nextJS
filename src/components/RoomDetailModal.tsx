import { motion, AnimatePresence } from 'motion/react';
import { X, Users, Maximize, Wifi, Tv, Coffee, Wind, Bath, Check } from 'lucide-react';


interface RoomDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  room: {
    id: number;
    name: string;
    price: string;
    image: string;
    size: string;
    capacity: string;
    description: string;
    features: string[];
  };
}

const roomAmenities = [
  { icon: Wifi, name: 'High-Speed WiFi' },
  { icon: Tv, name: '65" Smart TV' },
  { icon: Coffee, name: 'Coffee Maker' },
  { icon: Wind, name: 'Climate Control' },
  { icon: Bath, name: 'Premium Bath' },
  { icon: Users, name: 'Concierge Service' },
];

const includedServices = [
  'Daily housekeeping',
  'Premium toiletries',
  'Complimentary breakfast',
  'Mini bar access',
  'In-room safe',
  'Iron & ironing board',
  'Bathrobes & slippers',
  '24/7 room service',
];

export function RoomDetailModal({ isOpen, onClose, room }: RoomDetailModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto p-5">
            <div className="flex min-h-full items-center justify-center p-2 md:p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative bg-white rounded-3xl w-[95vw] max-w-2xl max-h-[80vh] flex flex-col luxury-shadow overflow-hidden"
              >
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-neutral-900" />
                </motion.button>

                {/* Image Header */}
                <div className="relative h-35 md:h-36 overflow-hidden">
                  <img  
                    src={room.image}
                    alt={room.name}
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm shadow-sm">
                    <span className="text-neutral-900">
                      ${room.price}
                      <span className="text-sm text-neutral-600">/night</span>
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 md:p-4 flex-1 overflow-y-auto">
                  {/* Header */}
                  <div className="mb-8">
                    <h2 className="text-xl font-medium text-neutral-900 mb-2">{room.name}</h2>
                    <p className="text-sm text-neutral-600 mb-4">{room.description}</p>

                    {/* Room Info */}
                    <div className="flex flex-wrap gap-4 sm:gap-6">
                      <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                        <Maximize className="w-5 h-5" />
                        <span>{room.size}</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-sm text-neutral-500">
                        <Users className="w-5 h-5" />
                        <span>{room.capacity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Amenities Grid */}
                  <div className="mb-8">
                    <h4 className="text-neutral-900 mb-4">Room Amenities</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {roomAmenities.map((amenity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-1.5 p-1.5 bg-neutral-50 rounded-lg text-xs"
                        >
                          <amenity.icon className="w-4 h-4 text-neutral-600" />
                          <span className="text-neutral-700 text-xs">{amenity.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-neutral-900 mb-4">Key Features</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {room.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-neutral-100 text-neutral-800 rounded-full text-[11px]"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Included Services */}
                  <div className="mb-8">
                    <h4 className="text-neutral-900 mb-4">Included Services</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                      {includedServices.map((service, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="flex items-center gap-2 text-sm text-neutral-600"
                        >
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span>{service}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-4 border-t border-neutral-200">
                    <motion.a
                      href="#booking"
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-2.5 text-sm bg-neutral-900 text-white rounded-full text-center hover:bg-neutral-800 transition-colors"
                    >
                      Book This Room
                    </motion.a>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-2.5 text-sm border border-neutral-300 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
                    >
                      Continue Browsing
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
