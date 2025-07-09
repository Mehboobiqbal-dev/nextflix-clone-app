import { Tv, Download, Smartphone, Users } from 'lucide-react';

const MoreReasonsToJoin = () => {
  const reasons = [
    {
      icon: <Tv className="h-12 w-12 text-primary" />,
      title: "Enjoy on your TV",
      description: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more."
    },
    {
      icon: <Download className="h-12 w-12 text-primary" />,
      title: "Download your shows to watch offline",
      description: "Save your favorites easily and always have something to watch."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Watch everywhere",
      description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Create profiles for kids",
      description: "Send kids on adventures with their favorite characters in a space made just for them—free with your membership."
    }
  ];

  return (
    <div className="bg-background py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          More Reasons to Join
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {reason.icon}
              </div>
              <h3 className="text-white text-xl font-semibold mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoreReasonsToJoin;