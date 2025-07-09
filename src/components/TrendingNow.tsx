import { ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TrendingNow = () => {
  const trendingMovies = [
    {
      id: 1,
      title: "Squid Game",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=400&h=300&fit=crop",
      number: 1
    },
    {
      id: 2,
      title: "RRR",
      image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=400&h=300&fit=crop",
      number: 2
    },
    {
      id: 3,
      title: "The Great Indian Kapil Show",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      number: 3
    },
    {
      id: 4,
      title: "The Old Guard 2",
      image: "https://images.unsplash.com/photo-1594736797933-d0811ba44667?w=400&h=300&fit=crop",
      number: 4
    },
    {
      id: 5,
      title: "Money Heist",
      image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&h=300&fit=crop",
      number: 5
    }
  ];

  return (
    <div className="bg-background py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-white text-3xl font-bold">Trending Now</h2>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
        
        <div className="flex gap-2 overflow-x-auto scrollbar-hide">
          {trendingMovies.map((movie) => (
            <div key={movie.id} className="relative min-w-[280px] cursor-pointer group">
              <div className="relative">
                <img
                  src={movie.image}
                  alt={movie.title}
                  className="w-full h-40 object-cover rounded-lg transition-transform group-hover:scale-105"
                />
                <div className="absolute -bottom-4 -left-4 text-8xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                  {movie.number}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;