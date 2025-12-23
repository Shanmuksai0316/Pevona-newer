import Image from "next/image";

export default function SellingOverwhelmingSection() {
    return (
        <section className="max-w-[1560px] mx-auto px-4 sm:px-[60px] md:px-[60px] lg:px-[60px] 1300:px-[60px] 1400:px-[80px] 1500:px-[100px] 1600:px-[130px] mt-[150px]">
            <div className="flex flex-col lg:flex-row gap-[60px] lg:gap-[80px] items-start">
                {/* Left Section */}
                <div className="flex-1 flex flex-col gap-[36px] max-w-[600px]">
                    {/* Large Heading - Dark Blue Serif */}
                    <h2 className="font-crimson text-[56px] lg:text-[66px] leading-[1.05] tracking-[-0.06em] text-[#002f57]">
                        Selling a property can feel overwhelming
                    </h2>

                    {/* Small Image - Keys on blueprints with house model */}
                    <div className="relative w-full max-w-[450px] h-[300px] rounded-[20px] overflow-hidden">
                            <Image
                                src="/images/Selling a property-left.png"
                            alt="Property keys on blueprints with house model"
                                fill
                                className="object-cover"
                            />
                        </div>

                    {/* Description Text - Light Gray Sans-serif */}
                    <p className="font-manrope text-[18px] leading-[28px] text-[#333333] opacity-80 max-w-[550px]">
                        The paperwork, the pricing, the viewings and the negotiations. Our approach keeps things simple. With clear guidance, transparent updates and a well-defined sales process, you'll know exactly what to expect from start to finish.
                    </p>
                </div>

                {/* Right Section - Large Image */}
                <div className="flex-1 relative w-full h-[500px] rounded-[20px] overflow-hidden">
                            <Image
                                src="/images/Selling a property-right.png"
                        alt="People signing property contract"
                                fill
                                className="object-cover"
                            />
                </div>
            </div>
        </section>
    );
}
