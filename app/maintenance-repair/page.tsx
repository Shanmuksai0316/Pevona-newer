import Image from "next/image";
import Link from "next/link";

export default function MaintenanceRepairPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[260px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-b-[36px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/83aa6c5cafb7c95dd4508b39aac1208316485032.png"
                alt="Property maintenance and repairs"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          {/* Hero copy */}
          <div className="relative max-w-[780px] mt-10 space-y-6 text-white">
            <h1 className="font-crimson leading-[1.05] tracking-[-0.06em]">
              Maintenance &amp; Repair Services
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Fast, reliable maintenance coordination with vetted contractors. We handle repairs,
              inspections, and property upkeep to keep your investment in excellent condition.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Request Maintenance Support
            </Link>
          </div>
        </div>
      </section>

      {/* Our Maintenance Services */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px]">
        <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] mb-12">
          Our Maintenance Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Emergency Repairs",
              body: "24/7 emergency response for urgent issues like heating failures, leaks, and electrical problems.",
            },
            {
              title: "Routine Maintenance",
              body: "Scheduled servicing for boilers, heating systems, and appliances to prevent breakdowns.",
            },
            {
              title: "Property Inspections",
              body: "Regular condition checks to identify issues early and maintain property standards.",
            },
            {
              title: "Contractor Network",
              body: "Vetted, qualified tradespeople for plumbing, electrical, heating, and general repairs.",
            },
            {
              title: "Digital Tracking",
              body: "Online portal for reporting issues, tracking progress, and viewing maintenance history.",
            },
            {
              title: "Cost Management",
              body: "Transparent quotes, approval processes, and detailed invoicing for all work completed.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-6 py-8 space-y-3"
            >
              <h3 className="font-crimson text-[24px] md:text-[26px] leading-[30px] text-[#002f57]">
                {item.title}
              </h3>
              <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-[1336px] mx-auto px-6 lg:px-0 mt-[140px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            How It Works
          </h2>
          <div className="space-y-6 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            <div>
              <h3 className="font-semibold text-[#002f57] mb-2">1. Issue Reported</h3>
              <p>Tenants report maintenance issues through our digital portal or phone line.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#002f57] mb-2">2. Assessment &amp; Quote</h3>
              <p>We assess the issue and obtain quotes from qualified contractors.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#002f57] mb-2">3. Approval &amp; Scheduling</h3>
              <p>You approve the work, and we schedule repairs at a convenient time.</p>
            </div>
            <div>
              <h3 className="font-semibold text-[#002f57] mb-2">4. Completion &amp; Follow-up</h3>
              <p>Work is completed, inspected, and documented with photos and invoices.</p>
            </div>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/3fb88f4927dd73a2151486c481215e193468160b.png"
            alt="Maintenance work in progress"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-[1336px] mx-auto px-6 lg:px-0 mt-[80px] mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pr-[60px]">
        <div className="flex-1 relative w-full max-w-[680px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/15d79eea300e3b6fddbb61c0fa4d7a4b45196cce.png"
            alt="Property maintenance benefits"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Why Choose Our Maintenance Service
          </h2>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-3">
            <li>• Fast response times for urgent repairs</li>
            <li>• Network of trusted, qualified contractors</li>
            <li>• Transparent pricing with no hidden fees</li>
            <li>• Digital tracking and reporting system</li>
            <li>• Proactive maintenance to prevent costly issues</li>
            <li>• Full documentation and warranty management</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

