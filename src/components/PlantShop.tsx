import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, ExternalLink } from "lucide-react";

const featuredPlants = [
  {
    name: "Monstera Deliciosa",
    price: "$45",
    image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&q=80",
    category: "Indoor",
    inStock: true
  },
  {
    name: "Fiddle Leaf Fig",
    price: "$65",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=400&q=80",
    category: "Indoor",
    inStock: true
  },
  {
    name: "Snake Plant",
    price: "$35",
    image: "https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=400&q=80",
    category: "Indoor",
    inStock: true
  },
  {
    name: "Peace Lily",
    price: "$28",
    image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5?w=400&q=80",
    category: "Indoor",
    inStock: true
  },
  {
    name: "Lavender Plant",
    price: "$22",
    image: "https://images.unsplash.com/photo-1611251184364-23f1a4d8c1dc?w=400&q=80",
    category: "Outdoor",
    inStock: true
  },
  {
    name: "Rose Bush",
    price: "$38",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&q=80",
    category: "Outdoor",
    inStock: true
  }
];

export default function PlantShop() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Plants & Flowers
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Handpicked selection of premium plants for your garden
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredPlants.map((plant, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-gray-200">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={plant.image} 
                  alt={plant.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                  {plant.category}
                </Badge>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{plant.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-green-600">{plant.price}</span>
                  <span className="text-sm text-green-600 font-medium">In Stock</span>
                </div>
              </CardContent>
              
              <CardFooter className="p-6 pt-0">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 text-lg rounded-lg shadow-md hover:shadow-lg transition-all"
          >
            View Full Dukan Store
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
}
