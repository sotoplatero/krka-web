<script>
	import {
		ArrowRight,
		Zap,
		Shield,
		Wrench,
		Activity,
		CheckCircle2,
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
				Design & Manufacturing
			</div>

			<h1
				class="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
			>
				Standard catalogs are for<br />
				<span class="text-primary">standard problems.</span><br />
				We build for your reality.
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
					Get Your Custom Quote
					<ArrowRight class="w-5 h-5" />
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Section 1: Power Distribution -->
<section class="py-24 bg-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Power Distribution That Fits Your Existing Infrastructure
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
							<h3 class="text-2xl font-bold">Switchgear</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-4">
						<strong class="text-primary">Switchgear that slides into your existing lineup.</strong>
					</p>

					<p class="text-base-content/70 mb-6">
						Retrofitting aging infrastructure shouldn't mean tearing down walls. Off-the-shelf units never fit—forcing costly civil work and extended downtime. We manufacture custom Metal-Clad and Metal-Enclosed switchgear designed to match your exact busbar heights and footprint dimensions.
					</p>

					<div class="space-y-3">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								Rated up to <strong>38kV, 3000A</strong>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								Fully customizable protection and metering logic
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								Save thousands in civil work and get back online faster
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
							<h3 class="text-2xl font-bold">Switchboard</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-4">
						<strong class="text-secondary">Maximum density. Minimum floor space.</strong>
					</p>

					<p class="text-base-content/70 mb-6">
						Real estate on your plant floor is expensive. Our switchboard designs shrink the footprint of power distribution without sacrificing accessibility or safety.
					</p>

					<div class="space-y-3">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								MV/LV Switchboards rated for critical uptime
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								High-density layouts that leave room for future expansion
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-secondary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								Exceeds CSA and ANSI C37.20.1 standards—when the ESA inspector arrives, you're already covered
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 2: Arc Flash Safety -->
<section class="py-24 bg-gradient-to-br from-error/5 to-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="badge badge-error badge-lg mb-4">
					Arc Flash Safety
				</div>
				<h2 class="text-4xl md:text-5xl font-bold mb-6">
					Protect Your Team. Exceed Compliance Standards.
				</h2>
				<p class="text-xl text-base-content/70 mb-8">
					CSA Z462 compliance is mandatory. Keeping your people safe is a priority. We engineer hazards out of the equation before they become incidents.
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
										Arc-Resistant Switchgear
									</h4>
									<p class="text-base-content/70">
										Type 2B/2C equipment that redirects blasts away from operators.
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
										Remote Racking Solutions
									</h4>
									<p class="text-base-content/70">
										Keep personnel outside the Arc Flash Boundary entirely.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>

				<p class="mt-8 text-lg font-semibold text-error">
					Your team goes home safe. Every shift.
				</p>
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

<!-- Section 3: Power Distribution & Control Panels -->
<section class="py-24 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Power Distribution & Control Panels
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
								Power Panels
							</div>
							<h3 class="text-2xl font-bold">Distribution</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-4">
						<strong class="text-accent">Industrial-grade toughness. Built to last.</strong>
					</p>

					<p class="text-base-content/70 mb-6">
						Stop replacing flimsy commercial panels that can't handle vibration, dust, or thermal cycling. We build heavy-gauge steel enclosures (NEMA 12/3R/4X) designed for Hamilton's harshest industrial environments.
					</p>

					<div class="space-y-3">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								Ample gutter space for easier wiring
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-accent mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								Logical lug landings that cut installation time in half
							</div>
						</div>
					</div>

					<p class="mt-6 text-sm text-base-content/60 italic">
						Panels that survive the job. Installers who thank you.
					</p>
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
								Custom Build
							</div>
							<h3 class="text-2xl font-bold">Panels</h3>
						</div>
					</div>

					<p class="text-lg text-base-content/80 mb-4">
						<strong class="text-primary">If you can draw it, we can build it.</strong>
					</p>

					<p class="text-base-content/70 mb-6">
						Complex transfer logic? Hybrid PLC/Power controls? Stainless steel for food processing? While other manufacturers say "no" or quote 40 weeks, we get to work.
					</p>

					<div class="space-y-3">
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								<strong>Agility:</strong> Local manufacturing means instant design adaptations—not months-long delays
							</div>
						</div>
						<div class="flex items-start gap-3">
							<CheckCircle2
								class="w-5 h-5 text-primary mt-0.5 flex-shrink-0"
							/>
							<div class="text-sm">
								<strong>Compliance:</strong> Every custom build leaves our shop with a CSA label. No field evaluation headaches.
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Section 4: Advanced Metering -->
<section class="py-24 bg-base-100">
	<div class="max-w-5xl mx-auto px-4">
		<div
			class="card bg-gradient-to-br from-primary/5 to-secondary/5 shadow-2xl overflow-hidden"
		>
			<div class="card-body p-8 md:p-12">
				<div class="flex flex-col lg:flex-row items-center gap-8">
					<div class="flex-1">
						<div class="badge badge-info badge-lg mb-4">
							Intelligence
						</div>
						<h2 class="text-3xl md:text-4xl font-bold mb-6">
							Blind Spots Cost Money. See Everything.
						</h2>

						<p class="text-xl text-base-content/70 mb-8">
							You can't optimize what you can't see. We integrate
							<span class="font-semibold"
								>revenue-grade metering</span
							> that exposes power quality issues before they damage your motors.
						</p>

						<div class="space-y-4">
							<div class="flex items-start gap-3">
								<CheckCircle2
									class="w-5 h-5 text-info mt-0.5 flex-shrink-0"
								/>
								<div>
									Real-time tracking of harmonics, sags, and swells
								</div>
							</div>
							<div class="flex items-start gap-3">
								<CheckCircle2
									class="w-5 h-5 text-info mt-0.5 flex-shrink-0"
								/>
								<div>
									Early detection of problems before they cause failures
								</div>
							</div>
							<div class="flex items-start gap-3">
								<CheckCircle2
									class="w-5 h-5 text-info mt-0.5 flex-shrink-0"
								/>
								<div>
									Data you can use for predictive maintenance
								</div>
							</div>
						</div>

						<p class="mt-6 text-lg font-semibold text-info">
							Turn your electrical room into a data center. Stop guessing. Start knowing.
						</p>
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

<!-- Footer CTA -->
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
			to solve it. Let's review your single-line diagram today.
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
