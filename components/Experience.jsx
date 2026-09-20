export function Experience() {
	return (
		<section className="section-wrap py-24">
			<h2 className="section-title mb-14">Experience</h2>
			<div className="grid gap-6 md:grid-cols-2">
				<article className="relative border border-[#242323] p-7 pt-16 md:p-10 md:pt-20">
					<img src="/assets/paperclip.png" alt="" aria-hidden="true" className="absolute left-1/2 top-6 z-10 w-14 -translate-x-1/2 -translate-y-1/2" />
					<h3 className="mb-6 text-3xl">Student Job</h3>
					<div className="body-copy">
						<p>
							Outside my studies I work with GUI+embedded testing and requirements in MagVenture, a medical company that makes a difference in the treatment of depression and other mental issues.
						</p>
						<p className="mt-6">
							I work with SCUM in the software department. My main tasks are writing software test and testcases for the medical product from RISK CONTROL requirements, as weel as GUI and embedded testing.
						</p>
					</div>
				</article>

				<article className="relative border border-[#242323] p-7 pt-16 md:p-10 md:pt-20">
					<img src="/assets/paperclip.png" alt="" aria-hidden="true" className="absolute left-1/2 top-6 z-10 w-14 -translate-x-1/2 -translate-y-1/2" />
					<h3 className="mb-6 text-3xl">Volunteer Work</h3>
					<div className="body-copy">
						<p>
							I am a teamleader of my volenteer group with around 20 volenteers. We facilitate a safe space for queer youth in Copenhagen every week.
						</p>
						<p className="mt-6">
							In my volenteer work I enjoy the impact of our work, and I enjoy leading montly meetings and communicateing with our main organisation, LGBT+ Denmark
						</p>
					</div>
				</article>
			</div>
		</section>
	)
}