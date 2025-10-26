import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, Ruler, MessageSquare, CheckCircle2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export default function BookingForm() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    gardenSize: "",
    needs: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you within 24 hours to confirm your consultation.",
    });
  };

  if (submitted) {
    return (
      <section id="booking" className="py-24 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <Card className="border-green-200 shadow-xl">
            <CardContent className="pt-12 pb-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Booking Confirmed!</h3>
              <p className="text-lg text-gray-600 mb-8">
                Thank you for choosing Garden Pro Services. We've received your consultation request and will contact you within 24 hours to confirm the details.
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                Book Another Visit
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-24 bg-white">
      <div className="max-w-2xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Book Your Garden Consultation
          </h2>
          <p className="text-xl text-gray-600">
            Fill out the form below and we'll get back to you shortly
          </p>
        </div>
        
        <Card className="shadow-xl border-gray-200">
          <CardHeader>
            <CardTitle className="text-2xl">Consultation Details</CardTitle>
            <CardDescription className="text-base">
              Please provide your information and preferred visit details
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input 
                    id="email" 
                    type="email"
                    placeholder="john@example.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number *</Label>
                <Input 
                  id="phone" 
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Preferred Date *
                  </Label>
                  <Input 
                    id="date" 
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="time" className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    Preferred Time *
                  </Label>
                  <Select 
                    value={formData.time}
                    onValueChange={(value) => setFormData({...formData, time: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="9am">9:00 AM</SelectItem>
                      <SelectItem value="10am">10:00 AM</SelectItem>
                      <SelectItem value="11am">11:00 AM</SelectItem>
                      <SelectItem value="1pm">1:00 PM</SelectItem>
                      <SelectItem value="2pm">2:00 PM</SelectItem>
                      <SelectItem value="3pm">3:00 PM</SelectItem>
                      <SelectItem value="4pm">4:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="gardenSize" className="flex items-center gap-2">
                  <Ruler className="w-4 h-4" />
                  Garden Size *
                </Label>
                <Select 
                  value={formData.gardenSize}
                  onValueChange={(value) => setFormData({...formData, gardenSize: value})}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select garden size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (under 500 sq ft)</SelectItem>
                    <SelectItem value="medium">Medium (500-1500 sq ft)</SelectItem>
                    <SelectItem value="large">Large (1500-5000 sq ft)</SelectItem>
                    <SelectItem value="estate">Estate (over 5000 sq ft)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="needs" className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  Specific Needs & Requirements
                </Label>
                <Textarea 
                  id="needs"
                  placeholder="Tell us about your garden goals, challenges, or any specific plants you're interested in..."
                  rows={5}
                  value={formData.needs}
                  onChange={(e) => setFormData({...formData, needs: e.target.value})}
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg rounded-lg"
              >
                Submit Booking Request
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
