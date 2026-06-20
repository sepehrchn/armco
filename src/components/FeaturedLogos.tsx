import meridianImg from "../images/Meridian_Bank_wordmark_design.jpeg";
import voltaImg from "../images/Volta_Energy_lettermark_design.jpeg";
import arkadeImg from "../images/Arkade_Studio_brand_mark.jpeg";
import pineridgeImg from "../images/Minimalist_retail_emblem_Pinerid.jpeg";
import luminaryImg from "../images/Healthcare_combination_mark_Lumi.jpeg";
import crestImg from "../images/Crest_Foods_wordmark_design.jpeg";

const logos = [
  {
    brand: "Meridian Bank",
    industry: "Finance",
    style: "Wordmark",
    year: "2022",
    color: "#2F4858",
    initial: "M",
    image: meridianImg,
  },
  {
    brand: "Volta Energy",
    industry: "Energy",
    style: "Lettermark",
    year: "2021",
    color: "#C1652F",
    initial: "V",
    image: voltaImg,
  },
  {
    brand: "Arkade Studio",
    industry: "Creative",
    style: "Abstract",
    year: "2023",
    color: "#8C7E72",
    initial: "A",
    image: arkadeImg,
  },
  {
    brand: "Pineridge Co.",
    industry: "Retail",
    style: "Emblem",
    year: "2020",
    color: "#2B2420",
    initial: "P",
    image: pineridgeImg,
  },
  {
    brand: "Luminary Health",
    industry: "Healthcare",
    style: "Combination",
    year: "2023",
    color: "#2F4858",
    initial: "L",
    image: luminaryImg,
  },
  {
    brand: "Crest Foods",
    industry: "Food & Bev",
    style: "Wordmark",
    year: "2019",
    color: "#C1652F",
    initial: "C",
    image: crestImg,
  },
];

export default function FeaturedLogos() {
  return (
    <section id="explore" className="bg-[#F7F3EC] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-2">
              Featured
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight">
              Editor's picks
            </h2>
            <p className="text-[#8C7E72] mt-2 text-base">
              Handpicked logos selected for craft and originality.
            </p>
          </div>
          <a
            href="#explore"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#C1652F] hover:text-[#2F4858] transition-colors duration-200"
          >
            View all
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

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {logos.map((logo, i) => (
            <LogoCard key={i} {...logo} />
          ))}
        </div>

        {/* Mobile View All */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#C1652F] hover:text-[#2F4858] transition-colors duration-200"
          >
            View all logos
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
      </div>
    </section>
  );
}

function LogoCard({
  brand,
  industry,
  style,
  year,
  color,
  initial,
  image,
}: {
  brand: string;
  industry: string;
  style: string;
  year: string;
  color: string;
  initial: string;
  image?: string;
}) {
  return (
    <div className="group bg-[#F1EAE0] rounded-2xl border border-[#2B2420]/6 overflow-hidden hover:border-[#C1652F]/20 hover:shadow-md transition-all duration-300 cursor-pointer">
      {/* Logo display area */}
      <div className="aspect-[4/3] flex items-center justify-center relative overflow-hidden bg-[#F1EAE0]">
        {image ? (
          <img 
            src={image} 
            alt={brand} 
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: color + "18" }}
          >
            <span
              className="text-3xl font-bold tracking-tight"
              style={{ color }}
            >
              {initial}
            </span>
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#2B2420]/0 group-hover:bg-[#2B2420]/3 transition-all duration-300" />
        {/* Quick actions */}
        <div className="absolute top-3 right-3 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <button className="w-7 h-7 rounded-full bg-[#F7F3EC] shadow-sm flex items-center justify-center text-[#8C7E72] hover:text-[#C1652F] transition-colors">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
          <button className="w-7 h-7 rounded-full bg-[#F7F3EC] shadow-sm flex items-center justify-center text-[#8C7E72] hover:text-[#C1652F] transition-colors">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Card info */}
      <div className="px-4 py-3 border-t border-[#2B2420]/6 bg-[#F1EAE0] relative z-10">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-sm font-semibold text-[#2B2420] truncate">
              {brand}
            </p>
            <p className="text-xs text-[#8C7E72] mt-0.5">{industry}</p>
          </div>
          <div className="flex flex-col items-end gap-1 shrink-0">
            <span className="text-xs font-medium text-[#C1652F] bg-[#C1652F]/8 px-2 py-0.5 rounded-full">
              {style}
            </span>
            <span className="text-xs text-[#8C7E72]">{year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
