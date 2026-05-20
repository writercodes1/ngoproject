import { Button } from "./ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-[1440px] mx-auto px-8 py-4 flex items-center justify-between">
        <div className="text-2xl font-semibold text-blue-600">
          InAmigos Foundation
        </div>
        
        <nav className="flex items-center gap-8">
          <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
            About
          </a>
          <a href="#campaigns" className="text-gray-700 hover:text-blue-600 transition-colors">
            Campaigns
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
            Contact
          </a>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
            Donate Now
          </Button>
        </nav>
      </div>
    </header>
  );
}
