import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      {/* Level 1: Brand Links - Lighter green */}
      <div className="bg-green-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-4">Parks Morocco</h3>
              <p className="text-white/80">
                Discover the natural beauty of Morocco&apos;s 11 national parks,
                protecting over 7,700 km² of diverse ecosystems.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-4 tracking-wider">
                Explore
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/parks" className="text-white/80 hover:text-white transition-colors">
                    All Parks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parks?region=High Atlas"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    High Atlas Parks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parks?region=Sahara"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Sahara Parks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/parks?region=Mediterranean Coast"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Coastal Parks
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-4 tracking-wider">
                Plan Your Visit
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/plan-your-visit#permits"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Permits & Fees
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-your-visit#safety"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Safety Guidelines
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-your-visit#accommodation"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Accommodation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/plan-your-visit#guides"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Guides & Tours
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-white uppercase mb-4 tracking-wider">
                About
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about#mission"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#conservation"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Conservation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#history"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    History
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about#contact"
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Level 2: Legal Info - Darker green */}
      <div className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              &copy; {new Date().getFullYear()} Parks Morocco. Protecting
              Morocco&apos;s natural heritage.
            </p>
            <nav className="flex flex-wrap justify-center gap-6">
              <Link
                href="/terms"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/disclaimer"
                className="text-white/60 hover:text-white text-sm transition-colors"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
