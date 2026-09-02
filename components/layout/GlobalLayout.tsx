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
  
  // Clean up pathname (e.g. /About-us -> About-us)
  const currentRoute = pathname === "/" ? "home" : pathname.replace(/^\//, "");
  
  const isHome = currentRoute === "home";
  const currentBanner = banners[currentRoute];

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
