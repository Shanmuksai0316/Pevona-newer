import Image from "next/image";
import Link from "next/link";

export default function InternationalPropertiesPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[628px]">
          {/* Background */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <div className="absolute inset-0 bg-white" />
              <Image
                src="http://localhost:3845/assets/e7509bc3628be51be9ac618bfd9066b2f7214484.png"
                alt="London city financial district"
                fill
                className="object-cover object-right"
                unoptimized
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative max-w-[718px] mt-[299px] space-y-[26px] text-white">
            <div className="space-y-4">
              <h1 className="font-crimson leading-[66px] tracking-[-1.98px]">
                Your Gateway to Global Property Investments
              </h1>
              <p className="font-manrope text-[18px] leading-[28px]">
                Explore, Invest, and Grow Beyond Borders.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[56px] px-5 rounded-[8px] bg-white text-[#002f57] font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] hover:text-white transition-colors"
            >
              Book a Global Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-[10px] order-2 lg:order-1">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Introduction
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            Welcome to Pevona Ltd's International Property Hub - your gateway to global real estate
            opportunities. Our mission is to connect discerning investors with premium properties
            worldwide, ensuring compliance, transparency, and exceptional returns.
          </p>
        </div>

        <div className="flex-1 relative w-full max-w-[609px] h-[450px] rounded-[26px] overflow-hidden order-1 lg:order-2">
          <Image
            src="http://localhost:3845/assets/7498cf2fef94529a8af4bff37d1334a50fba785e.png"
            alt="Closeup toy wooden house keys dollars laptop"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Why Invest Internationally */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[100px] items-center">
        <div className="flex-1 relative w-full max-w-[609px] h-[450px] rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="http://localhost:3845/assets/71b9e6f13f7a48265b0366e87283697495c3b992.png"
            alt="Client real estate agent review loan contract"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-[26px] order-1 lg:order-2">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Why Invest Internationally
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              Investing internationally diversifies your portfolio, mitigates risk, and opens doors
              to high-growth markets. Pevona ensures compliance with local laws, tax efficiency, and
              currency risk management.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#29902E] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] transition-colors"
          >
            Discover Global Benefits
          </Link>
        </div>
      </section>

      {/* Featured Global Properties */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[100px] items-center">
        <div className="flex-1 max-w-[589px] space-y-[26px]">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Featured Global Properties
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              Showcase premium properties across Europe, Asia, and the Americas. Each listing
              includes detailed descriptions, ROI projections, and compliance notes.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#29902E] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] transition-colors"
          >
            Explore Overseas Opportunities
          </Link>
        </div>

        <div className="flex-1 relative w-full max-w-[609px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/f8b53e500c8d18f8786d2691ba0bd992cf360834.png"
            alt="City sunset"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Investment Process */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[26px]">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57] text-center">
          Investment Process
        </h2>

        <div className="flex flex-col lg:flex-row gap-[68px] items-end">
          <div className="flex-1 relative w-full max-w-[602px] h-[660px] rounded-[26px] overflow-hidden">
            <Image
              src="http://localhost:3845/assets/438dbfc52b285cf3defe4e3f658f4bcac999401c.png"
              alt="Young couple meeting with insurance agent"
              fill
              className="object-cover"
              unoptimized
            />
          </div>

          <div className="flex-1 max-w-[662px] space-y-[32px]">
            {[
              {
                step: "STEP 1",
                title: "Consultation",
                description: "Understand your goals and budget.",
              },
              {
                step: "STEP 2",
                title: "Property Selection",
                description: "Curated listings tailored to your needs.",
              },
              {
                step: "STEP 3",
                title: "Legal & Compliance",
                description: "Navigate cross-border regulations.",
              },
              {
                step: "STEP 4",
                title: "Transaction & Management",
                description: "Secure, transparent, and efficient.",
              },
              {
                step: "STEP 5",
                title: "Ongoing Support",
                description: "Continuous monitoring and portfolio optimization.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col gap-[6px]">
                <div className="bg-[#fce6e9] inline-flex items-center justify-center px-[10px] py-[4px] rounded-[100px] w-fit">
                  <p className="font-manrope font-medium text-[12px] leading-[16px] text-[#333]">
                    {item.step}
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57]">
                    {item.title}
                  </h3>
                  <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Support */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-[26px]">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Expert Support
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              Our team offers legal, tax, and currency exchange advisory to simplify international
              transactions. Multilingual support ensures seamless communication.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#29902E] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] transition-colors"
          >
            Speak to Our Experts
          </Link>
        </div>

        <div className="flex-1 relative w-full max-w-[609px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/0487f5dbb8a3de00ca8cd3a3c75167696ad7fa81.png"
            alt="Team engineers with draft plan"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Trust Signals */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pr-[60px]">
        <div className="flex-1 relative w-full max-w-[609px] h-[450px] rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="http://localhost:3845/assets/be4c004e25d378259f63aa231f9dbf9aa9d01c36.png"
            alt="Businessmen closing deal with handshake"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-[10px] order-1 lg:order-2">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Trust Signals
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            CMP certification, compliance badges, and partnerships with global property networks
            reinforce trust and credibility.
          </p>
        </div>
      </section>

      {/* SEO Strategy */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-[10px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            SEO Strategy
          </h2>
          <div className="space-y-2 font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            <p>
              Meta Description: Pevona Ltd connects you to premium international properties with expert
              guidance and compliance assurance.
            </p>
            <p>Alt Tags: Global property investments, overseas real estate opportunities.</p>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[609px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/014c3cc49f309d4ad3446b8c1e09229087d582e5.png"
            alt="Search engine optimization"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Comparison Insights */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px] flex flex-col gap-[26px]">
        <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
          Comparison Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "Knight Frank & Savills",
              description: "Global listings and bespoke valuation services.",
            },
            {
              title: "Foxtons",
              description: "London-centric investments with portfolio growth strategies.",
            },
            {
              title: "Chestertons",
              description: "Dedicated China Desk and multilingual support.",
            },
            {
              title: "Hamptons",
              description: "Split teams for International Sales & Lettings, Private Office for UHNW clients.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] px-[30px] py-[26px] h-[116px] flex flex-col justify-center"
            >
              <h3 className="font-crimson font-semibold text-[26px] leading-[30px] text-[#002f57] mb-2">
                {item.title}
              </h3>
              <p className="font-manrope font-medium text-[16px] leading-[26px] text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

