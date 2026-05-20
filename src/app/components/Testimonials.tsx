import { Card } from "./ui/card";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Volunteer",
      initials: "SJ",
      text: "Being part of InAmigos Foundation has been incredibly rewarding. Seeing the smiles on children's faces when they receive educational support is priceless. This organization truly makes a difference!"
    },
    {
      name: "Michael Chen",
      role: "Donor",
      initials: "MC",
      text: "I've been supporting InAmigos for two years now. Their transparency and dedication to helping communities is outstanding. It's wonderful to see my contributions making a real impact."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say</h2>
          <p className="text-lg text-gray-600">Stories from our volunteers and supporters</p>
        </div>
        
        <div className="grid grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 rounded-3xl shadow-lg bg-white border border-gray-100">
              <div className="mb-6">
                <Quote className="w-10 h-10 text-blue-600" />
              </div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="w-14 h-14 bg-blue-600">
                  <AvatarFallback className="bg-blue-600 text-white font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
