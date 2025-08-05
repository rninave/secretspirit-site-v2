import { FiPhoneCall, FiMail } from "react-icons/fi";

export default function Banner() {
    return (
        <div className=" w-full bg-primary-light  px-8 py-2 rounded-b-2xl text-sm" style={{ borderTopLeftRadius: 0, borderTopRightRadius: 0 }}>
            <div className="max-w-lg mx-auto w-full flex items-center justify-between">
                <div className="flex items-center gap-2 text-primary">
                    <FiPhoneCall className="inline-block" />
                    <a href="tel:+91-786-383-7895" className="font-mediu hover:cursor-pointer font-display text-body">+91-7863837895</a>
                </div>
                <div className="flex items-center gap-2 text-primary">
                    <FiMail className="inline-block" />
                    <a href="mailto:info@secret-spirit.com" className="text-body hover:cursor-pointer font-display font-medium">info@secret-spirit.com</a>
                    <span className="text-body">|</span>
                    <a href="mailto:sales@secret-spirit.com" className="text-body hover:cursor-pointer font-display font-medium">sales@secret-spirit.com</a>
                </div>
            </div>

        </div>
    );
}