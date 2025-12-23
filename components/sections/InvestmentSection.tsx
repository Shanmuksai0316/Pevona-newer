import Image from "next/image";

export default function InvestmentSection() {
  return (
    <div
      className="
        relative w-full flex flex-col gap-[10px] items-center overflow-hidden
        py-[120px] sm:py-[160px] lg:py-[204px]
        mt-[60px] sm:mt-[120px] lg:mt-[150px] mb-[60px] sm:mb-0
        px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] max-w-[1600px] mx-auto
      "
    >
      {/* BACKGROUND IMAGE + STRIP */}
      <div className="absolute inset-0 top-0 left-4 right-4 sm:left-[60px] sm:right-[60px] md:left-[60px] md:right-[60px] lg:left-[60px] lg:right-[60px] 1300:left-[60px] 1300:right-[60px] 1400:left-[80px] 1400:right-[80px] 1500:left-[100px] 1500:right-[100px] 1600:left-[130px] 1600:right-[130px]">
        <div className="relative w-full h-full">
          <Image
            src="/images/investment_opportunities.webp"
            alt="Investment Background"
            width={1336}
            height={711}
            className="
              w-full h-full object-cover rounded-[16px]
            "
            style={{
              borderBottomRightRadius: '16px !important',
              borderBottomLeftRadius: '16px !important',
              overflow: 'hidden',
            }}
            unoptimized
          />
        </div>

        <div
          className="
            absolute left-0 right-0
            w-full
            h-[64px] sm:h-[72px] lg:h-[80px]
            bg-[#29902E] flex items-center justify-center
            top-[560px] sm:top-[600px] lg:top-[631px]
            p-[20px] 1300:p-[32px]
          "
          style={{
            borderBottomRightRadius: '16px',
            borderBottomLeftRadius: '16px',
            overflow: 'hidden',
          }}
        >
          <h6
            className="
              font-manrope font-semibold text-white text-center
              text-[14px] leading-[20px]
              sm:text-[18px] sm:leading-[24px]
              lg:text-[22px] lg:leading-[26px]
              whitespace-normal sm:whitespace-nowrap
            "
          >
            Market Research & Sourcing   -   Return on Investment & Financial Modelling   -   Legal Due Diligence   -   Portfolio Management
          </h6>
        </div>
      </div>

      {/* CONTENT */}
      <div
        className="
          relative z-10 flex flex-col gap-[10px] items-center justify-center
          text-center text-white w-full
          pt-[140px] sm:pt-[160px] lg:pt-[180px]
          px-4
        "
      >
        <h2
          className="
            font-crimson tracking-[-1.68px]
            text-[32px] leading-[38px]
            sm:text-[44px] sm:leading-[48px]
            lg:text-[56px] lg:leading-[56px]
            whitespace-normal sm:whitespace-nowrap
          "
        >
          Investment Opportunities
        </h2>

        <p
          className="
            font-manrope font-normal
            text-[16px] leading-[24px]
            sm:text-[18px] sm:leading-[28px]
            max-w-[670px]
          "
        >
          Pevona identifies high-yield UK properties through detailed research and financial analysis to maximise returns and safeguard your portfolio.
        </p>
      </div>
    </div>
  );
}
