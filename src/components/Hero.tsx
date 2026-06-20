import { useState } from "react";

export default function Hero() {
  const [query, setQuery] = useState("");

  const trendingSearches = [
    "Nike",
    "Minimal logos",
    "Tech startups",
    "Vintage marks",
    "Wordmarks",
    "Geometric",
  ];

  return (
    <div className="relative w-full bg-[#F7F3EC] select-none py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Subtle background texture */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#C1652F]/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#2F4858]/5 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #2B2420 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EAE0] border border-[#C1652F]/20 text-[#C1652F] text-xs font-semibold uppercase tracking-wider mb-6 md:mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C1652F] animate-pulse" />
            World's Premier Logo Platform
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2B2420] leading-[1.08] tracking-tight mb-4 md:mb-6">
            Discover the world's
            <br />
            <span className="text-[#C1652F]">greatest logos</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm md:text-lg text-[#8C7E72] max-w-2xl mx-auto mb-6 md:mb-8 leading-relaxed">
            The world's premier destination for logo design inspiration, discovery,
            and research. Explore millions of logos across every industry and era.
          </p>

          {/* Search bar */}
          <div className="relative w-full max-w-2xl mx-auto mb-6">
            <div className="flex items-center bg-[#F1EAE0] border-2 border-[#2B2420]/10 rounded-2xl shadow-sm hover:border-[#C1652F]/30 focus-within:border-[#C1652F]/50 transition-all duration-200 overflow-hidden">
              <div className="pl-5 pr-3">
                <svg
                  className="w-5 h-5 text-[#8C7E72]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search brands, styles, industries..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 py-3 md:py-4 pr-4 text-[#2B2420] placeholder-[#8C7E72]/70 bg-transparent outline-none text-sm md:text-base"
              />
              <button className="m-1.5 px-4 md:px-6 py-2 bg-[#C1652F] hover:bg-[#2F4858] text-[#F7F3EC] text-xs md:text-sm font-semibold rounded-xl transition-all duration-200 whitespace-nowrap">
                Search
              </button>
            </div>
          </div>

          {/* Trending searches */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            <span className="text-xs text-[#8C7E72] font-medium">Trending:</span>
            {trendingSearches.map((term) => (
              <button
                key={term}
                className="px-3 py-1 text-xs font-medium text-[#8C7E72] bg-[#F1EAE0] hover:bg-[#C1652F]/10 hover:text-[#C1652F] rounded-full border border-[#2B2420]/8 hover:border-[#C1652F]/20 transition-all duration-200"
                onClick={() => setQuery(term)}
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
