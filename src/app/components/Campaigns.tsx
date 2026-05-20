import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Campaigns() {
  const campaigns = [
    {
      title: "Food Drive",
      description: "Help us provide nutritious meals to families in need. Every donation ensures no child goes to bed hungry.",
      image: "https://images.unsplash.com/photo-1599059813005-11265ba4ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGlzdHJpYnV0aW9uJTIwY2hhcml0eSUyMGhlbHBpbmclMjBjb21tdW5pdHl8ZW58MXx8fHwxNzc5MTUyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Education Campaign",
      description: "Support quality education for underprivileged children. Provide books, supplies, and learning opportunities.",
      image: "https://images.unsplash.com/photo-1649386525679-214da4fa6676?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBjaGlsZHJlbiUyMGxlYXJuaW5nfGVufDF8fHx8MTc3OTE1MjM4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      title: "Health Camp",
      description: "Bring healthcare services to remote communities. Medical checkups, vaccinations, and health awareness programs.",
      image: "https://images.unsplash.com/photo-1778864875228-caa80c73cbd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwaGVhbHRoJTIwY2FtcCUyMGNvbW11bml0eSUyMGhlYWx0aGNhcmV8ZW58MXx8fHwxNzc5MTUyMzg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
  ];

  return (
    <section id="campaigns" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Campaigns</h2>
          <p className="text-lg text-gray-600">Join our active initiatives making a difference</p>
        </div>
        
        <div className="grid grid-cols-3 gap-8">
          {campaigns.map((campaign, index) => (
            <Card key={index} className="overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback 
                  src={campaign.image}
                  alt={campaign.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">{campaign.title}</h3>
                <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
                <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl py-5">
                  Learn More
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
