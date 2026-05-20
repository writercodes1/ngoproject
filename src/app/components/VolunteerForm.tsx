import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function VolunteerForm() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div className="relative">
            <ImageWithFallback 
              src="https://images.unsplash.com/photo-1649386525679-214da4fa6676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3OTE1MjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Volunteers helping children"
              className="rounded-3xl shadow-2xl w-full h-[500px] object-cover"
            />
          </div>
          
          <Card className="p-10 bg-white rounded-3xl shadow-xl">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Become a Volunteer
                </h2>
                <p className="text-gray-600">
                  Join our community of passionate volunteers making a real difference
                </p>
              </div>
              
              <form className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input 
                    id="name"
                    placeholder="Enter your name"
                    className="rounded-xl border-gray-300 py-6"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input 
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="rounded-xl border-gray-300 py-6"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="skills" className="text-sm font-medium text-gray-700">
                    Your Skills
                  </Label>
                  <Input 
                    id="skills"
                    placeholder="e.g., Teaching, Cooking, Medical"
                    className="rounded-xl border-gray-300 py-6"
                  />
                </div>
                
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-6 text-lg font-semibold">
                  Join Us
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
