
import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import MovieRow from '../components/MovieRow';
import { movieData } from '../data/movieData';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      
      <div className="relative z-10 -mt-32 pb-20">
        <div className="space-y-12">
          <MovieRow title="Trending Now" movies={movieData.trending} />
          <MovieRow title="Popular on Netflix" movies={movieData.popular} />
          <MovieRow title="Top Rated" movies={movieData.topRated} />
          <MovieRow title="Action Movies" movies={movieData.action} />
          <MovieRow title="Comedy Movies" movies={movieData.comedy} />
          <MovieRow title="Horror Movies" movies={movieData.horror} />
        </div>
      </div>
    </div>
  );
};

export default Index;
