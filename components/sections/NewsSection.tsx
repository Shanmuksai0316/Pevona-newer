import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  return (
    <div className="flex flex-col gap-[20px] sm:gap-[26px] items-start px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] w-full max-w-[1600px] mx-auto mt-[60px] sm:mt-[150px] mb-[60px] sm:mb-0">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row gap-[16px] sm:gap-[110px] items-start sm:items-center justify-between w-full">
        <div className="flex-1 flex flex-col gap-[8px] sm:gap-[5px] items-start w-full">
          <h2 className="font-crimson text-[32px] sm:text-[44px] md:text-[56px] leading-[38px] sm:leading-[48px] md:leading-[56px] text-[#002f57] tracking-[-0.96px] sm:tracking-[-1.32px] md:tracking-[-1.68px] w-full">
            Explore, Invest, and Live Smarter
          </h2>
          <p className="font-manrope font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#333333] w-full">
            Discover market insights, smart investments, and modern living ideas shaping the future of real estate.
          </p>
        </div>
        <Link href="/blog" className="w-full sm:w-auto">
          <button className="bg-[#29902e] px-[10px] py-[10px] rounded-[8px] w-full sm:w-[106px] h-[48px] hover:opacity-90 transition-opacity">
            <span className="font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white">View All</span>
          </button>
        </Link>
      </div>

      {/* Content Section - Stacks on mobile, side-by-side on desktop */}
      <div className="flex flex-col lg:flex-row gap-[20px] sm:gap-[26px] items-start lg:items-center justify-center w-full">
        {/* Hero Card */}
        <div className="w-full lg:flex-1 bg-white border border-[rgba(0,0,0,0.12)] flex flex-col gap-[20px] sm:gap-[26px] items-start p-[5px] rounded-[16px]">
          <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] lg:h-[465px] rounded-[12px] overflow-hidden">
            <Image
              src="/images/blog_sec_img.png"
              alt="News 1"
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute top-[8px] sm:top-[10px] left-[8px] sm:left-[9px] bg-[#002f57] px-[6px] py-[4px] sm:py-0 rounded-[12px] sm:rounded-[16px]">
              <p className="font-manrope font-normal text-[12px] sm:text-[14px] leading-[20px] sm:leading-[24px] text-white">Latest update</p>
            </div>
          </div>
          <div className="flex flex-col gap-[20px] sm:gap-[26px] items-start w-full px-[8px] sm:px-0 pb-[8px] sm:pb-0">
            <div className="flex flex-col items-start gap-[8px] sm:gap-[10px]">
              <h4 className="font-crimson font-semibold text-[22px] sm:text-[24px] md:text-[26px] leading-[28px] sm:leading-[30px] text-[#002f57] w-full max-w-[322px]">
                Invest Smart, Live Better
              </h4>
              <p className="font-manrope font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#333333]">
                Explore high-return real estate opportunities designed for modern lifestyles
              </p>
            </div>
            <button className="bg-[#29902e] px-[10px] py-[10px] rounded-[8px] w-full sm:w-[229px] h-[48px] hover:opacity-90 transition-opacity">
              <span className="font-manrope font-semibold text-[16px] sm:text-[18px] leading-[24px] sm:leading-[28px] text-white">Book a Consultation</span>
            </button>
          </div>
        </div>

        {/* Blog Items List */}
        <div className="w-full lg:flex-1 flex flex-col">
          {[
            { image: "/images/Market_Insights_blog_-1.png", title: "Unlock the Future of Modern Real Estate Living" },
            { image: "/images/Market_Insights_blog_-2.png", title: "Smart Investments That Build Lasting Property Value" },
            { image: "/images/Market_Insights_blog_-3.png", title: "Your Complete Guide to Smarter Home Buying Decisions" },
          ].map((item, i) => (
            <div 
              key={i} 
              className={`border-b border-[rgba(51,51,51,0.6)] flex flex-col sm:flex-row gap-[12px] sm:gap-[16px] items-start sm:items-center ${i === 0 ? 'pb-[20px] sm:pb-[26px]' : 'py-[20px] sm:py-[26px]'}`}
            >
              <div className="w-full sm:w-[150px] h-[180px] sm:h-[120px] rounded-[10px] overflow-hidden flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={150}
                  height={120}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <h5 className="flex-1 font-crimson font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[26px] sm:leading-[28px] md:leading-[30px] text-[#333333]">
                {item.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
