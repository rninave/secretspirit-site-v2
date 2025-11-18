"use client";
import AnimatedButton from "@/components/common/AnimatedButton";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useState } from "react";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import BusinessForm from "./forms/BusinessForm";
import CareerForm from "./forms/CareerForm";
import OtherForm from "./forms/OtherForm";
import Link from "next/link";

const tabs = ["Business", "Career", "Other"];

export default function ContactFormSection() {
    const [activeTab, setActiveTab] = useState("Business");

    return (
        <section className="bg-white py-15">
            <div className="max-w-6xl mx-auto px-4">
                {/* Container */}
                <div className="relative shadow-careers-job-card rounded-2xl flex flex-col lg:flex-row gap-10">

                    {/* LEFT — FORM */}
                    <div className="flex-1 p-10">
                        <div className="max-w-2xl">
                            {/* Tabs */}
                            <div className="flex gap-3 mb-8">
                                {tabs.map((tab) => (
                                    <WobbleCard key={tab}>
                                        <button
                                            key={tab}
                                            className={`px-5 md:px-8 py-2.5 md:py-3 cursor-pointer rounded-full font-medium font-body text-xs md:text-sm border transition-all duration-200 hover:shadow-btn focus:outline-none ${activeTab === tab
                                                ? 'bg-primary/10 text-primary border-divider shadow-btn hover:shadow-btn-reverse translate-y-0.5'
                                                : 'bg-white text-body hover:text-primary border-divider hover:bg-primary/10 hover:shadow-btn-reverse'
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {activeTab === tab && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-primary/10 rounded-full"
                                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                />
                                            )}
                                            <motion.span 
                                                className="relative z-10"
                                                initial={{ opacity: 0.8 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {tab}
                                            </motion.span>
                                        </button>
                                    </WobbleCard>
                                ))}
                            </div>

                            <h2 className="text-[24px] font-heading text-black font-bold mb-1">Let’s Connect</h2>
                            <p className="text-body font-normal font-body mb-10 text-base">
                                Have questions or want to collaborate? Reach out to us and let’s make things happen!
                            </p>

                            {/* FORM (all inputs must be inside form) */}
                            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                <AnimatePresence mode="wait">
                                    {activeTab === "Business" && <BusinessForm />}
                                    {activeTab === "Career" && <CareerForm />}
                                    {activeTab === "Other" && <OtherForm />}
                                </AnimatePresence>

                                <motion.div
                                    className="mt-6 w-fit"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <AnimatedButton
                                        text="Submit"
                                        hoverText="Submit"
                                        disabled={true}
                                        className="bg-primary text-white px-9 py-3 rounded-[50px] font-body shadow-btn hover:shadow-btn-reverse font-medium  transition-colors items-center gap-2 cursor-pointer"
                                    />
                                </motion.div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT — CONTACT CARD */}
                    <div className="w-[205px] bg-light-primary rounded-r-2xl">
                    </div>

                    <div className="absolute right-14 max-md:bottom-0 md:top-1/2 -translate-y-1/2 transform w-[324px] h-[472px] bg-heading text-white p-8 rounded-xl flex flex-col justify-between">
                        <div className="">
                            <h3 className="text-[28px] font-body text-white font-bold mb-6">Contact Us</h3>

                            <div className="flex items-center gap-3 mb-4">
                                <BiSolidPhoneCall className="text-[24px]" />
                                <Link href="" className="text-sm font-medium font-body text-whites">07863837895</Link>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <IoMail className="text-[24px]" />
                                <Link href="mailto:info@secret-spirit.com" className="text-sm font-medium font-body text-white">info@secret-spirit.com</Link>
                            </div>

                            <div className="flex items-start gap-3 mb-4">
                                <IoLocationSharp className="text-[24px] min-w-6" />
                                <span className="text-sm font-medium font-body text-white leading-relaxed">
                                    202, Kasturi Pride (Business Hub),
                                    SP Ring Rd, Nikol, Ahmedabad,
                                    Gujarat - 382350
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
