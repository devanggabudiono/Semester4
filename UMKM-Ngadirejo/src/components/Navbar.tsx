"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Store } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Beranda", path: "/" },
    { name: "Daftar UMKM", path: "/#daftar-umkm" },
    { name: "Peta Sebaran", path: "/#peta-sebaran" },
    { name: "Tentang", path: "/tentang" },
    { name: "Kontak", path: "/kontak" },
  ];

  // Helper function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname + (typeof window !== "undefined" ? window.location.hash : "") === path;
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-50/50 py-3"
          : "bg-white/80 backdrop-blur-md border-b border-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="bg-emerald-600 text-white p-2 rounded-xl shadow-md shadow-emerald-200 group-hover:bg-emerald-700 transition-colors">
                <Store className="h-5.5 w-5.5" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-emerald-700 transition-colors">
                UMKM <span className="text-emerald-600 font-semibold">Ngadirejo</span>
              </span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.map((link) => {
                const active = pathname === link.path.split("#")[0];
                return (
                  <Link
                    key={link.name}
                    href={link.path}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      active
                        ? "text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100/70"
                        : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2.5 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-slate-50 focus:outline-none transition-colors border border-slate-100"
            >
              <span className="sr-only">Buka main menu</span>
              {isOpen ? (
                <X className="block h-5 w-5" aria-hidden="true" />
              ) : (
                <Menu className="block h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 shadow-lg animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="px-4 pt-2 pb-6 space-y-1.5">
            {navLinks.map((link) => {
              const active = pathname === link.path.split("#")[0];
              return (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                    active
                      ? "text-emerald-700 bg-emerald-50"
                      : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
