import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { RoomShowcase } from './components/RoomShowcase';
import { AmenitiesSection } from './components/AmenitiesSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import AddressSection from './components/AddressSection';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <RoomShowcase />
        <AmenitiesSection />
        <GallerySection />
        <TestimonialsSection />
        <BookingSection />
       
      </main>
       <AddressSection />
      <Footer />
    </div>
  );
}