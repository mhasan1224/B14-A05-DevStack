import { useState } from "react";
interface NavbarProps {
  logo: string;
  hamburger: string;
}

export default function Navbar({ logo, hamburger }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
        {/* hamburger for mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <img src={hamburger} alt="Menu" className="h-6 w-6" />
        </button>
        {/* main logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img src={logo} alt="Logo" className="w-24" />
        </div>
        {/* main navbar element */}
        <ul className="hidden items-center gap-7 text-sm md:flex">
          <li className="cursor-pointer font-medium text-[#DB2777]">Home</li>
          <li className="cursor-pointer font-medium text-[#475569]">
            Technologies
          </li>
          <li className="cursor-pointer font-medium text-[#475569]">
            Projects
          </li>
          <li className="cursor-pointer font-medium text-[#475569]">About</li>
          <li className="cursor-pointer font-medium text-[#475569]">Contact</li>
        </ul>
        {/* menuOpen */}
        {menuOpen && (
          <ul className="absolute left-0 top-full z-50 w-full bg-white px-6 py-4 shadow-md md:hidden">
            <li className="py-2 text-sm font-medium text-[#DB2777]">Home</li>
            <li className="py-2 text-sm font-medium text-[#475569]">
              Technologies
            </li>
            <li className="py-2 text-sm font-medium text-[#475569]">
              Projects
            </li>
            <li className="py-2 text-sm font-medium text-[#475569]">About</li>
            <li className="py-2 text-sm font-medium text-[#475569]">Contact</li>
          </ul>
        )}

        {/* Login & SignUp Option */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <button className="rounded-full border border-white px-2.5 py-1.5 text-xs font-medium hover:bg-white sm:px-4 sm:py-2 sm:text-sm">Sign In</button>
          <button className="rounded-full bg-pink-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-pink-700 sm:px-4 sm:py-2 sm:text-sm">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
