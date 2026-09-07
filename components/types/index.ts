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

export interface HeroSlide {
  image: string;
  subtitle?: string;
  title?: string;
  titleHighlight?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface HeroData {
  slides: HeroSlide[];
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
  buttonLink?: string;
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
  buttonLink?: string;
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
  buttonLink?: string;
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
  buttonLink?: string;
  members: TeamMember[];
}

export interface CareerHeroData {
  smallTitle: string;
  title: string;
  highlightTitle: string;
  description: string;
  buttonText: string;
  image: string;
}

export interface CareerJobItem {
  id: number;
  title: string;
  description: string;
  location: string;
  type: string;
  experience: string;
}

export interface CareerJobsData {
  smallTitle: string;
  title: string;
  items: CareerJobItem[];
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

export interface CareerDetailData {
  id: number;
  smallTitle: string;
  title: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  image: string;
  jobDescriptionTitle: string;
  jobDescription: string;
  responsibilitiesTitle: string;
  responsibilities: string[];
  requirementsTitle: string;
  requirements: string[];
  offerTitle: string;
  offer: {
    title: string;
    description: string;
    icon: string;
  }[];
  whyUsTitle: string;
  whyUs: string[];
  formTitle: string;
  formLabels: {
    fullName: string;
    email: string;
    phone: string;
    experience: string;
    location: string;
    resume: string;
    coverLetter: string;
    resumeDropText: string;
    resumeHelpText: string;
    termsLabel: string;
    termsLink: string;
    submitBtn: string;
    securityText: string;
  };
  formPlaceholders: {
    fullName: string;
    email: string;
    phone: string;
    experienceSelect: string;
    location: string;
    coverLetter: string;
  };
  formExperienceOptions: string[];
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

export interface GetQuotePageData {
  pageBanner: PageBannerData;
  smallTitle: string;
  titlePart1: string;
  titleHighlight: string;
  description: string;
  image: string;
  formTitle: string;
  formLabels: {
    fullName: string;
    email: string;
    phone: string;
    eventType: string;
    eventDate: string;
    guestCount: string;
    eventLocation: string;
    eventDetails: string;
    budgetRange: string;
    budgetRangeOptionalText?: string;
    termsLabel: string;
    termsLink1: string;
    termsAndText?: string;
    termsLink2: string;
    submitBtn: string;
    securityText: string;
  };
  formPlaceholders: {
    fullName: string;
    email: string;
    phone: string;
    eventTypeSelect: string;
    eventDate: string;
    guestCount: string;
    eventLocation: string;
    eventDetails: string;
    budgetRangeSelect: string;
  };
  eventTypeOptions: string[];
  budgetRangeOptions: string[];
}

export interface PrivacyPolicyItem {
  id: string;
  title: string;
  description: string;
}

export interface PrivacyPolicyPageData {
  pageBanner: PageBannerData;
  hero: {
    smallTitle: string;
    titlePart1: string;
    titleHighlight: string;
    description: string;
    image: string;
    heroBadgeText: string;
    imageBadgeTitle: string;
    imageBadgeSubtext: string;
  };
  sidebar: {
    title: string;
    description: string;
  };
  policies: PrivacyPolicyItem[];
  helpSection: {
    titlePart1: string;
    titleHighlight: string;
    description: string;
    contactInfo: {
      call:  { label: string; number: string; timing: string };
      email: { label: string; address: string; response: string };
      visit: { label: string; address: string };
    };
    footerText: string;
  };
}

// All 4 new policy pages share the exact same data shape as PrivacyPolicyPageData
export type CookiePolicyPageData   = PrivacyPolicyPageData;
export type RefundPolicyPageData   = PrivacyPolicyPageData;
export type DisclaimerPageData     = PrivacyPolicyPageData;
export type TermsPageData          = PrivacyPolicyPageData;

export interface NotFoundPageData {
  backgroundImage: string;
  errorCode: string;
  title: string;
  primaryButton: {
    label: string;
    href: string;
  };
  secondaryButton: {
    label: string;
    href: string;
  };
}

export interface SitemapSectionData {
  title: string;
  icon: string;
  links: {
    label: string;
    href: string;
  }[];
}

export interface SitemapPageData {
  pageBanner: PageBannerData;
  sections: SitemapSectionData[];
}
