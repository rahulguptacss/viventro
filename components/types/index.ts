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

export interface PageBannerData {
  title: string;
  breadcrumbs: { label: string; href: string }[];
  backgroundImage: string;
}

export interface MissionVisionFeature {
  title: string;
  description: string;
}

export interface MissionVisionItem {
  title: string;
  description: string;
  image: string;
  features: MissionVisionFeature[];
}

export interface MissionVisionData {
  subtitle: string;
  title: string;
  description: string;
  mission: MissionVisionItem;
  vision: MissionVisionItem;
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

export interface ServiceFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
  // Detail page fields
  subtitle?: string;
  detailedDescription?: string;
  features?: ServiceFeature[];
  whyChooseUs?: string[];
  sidebarImage?: string;
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
  email?: string;
  phone?: string;
  linkedin?: string;
  bio?: string;
  skills?: { name: string; percentage: number }[];
  experience?: {
    yearRange: string;
    title: string;
    description?: string;
    achievements?: string[];
  }[];
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

export interface TestimonialsPageGridData {
  subtitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
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

export interface ContactInfo {
  icon: string;
  title: string;
  details: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  info: ContactInfo[];
  form: {
    title: string;
    subtitle: string;
    highlightText: string;
    description: string;
  };
  map: {
    image: string;
    address: string;
  };
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface FAQPageData {
  title: string;
  subtitle: string;
  image: string;
  faqHeading: string;
  faqTitlePart1: string;
  faqTitleHighlight: string;
  faqTitlePart2: string;
  faqButtonText: string;
  faqDescription: string;
  faqsLeft: FAQItem[];
  faqsRight: FAQItem[];
}

export interface PageComponent {
  key: string;
  component: string;
}

export interface PhotoItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}

export interface VideoItem {
  id: string;
  thumbnail: string;
  alt: string;
  videoUrl?: string;
}

export interface GalleryData {
  photoGallery: {
    subtitle: string;
    titlePart1: string;
    titleHighlight: string;
    titlePart2: string;
    categories: string[];
    photos: PhotoItem[];
    loadMoreText: string;
  };
  videoGallery: {
    subtitle: string;
    titlePart1: string;
    titleHighlight: string;
    videos: VideoItem[];
  };
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
            "about-us"?: {
              components: PageComponent[];
            };
            [key: string]: {
              components: PageComponent[];
            } | undefined;
          };
        };
      };
    };
  };
}

export interface PartnerFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface PartnerLogo {
  id: number;
  name: string;
  image: string;
}

export interface PartnerStat {
  id: number;
  value: string;
  label: string;
  icon: string;
}

export interface OurPartnersPageData {
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  titleHighlight: string;
  description: string;
  features: PartnerFeature[];
  partnersHeading: string;
  partnersDescription: string;
  partners: PartnerLogo[];
  stats: PartnerStat[];
}
