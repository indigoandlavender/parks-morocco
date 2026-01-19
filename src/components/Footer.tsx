import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold text-black mb-4">Parks Morocco</h3>
            <p className="text-black">
              Discover the natural beauty of Morocco&apos;s 11 national parks,
              protecting over 7,700 km² of diverse ecosystems.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-black uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/parks" className="text-black hover:text-green-700">
                  All Parks
                </Link>
              </li>
              <li>
                <Link
                  href="/parks?region=High Atlas"
                  className="text-black hover:text-green-700"
                >
                  High Atlas Parks
                </Link>
              </li>
              <li>
                <Link
                  href="/parks?region=Sahara"
                  className="text-black hover:text-green-700"
                >
                  Sahara Parks
                </Link>
              </li>
              <li>
                <Link
                  href="/parks?region=Mediterranean Coast"
                  className="text-black hover:text-green-700"
                >
                  Coastal Parks
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-black uppercase mb-4">
              Plan Your Visit
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/plan-your-visit#permits"
                  className="text-black hover:text-green-700"
                >
                  Permits & Fees
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-your-visit#safety"
                  className="text-black hover:text-green-700"
                >
                  Safety Guidelines
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-your-visit#accommodation"
                  className="text-black hover:text-green-700"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/plan-your-visit#guides"
                  className="text-black hover:text-green-700"
                >
                  Guides & Tours
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-black uppercase mb-4">
              About
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about#mission"
                  className="text-black hover:text-green-700"
                >
                  Our Mission
                </Link>
              </li>
              <li>
                <Link
                  href="/about#conservation"
                  className="text-black hover:text-green-700"
                >
                  Conservation
                </Link>
              </li>
              <li>
                <Link
                  href="/about#history"
                  className="text-black hover:text-green-700"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/about#contact"
                  className="text-black hover:text-green-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-black text-center">
            &copy; {new Date().getFullYear()} Parks Morocco. Protecting
            Morocco&apos;s natural heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
