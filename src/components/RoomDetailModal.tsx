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
            <div className="flex min-h-screen items-start justify-center p-4 pt-16 md:items-center md:pt-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative bg-white rounded-3xl w-[95vw] max-w-4xl max-h-[85vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
                >
                {/* Close Button */}
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-md cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 text-neutral-900" />
                </motion.button>
                
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20" />
                  {/* Price Badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute top-6 right-6 bg-yellow-400/90 px-5 py-2.5 rounded-full shadow-md"
                  >
                    <span className="text-lg font-medium text-neutral-900">
                      ${room.price}
                      <span className="text-sm font-normal text-neutral-600">/night</span>
                    </span>
                  </motion.div>
             

                {/* Content */}
                <div className="p-4 md:p-6 flex-1 overflow-y-auto">
                  {/* Header */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-full">
                    {/* Left Column - Room Info & Image */}
                    <div className="space-y-4">
                      <div>
                        <h2 className="text-2xl font-medium text-neutral-900 mb-2">{room.name}</h2>
                        <p className="text-sm text-neutral-600 mb-4 line-clamp-2">{room.description}</p>
                        
                        <div className="flex items-center gap-6 text-sm text-neutral-700 mb-4">
                          <div className="flex items-center gap-1.5">
                            <Maximize className="w-4 h-4" />
                            <span>{room.size}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Users className="w-4 h-4" />
                            <span>{room.capacity}</span>
                          </div>
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100">
                        <img  
                          src={room.image}
                          alt={room.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/50 to-transparent" />
                        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-medium">
                          ${room.price} <span className="text-neutral-600">/night</span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Amenities & Services */}
                    <div className="grid grid-rows-2 gap-4 h-full">
                      {/* Amenities */}
                      <div className="bg-neutral-50 p-4 rounded-xl">
                        <h4 className="font-medium text-neutral-900 mb-3">Room Amenities</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {roomAmenities.map((amenity, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <amenity.icon className="w-4 h-4 text-neutral-600 flex-shrink-0" />
                              <span className="text-neutral-700 truncate">{amenity.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Services */}
                      <div className="bg-neutral-50 p-4 rounded-xl">
                        <h4 className="font-medium text-neutral-900 mb-3">Included Services</h4>
                        <div className="space-y-2">
                          {includedServices.map((service, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                <Check className="w-2.5 h-2.5 text-green-600" />
                              </div>
                              <span className="text-neutral-700">{service}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-4 mt-4 border-t border-neutral-200 relative z-10">
                    <motion.a
                      href="#booking"
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-2.5 text-sm bg-neutral-900 text-white rounded-full text-center hover:bg-neutral-800 transition-colors cursor-pointer"
                    >
                      Book This Room
                    </motion.a>
                    <motion.button
                      onClick={onClose}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 py-2.5 text-sm border border-neutral-300 text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors cursor-pointer"
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
