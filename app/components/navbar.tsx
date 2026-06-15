"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection background color change ke liye
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

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-[#0b0b0b]/80 backdrop-blur-md border-b border-white/10 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className=" sm:mx-[50px] px-4 sm:px-0 flex items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="font-oswald text-2xl font-bold tracking-wider text-[#f5c518] hover:opacity-90 transition-opacity">
          TCP
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-10 text-xs font-semibold tracking-widest text-gray-300">
          <Link href="#home" className="hover:text-white transition-colors duration-200">HOME</Link>
          <Link href="#work" className="hover:text-white transition-colors duration-200">OUR WORK</Link>
          <Link href="#services" className="hover:text-white transition-colors duration-200">SERVICES</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none p-1"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Sidebar/Dropdown Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-64 bg-[#111] z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 pl-8 space-y-6 text-sm font-semibold tracking-widest text-gray-300">
          <Link href="#home" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">HOME</Link>
          <Link href="#work" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">OUR WORK</Link>
          <Link href="#services" onClick={() => setIsOpen(false)} className="hover:text-white transition-colors">SERVICES</Link>
        </div>
      </div>
      
      {/* Background overlay for mobile menu */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        />
      )}
    </nav>
  );
}