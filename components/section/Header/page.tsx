"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight, ArrowUpRight, Menu, X, ClipboardList, Users, Calendar, Cake, Music, MapPin } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { MenuItem } from "../../types";

interface HeaderProps {
  data: {
    logo: string;
    logoImage: string;
    menu: MenuItem[];
    button: {
      label: string;
      href: string;
    };
  };
}

export default function Header({ data }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<number | null>(null);
  const [openNestedMobileDropdown, setOpenNestedMobileDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-6 left-0 w-full z-50 px-4 md:px-8 flex justify-center"
    >
      <div className="w-full max-w-[1400px] flex items-center justify-between bg-black/20 backdrop-blur-md border-2 border-[#c9922e] rounded-full pl-4 md:pl-8 pr-3 py-2 md:py-3 shadow-2xl">
        
        {/* Left: Logo & Separator */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center shrink-0">
            <Image 
              src="/logo/logo.png" 
              alt="Viventro Logo" 
              width={300}
              height={80}
              className="h-[45px] md:h-[72px] w-auto object-contain" 
              priority 
            />
          </Link>
          
          {/* Vertical Separator */}
          <div className="hidden lg:block w-px h-[72px] bg-white/20"></div>
        </div>

        {/* Middle: Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 pl-4">
          {data.menu.map((item, i) => {
            // Check if active or has sub-items dynamically
            const hasDropdown = item.subItems && item.subItems.length > 0;
            const isActive = item.href === "/" 
              ? pathname === "/" 
              : (pathname === item.href || (hasDropdown && item.subItems!.some(sub => pathname === sub.href || pathname.startsWith(`${sub.href}/`))));
            
            return (
              <div key={i} className="relative group flex flex-col items-center">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 text-[17px] font-normal transition-colors hover:text-[#e4a836] ${isActive ? 'text-[#e4a836]' : 'text-gray-100'} py-2`}
                  style={{ fontFamily: '"Poppins", sans-serif' }}
                >
                  {item.label}
                  {hasDropdown && <ChevronDown className={`w-4 h-4 mt-0.5 stroke-[1.5px] transition-transform group-hover:rotate-180 ${isActive ? 'text-[#e4a836]' : 'text-gray-400 group-hover:text-[#e4a836]'}`} />}
                </Link>
                {isActive && (
                  <div className="absolute -bottom-[12px] left-0 w-full h-[3px] bg-[#e4a836]"></div>
                )}
                
                {/* Desktop Dropdown Menu */}
                {hasDropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-2 min-w-[200px] flex flex-col">
                      {item.subItems?.map((subItem, subIndex) => {
                        const hasNestedDropdown = subItem.subItems && subItem.subItems.length > 0;
                        
                        if (hasNestedDropdown) {
                          return (
                            <div key={subIndex} className="relative group/nested flex flex-col">
                              <div className="flex items-center justify-between px-4 py-2.5 hover:bg-[#fdfaf5] text-gray-700 hover:text-[#e4a836] rounded-xl transition-colors font-medium whitespace-nowrap text-[15px] cursor-pointer">
                                <span>{subItem.label}</span>
                                <ChevronRight className="w-4 h-4 text-gray-400 group-hover/nested:text-[#e4a836]" />
                              </div>
                              <div className="absolute top-0 left-full pt-0 pl-1 opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-300 z-50">
                                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100 p-2 min-w-[200px] flex flex-col">
                                  {subItem.subItems?.map((nestedItem, nestedIndex) => (
                                    <Link 
                                      key={nestedIndex} 
                                      href={nestedItem.href}
                                      className="px-4 py-2.5 hover:bg-[#fdfaf5] text-gray-700 hover:text-[#e4a836] rounded-xl transition-colors font-medium whitespace-nowrap text-[15px]"
                                    >
                                      {nestedItem.label}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          );
                        }

                        return (
                          <Link 
                            key={subIndex} 
                            href={subItem.href}
                            className="px-4 py-2.5 hover:bg-[#fdfaf5] text-gray-700 hover:text-[#e4a836] rounded-xl transition-colors font-medium whitespace-nowrap text-[15px]"
                          >
                            {subItem.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Right: Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link
            href={data.button.href}
            className="hidden md:flex items-center gap-5 bg-[#e4a836] hover:bg-[#c9922e] text-white font-normal pl-8 pr-2 py-2 rounded-full transition-colors shrink-0"
          >
            <span className="text-[17px]" style={{ fontFamily: '"Poppins", sans-serif' }}>
              {data.button.label}
            </span>
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
              <ArrowUpRight className="w-5 h-5 text-[#e4a836]" strokeWidth={2.5} />
            </div>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white hover:text-[#e4a836] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-4 right-4 mt-4 bg-black/95 backdrop-blur-xl border border-[#e4a836]/30 rounded-2xl overflow-hidden shadow-2xl lg:hidden flex flex-col"
          >
            <nav className="flex flex-col gap-3 p-4">
              {data.menu.map((item, i) => {
                const hasDropdown = item.subItems && item.subItems.length > 0;
                const isActive = item.href === "/" 
                  ? pathname === "/" 
                  : (pathname === item.href || (hasDropdown && item.subItems!.some(sub => pathname === sub.href || pathname.startsWith(`${sub.href}/`))));
                const isOpen = openMobileDropdown === i;
                
                const renderIcon = (iconName?: string) => {
                  if (iconName === 'ClipboardList') return <ClipboardList className="w-6 h-6 mr-3 text-[#e4a836]" />;
                  if (iconName === 'Users') return <Users className="w-[18px] h-[18px] mr-4 text-gray-300 group-hover:text-[#e4a836]" strokeWidth={1.5} />;
                  if (iconName === 'Calendar') return <Calendar className="w-[18px] h-[18px] mr-4 text-gray-300 group-hover:text-[#e4a836]" strokeWidth={1.5} />;
                  if (iconName === 'Cake') return <Cake className="w-[18px] h-[18px] mr-4 text-gray-300 group-hover:text-[#e4a836]" strokeWidth={1.5} />;
                  if (iconName === 'Music') return <Music className="w-[18px] h-[18px] mr-4 text-gray-300 group-hover:text-[#e4a836]" strokeWidth={1.5} />;
                  if (iconName === 'MapPin') return <MapPin className="w-[18px] h-[18px] mr-4 text-gray-300 group-hover:text-[#e4a836]" strokeWidth={1.5} />;
                  return null;
                };
                
                return (
                  <div key={i} className={`flex flex-col rounded-2xl transition-all duration-300 ${isOpen ? 'border border-[#e4a836]/40 bg-[#080808] shadow-[0_4px_20px_rgba(228,168,54,0.1)]' : ''}`}>
                    <div
                      className={`flex items-center justify-between p-4 text-[16px] font-medium transition-colors cursor-pointer rounded-2xl ${isOpen ? 'bg-gradient-to-r from-[#e4a836]/20 to-transparent text-[#e4a836]' : (isActive ? 'bg-[#e4a836]/10 text-[#e4a836]' : 'text-gray-200 hover:bg-white/5')}`}
                      onClick={() => {
                        if (hasDropdown) {
                          setOpenMobileDropdown(isOpen ? null : i);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                    >
                      {hasDropdown ? (
                        <div className="flex items-center">
                          <span>{item.label}</span>
                        </div>
                      ) : (
                        <Link href={item.href} className="flex items-center w-full">
                          <span>{item.label}</span>
                        </Link>
                      )}
                      
                      {hasDropdown && <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e4a836]' : 'text-gray-400'}`} />}
                    </div>

                    <AnimatePresence>
                      {hasDropdown && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="flex flex-col overflow-hidden"
                        >
                          <div className="py-2">
                            {item.subItems?.map((subItem, subIndex) => {
                              const hasNestedDropdown = subItem.subItems && subItem.subItems.length > 0;
                              const isNestedOpen = openNestedMobileDropdown === `${i}-${subIndex}`;

                              if (hasNestedDropdown) {
                                return (
                                  <div key={subIndex} className="flex flex-col border-b border-white/[0.04] last:border-0">
                                    <div
                                      onClick={() => setOpenNestedMobileDropdown(isNestedOpen ? null : `${i}-${subIndex}`)}
                                      className="group flex items-center justify-between px-6 py-3.5 text-[15px] font-medium text-gray-300 hover:text-[#e4a836] transition-colors cursor-pointer"
                                    >
                                      <div className="flex items-center">
                                        <span>{subItem.label}</span>
                                      </div>
                                      <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-300 ${isNestedOpen ? 'rotate-180 text-[#e4a836]' : 'group-hover:text-[#e4a836]'}`} />
                                    </div>
                                    <AnimatePresence>
                                      {isNestedOpen && (
                                        <motion.div
                                          initial={{ opacity: 0, height: 0 }}
                                          animate={{ opacity: 1, height: "auto" }}
                                          exit={{ opacity: 0, height: 0 }}
                                          className="flex flex-col bg-white/5 overflow-hidden"
                                        >
                                          {subItem.subItems?.map((nestedItem, nestedIndex) => (
                                            <Link
                                              key={nestedIndex}
                                              href={nestedItem.href}
                                              onClick={() => setIsMobileMenuOpen(false)}
                                              className="flex items-center px-8 py-3 text-[14px] font-medium text-gray-400 hover:text-[#e4a836] transition-colors"
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          ))}
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              }

                              return (
                                <Link
                                  key={subIndex}
                                  href={subItem.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="group flex items-center justify-between px-6 py-3.5 text-[15px] font-medium text-gray-300 hover:text-[#e4a836] transition-colors border-b border-white/[0.04] last:border-0"
                                >
                                  <div className="flex items-center">
                                    <span>{subItem.label}</span>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-[#e4a836] transition-colors" />
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
              
              <Link
                href={data.button.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 md:hidden flex items-center justify-center gap-3 bg-[#e4a836] hover:bg-[#c9922e] text-white p-4 rounded-xl transition-colors font-semibold"
              >
                {data.button.label}
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
