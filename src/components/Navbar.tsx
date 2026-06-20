import { useState } from "react";

const navLinks = [
  { label: "Explore", href: "#explore" },
  { label: "Collections", href: "#collections" },
  { label: "Industries", href: "#industries" },
  { label: "Trends", href: "#trends" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F7F3EC]/95 backdrop-blur-md shadow-sm border-b border-[#2B2420]/8"
          : "bg-[#F7F3EC]/90 backdrop-blur-sm"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                className="text-[#C1652F] transition-transform duration-300 group-hover:rotate-12"
              >
                <path
                  d="M16 2L30 16L16 30L2 16L16 2Z"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M16 8L24 16L16 24L8 16L16 8Z"
                  fill="currentColor"
                  opacity="0.4"
                />
              </svg>
            </div>
            <span className="text-[#2B2420] font-semibold text-lg tracking-tight">
              Logo<span className="text-[#C1652F]">Arm</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-[#8C7E72] hover:text-[#2F4858] rounded-lg hover:bg-[#F1EAE0] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#signin"
              className="text-sm font-medium text-[#8C7E72] hover:text-[#2F4858] transition-colors duration-200"
            >
              Sign in
            </a>
            <a
              href="#getstarted"
              className="px-4 py-2 text-sm font-semibold bg-[#C1652F] text-[#F7F3EC] rounded-lg hover:bg-[#2F4858] transition-all duration-200 shadow-sm"
            >
              Get started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#8C7E72] hover:text-[#2B2420] hover:bg-[#F1EAE0] transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
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

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#2B2420]/8 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2.5 text-sm font-medium text-[#8C7E72] hover:text-[#2F4858] hover:bg-[#F1EAE0] rounded-lg transition-all duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#2B2420]/8 flex flex-col gap-2 px-4">
              <a
                href="#signin"
                className="text-sm font-medium text-[#8C7E72] hover:text-[#2F4858] transition-colors duration-200"
              >
                Sign in
              </a>
              <a
                href="#getstarted"
                className="px-4 py-2 text-sm font-semibold bg-[#C1652F] text-[#F7F3EC] rounded-lg hover:bg-[#2F4858] transition-all duration-200 text-center"
              >
                Get started
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
