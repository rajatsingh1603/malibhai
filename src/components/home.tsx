import { useRef } from "react";
import Hero from "./Hero";
import Services from "./Services";
import PlantShop from "./PlantShop";
import BookingForm from "./BookingForm";
import Footer from "./Footer";
import { Toaster } from "./ui/toaster";

function Home() {
  const bookingRef = useRef<HTMLDivElement>(null);
  const shopRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = () => {
    bookingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToShop = () => {
    shopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-white">
      <Hero onBookVisit={scrollToBooking} onShopPlants={scrollToShop} />
      <Services />
      <div ref={shopRef}>
        <PlantShop />
      </div>
      <div ref={bookingRef}>
        <BookingForm />
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default Home;