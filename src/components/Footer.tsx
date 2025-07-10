import { useState } from 'react';
import { ChevronRight, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const handleGetStarted = () => {
    console.log('Get started with email:', email);
  };

  const footerLinks = [
    {
      links: [
        'FAQ',
        'Investor Relations', 
        'Privacy',
        'Speed Test'
      ]
    },
    {
      links: [
        'Help Center',
        'Jobs',
        'Cookie Preferences',
        'Legal Notices'
      ]
    },
    {
      links: [
        'Account',
        'Ways to Watch',
        'Corporate Information',
        'Only on Netflix'
      ]
    },
    {
      links: [
        'Media Center',
        'Terms of Use',
        'Contact Us'
      ]
    }
  ];

  return (
    <footer className="bg-black py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Email Signup Section */}
        <div className="text-center mb-16">
          <p className="text-white text-lg mb-8">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
            <div className="flex-1">
              <Input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 md:h-14 text-base md:text-lg bg-black/70 border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:bg-black/50"
              />
            </div>
            <Button
              onClick={handleGetStarted}
              className="bg-red-600 hover:bg-red-700 text-white font-semibold text-base md:text-lg h-12 md:h-14 px-6 md:px-8"
            >
              Get Started
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
          </div>
        </div>

        {/* Questions Contact */}
        <div className="mb-12">
          <p className="text-gray-300 text-lg">
            Questions?{' '}
            <a href="#" className="underline hover:text-white transition-colors">
              Contact us.
            </a>
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {footerLinks.map((column, columnIndex) => (
            <div key={columnIndex} className="space-y-4">
              {column.links.map((link, linkIndex) => (
                <a
                  key={linkIndex}
                  href="#"
                  className="block text-gray-300 text-sm hover:text-white transition-colors underline"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Language Selector */}
        <div className="relative inline-block">
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
            <div className="absolute bottom-full mb-1 bg-black/90 border border-white/20 rounded-md py-2 min-w-[120px]">
              <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                English
              </button>
              <button className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm">
                اردو
              </button>
            </div>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;