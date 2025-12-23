'use client';

import Image from 'next/image';

export default function SellingProcessSection() {
    return (
        <div className="w-full px-6 lg:px-[98px] mt-[100px] lg:mt-[150px]">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[60px] items-start">
                    {/* Left Column */}
                    <div className="flex flex-col gap-[36px]">
                        {/* Heading */}
                        <h2 className="font-crimson text-[36px] lg:text-[48px] leading-tight lg:leading-[52px] text-[#002f57] tracking-tight">
                            Selling a property can feel overwhelming
                        </h2>

                        {/* Image with description */}
                        <div className="flex flex-col gap-[20px]">
                            <div className="relative w-full h-[280px] lg:h-[320px] rounded-[16px] overflow-hidden">
                                <Image
                                    src="/home/shanmuk/.gemini/antigravity/brain/857567bc-bac0-4bb7-b601-b43d499d7e6d/selling_process_documents_1766398107588.png"
                                    alt="Property documents and model house"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                />
                            </div>
                            <p className="font-manrope font-normal text-[16px] lg:text-[18px] leading-[26px] lg:leading-[28px] text-[#333333]">
                                The paperwork, the pricing, the viewings and the negotiations. Our approach keeps things simple. With clear guidance, transparent updates and a well-defined sales process, you'll know exactly what to expect from start to finish.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Large Image */}
                    <div className="relative w-full h-[400px] lg:h-[600px] rounded-[16px] overflow-hidden">
                        <Image
                            src="/home/shanmuk/.gemini/antigravity/brain/857567bc-bac0-4bb7-b601-b43d499d7e6d/selling_process_consultation_1766398124424.png"
                            alt="Property consultation"
                            fill
                            className="object-cover"
                            unoptimized
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
