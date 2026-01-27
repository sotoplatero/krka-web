<script>
	import {
		ArrowRight,
		Zap,
		Shield,
		Wrench,
		Activity,
		CheckCircle2,
		Hammer,
	} from "@lucide/svelte";
</script>

<svelte:head>
	<title>Design & Manufacturing | Krka Power Inc.</title>
	<meta
		name="description"
		content="Custom electrical equipment manufacturing. From 38kV switchgear to custom control panels, we engineer power infrastructure that fits your footprint and timeline."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-[90vh] flex items-center bg-gradient-to-br from-base-100 via-base-200 to-primary/5"
>
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute inset-0"
			style="background-image: repeating-linear-gradient(0deg, transparent, transparent 35px, oklch(42% 0.1 195) 35px, oklch(42% 0.1 195) 36px), repeating-linear-gradient(90deg, transparent, transparent 35px, oklch(42% 0.1 195) 35px, oklch(42% 0.1 195) 36px);"
		></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 py-20 relative z-10">
		<div class="max-w-4xl">
			<div class="badge badge-primary badge-lg mb-6">
				DESIGN & MANUFACTURING
			</div>

			<h1
				class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
			>
				STANDARD CATALOGS ARE FOR<br />
				<span class="text-primary">STANDARD PROBLEMS.</span><br />
				WE BUILD FOR YOUR REALITY.
			</h1>

			<p
				class="text-xl md:text-2xl text-base-content/70 mb-10 leading-relaxed max-w-3xl"
			>
				Stop modifying your facility to fit the equipment. From <strong
					>38kV switchgear</strong
				>
				to custom control panels, we engineer power infrastructure that fits
				your footprint, your timeline, and your exact specs.
				<span class="text-primary font-semibold"
					>CSA Certified. Built in Ontario.</span
				>
			</p>

			<div class="flex flex-wrap gap-4">
				<a href="#contact" class="btn btn-primary btn-lg gap-2">
					<Hammer class="w-5 h-5" />
					Start Your Custom Build
					<ArrowRight class="w-5 h-5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Section 1: THE HEAVY HITTERS -->
<section class="py-24 bg-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-outline badge-lg mb-4">
				THE HEAVY HITTERS
			</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				HV/MV/LV Power Solutions
			</h2>
		</div>

		<div class="grid lg:grid-cols-2 gap-8">
			<!-- Switchgear -->
			<div class="card bg-base-200 shadow-xl overflow-hidden group">
				<div class="card-body p-8">
					<div class="flex items-start gap-4 mb-6">
						<div
							class="p-4 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors"
						>
							<Zap class="w-10 h-10 text-primary" />
						</div>
						<div>
							<div class="badge badge-primary badge-sm mb-2">
								HV/MV
							</div>
							<h3 class="text-2xl font-bold">SWITCHGEAR</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-6">
						Don't tear down walls. Just get better gear.
						Retrofitting aging infrastructure is a nightmare with
						"off-the-shelf" units. They never fit. We manufacture
						custom
						<span class="font-semibold"
							>Metal-Clad and Metal-Enclosed</span
						> switchgear designed to slide exactly into your existing
						lineup.
					</p>

					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">The Spec:</span>
								Up to 38kV, 3000A.
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">The Win:</span>
								We match existing busbar heights and footprint dimensions,
								saving you thousands in civil work and downtime.
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">The Guarantee:</span>
								Fully customizable protection and metering logic.
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Switchboard -->
			<div class="card bg-base-200 shadow-xl overflow-hidden group">
				<div class="card-body p-8">
					<div class="flex items-start gap-4 mb-6">
						<div
							class="p-4 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors"
						>
							<Activity class="w-10 h-10 text-secondary" />
						</div>
						<div>
							<div class="badge badge-secondary badge-sm mb-2">
								MV/LV
							</div>
							<h3 class="text-2xl font-bold">SWITCHBOARD</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-6">
						Maximum density. Minimum floor space. Real estate on
						your plant floor is expensive. Our designs shrink the
						footprint of power distribution without sacrificing
						accessibility or safety.
					</p>

					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">The Spec:</span>
								MV/LV Switchboards rated for critical uptime.
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">The Win:</span>
								High-density designs that leave room for future expansion.
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">The Standard:</span>
								Exceeds CSA and ANSI C37.20.1 standards. If the ESA
								inspector demands it, we've already built it in.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 2: SAFETY IS NON-NEGOTIABLE -->
<section class="py-24 bg-gradient-to-br from-error/5 to-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="badge badge-error badge-lg mb-4">
					SAFETY IS NON-NEGOTIABLE
				</div>
				<h2 class="text-4xl md:text-5xl font-bold mb-6">
					ARC FLASH SAFETY SOLUTIONS
				</h2>
				<p class="text-xl text-base-content/70 mb-8">
					Your team's safety isn't a line item. It's the priority.
					Compliance with
					<span class="font-semibold">CSA Z462</span> is mandatory, but
					keeping your people alive is moral. We engineer the hazard out
					of the equation.
				</p>

				<div class="space-y-6">
					<div class="card bg-base-100 shadow-lg">
						<div class="card-body p-6">
							<div class="flex items-start gap-4">
								<div class="p-3 bg-error/10 rounded-lg">
									<Shield class="w-8 h-8 text-error" />
								</div>
								<div>
									<h4 class="font-bold text-lg mb-2">
										The Tech
									</h4>
									<p class="text-base-content/70">
										Arc-Resistant Switchgear (Type 2B/2C)
										that redirects blasts away from
										operators.
									</p>
								</div>
							</div>
						</div>
					</div>

					<div class="card bg-base-100 shadow-lg">
						<div class="card-body p-6">
							<div class="flex items-start gap-4">
								<div class="p-3 bg-error/10 rounded-lg">
									<Wrench class="w-8 h-8 text-error" />
								</div>
								<div>
									<h4 class="font-bold text-lg mb-2">
										The Strategy
									</h4>
									<p class="text-base-content/70">
										Remote racking and maintenance solutions
										that keep personnel outside the Arc
										Flash Boundary entirely.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="relative">
				<div
					class="aspect-square bg-gradient-to-br from-error/10 to-error/5 rounded-3xl flex items-center justify-center"
				>
					<Shield class="w-48 h-48 text-error/20" />
					<div
						class="absolute inset-0 flex items-center justify-center"
					>
						<div class="text-center">
							<div class="text-8xl font-bold text-error/10">
								CSA Z462
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 3: CONTROL & DISTRIBUTION -->
<section class="py-24 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-outline badge-lg mb-4">
				CONTROL & DISTRIBUTION
			</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Built Tough. Built Smart.
			</h2>
		</div>

		<div class="grid lg:grid-cols-2 gap-8">
			<!-- Distribution / Power Panels -->
			<div class="card bg-base-100 shadow-xl overflow-hidden">
				<div class="card-body p-8">
					<div class="flex items-start gap-4 mb-6">
						<div class="p-4 bg-accent/10 rounded-lg">
							<Zap class="w-10 h-10 text-accent" />
						</div>
						<div>
							<div class="badge badge-accent badge-sm mb-2">
								POWER PANELS
							</div>
							<h3 class="text-2xl font-bold">DISTRIBUTION</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-6">
						Industrial-grade toughness. Stop replacing flimsy
						commercial panels that can't handle vibration, dust, or
						thermal cycling. We build tanks, not toys.
					</p>

					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">Built Tough:</span>
								Heavy-gauge steel enclosures (NEMA 12/3R/4X) designed
								for the harsh realities of Hamilton's industrial
								sector.
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold"
									>Contractor Friendly:</span
								>
								Designed with installation in mind—ample gutter space
								and logical lug landings to cut installation time
								in half.
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Panels / Custom Build -->
			<div class="card bg-base-100 shadow-xl overflow-hidden">
				<div class="card-body p-8">
					<div class="flex items-start gap-4 mb-6">
						<div class="p-4 bg-primary/10 rounded-lg">
							<Wrench class="w-10 h-10 text-primary" />
						</div>
						<div>
							<div class="badge badge-primary badge-sm mb-2">
								CUSTOM BUILD
							</div>
							<h3 class="text-2xl font-bold">PANELS</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-6">
						If you can draw it, we can build it. Complex transfer
						logic? Hybrid PLC/Power controls? Stainless steel for
						food processing? While other manufacturers say "no" or
						quote 40 weeks, we get to work.
					</p>

					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">Agility:</span>
								Local manufacturing means we adapt to design changes
								instantly, not months later.
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div>
								<span class="font-bold">Compliance:</span>
								Every custom build leaves our shop with a CSA label.
								No field evaluation headaches.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 4: INTELLIGENCE -->
<section class="py-24 bg-base-100">
	<div class="max-w-5xl mx-auto px-4">
		<div
			class="card bg-gradient-to-br from-primary/5 to-secondary/5 shadow-2xl overflow-hidden"
		>
			<div class="card-body p-8 md:p-12">
				<div class="flex flex-col lg:flex-row items-center gap-8">
					<div class="flex-1">
						<div class="badge badge-info badge-lg mb-4">
							INTELLIGENCE
						</div>
						<h2 class="text-3xl md:text-4xl font-bold mb-6">
							ADVANCED METERING
						</h2>

						<p class="text-xl text-base-content/70 mb-8">
							Blind spots cost money. You can't optimize what you
							can't see. We integrate
							<span class="font-semibold"
								>revenue-grade metering</span
							> that exposes power quality issues before they kill
							your motors.
						</p>

						<div class="space-y-4">
							<div class="flex items-start gap-3">
								<CheckCircle2
									class="w-5 h-5 text-info mt-0.5 flex-shrink-0"
								/>
								<div>
									<span class="font-bold">The Insight:</span>
									Real-time tracking of harmonics, sags, and swells.
								</div>
							</div>
							<div class="flex items-start gap-3">
								<CheckCircle2
									class="w-5 h-5 text-info mt-0.5 flex-shrink-0"
								/>
								<div>
									<span class="font-bold">The Value:</span>
									Turn your electrical room into a data center
									for predictive maintenance.
								</div>
							</div>
						</div>
					</div>

					<div
						class="w-full lg:w-64 h-64 bg-gradient-to-br from-info/20 to-info/5 rounded-2xl flex items-center justify-center flex-shrink-0"
					>
						<Activity class="w-32 h-32 text-info/40" />
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Footer: THE CLOSER -->
<section
	id="contact"
	class="py-24 bg-gradient-to-br from-base-200 via-base-100 to-primary/5"
>
	<div class="max-w-4xl mx-auto px-4 text-center">
		<h3 class="text-3xl md:text-4xl font-bold mb-6">
			Tired of hearing <span class="text-primary"
				>"That's not in our catalog"</span
			>?
		</h3>

		<p class="text-xl text-base-content/70 mb-10 max-w-2xl mx-auto">
			You have a complex power problem. We have the engineering heritage
			to solve it. Let's look at your single-line diagram today.
		</p>

		<div class="flex flex-wrap justify-center gap-4">
			<a
				href="mailto:info@krkapower.com"
				class="btn btn-primary btn-lg gap-2"
			>
				Talk to an Engineer
				<ArrowRight class="w-5 h-5" />
			</a>
			<a href="tel:9056910691" class="btn btn-outline btn-lg gap-2">
				<Zap class="w-5 h-5" />
				905 691-0691
			</a>
		</div>
	</div>
</section>
