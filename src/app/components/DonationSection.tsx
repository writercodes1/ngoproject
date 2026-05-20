import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Heart, CreditCard, HandHeart } from "lucide-react";

export function DonationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <Card className="p-12 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl shadow-xl">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center gap-6 mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <Heart className="w-8 h-8" />
              </div>
              <div className="bg-white/20 p-4 rounded-full">
                <HandHeart className="w-8 h-8" />
              </div>
              <div className="bg-white/20 p-4 rounded-full">
                <CreditCard className="w-8 h-8" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold">Support Our Mission</h2>
            <p className="text-lg text-blue-50">
              Your generous donations help us provide essential resources to children and families 
              in need. Every contribution, no matter the size, makes a meaningful impact in someone's life. 
              Together, we can build a brighter future for those who need it most.
            </p>
            
            <Button className="bg-white text-blue-600 hover:bg-blue-50 rounded-full px-10 py-6 text-lg font-semibold mt-4">
              Make a Donation
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
