export interface MenuItem {
  label: string;
  href: string;
  subItems?: MenuItem[];
  icon?: string;
}

export interface HeaderData {
  logo: string;
  logoImage: string;
  menu: MenuItem[];
  button: {
    label: string;
    href: string;
  };
}

export interface HeroData {
  images: string[];
}

export interface AboutData {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  features: string[];
  images: string[];
  planner: {
    name: string;
    role: string;
    image: string;
  };
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ServicesData {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: ServiceItem[];
}

export interface WhyChooseUsFeature {
  title: string;
  description: string;
  icon: string;
}



export interface WhyChooseUsData {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  features: WhyChooseUsFeature[];
}

export interface EventItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  month: string;
  location: string;
  time: string;
}

export interface EventsData {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: EventItem[];
}

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

export interface TeamData {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  members: TeamMember[];
}

export interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
}

export interface TestimonialsData {
  subtitle: string;
  title: string;
  description: string;
  image: string;
  items: TestimonialItem[];
}

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  category: string;
}

export interface BlogData {
  subtitle: string;
  title: string;
  description: string;
  buttonText: string;
  items: BlogItem[];
}

export interface FooterQuickLink {
  label: string;
  href: string;
}

export interface FooterData {
  logo: string;
  logoImage: string;
  description: string;
  quickLinks: FooterQuickLink[];
  socialLinks: { platform: string; url: string; }[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  newsletter: {
    title: string;
    description: string;
  };
  copyright: string;
  labels: {
    followUs: string;
    ourEvents: string;
    contactUs: string;
    callUs: string;
    mailUs: string;
    officeLocation: string;
    newsletterPlaceholder: string;
    subscribeBtn: string;
    newsletterDisclaimer: string;
  };
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface EventTemplateData {
  common: {
    Header: HeaderData;
    Footer: FooterData;
  };
  categories: {
    Event: {
      sections: Record<string, { variants: Record<string, any> }>;
      templateComponents: {
        "template-2": {
          pages: {
            home: {
              components: PageComponent[];
            };
          };
        };
      };
    };
  };
}
