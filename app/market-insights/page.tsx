import Image from "next/image";
import Link from "next/link";

export default function MarketInsightsPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* Hero Banner */}
      <section className="relative w-full overflow-hidden">
        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] pt-[39px] pb-[628px]">
          {/* Background image with gradient */}
          <div className="absolute inset-0 -z-10">
            <div className="relative w-full h-[760px] rounded-b-[36px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/f2994f288d1568d003c0e0afbd02ad770efa7ff8.png"
                alt="Examining business documents"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#002f57]/90 via-[#002f57]/75 to-transparent" />
            </div>
          </div>

          {/* Hero Content */}
          <div className="relative max-w-[475px] mt-[380px] space-y-4 text-white">
            <h1 className="font-crimson leading-[66px] tracking-[-1.98px]">
              Market Insights
            </h1>
            <p className="font-manrope text-[18px] leading-[28px] text-white/90">
              Simple updates and clear snapshots to help you understand today's UK property
              market.
            </p>
          </div>
        </div>
      </section>

      {/* Market Overview */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[26px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Market Overview
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
            The property landscape continues to shift with changing rates, strong tenant demand,
            and region-led growth. Here's a quick look at the key factors shaping investment
            decisions:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mt-4">
          {[
            "Strong rental demand across major cities",
            "Regional affordability attracting new buyers",
            "Regeneration areas maintaining steady growth",
            "Energy performance standards influencing choices",
            "Mortgage rates gradually stabilizing",
          ].map((item) => (
            <div
              key={item}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] p-5 flex items-center justify-center min-h-[100px]"
            >
              <p className="font-manrope font-semibold text-[20px] leading-[30px] text-[#002f57] text-center">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Regional Snapshots */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-4 max-w-[1035px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Regional Snapshots
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Short summaries of how key UK regions are performing:
          </p>
        </div>

        <div className="flex flex-col gap-[26px] w-full">
          {/* Top row - London and Manchester */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* London */}
            <div className="relative h-[300px] rounded-[16px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/f9878394f0d73f2d5e9d72ef0f4537aeb923be1e.png"
                alt="London - Parliament and Big Ben"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  London
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Reliable demand across most boroughs with strong rental movement and long-term
                  growth.
                </p>
              </div>
            </div>

            {/* Manchester */}
            <div className="relative h-[300px] rounded-[16px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/22703e069f81712e5cc16c4ca9f541221dc73a8e.png"
                alt="Manchester cityscape"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Manchester
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  High tenant interest, strong yields, and ongoing development activity.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom row - Birmingham, Leeds, Liverpool */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Birmingham */}
            <div className="relative h-[300px] rounded-[16px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/230a9d533bd946f9eaa81fa7d25a93f0bb9debea.png"
                alt="Birmingham cityscape"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Birmingham
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Increasing appeal driven by new transport links and city-wide regeneration.
                </p>
              </div>
            </div>

            {/* Leeds */}
            <div className="relative h-[300px] rounded-[16px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/d0c4bd7c782efd6df837aea17e7d84e2f14a6e4f.png"
                alt="Leeds cityscape"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Leeds
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Stable performance supported by business hubs and strong education sectors.
                </p>
              </div>
            </div>

            {/* Liverpool */}
            <div className="relative h-[300px] rounded-[16px] overflow-hidden">
              <Image
                src="http://localhost:3845/assets/4378c1de110c6265bd20b03c55383ee5f2e37114.png"
                alt="Liverpool street"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#002f57]/50 to-[#002f57]" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="font-crimson font-semibold text-[26px] leading-[30px] mb-1">
                  Liverpool
                </h3>
                <p className="font-manrope font-medium text-[16px] leading-[26px]">
                  Attractive pricing with steady rental demand and regeneration-led activity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Trends */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pr-[60px]">
        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden order-2 lg:order-1">
          <Image
            src="http://localhost:3845/assets/5c14f55b2d9ed1c3ec33221f94b438ef8830cd3b.png"
            alt="Business person planning"
            fill
            className="object-cover"
            unoptimized
          />
        </div>

        <div className="flex-1 max-w-[589px] space-y-[12px] order-1 lg:order-2">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Key Trends
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              Quick insights into what's shaping investment choices
            </p>
          </div>
          <div className="space-y-2">
            {[
              "Higher-yield northern areas gaining more attention",
              "Regeneration corridors showing long-term potential",
              "Student-friendly markets remaining stable",
              "Energy-efficient homes rising in demand",
            ].map((trend) => (
              <div key={trend} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-[11px] flex-shrink-0" />
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {trend}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Notes */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[80px] mb-[120px] flex flex-col lg:flex-row gap-[78px] items-center bg-white border border-[rgba(0,0,0,0.12)] rounded-[26px] py-[40px] lg:py-[60px] lg:pl-[60px]">
        <div className="flex-1 max-w-[589px] space-y-[12px]">
          <div className="space-y-[10px]">
            <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
              Regulatory Notes
            </h2>
            <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
              A few essential updates investors should keep in mind:
            </p>
          </div>
          <div className="space-y-2">
            {[
              "EPC requirements are becoming more important for future-proofing",
              "Licensing rules differ by borough and property type",
              "Renting reforms may introduce changes to landlord processes",
            ].map((note) => (
              <div key={note} className="flex items-start gap-3">
                <div className="w-[6px] h-[6px] rounded-full bg-[#002f57] mt-[11px] flex-shrink-0" />
                <p className="font-manrope text-[18px] leading-[28px] text-[#333] opacity-80">
                  {note}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-[675px] h-[450px] rounded-[26px] overflow-hidden">
          <Image
            src="http://localhost:3845/assets/d84bb174469c9c6d79fe37e812d9758639c422f2.png"
            alt="Real estate agent showing house model"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </section>

      {/* Market Insights Articles */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mb-[120px] flex flex-col gap-[36px] items-center">
        <div className="text-center space-y-4 max-w-[1035px]">
          <h2 className="font-crimson text-[56px] leading-[56px] tracking-[-1.68px] text-[#002f57]">
            Market Insights
          </h2>
          <p className="font-manrope text-[18px] leading-[28px] text-[#333]">
            Smart analysis, trends &amp; investment-ready intelligence for UK property buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
          {[
            {
              title: "Your Complete Guide to Smarter Home Buying Decisions",
              image: "http://localhost:3845/assets/2d12a2ea64ba3f55e8a59e5052c7df6831ec3e32.png",
            },
            {
              title: "Smart Investments That Build Lasting Property Value",
              image: "http://localhost:3845/assets/2f72377b212fb714c68c92922c92bf81d2a745d4.png",
            },
            {
              title: "Unlock the Future of Modern Real Estate Living",
              image: "http://localhost:3845/assets/228b81e7d761ee34fdcdc63db9f9642dac27bcba.png",
            },
            {
              title: "Discover Your Dream Villa by the Sea",
              image: "http://localhost:3845/assets/e3f82e86270ae360f05b9ad902a9193cad867f91.png",
            },
            {
              title: "Modern Homes Designed for Family Living",
              image: "http://localhost:3845/assets/d1fcfed7e55808e94ad5b6a099f327eec88c3843.png",
            },
            {
              title: "The Rise of Eco-Friendly Modern Villas",
              image: "http://localhost:3845/assets/7ec51062551cc7fa41d42880185d7f981c8a2a35.png",
            },
          ].map((article, index) => (
            <div
              key={index}
              className="bg-white border border-[rgba(0,0,0,0.12)] rounded-[16px] overflow-hidden flex flex-col h-[425px]"
            >
              <div className="relative w-full h-[300px] flex-shrink-0">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute top-[10px] left-[10px] bg-[#002f57] px-2 py-1 rounded-[6px]">
                  <p className="font-crimson text-[18px] leading-[28px] text-white">Insights</p>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-4 flex-1">
                <h3 className="font-crimson font-semibold text-[20px] leading-[30px] text-[#333]">
                  {article.title}
                </h3>
                <Link
                  href="/blog"
                  className="font-manrope text-[18px] leading-[28px] text-[#333] hover:text-[#29902e] transition-colors inline-flex items-center gap-2"
                >
                  Read More
                  <svg
                    className="w-5 h-5"
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
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/blog"
          className="inline-flex items-center justify-center h-[48px] px-5 rounded-[8px] bg-[#29902E] text-white font-manrope font-semibold text-[18px] leading-[28px] hover:bg-[#0073B5] transition-colors"
        >
          View More
        </Link>
      </section>
    </div>
  );
}
