"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-black">
                Parks Morocco
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/parks"
              className="text-black hover:text-green-700 font-medium"
            >
              Explore Parks
            </Link>
            <Link
              href="/plan-your-visit"
              className="text-black hover:text-green-700 font-medium"
            >
              Plan Your Visit
            </Link>
            <Link
              href="/about"
              className="text-black hover:text-green-700 font-medium"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black p-2"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/parks"
                className="text-black hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Parks
              </Link>
              <Link
                href="/plan-your-visit"
                className="text-black hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Plan Your Visit
              </Link>
              <Link
                href="/about"
                className="text-black hover:text-green-700 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
