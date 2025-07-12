
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { movieData } from '@/data/movieData';

const TrendingNow = () => {
  const trendingMovies = movieData.trending.map((movie, index) => ({
    ...movie,
    number: index + 1
  }));

  return (
    <div className="relative bg-background pt-0 pb-12 px-4 md:px-8">
   
      <div className="absolute left-0 right-0 -top-12 z-10 w-full pointer-events-none select-none">
        <svg viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-[120px] md:h-[180px]">
          <defs>
            <linearGradient id="trendingCurveGradient" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e50914" />
              <stop offset="1" stopColor="#ff2e63" />
            </linearGradient>
          </defs>

          <path d="M0,120 Q720,0 1440,120 L1440,180 L0,180 Z" fill="#0a1020" />
          <path d="M0,120 Q720,0 1440,120" stroke="url(#trendingCurveGradient)" strokeWidth="6" fill="none" />
        </svg>
      </div>
      <div className="max-w-7xl mx-auto relative z-20 pt-20 md:pt-32">
        <div className="flex items-center mb-8 animate-fade-in-left">
          <h2 className="text-white text-3xl font-bold">Trending Now</h2>
        </div>
        <Carousel className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {trendingMovies.map((movie, index) => (
              <CarouselItem 
                key={movie.id} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative cursor-pointer">
                  <img
                    src={movie.image}
                    alt={movie.title}
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-0 left-0 flex items-end">
                    <span
                      className="text-white text-[5rem] font-black leading-none drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)] px-2"
                      style={{ WebkitTextStroke: '2px #111', color: '#fff' }}
                    >
                      {movie.number}
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-black/50 border-white/20 text-white hover:bg-black/70 transition-all duration-300" />
          <CarouselNext className="right-2 bg-black/50 border-white/20 text-white hover:bg-black/70 transition-all duration-300" />
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingNow;
