import Reveal from "@/components/common/Reveal";
import React from "react";

export default function BlogDetailsSection({ blog }: { blog: any }) {
  const details = blog.details ?? [];

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">

          {/* Structured Content */}
          <article className="text-body space-y-8">
            {details.map((block: any, idx: number) => {
              if (block.type === "intro") {
                return (
                  <p key={idx} className="text-xs md:text-sm font-body leading-7 text-body font-normal">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "section") {
                return (
                  <section key={idx} className="mb-10">
                    <Reveal key={idx}>
                    <div className="flex items-start gap-6 border-l-1 border-primary pl-4 md:pl-10">
                      <div className="flex-1">
                        <h2 className="text-lg md:text-[24px] font-body font-bold mb-4 text-heading">
                          {block.number}. {block.title}
                        </h2>

                        <ul className="list-disc pl-5 space-y-3">
                          {Array.isArray(block.items) &&
                            block.items.map((it: any, i: number) => (
                              <li key={i} className="text-xs md:text-sm font-body text-body leading-6">
                                <strong className="font-semibold text-sm md:text-base text-black">{it.term} -</strong> <span className="text-body">{it.desc}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                    </Reveal>
                  </section>
                );
              }

              if (block.type === "conclusion") {
                return (
                  <Reveal key={idx}>
                  <section key={idx} className="border-l border-primary pl-4 md:pl-10">
                    <h3 className="text-lg md:text-[24px] font-bold font-body mb-3 md:mb-6 text-black">Conclusion</h3>
                    <p className="text-xs md:text-sm font-body font-normal leading-6 text-body">{block.text}</p>
                  </section>
                  </Reveal>
                );
              }

              // fallback for unknown block types
              return (
                <div key={idx} className="text-sm md:text-base leading-7">
                  {typeof block === "string" ? block : JSON.stringify(block)}
                </div>
              );
            })}
          </article>
        </div>
      </div>
    </section>
  );
}
