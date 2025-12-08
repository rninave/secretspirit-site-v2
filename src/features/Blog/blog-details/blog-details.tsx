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
                  <p key={idx} className="text-sm md:text-base leading-7">
                    {block.text}
                  </p>
                );
              }

              if (block.type === "section") {
                return (
                  <section key={idx} className="">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded bg-primary/5 flex items-center justify-center text-primary font-bold">
                          {block.number}
                        </div>
                      </div>

                      <div className="flex-1">
                        <h2 className="text-lg md:text-xl font-semibold mb-4" style={{ color: "#0f172a" }}>
                          {block.number}. {block.title}
                        </h2>

                        <ul className="list-disc pl-5 space-y-3">
                          {Array.isArray(block.items) &&
                            block.items.map((it: any, i: number) => (
                              <li key={i} className="text-sm md:text-base leading-7">
                                <strong className="font-semibold">{it.term} -</strong> <span className="text-body">{it.desc}</span>
                              </li>
                            ))}
                        </ul>
                      </div>
                    </div>
                  </section>
                );
              }

              if (block.type === "conclusion") {
                return (
                  <section key={idx}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3">Conclusion</h3>
                    <p className="text-sm md:text-base leading-7">{block.text}</p>
                  </section>
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
