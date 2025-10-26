import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-white">Garden Pro</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional gardening services and premium plants for your perfect outdoor space.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Services</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Shop</a></li>
              <li><a href="#booking" className="hover:text-green-500 transition-colors">Book Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-green-500 transition-colors">Garden Design</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Maintenance</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Plant Care</a></li>
              <li><a href="#" className="hover:text-green-500 transition-colors">Landscaping</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span>hello@gardenpro.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-500 mt-1" />
                <span>123 Garden Street<br />Green Valley, CA 90210</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Garden Pro Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
