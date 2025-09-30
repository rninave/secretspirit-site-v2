import Image from "next/image";

export default function CaseStudyCard({ item }: any) {
    return (
        <div className="relative bg-white rounded-2xl border border-divider shadow-lg p-6 flex flex-col min-h-[260px] max-w-full">
            {/* Quote icon */}
            <div className="absolute top-0 left-6">
                <div className="px-2 py-4 rounded-b-full bg-gray-light shadow-btn">
                    <Image src="/icons/quotes-icon.svg" alt="Quote icon" width={24} height={24} />
                </div>
            </div>
            {/* Testimonial text */}
            <p className="text-lg text-body font-medium mt-10 leading-relaxed font-body">
                {item.description}
            </p>
            {/* Client name and logo */}
            <div className="flex items-center justify-between mt-auto pt-4">
                <span className="font-bold text-lg text-heading font-heading">{item.clientName}</span>
                <Image src={item.clientLogo} alt={item.clientName + ' logo'} className="object-cover" width={90} height={90} />
            </div>
        </div>
    );
}
