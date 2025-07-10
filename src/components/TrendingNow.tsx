
import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const TrendingNow = () => {
  const trendingMovies = [
    {
      id: 1,
      title: "Squid Game",
      image: "https://upload.wikimedia.org/wikipedia/en/f/f9/Squid_Game_poster.jpg",
      number: 1
    },
    {
      id: 2,
      title: "RRR",
      image: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg",
      number: 2
    },
    {
      id: 3,
      title: "Wednesday",
      image: "https://upload.wikimedia.org/wikipedia/en/3/35/Wednesday_Netflix_series_poster.jpg",
      number: 3
    },
    {
      id: 4,
      title: "The Old Guard",
      image: "https://upload.wikimedia.org/wikipedia/en/3/31/The_Old_Guard_poster.jpg",
      number: 4
    },
    {
      id: 5,
      title: "Money Heist",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e9/Money_Heist_season_1_poster.jpg",
      number: 5
    },
    {
      id: 6,
      title: "Stranger Things",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/38/Stranger_Things_logo.png",
      number: 6
    },
    {
      id: 7,
      title: "The Crown",
      image: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Crown_season_1_poster.jpg",
      number: 7
    },
    {
      id: 8,
      title: "Ozark",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4c/Ozark_season_1_poster.jpg",
      number: 8
    }
  ];

  return (
    <div className="bg-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8 animate-fade-in-left">
          <h2 className="text-white text-3xl font-bold">Trending Now</h2>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover-scale">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <Carousel className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {trendingMovies.map((movie, index) => (
              <CarouselItem 
                key={movie.id} 
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 animate-fade-in-up"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <div className="relative cursor-pointer group movie-card">
                  <div className="relative overflow-hidden rounded-lg">
                    <img
                      src={movie.image}
                      alt={movie.title}
                      className="w-full h-40 object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute -bottom-4 -left-4 text-8xl font-black text-white/20 group-hover:text-red-500/60 transition-all duration-300 group-hover:scale-110">
                      {movie.number}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <h3 className="text-white text-sm font-semibold truncate">{movie.title}</h3>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover-scale transition-all duration-300" />
          <CarouselNext className="right-2 bg-black/50 border-white/20 text-white hover:bg-black/70 hover-scale transition-all duration-300" />
        </Carousel>
      </div>
    </div>
  );
};

export default TrendingNow;
