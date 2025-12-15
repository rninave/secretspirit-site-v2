"use client";
import { motion } from "framer-motion";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";
import PhoneInput from 'react-phone-input-2';

export default function CareerForm() {
    const [selectValue, setSelectValue] = useState<string | null>(null);
    const [selectValue2, setSelectValue2] = useState<string | null>(null);
    const [charCount, setCharCount] = useState(0);
    const [phone, setPhone] = useState<string>('');

    const roleList = [
        { label: "Frontend Developer", value: "frontend developer" },
        { label: "Backend Developer", value: "backend developer" },
        { label: "Web Developer", value: "web developer" },
        { label: "UI/UX Designer", value: "ui/ux designer" },
        { label: "HR Manager", value: "hr manager" },
        { label: "Project Manager", value: "project manager" },
        { label: "Scrum Master", value: "scrum master" },
        { label: "Product Owner", value: "product owner" },
        { label: "Other", value: "other" },
    ];

    return (
        <motion.div
            key="career"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                    <label htmlFor="career-fullName" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Full name <span className="text-red-500">*</span></label>
                    <input
                        id="career-fullName"
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
                    <label htmlFor="career-email" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Email address <span className="text-red-500">*</span></label>
                    <input
                        id="career-email"
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
                    <label htmlFor="career-phone" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Phone number <span className="text-red-500">*</span></label>
                    <PhoneInput
                        country={'in'}
                        value={phone}
                        onChange={(value: string) => setPhone(value)}
                        dropdownClass="bg-development-icon-bg rounded-lg"
                        autocompleteSearch={true}
                        countryCodeEditable={false}
                        inputProps={{
                            id: 'career-phone',
                            required: true,
                            'aria-required': 'true',
                            autoComplete: 'tel',
                        }}
                        inputClass="border !border-divider !w-full !h-9 md:!h-11 rounded-lg px-3 md:px-4 py-2.5 md:py-3 font-body text-body text-xs md:text-sm outline-none w-full transition-all bg-transparent focus:ring focus:ring-primary hover:ring hover:ring-primary"
                    />
                    {/* hidden input so the form POST includes the phone value */}
                    <input type="hidden" name="phone" value={phone || ''} />
                </div>

                <div>
                    <label htmlFor="career-position" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Position applied for <span className="text-red-500">*</span></label>
                    <Dropdown
                        id="career-position"
                        options={roleList}
                        placeholder="Select position"
                        onChange={(e) => setSelectValue(e.value)}
                        value={selectValue}
                        className="w-full custom-select"
                        required
                        aria-required="true"
                        aria-label="Position applied for"
                    />
                    {/* hidden input to ensure form submission includes the selected value */}
                    <input type="hidden" name="position" value={selectValue || ''} />
                </div>

                <div>
                    <label htmlFor="career-experience" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Work experience <span className="text-red-500">*</span></label>
                    <Dropdown
                        id="career-experience"
                        options={[
                            { label: "Select year of experience", value: "" },
                            { label: "0-1 years", value: "0-1 year" },
                            { label: "1-3 years", value: "1-3 year" },
                            { label: "3-5 years", value: "3-5 year" },
                            { label: "5+ years", value: "5+ year" },
                        ]}
                        value={selectValue2}
                        onChange={(e) => setSelectValue2(e.value)}
                        placeholder="Select year of experience"
                        className="w-full custom-select"
                        required
                        aria-required="true"
                        aria-label="Work experience"
                    />
                    {/* hidden input to ensure form submission includes the selected value */}
                    <input type="hidden" name="experience" value={selectValue2 || ''} />
                </div>

                <div>
                    <label htmlFor="career-linkedin" className="block text-xs md:text-sm font-medium font-body text-body mb-2">LinkedIn profile URL</label>
                    <input
                        id="career-linkedin"
                        name="linkedin"
                        type="url"
                        placeholder="Enter linkedin profile URL"
                        autoComplete="url"
                        className="border border-divider px-3 md:px-4 py-2.5 md:py-3 font-body text-body rounded-lg text-xs md:text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="career-portfolio" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Portfolio URL</label>
                    <input
                        id="career-portfolio"
                        name="portfolio"
                        type="url"
                        placeholder="Enter portfolio url"
                        autoComplete="url"
                        className="border border-divider px-3 md:px-4 py-2.5 md:py-3 font-body text-body rounded-lg text-xs md:text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full transition-all"
                    />
                </div>

                <div>
                    <label htmlFor="career-resume" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Resume/CV URL<span className="text-red-500">*</span></label>
                    <div className="flex flex-col gap-1.5">
                        <input
                            id="career-resume"
                            name="resume"
                            type="url"
                            required
                            aria-required="true"
                            placeholder="Paste Google Drive or Dropbox URL"
                            aria-describedby="career-resume-help"
                            className="border border-divider px-3 md:px-4 py-2.5 md:py-3 font-body text-body rounded-lg text-xs md:text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full transition-all"
                        />
                        <span id="career-resume-help" className="text-[10px] md:text-xs text-body/60 font-body">Add a Google Drive or Dropbox URL. Ensure sharing access is set to “Anyone can view.”</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 md:mt-6 relative">
                <label htmlFor="career-coverLetter" className="block text-xs md:text-sm font-medium font-body text-body mb-2">Cover letter <span className="text-red-500">*</span></label>
                <textarea
                    id="career-coverLetter"
                    name="coverLetter"
                    placeholder="Enter cover letter"
                    maxLength={500}
                    rows={4}
                    required
                    aria-required="true"
                    aria-describedby="career-coverLetter-count"
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="border border-divider w-full px-3 md:px-4 py-2.5 md:py-3 rounded-lg text-xs md:text-sm font-body text-body focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none resize-none transition-all"
                />
                <span id="career-coverLetter-count" className="absolute bottom-2 right-3 text-[10px] md:text-[12px] text-body/60" aria-live="polite">
                    {charCount}/500
                </span>
            </div>

            <input type="hidden" name="form_name" value="Career" />
        </motion.div>
    );
}
