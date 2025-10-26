import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

interface HeroProps {
  onBookVisit?: () => void;
  onShopPlants?: () => void;
}

export default function Hero({ onBookVisit, onShopPlants }: HeroProps) {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-green-50 to-lime-50">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1600&q=80')"
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-sm">
          <Leaf className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-800">Professional Garden Services</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Transform Your Garden Into
          <span className="block text-green-600 mt-2">A Natural Paradise</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-3xl mx-auto leading-relaxed">
          Expert gardening consultations and premium plants delivered to your doorstep. 
          Let us help you create the garden of your dreams.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all"
            onClick={onBookVisit}
          >
            Book a Visit
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg rounded-full shadow-md hover:shadow-lg transition-all"
            onClick={onShopPlants}
          >
            Shop Plants & Flowers
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
            <div className="text-3xl font-bold text-green-600">500+</div>
            <div className="text-sm text-gray-600 mt-1">Happy Clients</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
            <div className="text-3xl font-bold text-green-600">1000+</div>
            <div className="text-sm text-gray-600 mt-1">Plants Available</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 shadow-sm">
            <div className="text-3xl font-bold text-green-600">15+</div>
            <div className="text-sm text-gray-600 mt-1">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}
