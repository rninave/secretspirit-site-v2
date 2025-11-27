import Reveal from "@/components/common/Reveal";
import Link from "next/link";

export default function HowWeHelpSection() {
	return (
		<section className="py-12 md:py-15 bg-gray-light">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				<Reveal>
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
						{/* Left heading column */}
						<div className="lg:col-span-4">
							<h2 className="text-lg text-[32px]  font-bold font-heading text-heading leading-tight md:leading-tight">
								How Can We Help You?
							</h2>
						</div>

						{/* Right content column */}
						<div className="lg:col-span-8">
							<div className="space-y-6 text-body text-sm md:text-base font-body font-normal leading-7 md:leading-8">
								<p>
									Our primary goal is to provide comprehensive and cutting-edge solutions to address your technological needs and propel your business forward. We offer a wide range of services and expertise to support your digital transformation and optimize your operations.
								</p>

								<p>
									With our expertise in development and commitment to client satisfaction, we are dedicated to helping you achieve your business goals and stay ahead of the competition.
								</p>

								<p className="font-semibold">
									<Link href="/contact" className="text-primary">Contact us</Link> to explore how our services can be customized to meet your specific requirements and drive your digital success.
								</p>
							</div>
						</div>
					</div>
				</Reveal>
			</div>
		</section>
	);
}
