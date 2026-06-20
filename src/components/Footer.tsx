const footerLinks = {
  Platform: ["Explore", "Collections", "Trends", "Industries", "Search"],
  Resources: [
    "Brand Intelligence",
    "Design Research",
    "Style Guide",
    "API Docs",
    "Changelog",
  ],
  Company: ["About", "Blog", "Careers", "Press", "Contact"],
  Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
};

export default function Footer() {
  return (
    <footer className="bg-[#2B2420] text-[#F7F3EC]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-14">
          {/* Brand column */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-2.5 mb-4 group">
              <svg
                width="24"
                height="24"
                viewBox="0 0 32 32"
                fill="none"
                className="text-[#C1652F]"
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
              <span className="text-[#F7F3EC] font-semibold text-base tracking-tight">
                Logo<span className="text-[#C1652F]">Arm</span>
              </span>
            </a>
            <p className="text-sm text-[#F7F3EC]/40 leading-relaxed max-w-xs">
              The world's premier destination for logo design inspiration,
              discovery, and research.
            </p>

            {/* Social links */}
            <div className="flex gap-3 mt-6">
              {["Twitter", "LinkedIn", "Instagram"].map((social) => (
                <a
                  key={social}
                  href="#"
                  aria-label={social}
                  className="w-8 h-8 rounded-lg bg-[#F7F3EC]/6 hover:bg-[#C1652F]/20 flex items-center justify-center text-[#F7F3EC]/40 hover:text-[#C1652F] transition-all duration-200"
                >
                  <svg
                    className="w-3.5 h-3.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold text-[#F7F3EC]/30 uppercase tracking-widest mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-[#F7F3EC]/50 hover:text-[#F7F3EC] transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-[#F7F3EC]/8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#F7F3EC]/25">
            © {new Date().getFullYear()} LogoArm. All rights reserved.
          </p>
          <p className="text-xs text-[#F7F3EC]/25">
            Made with care for the design community.
          </p>
        </div>
      </div>
    </footer>
  );
}
