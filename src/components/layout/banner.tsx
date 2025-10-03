import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";


export default function Banner() {
    return (
        <div className="hidden md:block w-full bg-primary-light  px-8 py-2 rounded-b-2xl text-[12px] font-normal" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <div className="max-w-lg mx-auto w-full flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                    <BsFillTelephoneInboundFill className="inline-block text-[12px]" />
                    <a href="tel:+91-786-383-7895" className="font-medium hover:cursor-pointer outline-0 hover:text-primary font-body
                     text-body text-[12px]">+91-786-383-7895</a>
                </div>
                <div className="flex items-center flex-col md:flex-row gap-2 text-primary">
                    <a href="mailto:info@secret-spirit.com" className="text-body hover:text-primary outline-0 hover:cursor-pointer font-body font-medium text-[12px] flex items-center gap-1">
                        <MdEmail className="text-[12px] inline-block text-primary" />
                        info@secret-spirit.com
                    </a>
                    <span className="bg-body text-[12px] flex items-center max-md:hidden w-[1px] h-[12px]"></span>
                    <a href="mailto:sales@secret-spirit.com" className="text-body hover:text-primary outline-0 hover:cursor-pointer font-body font-medium text-[12px]">
                        <MdEmail className="text-[12px] md:hidden inline-block text-primary" />
                        sales@secret-spirit.com
                    </a>
                </div>
            </div>

        </div>
    );
}