'use client';

import AnimatedButton from "@/components/common/AnimatedButton";
import Reveal from "@/components/common/Reveal";
import blogs from "@/data/blogs.json";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiCalendar, FiChevronLeft, FiChevronRight, FiShare2 } from "react-icons/fi";

export default function BlogListSection() {
    const [currentPage, setCurrentPage] = useState(1);

    // Top latest post is featured on Page 1
    const featuredPost = blogs[0];
    const remainingBlogs = blogs.slice(1);

    // 9 blogs per page (Page 1: 1 Featured + 8 Grid items; Page 2+: 9 Grid items)
    const totalPages = Math.max(1, 1 + Math.ceil(Math.max(0, remainingBlogs.length - 8) / 9));

    const getCurrentGridPosts = () => {
        if (currentPage === 1) {
            return remainingBlogs.slice(0, 8);
        }
        const startIndex = 8 + (currentPage - 2) * 9;
        return remainingBlogs.slice(startIndex, startIndex + 9);
    };

    const currentGridPosts = getCurrentGridPosts();

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            const section = document.getElementById("blog-list-section");
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const handleShare = async (e: React.MouseEvent, post: any) => {
        e.preventDefault();
        e.stopPropagation();
        const shareUrl = `${window.location.origin}/blog/${post.slug}`;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: post.title,
                    text: post.excerpt,
                    url: shareUrl,
                });
            } catch (err) {
                // Share cancelled
            }
        } else {
            try {
                await navigator.clipboard.writeText(shareUrl);
                alert("Blog link copied to clipboard!");
            } catch (err) {
                // Clipboard write fallback
            }
        }
    };

    return (
        <section id="blog-list-section" className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* 1. Featured Top Blog Card (Shown on Page 1) */}
                {currentPage === 1 && featuredPost && (
                    <Reveal className="mb-12 md:mb-16">
                        <div className="bg-white rounded-2xl border border-divider/80 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.07)] transition-shadow duration-300">
                            <div className="flex flex-col lg:flex-row items-stretch">
                                {/* Featured Image (Flush to left, top, bottom corners) */}
                                <div className="w-full lg:w-[400px] xl:w-[440px] relative min-h-[280px] lg:min-h-full shrink-0 overflow-hidden bg-gray-100">
                                    <Image
                                        src={featuredPost.image}
                                        alt={featuredPost.title}
                                        fill
                                        sizes="(max-width: 1024px) 100vw, 440px"
                                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-500"
                                        priority
                                    />
                                </div>

                                {/* Featured Content Details */}
                                <div className="flex-1 flex flex-col justify-center p-6 md:p-8 lg:p-10">
                                    <h2 className="text-2xl md:text-3xl lg:text-[32px] font-heading font-bold text-heading leading-tight mb-4">
                                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-primary transition-colors">
                                            {featuredPost.title}
                                        </Link>
                                    </h2>

                                    <p className="text-sm md:text-base font-body text-body leading-relaxed mb-6">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center gap-2.5 text-body text-sm font-medium mb-8">
                                        <FiCalendar className="w-4 h-4 text-primary shrink-0" />
                                        <span>{featuredPost.date}</span>
                                    </div>

                                    <div>
                                        <AnimatedButton
                                            href={`/blog/${featuredPost.slug}`}
                                            text="View More"
                                            hoverText="View More"
                                            icon={<FiArrowUpRight size={16} fontWeight={700} />}
                                            className="bg-transparent cursor-pointer font-heading border-2 border-primary text-primary px-7 py-3 rounded-full text-sm font-bold inline-flex items-center gap-2 hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                )}

                {/* 2. Blog Cards Grid (3 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
                    {currentGridPosts.map((post: any, idx: number) => (
                        <Reveal key={post.slug || idx} className="h-full">
                            <article className="bg-white rounded-xl border border-divider/80 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/40 transition-all duration-300 flex flex-col h-full group">
                                {/* Header Image */}
                                <div className="relative w-full h-48 sm:h-52 overflow-hidden shrink-0 bg-gray-100 border-b border-divider/80">
                                    <Link href={`/blog/${post.slug}`}>
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </Link>
                                </div>

                                {/* Card Body */}
                                <div className="p-5 sm:p-6 flex flex-col flex-1">
                                    <h3 className="text-base sm:text-lg font-heading font-bold text-heading group-hover:text-primary transition-colors leading-snug mb-2 line-clamp-2">
                                        <Link href={`/blog/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h3>

                                    <div className="flex items-center gap-2 text-body text-xs sm:text-sm font-medium mb-3">
                                        <FiCalendar className="w-3.5 h-3.5 text-primary shrink-0" />
                                        <span>{post.date}</span>
                                    </div>

                                    <p className="text-xs sm:text-sm font-body text-body leading-relaxed line-clamp-3 mb-6 flex-1">
                                        {post.excerpt}
                                    </p>

                                    {/* Action Bar Footer */}
                                    <div className="flex items-center justify-between pt-4 border-t border-divider/60 mt-auto">
                                        <AnimatedButton
                                            href={`/blog/${post.slug}`}
                                            text="View More"
                                            hoverText="View More"
                                            icon={<FiArrowUpRight size={14} fontWeight={700} />}
                                            className="bg-transparent cursor-pointer font-heading border border-primary text-primary px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
                                        />

                                        <button
                                            onClick={(e) => handleShare(e, post)}
                                            aria-label="Share blog post"
                                            className="w-8 h-8 rounded-full bg-light-primary text-primary hover:bg-primary hover:text-white border border-primary/20 transition-all duration-300 flex items-center justify-center cursor-pointer shadow-sm"
                                        >
                                            <FiShare2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>

                {/* 3. Pagination Controls */}
                {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 pt-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            aria-label="Previous Page"
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-body font-medium transition-colors ${
                                currentPage === 1
                                    ? "border-divider/50 text-gray-300 cursor-not-allowed"
                                    : "border-divider text-heading hover:border-primary hover:text-primary cursor-pointer"
                            }`}
                        >
                            <FiChevronLeft className="w-4 h-4" />
                            <span>Prev</span>
                        </button>

                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                onClick={() => handlePageChange(page)}
                                className={`w-10 h-10 rounded-lg text-sm font-body font-bold transition-all cursor-pointer ${
                                    currentPage === page
                                        ? "bg-primary text-white shadow-md border border-primary"
                                        : "bg-white text-heading border border-divider hover:border-primary hover:text-primary"
                                }`}
                            >
                                {page}
                            </button>
                        ))}

                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            aria-label="Next Page"
                            className={`flex items-center gap-1 px-4 py-2 rounded-lg border text-sm font-body font-medium transition-colors ${
                                currentPage === totalPages
                                    ? "border-divider/50 text-gray-300 cursor-not-allowed"
                                    : "border-divider text-heading hover:border-primary hover:text-primary cursor-pointer"
                            }`}
                        >
                            <span>Next</span>
                            <FiChevronRight className="w-4 h-4" />
                        </button>
                    </div>
                )}

            </div>
        </section>
    );
}
