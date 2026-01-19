"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMail } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import { WobbleCard } from "@/components/ui/wobble-card";
import AnimatedButton from "@/components/common/AnimatedButton";
import BusinessForm from "./forms/BusinessForm";
import CareerForm from "./forms/CareerForm";
import OtherForm from "./forms/OtherForm";

const tabs = ["Business", "Career", "Other"];

import { submitCareerForm, submitBusinessForm, submitOtherForm } from '@/services/contact'
import { UploadCloud, UploadIcon } from "lucide-react";
import { u } from "motion/react-client";

export default function ContactFormSection() {
    const searchParams = useSearchParams();
    const [activeTab, setActiveTab] = useState("Business");

    // Check URL parameters on mount to set active tab
    useEffect(() => {
        const formParam = searchParams.get('form')?.toLowerCase();
        const tabParam = searchParams.get('tab');
        
        if (formParam === 'career' || tabParam === 'Career') {
            setActiveTab("Career");
            // Scroll to form section smoothly
            setTimeout(() => {
                const formSection = document.querySelector('[data-contact-form]');
                if (formSection) {
                    formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }, 100);
        } else if (formParam === 'business' || tabParam === 'Business') {
            setActiveTab("Business");
        } else if (formParam === 'other' || tabParam === 'Other') {
            setActiveTab("Other");
        }
    }, [searchParams]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
    const [careerFormKey, setCareerFormKey] = useState(0); // Key to reset CareerForm state

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage(null);

        try {
            const formElement = e.currentTarget;
            const formData = new FormData(formElement);
            
            // Get fullName for subject line generation
            const fullName = formData.get('fullName')?.toString() || '';
            
            let result;
            
            // Route to appropriate submission function based on form type
            if (activeTab === "Career") {
                // submitCareerForm handles Cloudinary upload for resume file
                result = await submitCareerForm(formData, fullName);
            } else if (activeTab === "Business") {
                result = await submitBusinessForm(formData, fullName);
            } else if (activeTab === "Other") {
                result = await submitOtherForm(formData, fullName);
            } else {
                throw new Error('Unknown form type');
            }
            
            if (result?.success) {
                setSubmitMessage({ type: "success", text: result.message || 'Form submitted successfully!' });
                formElement.reset();
                // Reset CareerForm state by changing key to force re-render
                if (activeTab === "Career") {
                    setCareerFormKey(prev => prev + 1);
                }
                setTimeout(() => setSubmitMessage(null), 5000);
            } else {
                setSubmitMessage({ type: "error", text: result.message || 'Failed to submit form' });
            }
        } catch (error) {
            setSubmitMessage({ type: "error", text: error instanceof Error ? error.message : "An unexpected error occurred" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="bg-white py-12 md:py-16 lg:py-20" data-contact-form>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Container */}
                <div className="relative shadow-careers-job-card rounded-2xl flex flex-col lg:flex-row gap-6 lg:gap-10">

                    {/* LEFT — FORM */}
                    <div className="flex-1 p-6 md:p-10">
                        <div className="lg:w-5/6 w-full">
                            {/* Tabs */}
                            <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                                {tabs.map((tab) => (
                                    <WobbleCard key={tab}>
                                        <button
                                            type="button"
                                            className={`px-4 md:px-8 py-2 md:py-3 cursor-pointer rounded-full font-medium font-body text-xs sm:text-xs md:text-sm border transition-all duration-200 hover:shadow-btn focus:outline-none relative ${activeTab === tab
                                                ? 'bg-primary/10 text-primary border-primary shadow-btn'
                                                : 'bg-white text-body hover:text-primary border-divider hover:bg-primary/10'
                                                }`}
                                            onClick={() => setActiveTab(tab)}
                                        >
                                            {activeTab === tab && (
                                                <motion.div
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-primary/10 rounded-full -z-10"
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

                            <h2 className="text-2xl sm:text-2xl md:text-3xl font-heading text-black font-bold mb-2 md:mb-3">Let's Connect</h2>
                            <p className="text-body font-normal font-body mb-8 md:mb-10 text-sm md:text-base leading-relaxed">
                                Have questions or want to collaborate? Reach out to us and let's make things happen!
                            </p>

                            {/* Success/Error Message */}
                            <AnimatePresence>
                                {submitMessage && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className={`mb-6 p-4 rounded-lg font-body text-sm ${
                                            submitMessage.type === "success"
                                                ? "bg-green-50 border border-green-200 text-green-800"
                                                : "bg-red-50 border border-red-200 text-red-800"
                                        }`}
                                    >
                                        {submitMessage.text}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* FORM */}
                            <form className="space-y-6" onSubmit={handleFormSubmit}>
                                <AnimatePresence mode="wait">
                                    {activeTab === "Business" && <BusinessForm />}
                                    {activeTab === "Career" && <CareerForm key={careerFormKey} />}
                                    {activeTab === "Other" && <OtherForm />}
                                </AnimatePresence>

                                <motion.div
                                    className="md:pt-2 w-fit"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    <AnimatedButton
                                        btnType="submit"
                                        text={isSubmitting ? "Submitting..." : "Submit"}
                                        disabled={isSubmitting}
                                        className="w-full sm:w-auto bg-primary cursor-pointer text-white px-6 md:px-9 py-3 rounded-full font-body shadow-btn hover:shadow-btn-reverse font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                                    />
                                </motion.div>
                            </form>
                        </div>
                    </div>

                    {/* RIGHT — CONTACT CARD */}
                    <div className="hidden lg:block w-51.25 bg-light-primary rounded-r-2xl"></div>

                    {/* CONTACT INFO CARD */}
                    <div className="w-full lg:w-81 bg-heading text-white p-6 md:p-8 rounded-xl lg:rounded-2xl flex flex-col justify-between h-auto lg:h-118 lg:absolute [@media(max-width:1240px)]:-right-4 lg:-right-14 lg:top-1/2 lg:-translate-y-1/2">
                        <div className="space-y-6 md:space-y-8">
                            <h3 className="text-xl md:text-2xl font-body text-white font-bold">Contact Us</h3>

                            <div className="space-y-4 md:space-y-5">
                                <div className="flex items-center gap-3">
                                    <BiSolidPhoneCall className="text-lg md:text-xl shrink-0" />
                                    <a href="tel:07863837895" className="text-xs md:text-sm font-medium font-body text-white hover:opacity-80 transition-opacity duration-200 break-all">
                                        07863837895
                                    </a>
                                </div>

                                <div className="flex items-center gap-3">
                                    <IoMail className="text-lg md:text-xl shrink-0" />
                                    <a href="mailto:info@secret-spirit.com" className="text-xs md:text-sm font-medium font-body text-white hover:opacity-80 transition-opacity duration-200 break-all">
                                        info@secret-spirit.com
                                    </a>
                                </div>

                                <div className="flex items-start gap-3">
                                    <IoLocationSharp className="text-lg md:text-xl shrink-0 mt-0.5" />
                                    <span className="text-xs md:text-sm font-medium font-body text-white leading-relaxed">
                                        316, Kasturi Pride (Business Hub),
                                        SP Ring Rd, Nikol, Ahmedabad,
                                        Gujarat - 382350
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
