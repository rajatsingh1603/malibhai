import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Sprout, Flower2, TreeDeciduous, Scissors, Droplets } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Garden Cleaning",
    description: "Professional cleaning and maintenance to keep your garden pristine and healthy",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80"
  },
  {
    icon: Sprout,
    title: "Planting Services",
    description: "Expert planting of flowers, shrubs, and trees with proper soil preparation",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80"
  },
  {
    icon: TreeDeciduous,
    title: "Installing Pots",
    description: "Beautiful pot installations and container gardening solutions for any space",
    image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80"
  },
  {
    icon: Scissors,
    title: "Pruning & Trimming",
    description: "Professional pruning and trimming to maintain plant health and aesthetics",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80"
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Installation and maintenance of efficient watering systems for your garden",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80"
  },
  {
    icon: Flower2,
    title: "Landscape Design",
    description: "Custom landscape design and implementation for stunning outdoor spaces",
    image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80"
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Garden Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional services to transform and maintain your garden
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex gap-6 animate-scroll px-6">
          {[...services, ...services].map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="flex-shrink-0 w-[350px] border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
      
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}