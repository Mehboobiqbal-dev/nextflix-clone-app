export interface AppConfig {
  name: string;
  logo: string;
  primaryColor: string;
  secondaryColor: string;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    backgroundImage: string;
    ctaText: string;
    emailPlaceholder: string;
  };
  sections: {
    trending: {
      title: string;
      showViewAll: boolean;
    };
    popular: {
      title: string;
      showViewAll: boolean;
    };
    topRated: {
      title: string;
      showViewAll: boolean;
    };
  };
  languages: Array<{
    code: string;
    name: string;
    nativeName: string;
  }>;
  features: {
    showLanguageSelector: boolean;
    showSignIn: boolean;
    showEmailSignup: boolean;
  };
}

export const defaultConfig: AppConfig = {
  name: "NETFLIX",
  logo: "NETFLIX",
  primaryColor: "#E50914",
  secondaryColor: "#000000",
  hero: {
    title: "Unlimited movies, TV shows, and more",
    subtitle: "Starts at Rs 250. Cancel anytime.",
    description: "Ready to watch? Enter your email to create or restart your membership.",
    backgroundImage: "https://assets.nflxext.com/ffe/siteui/vlv3/7d2359a4-434f-4efa-9ff3-e9d38a8bde7f/web/PK-en-20250707-TRIFECTA-perspective_8df60425-904b-4752-bea2-1d1979861e23_large.jpg",
    ctaText: "Get Started",
    emailPlaceholder: "Email address"
  },
  sections: {
    trending: {
      title: "Trending Now",
      showViewAll: true
    },
    popular: {
      title: "Popular on NETFLIX",
      showViewAll: true
    },
    topRated: {
      title: "Top Rated",
      showViewAll: true
    }
  },
  languages: [
    { code: "en", name: "English", nativeName: "English" },
    { code: "ur", name: "Urdu", nativeName: "اردو" },
    { code: "es", name: "Spanish", nativeName: "Español" },
    { code: "fr", name: "French", nativeName: "Français" }
  ],
  features: {
    showLanguageSelector: true,
    showSignIn: true,
    showEmailSignup: true
  }
};

// You can create different configurations for different brands
export const netflixConfig: AppConfig = {
  ...defaultConfig,
  name: "Netflix",
  logo: "NETFLIX",
  primaryColor: "#E50914",
  hero: {
    ...defaultConfig.hero,
    title: "Unlimited movies, TV shows, and more",
    subtitle: "Starts at Rs 250. Cancel anytime."
  }
};

export const disneyConfig: AppConfig = {
  ...defaultConfig,
  name: "Disney+",
  logo: "DISNEY+",
  primaryColor: "#0063E5",
  hero: {
    ...defaultConfig.hero,
    title: "The best stories in the world, all in one place",
    subtitle: "Starts at Rs 199. Cancel anytime.",
    backgroundImage: "https://example.com/disney-hero.jpg"
  }
};

// Export the current config (you can change this to switch between different configurations)
export const currentConfig: AppConfig = defaultConfig; 