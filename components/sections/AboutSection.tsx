import Image from "next/image";
import Button from "../ui/Button";

export default function AboutSection() {
  return (
    <div
      className="
        relative w-full flex flex-col items-start justify-end overflow-hidden
        gap-[31px]
        h-[811px] sm:h-[700px] lg:h-[800px]
        pb-[24px] sm:pb-[30px] lg:pb-[36px]
        px-[16px] sm:px-[20px] md:px-[40px] lg:px-[60px] 1300:px-[98px]
        mt-[60px] sm:mt-[120px] lg:mt-[150px] mb-[60px] sm:mb-0
      "
    >
      {/* MOBILE BACKGROUND IMAGE */}
      <Image
        src="/images/About Pevona-bg-mbl.png"
        alt="About Us Background Mobile"
        fill
        className="object-cover md:hidden"
        unoptimized
      />
      
      {/* DESKTOP BACKGROUND IMAGE */}
      <Image
        src="/images/About_Pevona_sec.png"
        alt="About Us Background Desktop"
        fill
        className="object-cover hidden md:block"
        unoptimized
      />

      {/* TEXT CONTENT */}
      <div
        className="
          relative z-10 flex flex-col gap-[12px] sm:gap-[14px] md:gap-[16px] items-start justify-end text-white w-full
          h-auto lg:h-[372px]
          pr-0
          sm:pr-[540px]
          1300:pr-[800px]
        "
      >
        <div className="flex flex-col gap-[6px] sm:gap-[7px] md:gap-[8px] items-start">
          <h2
            className="
              font-crimson 
              text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px]
              leading-[38px] sm:leading-[44px] md:leading-[48px] lg:leading-[56px]
              tracking-[-0.96px] sm:tracking-[-1.2px] md:tracking-[-1.44px] lg:tracking-[-1.68px]
            "
          >
            About Pevona
          </h2>

          <p
            className="
              font-manrope font-normal
              text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]
              leading-[24px] sm:leading-[26px] md:leading-[30px] lg:leading-[32px]
            "
          >
            Rooted in Trust. Driven by Expertise.
          </p>
        </div>

        <p
          className="
            font-manrope font-normal opacity-80
            text-[14px] sm:text-[16px] md:text-[18px]
            leading-[22px] sm:leading-[24px] md:leading-[28px]
          "
        >
          Pevona Ltd is a UK real estate company specialising in lettings, management, and investments. We deliver transparent, compliant, and client-focused solutions that protect assets and maximise returns.
        </p>
      </div>

      {/* CERTIFICATIONS */}
      <div className="relative z-10 flex flex-col gap-[8px] sm:gap-[9px] md:gap-[10px] items-start w-full">
        <p
          className="
            font-crimson text-white
            text-[18px] sm:text-[20px] md:text-[22px]
            leading-[26px] sm:leading-[28px] md:leading-[30px] lg:leading-[32px]
            w-full sm:w-[278px]
          "
        >
          Certifications
        </p>

        <div
          className="
            flex flex-wrap gap-[12px] sm:gap-[14px] md:gap-[16px] items-start overflow-hidden
            w-full
            sm:w-[316px]
          "
        >
          {[
            { src: "/images/Certifications-1.svg", alt: "Certification 1", width: 74, height: 30 },
            { src: "/images/Certifications-2.svg", alt: "Certification 2", width: 80, height: 33 },
            { src: "/images/Certifications-3.svg", alt: "Certification 3", width: 80, height: 32 },
            { src: "/images/Certifications-4.svg", alt: "Certification 4", width: 108, height: 20 },
          ].map((cert, i) => (
            <div
              key={i}
              className="
                bg-white border border-[rgba(0,0,0,0.12)]
                h-[50px] sm:h-[56px] md:h-[60px]
                w-[calc(50%-6px)] sm:w-[140px] md:w-[150px]
                rounded-[8px] sm:rounded-[10px]
                flex items-center justify-center
              "
            >
              <Image
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="object-contain scale-90 sm:scale-100"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      {/* BUTTON */}
      <button
        className="
          relative z-10 bg-white rounded-[8px]
          w-full sm:w-[240px]
          h-[48px] sm:h-[52px] md:h-[56px]
          px-[10px] py-[10px]
          hover:opacity-90 transition-opacity
        "
      >
        <span
          className="
            font-manrope font-semibold text-[#002f57]
            text-[15px] sm:text-[16px] md:text-[18px]
            leading-[22px] sm:leading-[24px] md:leading-[28px]
          "
        >
          Learn More About Us
        </span>
      </button>
    </div>
  );
}
