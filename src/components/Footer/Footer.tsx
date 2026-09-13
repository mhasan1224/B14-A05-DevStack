interface FooterProps {
  logo: string;
}

export default function Footer({ logo }: FooterProps) {
  return (
    <footer className="mt-20 border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* footer top */}
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            {/* logo area */}
            <img src={logo} alt="Logo" className="w-24" />
            <p className="mt-4 max-w-xs text-sm leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers building modern software.</p>
            {/* Social Media */}
            <div className="mt-5 flex gap-4 text-xs font-medium text-gray-600">
              <a href="https://github.com/" className="hover:text-pink-600">GitHub</a>
              <a href="https://twitter.com/" className="hover:text-pink-600">Twitter</a>
              <a href="https://www.linkedin.com/" className="hover:text-pink-600">LinkedIn</a>
            </div>
          </div>
          {/* Product */}
          <div>
            <h3 className="text-xs font-bold text-gray-800">PRODUCT</h3>
            <ul className="mt-4 space-y-2 text-xs text-gray-500">
              <li><a href="#" className="hover:text-pink-600">Home</a></li>
              <li><a href="#" className="hover:text-pink-600">Technologies</a></li>
              <li><a href="#" className="hover:text-pink-600">Projects</a></li>
            </ul>
          </div>
          {/* company */}
          <div>
            <h3 className="text-xs font-bold text-gray-800">COMPANY</h3>
            <ul className="mt-4 space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-pink-600">About</a></li>
                <li><a href="#" className="hover:text-pink-600">Contact</a></li>
                <li><a href="#" className="hover:text-pink-600">Careers</a></li>
            </ul>
          </div>
          {/* legal */}
          <div>
            <h3 className="text-xs font-bold text-gray-800">LEGAL</h3>
            <ul className="mt-4 space-y-2 text-xs text-gray-500">
                <li><a href="#" className="hover:text-pink-600">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* footer bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-xs text-gray-400 md:flex-row">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-600">Privacy</a>
            <a href="#" className="hover:text-gray-600">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
