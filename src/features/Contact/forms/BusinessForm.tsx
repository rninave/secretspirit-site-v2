"use client";
import { motion } from "framer-motion";

export default function BusinessForm() {
    return (
        <motion.div
            key="business"
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
                    <label className="block text-sm font-medium font-body text-body mb-2">Company name</label>
                    <input
                        name="company"
                        type="text"
                        placeholder="Enter company name"
                        className="border border-divider px-4 py-3 font-body text-body rounded-lg text-sm focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none w-full"
                    />
                </div>
            </div>

            <div className="mt-5 relative">
                <label className="block text-sm font-medium font-body text-body mb-2">Project description</label>
                <textarea
                    name="projectDescription"
                    placeholder="Write about project detail"
                    maxLength={500}
                    rows={4}
                    className="border border-divider w-full px-4 py-3 rounded-lg text-sm font-body text-body focus:ring focus:ring-primary hover:ring hover:ring-primary outline-none resize-none"
                />
                <span className="absolute bottom-2 right-3 text-[12px] font-body font-normal text-body">
                    0/500
                </span>
            </div>
        </motion.div>
    );
}
