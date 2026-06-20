import swissImg from "../images/Swiss_Modernism_brand_identity.jpeg";
import techImg from "../images/Tech_unicorn_identity_design_study.jpeg";
import heritageImg from "../images/Minimalist_seal_design_Heritage.jpeg";
import americanRetailImg from "../images/American_Retail_Harvest.jpg";

const collections = [
  {
    title: "Swiss Modernism",
    count: "412 logos",
    description: "Clean grids, Helvetica, and the power of negative space.",
    accent: "#2F4858",
    image: swissImg,
  },
  {
    title: "American Retail",
    count: "1,204 logos",
    description: "Bold, optimistic marks from mid-century to today.",
    accent: "#C1652F",
    image: americanRetailImg,
  },
  {
    title: "Tech Unicorns",
    count: "389 logos",
    description: "The visual identity of billion-dollar startups.",
    accent: "#8C7E72",
    image: techImg,
  },
  {
    title: "Heritage Marks",
    count: "654 logos",
    description: "Logos that have endured decades without compromise.",
    accent: "#2B2420",
    image: heritageImg,
  },
];

const industries = [
  "Finance",
  "Healthcare",
  "Technology",
  "Fashion",
  "Food & Bev",
  "Automotive",
  "Architecture",
  "Education",
  "Sports",
  "Media",
  "Hospitality",
  "Retail",
];

export default function Collections() {
  return (
    <section id="collections" className="bg-[#F7F3EC] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-2">
              Collections
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight">
              Curated by experts
            </h2>
            <p className="text-[#8C7E72] mt-2 text-base">
              Deep-dive collections for serious students of design.
            </p>
          </div>
          <a
            href="#collections"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#C1652F] hover:text-[#2F4858] transition-colors duration-200"
          >
            All collections
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>

        {/* Collections grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {collections.map((col, i) => (
            <a
              key={i}
              href="#collections"
              className="group relative flex flex-col overflow-hidden bg-[#F1EAE0] rounded-2xl border border-[#2B2420]/6 hover:border-[#C1652F]/20 hover:shadow-md transition-all duration-300"
            >
              {col.image && (
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={col.image} 
                    alt={col.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              )}
              <div className="flex items-center gap-5 p-6">
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundColor: col.accent + "18" }}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke={col.accent}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-base font-semibold text-[#2B2420]">
                      {col.title}
                    </h3>
                    <span className="text-xs text-[#8C7E72]">{col.count}</span>
                  </div>
                  <p className="text-sm text-[#8C7E72] mt-1">{col.description}</p>
                </div>
                <svg
                  className="w-4 h-4 text-[#8C7E72] group-hover:text-[#C1652F] transition-colors shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Industries */}
        <div id="industries">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-4">
            Browse by industry
          </p>
          <div className="flex flex-wrap gap-2.5">
            {industries.map((industry) => (
              <a
                key={industry}
                href="#industries"
                className="px-4 py-2 text-sm font-medium text-[#8C7E72] bg-[#F1EAE0] hover:bg-[#C1652F] hover:text-[#F7F3EC] rounded-full border border-[#2B2420]/8 hover:border-[#C1652F] transition-all duration-200"
              >
                {industry}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
