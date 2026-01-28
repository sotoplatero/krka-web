<script>
	import { onMount } from "svelte";
	import {
		ArrowRight,
		Zap,
		Shield,
		Check,
		Factory,
		Award,
		Users,
		Clock,
	} from "@lucide/svelte";

	import ServiceCTA from "$lib/components/ServiceCTA.svelte";

	let heroVisible = $state(false);

	onMount(() => {
		const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		if (prefersReducedMotion) {
			heroVisible = true;
		} else {
			setTimeout(() => (heroVisible = true), 100);
		}
	});

	const services = [
		{
			id: "switchgear",
			title: "SWITCHGEAR",
			subtitle: "HV/MV • Up to 38kV, 3000A",
			description:
				"Custom Metal-Clad and Metal-Enclosed switchgear designed to match your exact busbar heights and footprint dimensions. Retrofit-ready solutions that eliminate costly civil work.",
			features: [
				"Type-tested arc-resistant designs (Type 2B/2C)",
				"CSA C22.2 No. 4 and ANSI C37.20 certified",
				"Remote racking options for enhanced operator safety",
				"Custom protection and metering logic configurations",
			],
			image: "/images/services/switchgear.webp",
		},
		{
			id: "switchboard",
			title: "SWITCHBOARD",
			subtitle: "MV/LV • High-Density Design",
			description:
				"Maximize floor space with compact switchboard layouts. Designed for critical facilities requiring redundant power distribution with room for future expansion.",
			features: [
				"ANSI C37.20.1 and CSA C22.2 No. 29 compliant",
				"High-density layouts save valuable floor space",
				"Integrated metering and monitoring options",
				"Front-accessible designs for tight installations",
			],
			image: "/images/services/switchboard.webp",
		},
		{
			id: "arcflash",
			title: "ARC FLASH SAFETY",
			subtitle: "CSA Z462 Compliant",
			description:
				"Protect your team with arc-resistant equipment engineered to redirect blast energy away from operators. Exceed compliance standards with proactive safety design.",
			features: [
				"Type 2B arc-resistant switchgear available",
				"IEEE 1584 arc flash study coordination",
				"Remote racking keeps personnel outside flash boundary",
				"Integrated maintenance switches for reduced PPE requirements",
			],
			image: "/images/services/arcflash.webp",
		},
		{
			id: "distribution",
			title: "DISTRIBUTION PANELS",
			subtitle: "Industrial-Grade NEMA 12/3R/4X",
			description:
				"Heavy-gauge steel enclosures designed for Ontario's harshest industrial environments. Logical lug landings and ample gutter space that cut installation time in half.",
			features: [
				"NEMA 12, 3R, and 4X enclosures available",
				"Removal sub-panels for easier equipment access",
				"Integrated grounding bars and lugs",
				"Designed for vibration, dust, and thermal cycling",
			],
			image: "/images/services/distribution.webp",
		},
		{
			id: "panels",
			title: "CUSTOM PANELS",
			subtitle: "Any Configuration. CSA Certified.",
			description:
				"Complex transfer logic? Hybrid PLC/Power controls? Stainless steel for food processing? We build what others won't—custom solutions that ship with full CSA certification.",
			features: [
				"No field evaluation required—CSA labeled at our shop",
				"Full 3D modeling before fabrication",
				"Rapid prototyping and design iterations",
				"From control panels to complex MCCs",
			],
			image: "/images/services/panels.webp",
		},
		{
			id: "metering",
			title: "ADVANCED METERING",
			subtitle: "Revenue-Grade Monitoring",
			description:
				"Turn your electrical room into a data center. Revenue-grade metering exposes power quality issues before they damage motors and drives.",
			features: [
				"ANSI C12.20 0.2% class revenue-grade meters",
				"Real-time harmonic tracking (THD-V, THD-I)",
				"BACnet and Modbus integration for BMS",
				"Predictive maintenance data at your fingertips",
			],
			image: "/images/services/metering.webp",
		},
	];

	const valueProps = [
		{
			icon: Award,
			title: "CSA Certified Equipment",
			description:
				"Every unit leaves our shop with a CSA label. No field evaluations. No ESA headaches. No delays.",
		},
		{
			icon: Clock,
			title: "Fast Turnaround",
			description:
				"Local Ontario manufacturing means 40% faster delivery than US competitors. Design changes happen in days, not weeks.",
		},
		{
			icon: Users,
			title: "Engineered Retrofit Solutions",
			description:
				"Custom busbar heights and footprint dimensions that slide into your existing lineup. No civil work required.",
		},
		{
			icon: Shield,
			title: "Arc Flash Compliant",
			description:
				"CSA Z462 and NFPA 70E compliant designs with Type 2B arc-resistant options. Your team stays safe.",
		},
	];

	const processSteps = [
		{
			step: "01",
			title: "Consultation",
			description: "We review your single-line diagram and discuss your exact requirements",
		},
		{
			step: "02",
			title: "Engineering",
			description: "Our engineers create 3D models and detailed approval drawings",
		},
		{
			step: "03",
			title: "Fabrication",
			description: "CSA-certified manufacturing at our Burlington facility",
		},
		{
			step: "04",
			title: "Quality Assurance",
			description: "Full testing and inspection before shipping to your site",
		},
	];

	const caseStudies = [
		{
			title: "Hospital Retrofit Switchgear",
			industry: "Healthcare",
			location: "Toronto, ON",
			challenge: "Replace aging 15kV switchgear without expanding electrical room",
			solution:
				"Custom 15kV Metal-Clad switchgear with exact footprint match and arc-resistant design",
			result: "Zero civil work, 3-week installation, full CSA certification",
		},
		{
			title: "Data Center Power Distribution",
			industry: "Data Center",
			location: "Mississauga, ON",
			challenge: "High-density distribution with 2N redundancy in limited space",
			solution:
				"Custom switchboard design with integrated metering and front-accessible maintenance",
			result: "30% space savings, revenue-grade monitoring for PUE tracking",
		},
	];

	const stats = [
		{ value: "38", label: "kV Rating Capability" },
		{ value: "3000", label: "Ampere Maximum" },
		{ value: "CSA", label: "Certified Equipment" },
		{ value: "0", label: "Field Evaluations Needed" },
	];

	const faqs = [
		{
			question: "What's the difference between Metal-Clad and Metal-Enclosed switchgear?",
			answer:
				"Metal-Clad switchgear (C37.20.2) features individually housed breakers, removable elements, and manual grounding switches. Metal-Enclosed (C37.20.3) is a more compact design with non-removable components. We can help you determine which type fits your application and budget.",
		},
		{
			question: "Do you provide arc flash studies with switchgear purchases?",
			answer:
				"Yes. We can coordinate a complete IEEE 1584 arc flash study as part of your equipment delivery. This includes incident energy calculations, arc flash boundary labeling, and recommendations for reduced PPE requirements through maintenance switches.",
		},
		{
			question: "What's your typical lead time for custom switchgear?",
			answer:
				"Lead times vary by complexity, but typical delivery is 8-12 weeks from approved drawings. Emergency replacements and standard configurations can often ship faster. Our local Ontario manufacturing gives us significant flexibility compared to US-based competitors.",
		},
		{
			question: "Will my equipment require ESA field evaluation?",
			answer:
				"No. All equipment manufactured by Krka Power ships with a CSA or UL label recognized by the Electrical Safety Authority. You won't need additional field evaluations—your equipment is ready for immediate installation.",
		},
		{
			question: "Can you match existing switchgear footprints for retrofits?",
			answer:
				"Absolutely. This is one of our specialties. We can custom-engineer busbar heights, connection points, and overall dimensions to match your existing infrastructure. This saves thousands in civil work and reduces downtime.",
		},
	];
</script>

<svelte:head>
	<title>Design & Manufacturing | Krka Power Inc.</title>
	<meta
		name="description"
		content="Custom power distribution equipment manufacturer serving Ontario. CSA-certified switchgear, switchboards, and control panels built to your exact specifications."
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-primary/10 via-base-100 to-primary/5 overflow-hidden pt-20"
>
	<!-- Background Pattern: Blueprint grid -->
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute inset-0"
			style="background-image: repeating-linear-gradient(0deg, transparent, transparent 35px, oklch(42% 0.1 195) 35px, oklch(42% 0.1 195) 36px), repeating-linear-gradient(90deg, transparent, transparent 35px, oklch(42% 0.1 195) 35px, oklch(42% 0.1 195) 36px);"
		></div>
	</div>
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"
		></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative z-10">
		<div
			class="grid lg:grid-cols-2 gap-12 items-center transition-[opacity,transform] duration-1000 motion-reduce:transition-none {heroVisible
				? 'opacity-100 translate-y-0'
				: 'opacity-0 translate-y-10'}"
		>
			<!-- Content -->
			<div>
				<div class="badge badge-primary mb-4">
					DESIGN & MANUFACTURING
				</div>
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
				>
					Standard catalogs are for
					<span class="text-primary">
						standard problems.
					</span>
				</h1>
				<p class="text-xl text-base-content/70 mb-8 leading-relaxed">
					Stop modifying your facility to fit the equipment. From
					<strong class="text-primary">38kV switchgear</strong>
					to custom control panels, we engineer power infrastructure that fits your footprint,
					your timeline, and your exact specs.
					CSA Certified. Built in Ontario.
				</p>

				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="#contact"
						class="btn btn-primary btn-lg gap-2 shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:scale-105 motion-reduce:transform-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
					>
						Request Quote
						<ArrowRight class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Hero Image Placeholder -->
			<div class="relative hidden lg:block pb-6 pl-6">
				<div
					class="aspect-[4/3] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-2xl flex items-center justify-center border border-primary/20 shadow-2xl"
				>
					<div class="text-center p-8">
						<Zap class="w-32 h-32 mx-auto mb-4 text-primary/40" />
						<p class="text-base-content/40 text-sm">
							[Custom Switchgear Manufacturing]
						</p>
					</div>
				</div>
				<!-- Floating Stats Card -->
				<div
					class="absolute bottom-0 left-0 bg-base-100 rounded-xl shadow-xl p-4 border border-base-200"
				>
					<div class="flex items-center gap-3">
						<div
							class="w-12 h-12 rounded-lg bg-success/10 flex items-center justify-center"
						>
							<Award class="w-6 h-6 text-success" />
						</div>
						<div>
							<div
								class="text-2xl font-bold text-primary tabular-nums"
							>
								CSA
							</div>
							<div class="text-xs text-base-content/60">
								Certified Equipment
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Value Proposition -->
<section class="py-20 bg-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Why Ontario Facilities Choose Krka Power
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				When off-the-shelf equipment won't work, you need a partner who understands
				custom manufacturing.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
			{#each valueProps as prop (prop.title)}
				<div
					class="card bg-base-200 hover:shadow-lg transition-shadow motion-reduce:transition-none"
				>
					<div class="card-body items-center text-center">
						<div
							class="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4"
						>
							<prop.icon class="w-8 h-8 text-primary" />
						</div>
						<h3 class="card-title text-lg mb-2">{prop.title}</h3>
						<p class="text-sm text-base-content/70">{prop.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Services Detail -->
{#each services as service (service.id)}
	<section
		class="py-20 {service.id === services[0].id ||
			service.id === services[3].id ||
			service.id === services[5].id
			? 'bg-base-100'
			: 'bg-base-200'}"
	>
		<div class="max-w-7xl mx-auto px-4">
			<div class="grid lg:grid-cols-2 gap-12 items-center">
				<!-- Image Placeholder -->
				<div
					class="{service.id === services[1].id ||
						service.id === services[2].id ||
						service.id === services[4].id
						? 'lg:order-2'
						: ''}"
				>
					<div
						class="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center border border-primary/20 relative overflow-hidden"
					>
						<Zap class="w-24 h-24 text-primary/20" />
						<div class="absolute inset-0 flex items-center justify-center">
							<div class="text-center p-8">
								<p class="text-base-content/40 text-sm font-medium">
									[{service.title} Image]
								</p>
							</div>
						</div>
					</div>
				</div>

				<!-- Content -->
				<div
					class="{service.id === services[1].id ||
						service.id === services[2].id ||
						service.id === services[4].id
						? 'lg:order-1'
						: ''}"
				>
					<div class="badge badge-primary mb-4">{service.subtitle}</div>
					<h2 class="text-3xl md:text-4xl font-bold mb-6">
						{service.title}
					</h2>
					<p class="text-lg text-base-content/70 mb-8">
						{service.description}
					</p>

					<div class="space-y-4">
						{#each service.features as feature (feature)}
							<div class="flex items-start gap-3">
								<div
									class="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center"
								>
									<Check class="w-4 h-4 text-primary" />
								</div>
								<span class="text-base-content/80">{feature}</span>
							</div>
						{/each}
					</div>

					<a
						href="#contact"
						class="btn btn-outline btn-primary mt-8 gap-2 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 hover:scale-105 transition-transform motion-reduce:transition-none motion-reduce:hover:scale-100"
					>
						Get Quote for {service.title}
						<ArrowRight class="w-4 h-4" />
					</a>
				</div>
			</div>
		</div>
	</section>
{/each}

<!-- Ontario Context -->
<section class="py-20 bg-primary text-primary-content relative overflow-hidden">
	<div class="absolute inset-0 opacity-10">
		<div
			class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
		></div>
	</div>

	<div class="max-w-7xl mx-auto px-4 relative z-10">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Built for Ontario's toughest requirements
				</h2>
				<p class="text-xl opacity-90 mb-8">
					From Toronto hospitals to Hamilton factories, we understand the unique
					challenges of Ontario's industrial landscape. CSA certification, ESA compliance,
					and winter-ready designs are standard—not add-ons.
				</p>

				<div class="grid grid-cols-2 gap-6">
					<div>
						<div class="text-3xl font-bold tabular-nums">CSA</div>
						<div class="opacity-80">C22.2 Certified</div>
					</div>
					<div>
						<div class="text-3xl font-bold tabular-nums">ANSI</div>
						<div class="opacity-80">C37 Standards</div>
					</div>
					<div>
						<div class="text-3xl font-bold tabular-nums">0</div>
						<div class="opacity-80">Field Evaluations</div>
					</div>
					<div>
						<div class="text-3xl font-bold tabular-nums">40%</div>
						<div class="opacity-80">Faster Delivery</div>
					</div>
				</div>
			</div>

			<div
				class="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20"
			>
				<div class="flex items-start gap-4 mb-6">
					<Factory class="w-12 h-12 flex-shrink-0" />
					<div>
						<h3 class="text-xl font-bold mb-2">Local Manufacturing</h3>
						<p class="opacity-90">
							Burlington, Ontario facility means faster response times, site visits when you
							need them, and equipment built for Canadian conditions.
						</p>
					</div>
				</div>
				<div class="flex items-start gap-4">
					<Shield class="w-12 h-12 flex-shrink-0" />
					<div>
						<h3 class="text-xl font-bold mb-2">ESA-Ready Equipment</h3>
						<p class="opacity-90">
							Every unit ships with proper certification. No delays. No rejections. No
							costly field evaluations.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Steps -->
<section class="py-20 bg-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">How We Build Your Solution</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				From consultation to commissioning, a proven process that delivers on time and to spec.
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each processSteps as step (step.step)}
				<div class="relative">
					<div
						class="text-6xl font-bold text-primary/10 absolute -top-4 -left-2 tabular-nums"
					>
						{step.step}
					</div>
					<div class="relative z-10 pt-8">
						<h3 class="text-xl font-bold mb-3">{step.title}</h3>
						<p class="text-base-content/70">{step.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Case Studies -->
<section class="py-20 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">Recent Projects</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Real solutions for Ontario's most challenging power distribution problems.
			</p>
		</div>

		<div class="grid lg:grid-cols-2 gap-8">
			{#each caseStudies as study (study.title)}
				<div class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow motion-reduce:transition-none">
					<div class="card-body">
						<div class="flex items-center gap-2 mb-4">
							<span class="badge badge-primary">{study.industry}</span>
							<span class="text-sm text-base-content/60">{study.location}</span>
						</div>
						<h3 class="card-title text-xl mb-4">{study.title}</h3>

						<div class="space-y-4 text-sm">
							<div>
								<div class="font-semibold text-error mb-1">Challenge</div>
								<p class="text-base-content/70">{study.challenge}</p>
							</div>
							<div>
								<div class="font-semibold text-primary mb-1">Solution</div>
								<p class="text-base-content/70">{study.solution}</p>
							</div>
							<div>
								<div class="font-semibold text-success mb-1">Result</div>
								<p class="text-base-content/70">{study.result}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Stats Banner -->
<section class="py-16 bg-gradient-to-r from-primary to-secondary text-primary-content">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
			{#each stats as stat (stat.label)}
				<div>
					<div class="text-4xl md:text-5xl font-bold tabular-nums mb-2">
						{stat.value}
					</div>
					<div class="opacity-90">{stat.label}</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- FAQ -->
<section class="py-20 bg-base-100">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Frequently Asked Questions
			</h2>
			<p class="text-lg text-base-content/70">
				Everything you need to know about custom equipment manufacturing.
			</p>
		</div>

		<div class="space-y-4">
			{#each faqs as faq, index (faq.question)}
				<div class="collapse collapse-plus bg-base-200">
					<input
						type="radio"
						name="design-faq"
						id="faq-{index}"
						aria-label={faq.question}
						checked={index === 0}
					/>
					<label
						for="faq-{index}"
						class="collapse-title text-lg font-semibold min-h-0 py-4 cursor-pointer"
					>
						{faq.question}
					</label>
					<div class="collapse-content">
						<p class="pt-4 pb-2 text-base-content/80">{faq.answer}</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<ServiceCTA
	title='Tired of hearing <span class="text-primary">"That&apos;s not in our catalog"</span>?'
	description="You have a complex power problem. We have the engineering heritage to solve it. Let's review your single-line diagram today."
	buttonText="Talk to an Engineer"
	contactInfo={['email', 'phone']}
/>
