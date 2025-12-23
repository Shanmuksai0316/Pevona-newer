import Image from "next/image";
import Button from "../ui/Button";

type HeroProps = {
  title?: string;
  subtitle?: string;
  buttonText?: string;
};

export default function Hero({
  title = "Managing, Letting, & Investing - the Right Way",
  subtitle = "Expert management, lettings, and investment opportunities across the UK - powered by transparency and modern compliance.",
  buttonText = "Speak To Our Team",
}: HeroProps) {
  return (
    <div className="relative w-full h-[600px] sm:h-[700px] md:h-[826px] overflow-hidden rounded-b-[20px] sm:rounded-b-[28px] md:rounded-b-[36px] z-0">
      <div className="absolute inset-0">
        <div className="relative w-full h-full">
          <Image
            src="/images/Home_page_banner.png"
            alt="Hero background"
            fill
            className="object-cover rounded-b-[20px] sm:rounded-b-[28px] md:rounded-b-[36px]"
            unoptimized
          />
        </div>

        <div className="absolute inset-0 bg-black bg-opacity-0 rounded-b-[20px] sm:rounded-b-[28px] md:rounded-b-[36px]"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-end h-full px-[16px] sm:px-[20px] md:px-[20px] py-[24px] sm:py-[30px] md:py-[37px] gap-[40px] sm:gap-[60px] md:gap-[113px]">
        <div className="flex flex-col items-center gap-[24px] sm:gap-[30px] md:gap-[36px] w-full">
          <div className="flex flex-col items-center gap-[12px] sm:gap-[14px] md:gap-[16px] w-full px-[8px] sm:px-0">
            <h1 className="font-crimson text-[28px] sm:text-[40px] md:text-[56px] lg:text-[66px] leading-[34px] sm:leading-[48px] md:leading-[56px] lg:leading-[66px] text-white text-center tracking-[-0.84px] sm:tracking-[-1.2px] md:tracking-[-1.68px] lg:tracking-[-1.98px] max-w-[653px] w-full px-[4px]">
              {title}
            </h1>
            <p className="font-manrope font-normal text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[28px] text-white text-center max-w-full w-full px-[8px] sm:px-0">
              {subtitle}
            </p>
          </div>
          <button className="bg-white px-[10px] py-[10px] rounded-[8px] w-full max-w-[217px] h-[48px] sm:h-[52px] md:h-[56px] hover:opacity-90 transition-opacity">
            <span className="font-manrope font-semibold text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] md:leading-[28px] text-[#002f57]">
              {buttonText}
            </span>
          </button>
        </div>

        {/* Credibility Section */}
        <div className="flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] items-start w-full pl-[16px] sm:pl-[40px] md:pl-[60px] pr-[16px] sm:pr-0 md:pr-0 py-0">
          <div className="h-[50px] sm:h-[58px] md:h-[66px] w-[140px] sm:w-[160px] md:w-[176px] relative">
            <div className="absolute left-[2px] top-[2px] sm:top-[3px] md:top-[4.35px] w-[44px] sm:w-[52px] md:w-[58.364px] h-[44px] sm:h-[52px] md:h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_1.png"
                alt="Avatar 1"
                fill
                className="rounded-full border-white object-cover object-top"
                style={{ borderWidth: '2.5px' }}
                unoptimized
              />
            </div>

            <div className="absolute left-[30px] sm:left-[35px] md:left-[39.36px] top-[2px] sm:top-[3px] md:top-[4.35px] w-[44px] sm:w-[52px] md:w-[58.364px] h-[44px] sm:h-[52px] md:h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_2.png"
                alt="Avatar 2"
                fill
                className="rounded-full border-white object-cover object-top"
                style={{ borderWidth: '2.5px' }}
                unoptimized
              />
            </div>

            <div className="absolute left-[58px] sm:left-[68px] md:left-[76.72px] top-[2px] sm:top-[3px] md:top-[4.35px] w-[44px] sm:w-[52px] md:w-[58.364px] h-[44px] sm:h-[52px] md:h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_3.png"
                alt="Avatar 3"
                fill
                className="rounded-full border-white object-cover object-top"
                style={{ borderWidth: '2.5px' }}
                unoptimized
              />
            </div>

            <div className="absolute left-[86px] sm:left-[101px] md:left-[114.08px] top-[2px] sm:top-[3px] md:top-[4.35px] w-[44px] sm:w-[52px] md:w-[58.364px] h-[44px] sm:h-[52px] md:h-[58.364px]">
              <Image
                src="/images/our_team_-_Card_4.png"
                alt="Avatar 4"
                fill
                className="rounded-full border-white object-cover object-top"
                style={{ borderWidth: '2.5px' }}
                unoptimized
              />
            </div>
          </div>
          <p className="font-manrope font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[24px] sm:leading-[27px] md:leading-[30px] text-white max-w-[452px] w-full">
            Thousands of residents have chosen our community to call home.
          </p>
        </div>
      </div>
    </div>
  );
}
