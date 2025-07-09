
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <header className="absolute top-0 w-full z-50 px-4 md:px-8 lg:px-16">
      <div className="flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-red-600 text-2xl md:text-3xl font-bold">NETFLIX</h1>
        </div>

        {/* Right side - Language selector and Sign In */}
        <div className="flex items-center space-x-4">
          {/* Language Selector */}
          <div className="relative">
            <Button
              variant="ghost"
              className="text-white border border-white/50 hover:bg-white/10 px-3 py-1 text-sm"
              onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            >
              <Globe className="h-4 w-4 mr-2" />
              English
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
            
            {isLanguageOpen && (
              <div className="absolute top-full mt-1 bg-black/90 border border-white/20 rounded-md py-2 min-w-[120px]">
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                  English
                </button>
                <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                  اردو
                </button>
              </div>
            )}
          </div>

          {/* Sign In Button */}
          <Button className="bg-red-600 text-white hover:bg-red-700 px-4 py-2 text-sm font-medium">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
