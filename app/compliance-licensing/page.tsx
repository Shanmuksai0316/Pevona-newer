import Image from "next/image";
import Link from "next/link";

export default function ComplianceLicensingPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero section */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[260px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[420px] md:h-[520px] lg:h-[620px] rounded-b-[36px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/c41a835ca6f677973c5d8a5f8bab7f491c02c58d.png"
                alt="Compliance and licensing documentation"
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
              Compliance & Licensing Services
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Ensuring your property meets all UK legal requirements. We handle licensing,
              certifications, and compliance documentation so you can let with confidence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-6 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Get Compliance Support
            </Link>
          </div>
        </div>
      </section>

      {/* What We Cover */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px]">
        <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] mb-12">
          What We Cover
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "HMO Licensing",
              body: "Mandatory and additional licensing applications, renewals, and compliance checks for Houses in Multiple Occupation.",
            },
            {
              title: "Energy Performance Certificates",
              body: "EPC assessments, ratings, and renewals to meet minimum E rating requirements for rental properties.",
            },
            {
              title: "Gas Safety Certificates",
              body: "Annual gas safety inspections and certification by qualified engineers, with automatic renewal reminders.",
            },
            {
              title: "Electrical Safety Standards",
              body: "EICR (Electrical Installation Condition Reports) and compliance with the Electrical Safety Standards in the Private Rented Sector.",
            },
            {
              title: "Deposit Protection",
              body: "Registration with authorised schemes (DPS, MyDeposits, TDS) and proper documentation for tenants.",
            },
            {
              title: "Right to Rent Checks",
              body: "Identity verification and documentation in line with Home Office requirements for all tenants.",
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

      {/* Our Compliance Process */}
      <section className="max-w-[1336px] mx-auto px-6 lg:px-0 mt-[140px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[40px] md:text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Our Compliance Process
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            We maintain a comprehensive compliance calendar for every property, ensuring all
            certifications are current and renewed before expiration. Our system tracks:
          </p>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-2 mt-4">
            <li>• License renewal dates and applications</li>
            <li>• Safety certificate expiration dates</li>
            <li>• Required inspections and assessments</li>
            <li>• Documentation updates and tenant notifications</li>
          </ul>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/8a20fef8761b3d243a6fdc22825d95aa63a18633.png"
            alt="Compliance documentation"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Legal Requirements */}
      <section className="max-w-[1336px] mx-auto px-6 lg:px-0 mt-[80px] mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pr-[60px]">
        <div className="flex-1 relative w-full max-w-[680px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/4d6323f216fb3b1783c21d7771cee17effcc5526.png"
            alt="Legal compliance meeting"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Legal Requirements &amp; Standards
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            We ensure full compliance with all UK letting regulations, including:
          </p>
          <ul className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80 space-y-2 mt-2">
            <li>• Tenant Fees Act 2019</li>
            <li>• Housing Act 2004 (HMO licensing)</li>
            <li>• Energy Efficiency (Private Rented Property) Regulations</li>
            <li>• Gas Safety (Installation and Use) Regulations</li>
            <li>• Electrical Safety Standards in the Private Rented Sector</li>
            <li>• Right to Rent checks (Immigration Act 2014)</li>
            <li>• GDPR and data protection requirements</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

