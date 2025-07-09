
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrendingNow from '../components/TrendingNow';
import MoreReasonsToJoin from '../components/MoreReasonsToJoin';
import FrequentlyAskedQuestions from '../components/FrequentlyAskedQuestions';

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <TrendingNow />
      <MoreReasonsToJoin />
      <FrequentlyAskedQuestions />
    </div>
  );
};

export default Index;
