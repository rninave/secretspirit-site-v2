import AnimatedButton from "@/components/common/AnimatedButton";
import Reveal from "@/components/common/Reveal";
import blogs from "@/data/blogs.json";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { getImageUrl } from "@/utils/image-utils";

export default function BlogListSection() {
    return (
        <section className="bg-white py-12 md:py-16 lg:py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="space-y-8">
                    {blogs.map((post: any) => (
                        <Reveal key={post.id} className="border-b-1 border-divider ">
                            <article className="flex flex-col md:flex-row items-stretch gap-4 md:gap-6 bg-white rounded-lg my-10">
                                <div className="lg:w-1/3 flex-shrink-0 overflow-hidden rounded-lg">
                                    <Image src={getImageUrl(post.image)} alt={post.title} width={520} height={320} className="object-cover w-full h-40 md:h-full" />
                                </div>

                                <div className="flex-1 md:pl-6 py-4 md:py-0">
                                    <h3 className="text-lg md:text-xl font-semibold text-heading mb-2">
                                        {post.title}
                                    </h3>

                                    <p className="text-sm md:text-base text-body mb-4">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex flex-col justify-between md:justify-start gap-4">
                                        <div className="flex items-center gap-3 text-body text-sm">
                                            <Image width={18} height={18} src={getImageUrl('/blog/date-icon.svg')} alt="Published date" />
                                            <span>{new Date(post.date).toLocaleDateString()}</span>
                                        </div>

                                        <div className="flex">
                                            <AnimatedButton
                                                href={`/blog/${post.slug}`}
                                                text="View More"
                                                hoverText="View More"
                                                icon={<FiArrowUpRight size={16} fontWeight={700} />}
                                                className="bg-transparent cursor-pointer font-heading border-2 border-primary text-primary px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-btn hover:bg-primary hover:text-white transition-colors"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    )
}