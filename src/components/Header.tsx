
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInLeft, fadeInRight, scaleIn } from '@/lib/motion';
import { currentConfig } from '@/config/app';

const Header = () => {
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  return (
    <motion.header 
      className="absolute top-0 w-full z-50 px-4 md:px-8 lg:px-16"
      variants={fadeInLeft}
      initial="initial"
      animate="animate"
    >
      <div className="flex items-center justify-between py-4 md:py-6">
        {/* Logo */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h1 
            className="text-2xl md:text-3xl font-bold"
            style={{ color: currentConfig.primaryColor }}
          >
            {currentConfig.logo}
          </h1>
        </motion.div>

        {/* Right side - Language selector and Sign In */}
        <motion.div 
          className="flex items-center space-x-4"
          variants={fadeInRight}
          initial="initial"
          animate="animate"
        >
          {/* Language Selector */}
          {currentConfig.features.showLanguageSelector && (
            <motion.div className="relative" whileHover={{ scale: 1.05 }}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="ghost"
                  className="text-white border border-white/50 hover:bg-white/10 px-3 py-1 text-sm"
                  onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                >
                  <Globe className="h-4 w-4 mr-2" />
                  {currentConfig.languages[0].nativeName}
                  <motion.div
                    animate={{ rotate: isLanguageOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </motion.div>
                </Button>
              </motion.div>
              
              <AnimatePresence>
                {isLanguageOpen && (
                  <motion.div 
                    className="absolute top-full mt-1 bg-black/90 border border-white/20 rounded-md py-2 min-w-[120px]"
                    variants={scaleIn}
                    initial="initial"
                    animate="animate"
                    exit="initial"
                  >
                    {currentConfig.languages.map((language) => (
                      <button 
                        key={language.code}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-white/10 text-sm"
                      >
                        {language.nativeName}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* Sign In Button */}
          {currentConfig.features.showSignIn && (
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                className="text-white px-4 py-2 text-sm font-medium"
                style={{ 
                  backgroundColor: currentConfig.primaryColor,
                  '--tw-ring-color': currentConfig.primaryColor
                } as React.CSSProperties}
              >
                Sign In
              </Button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;
