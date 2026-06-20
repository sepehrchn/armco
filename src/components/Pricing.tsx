const plans = [
  {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "For casual exploration and inspiration.",
    features: [
      "100 logo searches / month",
      "Basic filters",
      "Public collections",
      "Standard resolution previews",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "per month",
    description: "For working designers and brand consultants.",
    features: [
      "Unlimited searches",
      "Advanced filters & colour search",
      "Private collections & boards",
      "Full brand intelligence reports",
      "Trend tracking dashboard",
      "Priority support",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Team",
    price: "$38",
    period: "per month",
    description: "For agencies and in-house brand teams.",
    features: [
      "Everything in Pro",
      "Up to 10 team members",
      "Shared collections & workspaces",
      "API access",
      "Custom exports",
      "Dedicated account manager",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#F1EAE0] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#C1652F] mb-2">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#2B2420] tracking-tight mb-3">
            Simple, transparent pricing
          </h2>
          <p className="text-[#8C7E72] text-base max-w-xl mx-auto">
            Start for free. Upgrade when you need more power.
          </p>
        </div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-7 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-[#2F4858] border-[#2F4858] shadow-xl shadow-[#2F4858]/20"
                  : "bg-[#F7F3EC] border-[#2B2420]/6 hover:border-[#C1652F]/20 hover:shadow-md"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-semibold bg-[#C1652F] text-[#F7F3EC] rounded-full">
                    Most popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3
                  className={`text-base font-semibold mb-1 ${
                    plan.highlighted ? "text-[#F7F3EC]/70" : "text-[#8C7E72]"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span
                    className={`text-4xl font-bold tracking-tight ${
                      plan.highlighted ? "text-[#F7F3EC]" : "text-[#2B2420]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.highlighted ? "text-[#F7F3EC]/50" : "text-[#8C7E72]"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>
                <p
                  className={`text-sm ${
                    plan.highlighted ? "text-[#F7F3EC]/60" : "text-[#8C7E72]"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 flex-1 mb-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <svg
                      className={`w-4 h-4 mt-0.5 shrink-0 ${
                        plan.highlighted ? "text-[#C1652F]" : "text-[#C1652F]"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span
                      className={`text-sm ${
                        plan.highlighted
                          ? "text-[#F7F3EC]/80"
                          : "text-[#8C7E72]"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#getstarted"
                className={`block text-center py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                  plan.highlighted
                    ? "bg-[#C1652F] text-[#F7F3EC] hover:bg-[#F7F3EC] hover:text-[#C1652F]"
                    : "bg-[#2B2420]/6 text-[#2B2420] hover:bg-[#C1652F] hover:text-[#F7F3EC]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
