"use client";
import AnimatedButton from "@/components/common/AnimatedButton";
import { WobbleCard } from "@/components/ui/wobble-card";
import { useState } from "react";
import { FiPhoneCall, FiMail, FiMapPin } from "react-icons/fi";

const tabs = ["Business", "Career", "Other"];

export default function ContactFormSection() {
    const [activeTab, setActiveTab] = useState("Business");

    return (
        <section className="bg-white py-20">
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
                                                ? 'bg-primary/10 text-primary border-divider shadow-btn translate-y-0.5'
                                                : 'bg-white text-body hover:text-primary border-divider hover:bg-primary/10'
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {tab}
                                        </button>
                                    </WobbleCard>
                                ))}


                            </div>

                            <h2 className="text-[28px] font-semibold mb-1">Let’s Connect</h2>
                            <p className="text-gray-500 mb-8 text-sm">
                                Have questions or want to collaborate? Reach out to us and let’s make things happen!
                            </p>

                            {/* Input fields grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="border border-gray-200 p-3 rounded-lg text-sm focus:border-primary/60 outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="border border-gray-200 p-3 rounded-lg text-sm focus:border-primary/60 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone number"
                                    className="border border-gray-200 p-3 rounded-lg text-sm focus:border-primary/60 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Company name"
                                    className="border border-gray-200 p-3 rounded-lg text-sm focus:border-primary/60 outline-none"
                                />
                            </div>

                            {/* Textarea */}
                            <div className="mt-5 relative">
                                <textarea
                                    placeholder="Write about project detail"
                                    maxLength={500}
                                    rows={4}
                                    className="border border-gray-200 w-full p-3 rounded-lg text-sm focus:border-primary/60 outline-none resize-none"
                                />
                                <span className="absolute bottom-2 right-3 text-[12px] text-gray-400">
                                    0/500
                                </span>
                            </div>

                            <div className="mt-6 w-fit">
                                <AnimatedButton
                                    text="Submit"
                                    hoverText="Submit"
                                    disabled={true}
                                    className="bg-primary text-white px-9 py-3 rounded-[50px] font-body shadow-btn hover:shadow-btn-reverse font-medium  transition-colors items-center gap-2 cursor-pointer"
                                />
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — CONTACT CARD */}
                    <div className="w-[205px] bg-light-primary rounded-r-2xl">
                    </div>


                    <div className="absolute right-14 top-1/2 -translate-y-1/2 transform w-[324px] h-[472px] bg-heading text-white p-8 rounded-xl flex flex-col justify-between">
                        <div className="">
                            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>

                            <div className="flex items-center gap-3 mb-4">
                                <FiPhoneCall className="text-lg" />
                                <span className="text-sm">07863837895</span>
                            </div>

                            <div className="flex items-center gap-3 mb-4">
                                <FiMail className="text-lg" />
                                <span className="text-sm">info@secret-spirit.com</span>
                            </div>

                            <div className="flex items-start gap-3">
                                <FiMapPin className="text-xl mt-1" />
                                <span className="text-sm leading-relaxed">
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
