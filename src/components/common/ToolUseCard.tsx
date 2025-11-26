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
        <div className={`rounded-lg border border-divider bg-white p-6 md:p-8 ${className}`}>
            <div className="flex items-center gap-6 md:gap-8">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold heading text-heading whitespace-nowrap">
                    {title}
                </h3>

                <div className="flex-1">
                    <div className="overflow-x-auto no-scrollbar">
                        <ul className="flex items-center gap-4 md:gap-5 lg:gap-6 w-max">
                            {tools.map((t) => (
                                <li key={t.id} className="flex-shrink-0">
                                    <div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border border-divider rounded-md flex items-center justify-center shadow-sm">
                                        {/* Image uses native img to keep it simple; next/image can be used where desired */}
                                        <Image
                                            fill
                                            src={t.src}
                                            alt={t.alt ?? "tool"}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain"
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
