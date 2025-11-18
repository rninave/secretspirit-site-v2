"use client";
import { motion } from "framer-motion";
import { Dropdown } from "primereact/dropdown";
import { useState } from "react";



export default function CareerForm() {
    const [selectValue, setSelectValue] = useState(null);
    const [selectValue2, setSelectValue2] = useState(null);
    return (
        <motion.div
            key="career"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Full name</label>
                    <input
                        name="fullName"
                        type="text"
                        placeholder="Enter full name"
                        className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Email address</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="Enter email address"
                        className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Phone number</label>
                    <input
                        name="phone"
                        type="text"
                        placeholder="Enter phone number"
                        className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Position applied for</label>
                    <Dropdown
                        name="position"
                        options={[
                            { label: "Select position", value: "" },
                            { label: "Frontend Developer", value: "frontend" },
                            { label: "Backend Developer", value: "backend" },
                            { label: "Designer", value: "designer" },
                        ]}
                        placeholder="Select position"
                        onChange={(e) => setSelectValue(e.value)}
                        value={selectValue}
                        className="w-full border border-divider rounded-lg custom-select"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Work experience</label>
                    <Dropdown
                        name="experience"
                        options={[
                            { label: "Select year of experience", value: "" },
                            { label: "0-1 years", value: "0-1" },
                            { label: "1-3 years", value: "1-3" },
                            { label: "3-5 years", value: "3-5" },
                            { label: "5+ years", value: "5+" },
                        ]}
                        value={selectValue2}
                        onChange={(e) => setSelectValue2(e.value)}
                        placeholder="Select year of experience"
                        className="w-full border border-divider p-0 rounded-lg custom-select"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">LinkedIn profile URL</label>
                    <input
                        name="linkedin"
                        type="url"
                        placeholder="Enter linkedin profile URL"
                        className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Portfolio URL</label>
                    <input
                        name="portfolio"
                        type="url"
                        placeholder="Enter portfolio url"
                        className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium font-body text-body mb-2">Upload resume/CV</label>
                    <div className="flex flex-col gap-1">
                        <input
                            name="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                        />
                        <span className="text-xs ml-1.5 text-gray-400">Upload your resume/CV (PDF or DOC, up to 10MB).</span>
                    </div>
                </div>
            </div>

            <div className="mt-5 relative">
                <label className="block text-sm font-medium font-body text-body mb-2">Cover letter</label>
                <textarea
                    name="coverLetter"
                    placeholder="Enter cover letter"
                    maxLength={500}
                    rows={4}
                    className="border border-divider w-full px-4 py-3 rounded-lg text-sm font-body text-body focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none resize-none"
                />
                <span className="absolute bottom-2 right-3 text-[12px] text-gray-400">
                    0/500
                </span>
            </div>
        </motion.div>
    );
}
