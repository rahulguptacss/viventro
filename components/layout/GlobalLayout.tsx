"use client";

import { usePathname } from "next/navigation";
import Header from "../section/Header/page";
import Footer from "../section/Footer/page";
import PageBanner from "../section/PageBanner/page";
import { HeaderData, PageBannerData } from "../types";

interface GlobalLayoutProps {
  children: React.ReactNode;
  headerData: HeaderData;
  footerData: any;
  banners: Record<string, PageBannerData>;
}

export default function GlobalLayout({ children, headerData, footerData, banners }: GlobalLayoutProps) {
  const pathname = usePathname();
  
  const currentRoute = pathname === "/" ? "home" : pathname.replace(/^\//, "");
  const baseRoute = currentRoute.split('/')[0];
  
  const isHome = currentRoute === "home";
  
  let currentBanner = banners[currentRoute];
  if (!currentBanner && baseRoute) {
    currentBanner = banners[baseRoute];
    
    // Override banner details for specific dynamic routes
    if (baseRoute === 'our-team' && currentRoute !== 'our-team') {
      currentBanner = {
        ...currentBanner,
        title: "Team Detail",
        breadcrumbs: [
          { label: "Home", href: "/" },
          { label: "Team Detail", href: "#" }
        ]
      };
    }
  }

  return (
    <div className="relative min-h-screen selection:bg-[#D4AF37] selection:text-black font-sans flex flex-col">
      <Header data={headerData} />
      
      {!isHome && currentBanner && (
        <PageBanner data={currentBanner} />
      )}
      
      {children}
      
      <Footer data={footerData} />
    </div>
  );
}
