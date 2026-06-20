const trends = [
  {
    rank: 1,
    trend: "Wordmark Revival",
    change: "+24%",
    direction: "up",
    description: "Pure typographic logos returning across all sectors.",
  },
  {
    rank: 2,
    trend: "Warm Earth Tones",
    change: "+18%",
    direction: "up",
    description: "Terracotta, cream, and warm browns replacing cool palettes.",
  },
  {
    rank: 3,
    trend: "Geometric Reduction",
    change: "+12%",
    direction: "up",
    description: "Brands simplifying to essential geometric forms.",
  },
  {
    rank: 4,
    trend: "Heritage Revival",
    change: "+9%",
    direction: "up",
    description: "Victorian and Art Nouveau influences in modern marks.",
  },
  {
    rank: 5,
    trend: "Gradient Logos",
    change: "–6%",
    direction: "down",
    description: "Multi-colour gradients losing favour to solid marks.",
  },
];

export default function Trends() {
  return (
    <section id="trends" className="bg-[#F1EAE0] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-2">
              Trends
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight mb-4">
              What's moving
              <br />
              in logo design
            </h2>
            <p className="text-[#8C7E72] text-base leading-relaxed mb-8">
              Track emerging trends across the global logo landscape. Updated
              weekly with data from our full index of 2.4 million logos.
            </p>
            <a
              href="#trends"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold bg-[#C1652F] text-[#F7F3EC] rounded-xl hover:bg-[#2F4858] transition-all duration-200"
            >
              Explore all trends
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

          {/* Right: trend list */}
          <div className="space-y-3">
            {trends.map((trend) => (
              <div
                key={trend.rank}
                className="group flex items-center gap-4 p-5 bg-[#F7F3EC] rounded-2xl border border-[#2B2420]/6 hover:border-[#C1652F]/20 hover:shadow-md transition-all duration-300 cursor-pointer"
              >
                {/* Rank */}
                <span className="text-xl font-bold text-[#2B2420]/20 w-7 text-center shrink-0 tabular-nums">
                  {trend.rank}
                </span>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[#2B2420]">
                    {trend.trend}
                  </p>
                  <p className="text-xs text-[#8C7E72] mt-0.5">
                    {trend.description}
                  </p>
                </div>

                {/* Change badge */}
                <div
                  className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold shrink-0 ${
                    trend.direction === "up"
                      ? "bg-[#C1652F]/10 text-[#C1652F]"
                      : "bg-[#8C7E72]/10 text-[#8C7E72]"
                  }`}
                >
                  <svg
                    className={`w-3 h-3 ${trend.direction === "down" ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M5 10l7-7m0 0l7 7m-7-7v18"
                    />
                  </svg>
                  {trend.change}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
