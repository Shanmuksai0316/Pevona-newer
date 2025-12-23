export default function ResultsSection() {
  return (
    <div className="flex flex-col gap-[24px] sm:gap-[36px] items-center justify-center w-full mt-[60px] sm:mt-[150px] mb-[60px] sm:mb-0 overflow-hidden px-4 sm:px-0">
      <div className="flex flex-col gap-[8px] sm:gap-[10px] items-center text-center w-full max-w-[800px]">
        <h2 className="font-crimson text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[34px] sm:leading-[44px] md:leading-[48px] lg:leading-[56px] text-[#002f57] tracking-[-0.84px] sm:tracking-[-1.2px] md:tracking-[-1.44px] lg:tracking-[-1.68px] w-full">
          Proven Results Backed by Experience
        </h2>
        <p className="font-manrope font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[28px] text-[#333333] w-full px-[8px] sm:px-0">
          With decades of industry expertise and hundreds of successful sales, we deliver trusted property guidance rooted in performance and reliability.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-[20px] sm:gap-[26px] items-stretch sm:items-center justify-center px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] w-full max-w-[1600px] mx-auto">
        <div className="flex-1 border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[6px] sm:gap-[8px] items-center justify-center py-[20px] sm:p-[26px] text-center min-w-0">
          <p className="font-crimson font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[38px] sm:leading-[42px] md:leading-[46px] lg:leading-[52px] text-[#002f57] w-full">
            500+
          </p>
          <p className="font-manrope font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] text-[#333333] w-full">
            properties sold
          </p>
        </div>
        <div className="flex-1 border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[6px] sm:gap-[8px] items-center justify-center py-[20px] sm:p-[26px] text-center min-w-0">
          <p className="font-crimson font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[38px] sm:leading-[42px] md:leading-[46px] lg:leading-[52px] text-[#002f57] w-full">
            20
          </p>
          <p className="font-manrope font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] text-[#333333] w-full">
            years of experience
          </p>
        </div>
        <div className="flex-1 border-t border-[rgba(0,0,0,0.12)] flex flex-col gap-[6px] sm:gap-[8px] items-center justify-center py-[20px] sm:p-[26px] text-center min-w-0">
          <p className="font-crimson font-bold text-[32px] sm:text-[36px] md:text-[40px] lg:text-[42px] leading-[38px] sm:leading-[42px] md:leading-[46px] lg:leading-[52px] text-[#002f57] w-full">
            50+
          </p>
          <p className="font-manrope font-light text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[32px] text-[#333333] w-full">
            Awards & Recognitions
          </p>
        </div>
      </div>
    </div>
  );
}
