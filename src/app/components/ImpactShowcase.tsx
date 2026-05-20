import { Card } from "./ui/card";
import { GraduationCap, Utensils, Users } from "lucide-react";

export function ImpactShowcase() {
  const stats = [
    {
      icon: GraduationCap,
      number: "500+",
      label: "Children Educated",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Utensils,
      number: "2000",
      label: "Meals Distributed",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Users,
      number: "150",
      label: "Volunteers",
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">Making a difference in communities worldwide</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className={`w-20 h-20 ${stat.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <stat.icon className="w-10 h-10" />
              </div>
              <div className="text-5xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg text-gray-600">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
