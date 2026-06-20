const features = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    title: "Intelligent Search",
    description:
      "Search by brand name, industry, style, color palette, or visual characteristics. Our semantic search understands design intent.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    title: "Brand Intelligence",
    description:
      "Deep-dive into brand histories, design evolutions, and the strategic thinking behind the world's most recognised visual identities.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    title: "Curated Collections",
    description:
      "Explore expert-curated collections organised by era, style movement, geographic origin, and design philosophy.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
    title: "Trend Tracking",
    description:
      "Stay ahead of the curve with real-time trend data showing what design styles are emerging across industries worldwide.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    title: "Color Analysis",
    description:
      "Filter and discover logos by colour, explore palettes across industries, and understand how colour choices communicate brand values.",
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
        />
      </svg>
    ),
    title: "Research Tools",
    description:
      "Professional-grade research tools for brand strategists, designers, and researchers studying visual identity at scale.",
  },
];

export default function Features() {
  return (
    <section id="about" className="bg-[#F1EAE0] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-2">
            Platform
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight mb-4">
            Everything you need
            <br />
            to research logos
          </h2>
          <p className="text-[#8C7E72] text-base leading-relaxed">
            Built for designers, brand strategists, and visual researchers who
            demand depth, accuracy, and inspiration in one place.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-6 bg-[#F7F3EC] rounded-2xl border border-[#2B2420]/6 hover:border-[#C1652F]/20 hover:shadow-md transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl bg-[#C1652F]/10 text-[#C1652F] flex items-center justify-center mb-4 group-hover:bg-[#C1652F] group-hover:text-[#F7F3EC] transition-all duration-300">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-[#2B2420] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#8C7E72] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
