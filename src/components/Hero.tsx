
import { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion } from 'framer-motion';
import { fadeInUp, slideInFromBottom, staggerContainer } from '@/lib/motion';
import { currentConfig } from '@/config/app';

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
          backgroundImage: `url('${currentConfig.hero.backgroundImage}')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 md:px-8 max-w-4xl"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <motion.h1 
            className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight"
            variants={slideInFromBottom}
          >
            {currentConfig.hero.title}
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-white mb-4 font-medium"
            variants={fadeInUp}
          >
            {currentConfig.hero.subtitle}
          </motion.p>
          
          <motion.p 
            className="text-base md:text-lg lg:text-xl text-white mb-8"
            variants={fadeInUp}
          >
            {currentConfig.hero.description}
          </motion.p>
          
          {/* Email Signup Form */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            {currentConfig.features.showEmailSignup && (
              <>
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder={currentConfig.hero.emailPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 md:h-14 text-base md:text-lg bg-black/70 border-white/30 text-white placeholder:text-gray-400 focus:border-white focus:bg-black/50 hover-lift"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={handleGetStarted}
                    className="text-white font-semibold text-base md:text-lg h-12 md:h-14 px-6 md:px-8"
                    style={{ backgroundColor: currentConfig.primaryColor }}
                  >
                    {currentConfig.hero.ctaText}
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ChevronRight className="h-5 w-5 ml-2" />
                    </motion.div>
                  </Button>
                </motion.div>
              </>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
