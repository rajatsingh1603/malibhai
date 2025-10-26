import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sprout, TreeDeciduous, Flower2 } from "lucide-react";

interface ServicesProps {
  onBookConsultation?: () => void;
}

const services = [
  {
    icon: Sprout,
    title: "Basic Consultation",
    price: "$99",
    description: "Perfect for small gardens and beginners",
    features: [
      "1-hour garden assessment",
      "Personalized plant recommendations",
      "Basic maintenance guide",
      "Email support for 1 month"
    ]
  },
  {
    icon: TreeDeciduous,
    title: "Premium Consultation",
    price: "$199",
    description: "Comprehensive service for medium gardens",
    features: [
      "2-hour detailed assessment",
      "Custom garden design plan",
      "Seasonal planting schedule",
      "3 months of support",
      "Soil testing & analysis"
    ],
    popular: true
  },
  {
    icon: Flower2,
    title: "Elite Package",
    price: "$399",
    description: "Complete transformation for large estates",
    features: [
      "Full-day consultation",
      "Professional landscape design",
      "Year-round maintenance plan",
      "Unlimited support",
      "Priority plant sourcing",
      "Quarterly follow-up visits"
    ]
  }
];

export default function Services({ onBookConsultation }: ServicesProps) {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Gardening Consultations
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the perfect service package for your garden's needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`relative flex flex-col ${
                  service.popular 
                    ? 'border-green-500 border-2 shadow-xl scale-105' 
                    : 'border-gray-200 shadow-md'
                } hover:shadow-2xl transition-all duration-300`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{service.price}</span>
                    <span className="text-gray-600">/visit</span>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                
                <CardFooter>
                  <Button 
                    className={`w-full ${
                      service.popular 
                        ? 'bg-green-600 hover:bg-green-700' 
                        : 'bg-gray-900 hover:bg-gray-800'
                    } text-white py-6 rounded-lg`}
                    onClick={onBookConsultation}
                  >
                    Book Consultation
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
