"use client";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import PhoneInput from 'react-phone-input-2';

export default function OtherForm() {
    const [charCount, setCharCount] = useState(0);
    const [phone, setPhone] = useState<string | undefined>('')
    const rootRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const form = rootRef.current?.closest('form') as HTMLFormElement | null;
        if (!form) return;
        const onReset = () => setPhone('');
        form.addEventListener('reset', onReset);
        return () => form.removeEventListener('reset', onReset);
    }, []);

    return (
        <motion.div
            key="other"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                    <label htmlFor="other-fullName" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Full name <span className="text-red-500">*</span></label>
                    <input
                        id="other-fullName"
                        name="fullName"
                        type="text"
                        placeholder="Enter full name"
                        autoComplete="name"
                        required
                        aria-required="true"
                        className="border border-divider px-3 md:px-4 py-2.5 md:py-3 font-body text-body rounded-lg text-xs md:text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full transition-all"
                    />
                </div>
                <div>
                    <label htmlFor="other-email" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Email address <span className="text-red-500">*</span></label>
                    <input
                        id="other-email"
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        autoComplete="email"
                        required
                        aria-required="true"
                        className="border border-divider px-3 md:px-4 py-2.5 md:py-3 font-body text-body rounded-lg text-xs md:text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="other-phone" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Phone number <span className="text-red-500">*</span></label>
                    <div ref={rootRef}>
                        <PhoneInput
                            country={'in'}
                            value={phone}
                            onChange={(value: any) => setPhone(value)}
                            placeholder="Enter phone number"
                            dropdownClass="bg-development-icon-bg rounded-lg"
                            autocompleteSearch={true}
                            countryCodeEditable={false}
                            inputProps={{
                                id: 'other-phone',
                                name: 'phone',
                                required: true,
                                'aria-required': 'true',
                                autoComplete: 'tel',
                            }}
                            inputClass="border !border-divider !w-full !h-9 md:!h-11 rounded-lg px-3 md:px-4 py-2.5 md:py-3 font-body text-body text-xs md:text-sm outline-none w-full transition-all bg-transparent focus:ring focus:ring-primary hover:ring hover:ring-primary"
                        />
                    </div>
                </div>
                <div>
                    <label htmlFor="other-subject" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Subject <span className="text-red-500">*</span></label>
                    <input
                        id="other-subject"
                        name="subject"
                        type="text"
                        placeholder="Enter subject"
                        autoComplete="off"
                        required
                        aria-required="true"
                        className="border border-divider px-3 md:px-4 py-2.5 md:py-3 font-body text-body rounded-lg text-xs md:text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full transition-all"
                    />
                </div>
            </div>

            <div className="mt-5 md:mt-6 relative">
                <label htmlFor="other-message" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Message <span className="text-red-500">*</span></label>
                <textarea
                    id="other-message"
                    name="message"
                    placeholder="Enter message"
                    maxLength={500}
                    rows={4}
                    required
                    aria-required="true"
                    aria-describedby="other-message-count"
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="border border-divider w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-body text-body focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none resize-none transition-all"
                />
                <span id="other-message-count" className="absolute bottom-2 right-3 text-[10px] md:text-[12px] text-body/60" aria-live="polite">
                    {charCount}/500
                </span>
            </div>
        </motion.div>
    );
}
