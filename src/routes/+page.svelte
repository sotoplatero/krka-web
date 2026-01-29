<script>
	import { onMount } from "svelte";
	import {
		ArrowRight,
		Phone,
		Mail,
		MapPin,
		Check,
		Shield,
		Clock,
		Hospital,
		Server,
		Factory,
		GraduationCap,
		Fuel,
		FlaskConical,
		Building,
		Landmark,
		ChevronDown,
	} from "@lucide/svelte";
	import logo from "$lib/assets/krka-logo.webp";
	import schneider from "$lib/assets/partners/schneider.webp";
	import eaton from "$lib/assets/partners/eaton.png";
	import siemens from "$lib/assets/partners/siemens.png";
	import abb from "$lib/assets/partners/abb.png";

	// Components
	import ServicesUnified from "$lib/components/ServicesUnified.svelte";
	// import ServiceDesign from "$lib/components/ServiceDesign.svelte";
	// import ServiceEngineering from "$lib/components/ServiceEngineering.svelte";
	// import ServiceAutomation from "$lib/components/ServiceAutomation.svelte";
	// import ServiceRobotics from "$lib/components/ServiceRobotics.svelte";
	import ProjectGallery from "$lib/components/ProjectGallery.svelte";
	import Testimonials from "$lib/components/Testimonials.svelte";
	import FAQ from "$lib/components/FAQ.svelte";

	// Data
	import { industries } from "$lib/data/industries.js";

	let heroVisible = $state(false);

	onMount(() => {
		setTimeout(() => (heroVisible = true), 100);
	});

	const stats = [
		{ value: "11+", label: "Years Engineering Excellence" },
		{ value: "50+", label: "Expert Team Members" },
		{ value: "500+", label: "Projects Delivered" },
		{ value: "99.8%", label: "Safety Record" },
	];

	const partners = [
		{ name: "Schneider Electric", logo: schneider },
		{ name: "Eaton", logo: eaton },
		{ name: "Siemens", logo: siemens },
		{ name: "ABB", logo: abb },
	];

	/** @type {Record<string, typeof Hospital>} */
	const industryIcons = {
		Hospital,
		Server,
		Factory,
		GraduationCap,
		Fuel,
		FlaskConical,
		Building,
		Landmark,
	};
</script>

<svelte:head>
	<title
		>Krka Power Inc. - Custom Power Distribution Equipment Manufacturer |
		Burlington, ON</title
	>
	<meta
		name="description"
		content="Custom power distribution equipment manufacturer serving Ontario since 2013. CSA and ANSI certified switchgear, switchboards, and automation solutions for healthcare, data centers, and industrial facilities."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	id="hero"
	class="relative overflow-hidden flex flex-col items-center justify-center min-h-screen"
	style="padding-top: var(--header-height);"
>
	<!-- Video Background -->
	<iframe
		src="https://www.youtube.com/embed/dN9OoIP9Wf4?rel=0&autoplay=1&mute=1&controls=0&loop=1&playlist=dN9OoIP9Wf4&fs=0&showinfo=0&modestbranding=1&iv_load_policy=3&disablekb=1&enablejsapi=1"
		class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[177.78vh] h-[56.25vw] min-w-full min-h-full pointer-events-none z-0"
		allow="autoplay; encrypted-media"
		allowfullscreen
		title="Krka Power Background Video"
	></iframe>
	<!-- Overlay -->
	<div class="absolute inset-0 bg-black/80 z-10"></div>

	<!-- Flex container for vertical centering -->
	<div class="relative z-20 max-w-7xl mx-auto px-4">
		<div
			class="max-w-4xl mx-auto text-center transition-all duration-1000 {heroVisible
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-10'}"
		>
			<!-- Headline -->
			<h1
				class="text-4xl md:text-7xl lg:text-9xl font-bold mb-4 leading-tight text-white"
			>
				Custom Power Distribution<br />
				<span class="text-transparent bg-clip-text bg-secondary">
					Equipment Manufacturer
				</span>
			</h1>

			<!-- Subheadline -->
			<p
				class="text-xl md:text-2xl mb-8 text-white/80 max-w-3xl mx-auto leading-relaxed"
			>
				When standard isn't custom enough. Manufacturing
				mission-critical power solutions for Canada's most demanding
				industries since 2013.
			</p>

			<!-- CTAs -->
			<div class=" mb-12">
				<a
					href="/get-quote"
					class="btn btn-primary btn-lg gap-2 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
				>
					Get Quote
					<ArrowRight class="w-5 h-5" />
				</a>
			</div>

			<!-- Trust Badges -->
			<div
				class="flex flex-wrap justify-center gap-6 md:gap-8 items-center text-sm text-white/70 font-medium"
			>
				<div class="flex items-center gap-2">
					<Check class="w-5 h-5 text-success" />
					<span>CSA & ANSI Certified</span>
				</div>
				<div class="flex items-center gap-2">
					<Shield class="w-5 h-5 text-success" />
					<span>Industry 4.0 Ready</span>
				</div>
				<div class="flex items-center gap-2">
					<Clock class="w-5 h-5 text-success" />
					<span>24/7 Emergency Response</span>
				</div>
			</div>
		</div>
	</div>

	<!-- Scroll Indicator -->
	<div
		class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20"
	>
		<ChevronDown class="w-6 h-6 text-white" />
	</div>
</section>

<!-- Partners Section -->
<section class="py-12 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<p
			class="text-center text-sm font-medium text-base-content/60 mb-8 uppercase tracking-widest"
		>
			Authorized Partner & Integrator
		</p>
		<div
			class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center"
		>
			{#each partners as partner (partner.name)}
				<div
					class="grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer"
				>
					<img
						src={partner.logo}
						alt={partner.name}
						class="h-8 object-contain opacity-60 hover:opacity-100 transition-opacity"
					/>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="py-20">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<!-- Content -->
			<div>
				<div class="badge badge-primary mb-4">
					ABOUT KRKA POWER INC.
				</div>
				<h2 class="text-4xl md:text-5xl font-bold mb-6">
					Reliability from Every<br />Aspect of Our Business
				</h2>
				<div class="space-y-4 text-lg text-base-content/70">
					<p>
						Since 2013, Krka Power Inc. has delivered
						precision-engineered power distribution equipment for
						Ontario's most critical facilities. Based in Burlington,
						our team of 50+ engineers and technicians specializes in
						custom solutions when off-the-shelf equipment won't meet
						your requirements.
					</p>
					<p>
						From hospitals requiring uninterrupted power to data
						centers demanding 99.999% uptime, we design,
						manufacture, and service equipment that meets the
						strictest CSA and ANSI standards.
					</p>
				</div>

				<!-- Stats Cards -->
				<div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
					{#each stats as stat (stat.label)}
						<div
							class="card bg-base-200 hover:shadow-lg transition-all duration-300"
						>
							<div class="card-body p-4 text-center">
								<div
									class="text-2xl md:text-3xl font-bold text-primary"
								>
									{stat.value}
								</div>
								<div
									class="text-xs font-medium text-base-content/60"
								>
									{stat.label}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Image Placeholder -->
			<div class="relative">
				<div
					class="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border border-primary/20"
				>
					<div class="text-center p-8">
						<Factory
							class="w-24 h-24 mx-auto mb-4 text-primary/30"
						/>
						<p class="text-base-content/40 text-sm">
							[Facility Image]
						</p>
					</div>
				</div>

				<!-- Floating Accents -->
				<div
					class="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-lg opacity-20 blur-2xl"
				></div>
				<div
					class="absolute -bottom-4 -left-4 w-32 h-32 bg-primary rounded-lg opacity-20 blur-2xl"
				></div>
			</div>
		</div>
	</div>
</section>

<!-- Services Section -->
<ServicesUnified />

<!-- Industries Section -->
<section
	id="industries"
	class="py-20 bg-gradient-to-br from-base-100 to-base-200"
>
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-accent mb-4">INDUSTRIES WE SERVE</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Industry-Leading Solutions<br />for Every Application
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Mission-critical power distribution across diverse sectors
			</p>
		</div>

		<div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
			{#each industries as industry (industry.id)}
				{@const IconComponent = industryIcons[industry.icon]}
				<div
					class="card bg-base-100 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
				>
					<div class="card-body items-center text-center">
						<div
							class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors"
						>
							<IconComponent
								class="w-8 h-8 text-primary group-hover:text-primary-content transition-colors"
							/>
						</div>
						<h3 class="card-title">{industry.name}</h3>
						<p class="text-sm text-base-content/70">
							{industry.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Gallery -->
<ProjectGallery />

<!-- Testimonials -->
<Testimonials />

<!-- FAQ Section -->
<FAQ />

<!-- CTA Section -->
<section
	id="contact"
	class="py-20 bg-primary text-primary-content relative overflow-hidden"
>
	<!-- Background Effects -->
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
		></div>
	</div>

	<div class="max-w-4xl mx-auto px-4 text-center relative z-10">
		<h2 class="text-4xl md:text-5xl font-bold mb-6">
			Ready to Engineer Your Solution?
		</h2>
		<p class="text-xl mb-8 opacity-90">
			Get a custom quote within 24 hours. Our team is standing by to
			discuss your power distribution needs.
		</p>

		<!-- CTA Buttons -->
		<div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
			<button
				class="btn btn-neutral btn-lg gap-2 hover:scale-105 transition-all"
			>
				Request Detailed Quote
				<ArrowRight class="w-5 h-5" />
			</button>
			<button
				class="btn btn-outline border-primary-content text-primary-content hover:bg-primary-content hover:text-primary btn-lg gap-2 hover:scale-105 transition-all"
			>
				Schedule Consultation
				<Clock class="w-5 h-5" />
			</button>
		</div>

		<div
			class="divider divider-primary before:bg-primary-content/30 after:bg-primary-content/30 text-primary-content/50"
		>
			OR
		</div>

		<!-- Contact Info -->
		<div
			class="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm"
		>
			<a
				href="tel:9056910691"
				class="flex items-center gap-2 hover:underline"
			>
				<Phone class="w-5 h-5" />
				<span class="font-medium">905 691-0691</span>
			</a>
			<a
				href="mailto:[email protected]"
				class="flex items-center gap-2 hover:underline"
			>
				<Mail class="w-5 h-5" />
				<span class="font-medium">[email protected]</span>
			</a>
			<div class="flex items-center gap-2">
				<MapPin class="w-5 h-5" />
				<span class="font-medium">Burlington, ON</span>
			</div>
		</div>
	</div>
</section>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
