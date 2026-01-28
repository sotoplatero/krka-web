<script>
	import { onMount } from "svelte";
	import {
		Check,
		Shield,
		Bot,
		Package,
		Eye,
		Users,
		Zap,
		Award,
		ChevronRight,
		Building,
		Factory,
		Gauge,
		Target,
		Boxes,
		ScanLine,
		HandMetal,
		Sparkles,
		ArrowRight,
	} from "@lucide/svelte";

	import ServiceCTA from "$lib/components/ServiceCTA.svelte";

	let heroVisible = $state(false);

	onMount(() => {
		// Respect reduced motion preference
		const prefersReducedMotion = window.matchMedia(
			"(prefers-reduced-motion: reduce)",
		).matches;
		if (prefersReducedMotion) {
			heroVisible = true;
		} else {
			setTimeout(() => (heroVisible = true), 100);
		}
	});

	const services = [
		{
			id: "palletizing",
			icon: Boxes,
			title: "Robotic Palletizing",
			subtitle: "End-of-Line Automation",
			description:
				"Transform your end-of-line operations with robotic palletizing systems that handle boxes, bags, pails, and cases with precision. Our solutions integrate seamlessly with existing conveyors and stretch wrappers, delivering consistent stacking patterns at speeds up to 30 cycles per minute.",
			features: [
				"Multi-SKU pattern programming",
				"Layer pad and slip sheet insertion",
				"Conveyor and stretch wrapper integration",
				"Vision-guided product detection",
				"Payload capacity up to 500 kg",
				"Collaborative and industrial options",
			],
			stats: { value: "30", label: "Cycles/Minute" },
			brands: ["FANUC", "ABB", "KUKA", "Universal Robots"],
		},
		{
			id: "picking",
			icon: HandMetal,
			title: "Robotic Picking",
			subtitle: "AI-Powered Order Fulfillment",
			description:
				"Automate your picking operations with vision-guided robots that handle random bin picking, order fulfillment, and sortation. Our AI-powered systems learn to recognize and handle thousands of SKUs, adapting to new products without reprogramming.",
			features: [
				"Random bin picking with 3D vision",
				"Mixed-case depalletizing",
				"Order fulfillment and kitting",
				"Sortation and singulation",
				"Piece-picking for e-commerce",
				"AI-powered grasp planning",
			],
			stats: { value: "99.5%", label: "Pick Accuracy" },
			brands: ["FANUC", "ABB", "Yaskawa", "Kawasaki"],
		},
		{
			id: "vision",
			icon: Eye,
			title: "Machine Vision & Inspection",
			subtitle: "Zero-Defect Manufacturing",
			description:
				"Implement automated quality inspection that catches defects humans miss. Our machine vision systems perform dimensional measurement, surface inspection, label verification, and assembly confirmation at production speeds—ensuring every product meets your quality standards.",
			features: [
				"2D and 3D vision inspection",
				"Surface defect detection",
				"Dimensional measurement (±0.01 mm)",
				"OCR and barcode verification",
				"Color and pattern matching",
				"Deep learning defect classification",
			],
			stats: { value: "0.01mm", label: "Measurement Accuracy" },
			brands: ["Cognex", "Keyence", "SICK", "Basler"],
		},
		{
			id: "cobots",
			icon: Users,
			title: "Collaborative Robots",
			subtitle: "Safe Human-Robot Collaboration",
			description:
				"Deploy cobots that work safely alongside your operators without extensive guarding. Ideal for machine tending, assembly assistance, and quality inspection tasks, collaborative robots offer rapid deployment and easy reprogramming as your needs change.",
			features: [
				"No safety caging required",
				"Hand-guided teach programming",
				"Force and torque sensing",
				"Quick-change end effectors",
				"Mobile and fixed mounting options",
				"Ergonomic task automation",
			],
			stats: { value: "2hrs", label: "Typical Setup Time" },
			brands: ["Universal Robots", "FANUC CRX", "ABB GoFa", "Doosan"],
		},
	];

	const processSteps = [
		{
			step: 1,
			title: "Application Assessment",
			description:
				"We analyze your products, cycle times, and facility layout to determine the optimal robotic solution.",
		},
		{
			step: 2,
			title: "Simulation & Design",
			description:
				"3D simulation validates reach, cycle time, and integration before any hardware is ordered.",
		},
		{
			step: 3,
			title: "Build & FAT",
			description:
				"Cell fabrication and Factory Acceptance Testing with your actual products ensures performance.",
		},
		{
			step: 4,
			title: "Install & Train",
			description:
				"On-site installation, commissioning, and hands-on operator training for your team.",
		},
	];

	const certifications = [
		"FANUC Certified",
		"UR Certified",
		"ABB Partner",
		"Cognex Partner",
		"RIA Member",
	];

	const industries = [
		{
			icon: Factory,
			name: "Manufacturing",
			example: "Assembly & packaging",
		},
		{ icon: Package, name: "Logistics", example: "Warehouse automation" },
		{ icon: Gauge, name: "Food & Beverage", example: "Hygienic handling" },
		{ icon: Building, name: "Consumer Goods", example: "Case packing" },
	];

	const robotBrands = [
		{ name: "FANUC", type: "Industrial & Cobot" },
		{ name: "ABB", type: "Industrial & Cobot" },
		{ name: "Universal Robots", type: "Collaborative" },
		{ name: "KUKA", type: "Industrial" },
		{ name: "Yaskawa Motoman", type: "Industrial" },
		{ name: "Doosan Robotics", type: "Collaborative" },
	];
</script>

<svelte:head>
	<title
		>Industrial Robotics & Automation | Krka Power Inc. - Burlington,
		Ontario</title
	>
	<meta
		name="description"
		content="Industrial robotics solutions in Ontario. Palletizing robots, picking systems, machine vision inspection, and collaborative robots. FANUC, ABB, and Universal Robots certified. Serving Burlington, GTA, and across Canada."
	/>
	<meta
		name="keywords"
		content="palletizing robot Ontario, robotic picking Canada, machine vision inspection Toronto, collaborative robots Burlington, cobot integration GTA, FANUC integrator, ABB robot, Universal Robots"
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-info/10 via-base-100 to-info/5 overflow-hidden pt-20"
>
	<!-- Background Pattern: Hexagonal tech grid -->
	<div
		class="absolute inset-0 opacity-[0.1]"
		style="background-color: transparent;"
	>
		<svg
			class="absolute inset-0 w-full h-full"
			xmlns="http://www.w3.org/2000/svg"
		>
			<defs>
				<pattern
					id="hexagons"
					width="56"
					height="100"
					patternUnits="userSpaceOnUse"
					patternTransform="scale(0.8)"
				>
					<path
						d="M28 66L0 50L0 16L28 0L56 16L56 50L28 66L28 100"
						fill="none"
						stroke="oklch(70% 0.15 220)"
						stroke-width="1"
					/>
					<path
						d="M28 0L28 34L0 50L0 84L28 100L56 84L56 50L28 34"
						fill="none"
						stroke="oklch(70% 0.15 220)"
						stroke-width="1"
					/>
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#hexagons)" />
		</svg>
	</div>
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute top-20 left-10 w-72 h-72 bg-info rounded-full blur-3xl"
		></div>
		<div
			class="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"
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
				<div class="badge badge-info mb-4">ROBOTICS</div>
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
				>
					Machines don't call in sick.
					<span class="text-info"> Put them to work. </span>
				</h1>
				<p class="text-xl text-base-content/70 mb-8 leading-relaxed">
					From palletizing to precision inspection, our robotic
					solutions increase throughput, improve quality, and free
					your workforce for higher-value tasks. FANUC, ABB & UR
					Certified.
				</p>

				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="#contact"
						class="btn btn-info btn-lg gap-2 shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:scale-105 motion-reduce:transform-none focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-2"
					>
						Request Quote
						<ArrowRight class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Hero Image Placeholder -->
			<div class="relative hidden lg:block pb-6 pl-6">
				<div
					class="aspect-[4/3] bg-gradient-to-br from-info/20 to-primary/10 rounded-2xl flex items-center justify-center border border-info/20 shadow-2xl"
				>
					<div class="text-center p-8">
						<Bot class="w-32 h-32 mx-auto mb-4 text-info/40" />
						<p class="text-base-content/40 text-sm">
							[Robotic Cell in Operation]
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
							<Target class="w-6 h-6 text-success" />
						</div>
						<div>
							<div
								class="text-2xl font-bold text-primary tabular-nums"
							>
								99.5%
							</div>
							<div class="text-xs text-base-content/60">
								Pick Accuracy
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Value Proposition -->
<section class="py-16 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid md:grid-cols-3 gap-8">
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mb-4"
					>
						<Zap class="w-8 h-8 text-info" />
					</div>
					<h3 class="card-title text-lg">Boost Throughput</h3>
					<p class="text-sm text-base-content/70">
						Robots work 24/7 without breaks, fatigue, or shift
						changes. Typical ROI achieved in 12–36 months through
						labor savings and increased output.
					</p>
				</div>
			</div>
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mb-4"
					>
						<ScanLine class="w-8 h-8 text-info" />
					</div>
					<h3 class="card-title text-lg">Ensure Quality</h3>
					<p class="text-sm text-base-content/70">
						Machine vision catches defects humans miss. Automated
						inspection delivers consistent quality at production
						speeds—every piece, every time.
					</p>
				</div>
			</div>
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-info/10 flex items-center justify-center mb-4"
					>
						<Shield class="w-8 h-8 text-info" />
					</div>
					<h3 class="card-title text-lg">Improve Safety</h3>
					<p class="text-sm text-base-content/70">
						Remove workers from repetitive, ergonomically
						challenging tasks. Cobots work safely alongside humans
						without extensive guarding.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Services Detail Section -->
<section id="services-detail" class="py-20">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-info mb-4">OUR SOLUTIONS</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Robotic Solutions for Every Application
			</h2>
			<p class="text-lg text-base-content/70 max-w-3xl mx-auto">
				From simple pick-and-place to complex vision-guided operations,
				we design and integrate robotic systems that deliver measurable
				results.
			</p>
		</div>

		<div class="space-y-24">
			{#each services as service, index (service.id)}
				{@const IconComponent = service.icon}
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<!-- Image -->
					<div class={index % 2 === 1 ? "lg:order-2" : ""}>
						<div
							class="aspect-[4/3] bg-gradient-to-br from-info/10 to-primary/5 rounded-2xl flex items-center justify-center border border-info/20 relative overflow-hidden group"
						>
							<div class="text-center p-8">
								<IconComponent
									class="w-24 h-24 mx-auto mb-4 text-info/30 group-hover:text-info/50 transition-colors motion-reduce:transition-none"
								/>
								<p class="text-base-content/40 text-sm">
									[{service.title} System]
								</p>
							</div>
							<!-- Stats Badge -->
							<div
								class="absolute bottom-4 right-4 bg-base-100/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
							>
								<div
									class="text-xl font-bold text-info tabular-nums"
								>
									{service.stats.value}
								</div>
								<div class="text-xs text-base-content/60">
									{service.stats.label}
								</div>
							</div>
						</div>
						<!-- Brand Tags -->
						<div class="flex flex-wrap gap-2 mt-4 justify-center">
							{#each service.brands as brand (brand)}
								<span class="badge badge-outline badge-sm"
									>{brand}</span
								>
							{/each}
						</div>
					</div>

					<!-- Content -->
					<div class={index % 2 === 1 ? "lg:order-1" : ""}>
						<div class="flex items-center gap-3 mb-4">
							<div
								class="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center"
							>
								<IconComponent class="w-6 h-6 text-info" />
							</div>
							<div>
								<h3 class="text-2xl md:text-3xl font-bold">
									{service.title}
								</h3>
								<p class="text-sm text-info font-medium">
									{service.subtitle}
								</p>
							</div>
						</div>

						<p
							class="text-base-content/70 text-lg mb-6 leading-relaxed"
						>
							{service.description}
						</p>

						<div class="grid sm:grid-cols-2 gap-3 mb-6">
							{#each service.features as feature (feature)}
								<div class="flex items-start gap-2">
									<Check
										class="w-5 h-5 text-success flex-shrink-0 mt-0.5"
									/>
									<span class="text-sm text-base-content/80"
										>{feature}</span
									>
								</div>
							{/each}
						</div>

						<a
							href="#contact"
							class="btn btn-info btn-outline gap-2 focus-visible:ring-2 focus-visible:ring-info focus-visible:ring-offset-2"
						>
							Explore {service.title}
							<ChevronRight class="w-4 h-4" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Robot Brands & Industries Section -->
<section class="py-20 bg-gradient-to-br from-info/5 to-primary/5">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="badge badge-info mb-4">ROBOT PARTNERS</div>
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Certified Across Leading Brands
				</h2>
				<p class="text-base-content/70 text-lg mb-6 leading-relaxed">
					We integrate robots from all major manufacturers, selecting
					the right platform for your payload, reach, speed, and
					budget requirements. Our technicians hold certifications
					from multiple OEMs, ensuring expert programming and support.
				</p>

				<!-- Robot Brands Grid -->
				<div class="grid grid-cols-2 gap-3 mb-8">
					{#each robotBrands as brand (brand.name)}
						<div
							class="flex flex-col p-4 bg-base-100 rounded-lg shadow-sm"
						>
							<div class="font-semibold">{brand.name}</div>
							<div class="text-xs text-base-content/60">
								{brand.type}
							</div>
						</div>
					{/each}
				</div>

				<div class="flex items-center gap-3 p-4 bg-info/10 rounded-lg">
					<Sparkles class="w-6 h-6 text-info" />
					<p class="text-sm">
						<strong>AI & Vision:</strong> Cognex, Keyence, SICK, and
						custom deep learning solutions
					</p>
				</div>
			</div>

			<!-- Industries Served -->
			<div class="pt-6 pr-6 relative">
				<div
					class="bg-base-100 rounded-2xl p-8 shadow-xl border border-base-200"
				>
					<h3 class="text-xl font-bold mb-6">Industries We Serve</h3>
					<div class="space-y-4">
						{#each industries as industry (industry.name)}
							{@const IndustryIcon = industry.icon}
							<div
								class="flex items-center gap-4 p-4 bg-base-200/50 rounded-lg"
							>
								<div
									class="w-12 h-12 rounded-lg bg-info/10 flex items-center justify-center"
								>
									<IndustryIcon class="w-6 h-6 text-info" />
								</div>
								<div>
									<div class="font-semibold">
										{industry.name}
									</div>
									<div class="text-sm text-base-content/60">
										{industry.example}
									</div>
								</div>
							</div>
						{/each}
					</div>
				</div>
				<!-- Floating Badge -->
				<div
					class="absolute top-0 right-0 bg-info text-info-content rounded-full px-4 py-2 shadow-lg"
				>
					<span class="font-bold">Multi-Brand Certified</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-20 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-info mb-4">OUR PROCESS</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				From Concept to Production
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Our proven methodology ensures your robotic system performs as
				expected from day one.
			</p>
		</div>

		<div class="grid md:grid-cols-4 gap-6">
			{#each processSteps as step (step.step)}
				<div class="relative">
					<!-- Connector Line -->
					{#if step.step < 4}
						<div
							class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-info/20"
						></div>
					{/if}

					<div
						class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none relative z-10"
					>
						<div class="card-body items-center text-center">
							<div
								class="w-16 h-16 rounded-full bg-info text-info-content flex items-center justify-center text-2xl font-bold mb-4 tabular-nums"
							>
								{step.step}
							</div>
							<h3 class="card-title text-lg">{step.title}</h3>
							<p class="text-sm text-base-content/70">
								{step.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Case Studies Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-info mb-4">SUCCESS STORIES</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Real Results for Real Manufacturers
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				See how Ontario manufacturers are transforming their operations
				with robotic automation.
			</p>
		</div>

		<!-- Case Studies Grid -->
		<div class="grid md:grid-cols-3 gap-8 mb-12">
			<!-- Case Study 1 -->
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none group"
			>
				<figure
					class="aspect-video bg-gradient-to-br from-info/10 to-primary/5 flex items-center justify-center"
				>
					<Boxes
						class="w-16 h-16 text-info/30 group-hover:text-info/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-info badge-outline mb-2">
						Palletizing
					</div>
					<h3 class="card-title">Food Processing Palletizer</h3>
					<p class="text-sm text-base-content/70">
						Dual-robot palletizing cell handling 4 SKUs
						simultaneously, replacing 3 manual palletizing stations
						with one automated system.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-info tabular-nums">
								24/7
							</div>
							<div class="text-xs text-base-content/60">
								Operation
							</div>
						</div>
						<div>
							<div class="font-bold text-info tabular-nums">
								18 mo
							</div>
							<div class="text-xs text-base-content/60">
								ROI Achieved
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Case Study 2 -->
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none group"
			>
				<figure
					class="aspect-video bg-gradient-to-br from-info/10 to-primary/5 flex items-center justify-center"
				>
					<Eye
						class="w-16 h-16 text-info/30 group-hover:text-info/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-info badge-outline mb-2">
						Vision Inspection
					</div>
					<h3 class="card-title">Automotive Parts Inspection</h3>
					<p class="text-sm text-base-content/70">
						Multi-camera vision system inspecting 100% of parts for
						surface defects, dimensional accuracy, and assembly
						verification at line speed.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-info tabular-nums">
								100%
							</div>
							<div class="text-xs text-base-content/60">
								Parts Inspected
							</div>
						</div>
						<div>
							<div class="font-bold text-info tabular-nums">
								0 PPM
							</div>
							<div class="text-xs text-base-content/60">
								Customer Defects
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- Case Study 3 -->
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none group"
			>
				<figure
					class="aspect-video bg-gradient-to-br from-info/10 to-primary/5 flex items-center justify-center"
				>
					<Users
						class="w-16 h-16 text-info/30 group-hover:text-info/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-info badge-outline mb-2">
						Collaborative
					</div>
					<h3 class="card-title">CNC Machine Tending</h3>
					<p class="text-sm text-base-content/70">
						Universal Robots cobot loading/unloading CNC lathe,
						enabling lights-out machining and freeing operator for
						quality tasks.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-info tabular-nums">
								40%
							</div>
							<div class="text-xs text-base-content/60">
								Capacity Increase
							</div>
						</div>
						<div>
							<div class="font-bold text-info tabular-nums">
								12 mo
							</div>
							<div class="text-xs text-base-content/60">
								ROI Achieved
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Testimonial Placeholder -->
		<div class="card bg-info/5 border border-info/20 max-w-4xl mx-auto">
			<div class="card-body text-center py-12">
				<blockquote
					class="text-xl md:text-2xl italic text-base-content/80 mb-6"
				>
					"The palletizing robot paid for itself in under two years.
					We went from constant turnover on a physically demanding job
					to a reliable system that runs three shifts without
					complaint."
				</blockquote>
				<div class="flex items-center justify-center gap-4">
					<div
						class="w-12 h-12 rounded-full bg-info/20 flex items-center justify-center"
					>
						<Award class="w-6 h-6 text-info" />
					</div>
					<div class="text-left">
						<div class="font-semibold">
							[Operations Manager Name]
						</div>
						<div class="text-sm text-base-content/60">
							[Food Processing Company], Ontario
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-info text-info-content">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					75+
				</div>
				<div class="text-sm opacity-80">Robots Deployed</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					99.5%
				</div>
				<div class="text-sm opacity-80">System Uptime</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					18 mo
				</div>
				<div class="text-sm opacity-80">Avg. ROI Timeline</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					24/7
				</div>
				<div class="text-sm opacity-80">Support Available</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-base-200">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-info mb-4">COMMON QUESTIONS</div>
			<h2 class="text-3xl md:text-4xl font-bold mb-4">
				Frequently Asked Questions
			</h2>
		</div>

		<div class="space-y-4">
			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-1"
					aria-label="How much does a robotic palletizing system cost?"
					checked
				/>
				<label
					for="faq-1"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					How much does a robotic palletizing system cost?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Collaborative palletizing systems typically start around
						$35,000–$75,000, while industrial systems range from
						$100,000 to $250,000+ depending on payload, speed, and
						ancillary equipment. Most customers achieve ROI in 12–36
						months through labor savings and reduced product damage.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-2"
					aria-label="Do collaborative robots require safety fencing?"
				/>
				<label
					for="faq-2"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					Do collaborative robots require safety fencing?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Cobots are designed to work safely alongside humans
						without full safety caging. However, a risk assessment
						is always required. Depending on the end effector and
						application, some perimeter guarding or light curtains
						may still be necessary—but far less than traditional
						industrial robots.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-3"
					aria-label="How long does it take to deploy a robotic cell?"
				/>
				<label
					for="faq-3"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					How long does it take to deploy a robotic cell?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Simple cobot applications can be deployed in 2–4 weeks.
						Standard palletizing cells typically take 8–12 weeks
						from order to commissioning. Complex multi-robot cells
						with custom vision may require 16–24 weeks. We provide
						detailed project schedules during the proposal phase.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-4"
					aria-label="Can robots handle multiple product SKUs?"
				/>
				<label
					for="faq-4"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					Can robots handle multiple product SKUs?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Yes. Modern robotic systems excel at multi-SKU handling.
						Vision systems identify products automatically, and
						recipe-based programming allows quick changeovers. We
						routinely deploy palletizers handling 10+ SKUs and
						picking systems managing thousands of different
						products.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-5"
					aria-label="What training do you provide for our operators?"
				/>
				<label
					for="faq-5"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					What training do you provide for our operators?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Every project includes hands-on operator and maintenance
						training. We cover daily operation, basic
						troubleshooting, safety procedures, and routine
						maintenance. Advanced programming training is available
						for customers who want to make their own modifications
						and expansions.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<ServiceCTA
	title="Ready to Automate?"
	description="Get a free application assessment and ROI analysis. Our robotics engineers will evaluate your operation and recommend the best solution."
	buttonText="Request Free Assessment"
	theme="dark"
	contactInfo={["email", "location", "hours"]}
	hoursText="24/7 Support Available"
/>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
