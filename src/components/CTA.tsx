export default function CTA() {
  return (
    <section className="bg-[#F7F3EC] py-24">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="relative bg-[#2F4858] rounded-3xl overflow-hidden p-10 md:p-16 text-center">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#C1652F]/10 blur-2xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-[#F7F3EC]/5 blur-2xl" />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #F7F3EC 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>

          <div className="relative">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#C1652F]/20 mb-6">
              <svg
                width="28"
                height="28"
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
                  opacity="0.6"
                />
              </svg>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-[#F7F3EC] tracking-tight mb-4">
              Start exploring today
            </h2>
            <p className="text-[#F7F3EC]/60 text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
              Join over 50,000 designers and brand strategists who use LogoArm
              to discover, research, and stay inspired.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#getstarted"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold bg-[#C1652F] text-[#F7F3EC] rounded-xl hover:bg-[#F7F3EC] hover:text-[#C1652F] transition-all duration-200 shadow-lg"
              >
                Get started free
              </a>
              <a
                href="#explore"
                className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold border border-[#F7F3EC]/20 text-[#F7F3EC]/80 rounded-xl hover:border-[#F7F3EC]/40 hover:text-[#F7F3EC] transition-all duration-200"
              >
                Explore the platform
              </a>
            </div>

            <p className="mt-5 text-xs text-[#F7F3EC]/30">
              Free forever. No credit card required.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
