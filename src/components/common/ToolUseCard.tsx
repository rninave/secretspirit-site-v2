"use client";
import Image from "next/image";
import React from "react";

interface ToolItem {
    id: string | number;
    alt?: string;
    src: string;
}

interface Props {
    title?: string;
    tools: ToolItem[];
    className?: string;
}

export default function ToolUseCard({ title = "Tools We Use", tools, className = "" }: Props) {
    return (
        <div className={`rounded-t-3xl max-w-7xl mx-auto shadow-toolcard -mt-10 z-10 bg-white p-6 ${className}`}>
            <div className="flex items-center flex-col md:flex-row justify-center gap-4">
                <h3 className="text-lg md:text-lg font-bold font-heading text-heading whitespace-nowrap">
                    {title}
                </h3>

                <div className="flex-1">
                    <div className="overflow-x-auto no-scrollbar">
                        <ul className="flex items-center gap-4 flex-wrap md:gap-5 lg:gap-6 w-full">
                            {tools.map((t) => (
                                <li key={t.id} className="flex-shrink-0">
                                    <div className="w-[50] h-[50px] bg-white border border-divider rounded-lg flex items-center justify-center shadow-sm">
                                        {/* Image uses native img to keep it simple; next/image can be used where desired */}
                                        <Image
                                            width={36}
                                            height={36}
                                            src={t.src}
                                            alt={t.alt ?? "tool"}
                                            loading="eager"
                                            className="w-9 h-9 object-contain"
                                        />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
