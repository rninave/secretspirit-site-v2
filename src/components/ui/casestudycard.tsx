import Image from "next/image";

export default function CaseStudyCard({ item }: any) {
    return (
        <div className="relative bg-white rounded-2xl border border-divider shadow-lg p-6 flex flex-col  h-full w-full">
            {/* Quote icon */}
            <div className="absolute top-0 left-6">
                <div className="px-2 py-4 rounded-b-full bg-gray-light shadow-btn">
                    <Image src="/icons/quotes-icon.svg" alt="Quote icon" className="w-auto h-auto" width={24} height={24} style={{ width: 'auto', height: 'auto' }} />
                </div>
            </div>
            {/* Testimonial text */}
            <p className="text-base sm:text-lg text-body font-normal mt-10 mb-6 leading-7 font-body">
                {item.description}
            </p>
            {/* Client name and logo */}
            <div className="flex items-center justify-between mt-auto ">
                <span className="font-bold text-base sm:text-lg text-heading font-heading">{item.clientName}</span>
                <Image src={item.clientLogo} alt={item.clientName + ' logo'} className="object-cover w-auto h-auto" width={90} height={90} style={{ width: 'auto', height: 'auto' }} />
            </div>
        </div>
    );
}
