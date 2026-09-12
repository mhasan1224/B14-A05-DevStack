interface NavbarProps{
    logo: string;
}

export default function Navbar({logo}:NavbarProps) {
    return (
        <div className="sticky top-0 z-50 border-b border-gray-100 ">
            <div className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6">
                {/* main logo */}
                <div>
                    <img src={logo} alt="Logo" className="w-24"/>
                </div>
                {/* main navbar element */}
                <ul className="items-center gap-7 text-sm md:flex">
                    <li className="cursor-pointer font-medium text-[#DB2777]">Home</li>
                    <li className="cursor-pointer font-medium text-[#475569]">Technologies</li>
                    <li className="cursor-pointer font-medium text-[#475569]">Projects</li>
                    <li className="cursor-pointer font-medium text-[#475569]">About</li>
                    <li className="cursor-pointer font-medium text-[#475569]">Contact</li>
                </ul>
                {/* Login & SignUp Option */}
                <div className="flex items-center gap-4 text-sm">
                <button className="btn rounded-full border border-white px-5 py-2 font-medium hover:bg-white">Sign In</button>
                <button className="btn rounded-full bg-pink-600 px-5 py-2 font-medium text-white hover:bg-pink-700">Sign Up</button>
                </div>
            </div>
        </div>
    );
}