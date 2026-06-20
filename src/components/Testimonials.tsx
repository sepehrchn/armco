const testimonials = [
  {
    quote:
      "LogoArm is the first place I go when starting any brand identity project. The depth of the research tools is unmatched.",
    name: "Sarah Müller",
    role: "Brand Director, Pentagram",
    initials: "SM",
    color: "#C1652F",
  },
  {
    quote:
      "I've used every logo resource out there. Nothing comes close to LogoArm for serious research — the search quality is exceptional.",
    name: "James Okoye",
    role: "Creative Lead, Wolff Olins",
    initials: "JO",
    color: "#2F4858",
  },
  {
    quote:
      "An indispensable tool for our team. The trend tracking alone saves us hours of manual research every week.",
    name: "Lena Park",
    role: "Design Strategist, Landor",
    initials: "LP",
    color: "#8C7E72",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F7F3EC] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-2">
            Trusted by
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight">
            Loved by the world's
            <br />
            best design teams
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-6 bg-[#F1EAE0] rounded-2xl border border-[#2B2420]/6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    className="w-4 h-4 text-[#C1652F]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm text-[#2B2420] leading-relaxed flex-1 mb-5">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-[#F7F3EC] shrink-0"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-[#2B2420]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[#8C7E72]">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Logos bar */}
        <div className="mt-14 pt-10 border-t border-[#2B2420]/8">
          <p className="text-center text-xs font-medium text-[#8C7E72] uppercase tracking-widest mb-7">
            Trusted by teams at
          </p>
          <div className="flex items-center justify-center flex-wrap gap-8 md:gap-14">
            {[
              "Pentagram",
              "Landor",
              "Wolff Olins",
              "Interbrand",
              "Saffron",
              "DesignBridge",
            ].map((firm) => (
              <span
                key={firm}
                className="text-sm font-semibold text-[#8C7E72]/60 hover:text-[#8C7E72] transition-colors duration-200 tracking-wide"
              >
                {firm}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
