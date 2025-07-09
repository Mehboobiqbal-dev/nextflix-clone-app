
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleGetStarted = () => {
    console.log('Get started with email:', email);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/b6dd2c41-c904-43af-a834-e47c76ca0306.png')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
        <div className="animate-fade-in-up">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Unlimited movies, TV shows, and more
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-white mb-4 font-medium">
            Starts at Rs 250. Cancel anytime.
          </p>
          
          <p className="text-base md:text-lg lg:text-xl text-white mb-8">
            Ready to watch? Enter your email to create or restart your membership.
          </p>
          
          {/* Email Signup Form */}
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
      </div>
    </div>
  );
};

export default Hero;
