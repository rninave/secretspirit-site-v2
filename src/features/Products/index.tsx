import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { products, Product } from "@/data/products";

const cardClass = "h-full flex flex-col gap-4 bg-white rounded-2xl border border-divider p-6 md:p-8";

function CardBody({ product }: { product: Product }) {
    return (
        <>
            <div className="flex items-start justify-between gap-4 min-h-10">
                {product.logo ? (
                    <Image src={product.logo} alt={`${product.name} logo`} width={200} height={24} className={`${product.logoClassName ?? 'h-6'} w-auto`} />
                ) : (
                    <span className="text-xl font-bold font-heading text-black">{product.name}</span>
                )}
                {product.comingSoon ? (
                    <span className="shrink-0 rounded-full bg-primary-light text-primary text-xs font-heading font-bold tracking-wide uppercase px-3 py-1.5">
                        Coming soon
                    </span>
                ) : (
                    <span className="w-10 h-10 shrink-0 inline-flex items-center justify-center rounded-full border border-divider text-body group-hover:bg-primary group-hover:text-white group-hover:border-primary group-hover:rotate-45 transition-all duration-300">
                        <FiArrowUpRight />
                    </span>
                )}
            </div>
            <span className="text-primary text-xs font-heading font-bold tracking-widest uppercase">{product.category}</span>
            <h3 className="text-lg md:text-2xl font-bold font-heading text-black">{product.tagline}</h3>
            <p className="text-body text-sm leading-6 font-body">{product.description}</p>
        </>
    );
}

export default function ProductsPage() {
    return (
        <>
            <ScrollProgress className="top-19" />
            <PageHero
                title="Our products"
                bgImage="/heros/works-hero.jpg"
                bgstyle="linear-gradient(123.99deg, rgba(0,0,0,0.97) 5.78%, rgba(34,36,47,0.97) 45.6%, rgba(0,0,0,0.97) 81.77%)"
                breadcrumbItems={[{ label: 'HOME', href: '/' }, { label: 'PRODUCTS' }]}
                subtitle="Alongside client work, we build our own products — tools that bring our design-first, research-driven approach to every team."
            />
            <section className="bg-gray-light px-4 md:px-8 py-10 md:py-20">
                <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2">
                    {products.map((product, index) => (
                        <Reveal key={product.slug} delayMs={index * 100}>
                            {product.comingSoon ? (
                                <div
                                    className={`${cardClass} grayscale opacity-60 cursor-not-allowed select-none`}
                                    aria-label={`${product.name} — coming soon`}
                                >
                                    <CardBody product={product} />
                                </div>
                            ) : (
                                <Link
                                    href={`/products/${product.slug}`}
                                    aria-label={`View ${product.name}`}
                                    className={`group ${cardClass} hover:shadow-lg transition-shadow duration-300`}
                                >
                                    <CardBody product={product} />
                                </Link>
                            )}
                        </Reveal>
                    ))}
                </div>
            </section>
        </>
    );
}
