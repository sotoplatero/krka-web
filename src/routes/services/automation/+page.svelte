<script>
	import { onMount } from "svelte";
	import {
		Check,
		Shield,
		Cpu,
		Network,
		Radio,
		Cog,
		Zap,
		Award,
		Users,
		ChevronRight,
		Building,
		Factory,
		Server,
		Gauge,
		Target,
		Database,
		Globe,
		TrendingUp,
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
			id: "plc",
			icon: Cpu,
			title: "PLC Programming",
			subtitle: "IEC 61131-3 Compliant Solutions",
			description:
				"Our certified programmers develop robust, maintainable PLC code following IEC 61131-3 standards. Whether you need ladder logic, structured text, or function block programming, we deliver solutions that integrate seamlessly with your existing infrastructure and scale with your growth.",
			features: [
				"Allen-Bradley, Siemens, Schneider, and Omron platforms",
				"Structured Text (ST) and Ladder Logic (LD)",
				"Function Block Diagram (FBD) programming",
				"Safety PLC programming (SIL-rated systems)",
				"Version control and documentation standards",
				"Remote monitoring and diagnostics setup",
			],
			stats: { value: "200+", label: "PLC Systems Deployed" },
			platforms: ["Allen-Bradley", "Siemens", "Schneider", "Omron"],
		},
		{
			id: "distributed",
			icon: Network,
			title: "Distributed Control Systems",
			subtitle: "Enterprise-Scale Process Automation",
			description:
				"For large-scale operations requiring centralized monitoring with distributed control, our DCS solutions provide the reliability and redundancy your critical processes demand. We design systems that handle thousands of I/O points while maintaining sub-second response times.",
			features: [
				"Redundant controller architecture",
				"Historian integration for trend analysis",
				"Advanced process control (APC) strategies",
				"Batch management and recipe control",
				"Alarm management per ISA-18.2",
				"Cybersecurity hardening per IEC 62443",
			],
			stats: { value: "50K+", label: "I/O Points Managed" },
			platforms: ["DeltaV", "Honeywell", "ABB", "Yokogawa"],
		},
		{
			id: "communication",
			icon: Radio,
			title: "Industrial Communication",
			subtitle: "Seamless Protocol Integration",
			description:
				"Modern manufacturing requires devices from multiple vendors to communicate flawlessly. Our integration specialists bridge legacy systems with Industry 4.0 infrastructure, enabling real-time data flow from the shop floor to the cloud.",
			features: [
				"Profinet and Ethernet/IP networks",
				"DeviceNet and Modbus RTU/TCP",
				"HART and Foundation Fieldbus",
				"BACnet for building automation",
				"OPC UA for cloud connectivity",
				"MQTT for IIoT applications",
			],
			stats: { value: "15+", label: "Protocols Integrated" },
			platforms: ["OPC UA", "MQTT", "Profinet", "Ethernet/IP"],
		},
		{
			id: "turnkey",
			icon: Cog,
			title: "Turnkey Automation",
			subtitle: "Complete Project Delivery",
			description:
				"From initial concept through commissioning and operator training, we manage every aspect of your automation project. Our turnkey approach eliminates coordination headaches and delivers a single point of accountability for your investment.",
			features: [
				"Requirements analysis and P&ID review",
				"Control system design and specification",
				"Panel fabrication and assembly",
				"Field wiring and installation",
				"Loop testing and commissioning",
				"Operator and maintenance training",
			],
			stats: { value: "100%", label: "On-Time Delivery" },
			platforms: ["Full Stack", "UL 508A", "CSA", "CE Mark"],
		},
	];

	const processSteps = [
		{
			step: 1,
			title: "Discovery & Analysis",
			description:
				"We analyze your process requirements, existing infrastructure, and integration needs to define the optimal automation strategy.",
		},
		{
			step: 2,
			title: "Design & Engineering",
			description:
				"Detailed control narratives, P&IDs, and system architecture documents ensure alignment before programming begins.",
		},
		{
			step: 3,
			title: "Development & FAT",
			description:
				"PLC code development with rigorous Factory Acceptance Testing simulates your process before shipment.",
		},
		{
			step: 4,
			title: "Installation & SAT",
			description:
				"On-site installation, loop testing, and Site Acceptance Testing verify performance in your actual environment.",
		},
	];

	const certifications = [
		"UL 508A Certified",
		"TIA Portal Certified",
		"Rockwell Certified",
		"IEC 61131 Compliant",
		"ISA Member",
	];

	const industries = [
		{
			icon: Factory,
			name: "Manufacturing",
			example: "Assembly line control",
		},
		{
			icon: Gauge,
			name: "Process Industries",
			example: "Batch automation",
		},
		{ icon: Building, name: "Water/Wastewater", example: "SCADA systems" },
		{ icon: Server, name: "Food & Beverage", example: "Recipe management" },
	];

	const technologies = [
		{ name: "Siemens TIA Portal", category: "PLC/HMI" },
		{ name: "Allen-Bradley Studio 5000", category: "PLC/HMI" },
		{ name: "Wonderware InTouch", category: "SCADA" },
		{ name: "Ignition by Inductive", category: "SCADA/MES" },
		{ name: "FactoryTalk View", category: "HMI/SCADA" },
		{ name: "KEPServerEX", category: "OPC Server" },
	];
</script>

<svelte:head>
	<title
		>Automation & Control Systems | Krka Power Inc. - Burlington, Ontario</title
	>
	<meta
		name="description"
		content="Industrial automation and control systems in Ontario. PLC programming, DCS implementation, SCADA integration, and turnkey automation solutions. Siemens, Allen-Bradley, and Schneider certified. Serving Burlington, GTA, and across Canada."
	/>
	<meta
		name="keywords"
		content="PLC programming Ontario, industrial automation Canada, SCADA integration Toronto, DCS systems Burlington, Siemens TIA Portal, Allen-Bradley programming, IEC 61131, Industry 4.0 Canada"
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-accent/10 via-base-100 to-accent/5 overflow-hidden pt-20"
>
	<!-- Background Pattern: Circuit dots -->
	<div class="absolute inset-0 opacity-[0.2]">
		<div
			class="absolute inset-0"
			style="background-image: radial-gradient(oklch(60% 0.2 250) 1.5px, transparent 1.5px); background-size: 24px 24px;"
		></div>
	</div>
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl"
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
				<div class="badge badge-accent mb-4">AUTOMATION & CONTROL</div>
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
				>
					Your operators are
					<span class="text-accent">
						too valuable for repetitive tasks.
					</span>
				</h1>
				<p class="text-xl text-base-content/70 mb-8 leading-relaxed">
					From PLC programming to enterprise-scale control systems, we
					deliver automation solutions that increase throughput,
					reduce errors, and position your facility for Industry 4.0.
				</p>

				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="#contact"
						class="btn btn-accent btn-lg gap-2 shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:scale-105 motion-reduce:transform-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
					>
						Request Quote
						<ArrowRight class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Hero Image Placeholder -->
			<div class="relative hidden lg:block pb-6 pl-6">
				<div
					class="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/10 rounded-2xl flex items-center justify-center border border-accent/20 shadow-2xl"
				>
					<div class="text-center p-8">
						<Cpu class="w-32 h-32 mx-auto mb-4 text-accent/40" />
						<p class="text-base-content/40 text-sm">
							[Control Room Operations]
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
							<TrendingUp class="w-6 h-6 text-success" />
						</div>
						<div>
							<div
								class="text-2xl font-bold text-primary tabular-nums"
							>
								30%
							</div>
							<div class="text-xs text-base-content/60">
								Avg. Efficiency Gain
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
						class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4"
					>
						<TrendingUp class="w-8 h-8 text-accent" />
					</div>
					<h3 class="card-title text-lg">Increase Throughput</h3>
					<p class="text-sm text-base-content/70">
						Automated processes run faster and more consistently
						than manual operations. Our clients typically see 20–40%
						productivity improvements.
					</p>
				</div>
			</div>
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4"
					>
						<Shield class="w-8 h-8 text-accent" />
					</div>
					<h3 class="card-title text-lg">Reduce Errors</h3>
					<p class="text-sm text-base-content/70">
						Eliminate human error in repetitive tasks. Automated
						quality checks and recipe management ensure consistent
						product quality.
					</p>
				</div>
			</div>
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4"
					>
						<Globe class="w-8 h-8 text-accent" />
					</div>
					<h3 class="card-title text-lg">Enable Industry 4.0</h3>
					<p class="text-sm text-base-content/70">
						Connect your shop floor to the cloud. Real-time
						analytics, predictive maintenance, and remote
						monitoring—all from a single platform.
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
			<div class="badge badge-accent mb-4">OUR SERVICES</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				End-to-End Automation Solutions
			</h2>
			<p class="text-lg text-base-content/70 max-w-3xl mx-auto">
				From individual PLC upgrades to complete plant automation, we
				deliver the expertise and execution your projects demand.
			</p>
		</div>

		<div class="space-y-24">
			{#each services as service, index (service.id)}
				{@const IconComponent = service.icon}
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<!-- Image -->
					<div class={index % 2 === 1 ? "lg:order-2" : ""}>
						<div
							class="aspect-[4/3] bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl flex items-center justify-center border border-accent/20 relative overflow-hidden group"
						>
							<div class="text-center p-8">
								<IconComponent
									class="w-24 h-24 mx-auto mb-4 text-accent/30 group-hover:text-accent/50 transition-colors motion-reduce:transition-none"
								/>
								<p class="text-base-content/40 text-sm">
									[{service.title} Implementation]
								</p>
							</div>
							<!-- Stats Badge -->
							<div
								class="absolute bottom-4 right-4 bg-base-100/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
							>
								<div
									class="text-xl font-bold text-accent tabular-nums"
								>
									{service.stats.value}
								</div>
								<div class="text-xs text-base-content/60">
									{service.stats.label}
								</div>
							</div>
						</div>
						<!-- Platform Tags -->
						<div class="flex flex-wrap gap-2 mt-4 justify-center">
							{#each service.platforms as platform (platform)}
								<span class="badge badge-outline badge-sm"
									>{platform}</span
								>
							{/each}
						</div>
					</div>

					<!-- Content -->
					<div class={index % 2 === 1 ? "lg:order-1" : ""}>
						<div class="flex items-center gap-3 mb-4">
							<div
								class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
							>
								<IconComponent class="w-6 h-6 text-accent" />
							</div>
							<div>
								<h3 class="text-2xl md:text-3xl font-bold">
									{service.title}
								</h3>
								<p class="text-sm text-accent font-medium">
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
							class="btn btn-accent btn-outline gap-2 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
						>
							Discuss {service.title}
							<ChevronRight class="w-4 h-4" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Technology Stack Section -->
<section class="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="badge badge-accent mb-4">TECHNOLOGY STACK</div>
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Platform-Agnostic Expertise
				</h2>
				<p class="text-base-content/70 text-lg mb-6 leading-relaxed">
					We work with all major automation platforms—not just one
					vendor. This means we recommend the best solution for your
					application, not the one that pays us the highest
					commission. Our team holds certifications across multiple
					ecosystems.
				</p>
				<div class="space-y-4 mb-8">
					<div class="flex items-center gap-3">
						<Cpu class="w-5 h-5 text-accent" />
						<span
							><strong>PLC Platforms:</strong> Siemens, Allen-Bradley,
							Schneider, Omron, Mitsubishi</span
						>
					</div>
					<div class="flex items-center gap-3">
						<Database class="w-5 h-5 text-accent" />
						<span
							><strong>SCADA/HMI:</strong> Ignition, Wonderware, FactoryTalk,
							WinCC</span
						>
					</div>
					<div class="flex items-center gap-3">
						<Globe class="w-5 h-5 text-accent" />
						<span
							><strong>IIoT:</strong> MQTT, OPC UA, Sparkplug B, REST
							APIs</span
						>
					</div>
				</div>

				<!-- Technology Grid -->
				<div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
					{#each technologies as tech (tech.name)}
						<div
							class="flex flex-col p-3 bg-base-100 rounded-lg shadow-sm"
						>
							<div class="font-semibold text-sm">{tech.name}</div>
							<div class="text-xs text-base-content/60">
								{tech.category}
							</div>
						</div>
					{/each}
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
									class="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center"
								>
									<IndustryIcon class="w-6 h-6 text-accent" />
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
					class="absolute top-0 right-0 bg-accent text-accent-content rounded-full px-4 py-2 shadow-lg"
				>
					<span class="font-bold">Multi-Vendor Certified</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-20 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-accent mb-4">OUR PROCESS</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Structured Project Delivery
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Every automation project follows a proven methodology that
				minimizes risk and ensures successful outcomes.
			</p>
		</div>

		<div class="grid md:grid-cols-4 gap-6">
			{#each processSteps as step (step.step)}
				<div class="relative">
					<!-- Connector Line -->
					{#if step.step < 4}
						<div
							class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-accent/20"
						></div>
					{/if}

					<div
						class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none relative z-10"
					>
						<div class="card-body items-center text-center">
							<div
								class="w-16 h-16 rounded-full bg-accent text-accent-content flex items-center justify-center text-2xl font-bold mb-4 tabular-nums"
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

<!-- Industry 4.0 Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-accent mb-4">INDUSTRY 4.0</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Future-Proof Your Operations
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				The global PLC market is projected to reach $31.4 billion by
				2034. Position your facility for the digital transformation
				ahead.
			</p>
		</div>

		<!-- Case Studies Grid -->
		<div class="grid md:grid-cols-3 gap-8 mb-12">
			<!-- Case Study 1 -->
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none group"
			>
				<figure
					class="aspect-video bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center"
				>
					<Factory
						class="w-16 h-16 text-accent/30 group-hover:text-accent/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-accent badge-outline mb-2">
						Manufacturing
					</div>
					<h3 class="card-title">Automotive Parts Assembly Line</h3>
					<p class="text-sm text-base-content/70">
						Complete PLC migration from legacy GE to Allen-Bradley
						ControlLogix with zero production downtime during
						cutover weekend.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-accent tabular-nums">
								35%
							</div>
							<div class="text-xs text-base-content/60">
								Cycle Time Reduction
							</div>
						</div>
						<div>
							<div class="font-bold text-accent tabular-nums">
								0 hrs
							</div>
							<div class="text-xs text-base-content/60">
								Lost Production
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
					class="aspect-video bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center"
				>
					<Gauge
						class="w-16 h-16 text-accent/30 group-hover:text-accent/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-accent badge-outline mb-2">
						Process
					</div>
					<h3 class="card-title">Chemical Batch Processing</h3>
					<p class="text-sm text-base-content/70">
						ISA-88 compliant batch automation with recipe management
						serving 50+ product formulations from a single control
						system.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-accent tabular-nums">
								50+
							</div>
							<div class="text-xs text-base-content/60">
								Recipes Managed
							</div>
						</div>
						<div>
							<div class="font-bold text-accent tabular-nums">
								99.9%
							</div>
							<div class="text-xs text-base-content/60">
								Batch Accuracy
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
					class="aspect-video bg-gradient-to-br from-accent/10 to-primary/5 flex items-center justify-center"
				>
					<Building
						class="w-16 h-16 text-accent/30 group-hover:text-accent/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-accent badge-outline mb-2">
						Water/Wastewater
					</div>
					<h3 class="card-title">Municipal SCADA Upgrade</h3>
					<p class="text-sm text-base-content/70">
						Ignition-based SCADA system consolidating 12 remote pump
						stations with centralized monitoring and automated
						reporting.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-accent tabular-nums">
								12
							</div>
							<div class="text-xs text-base-content/60">
								Sites Connected
							</div>
						</div>
						<div>
							<div class="font-bold text-accent tabular-nums">
								24/7
							</div>
							<div class="text-xs text-base-content/60">
								Remote Monitoring
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Testimonial Placeholder -->
		<div class="card bg-accent/5 border border-accent/20 max-w-4xl mx-auto">
			<div class="card-body text-center py-12">
				<blockquote
					class="text-xl md:text-2xl italic text-base-content/80 mb-6"
				>
					"Krka delivered our PLC upgrade on time and under budget.
					Their structured approach and thorough documentation made
					the transition seamless. Our operators were trained and
					confident from day one."
				</blockquote>
				<div class="flex items-center justify-center gap-4">
					<div
						class="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center"
					>
						<Users class="w-6 h-6 text-accent" />
					</div>
					<div class="text-left">
						<div class="font-semibold">[Plant Manager Name]</div>
						<div class="text-sm text-base-content/60">
							[Manufacturing Company], Ontario
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-accent text-accent-content">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					200+
				</div>
				<div class="text-sm opacity-80">PLC Systems Deployed</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					50K+
				</div>
				<div class="text-sm opacity-80">I/O Points Managed</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					30%
				</div>
				<div class="text-sm opacity-80">Avg. Efficiency Gain</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					100%
				</div>
				<div class="text-sm opacity-80">On-Time Delivery</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-base-200">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-accent mb-4">COMMON QUESTIONS</div>
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
					aria-label="What PLC platforms do you support?"
					checked
				/>
				<label
					for="faq-1"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					What PLC platforms do you support?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						We are platform-agnostic and certified across all major
						vendors including Allen-Bradley (Rockwell), Siemens,
						Schneider Electric, Omron, and Mitsubishi. We recommend
						the best platform for your specific application rather
						than pushing a single vendor solution.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-2"
					aria-label="Can you integrate with our existing legacy systems?"
				/>
				<label
					for="faq-2"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					Can you integrate with our existing legacy systems?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Yes. We specialize in bridging legacy equipment with
						modern control systems. Using protocol converters, OPC
						servers, and custom drivers, we can connect older PLCs,
						drives, and instrumentation to new SCADA and MES
						platforms without requiring a complete system
						replacement.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-3"
					aria-label="Do you provide ongoing support after commissioning?"
				/>
				<label
					for="faq-3"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					Do you provide ongoing support after commissioning?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Absolutely. We offer tiered support agreements ranging
						from phone/email support to 24/7 on-call coverage with
						guaranteed response times. Many clients also engage us
						for annual PLC program reviews and optimization services
						as their processes evolve.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-4"
					aria-label="How do you handle cybersecurity for industrial systems?"
				/>
				<label
					for="faq-4"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					How do you handle cybersecurity for industrial systems?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						We follow IEC 62443 standards for industrial
						cybersecurity. This includes network segmentation,
						secure remote access (VPN with MFA), regular firmware
						updates, and proper user access controls. We can also
						perform vulnerability assessments on existing control
						systems.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-5"
					aria-label="What is the typical timeline for a PLC programming project?"
				/>
				<label
					for="faq-5"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					What is the typical timeline for a PLC programming project?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Timelines vary based on complexity. A simple standalone
						machine might take 2–4 weeks from kickoff to
						commissioning. A full production line with SCADA
						integration typically runs 8–16 weeks. We provide
						detailed schedules during the proposal phase with
						milestones for design review, FAT, and SAT.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<ServiceCTA
	title="Ready to Automate?"
	description="Get a detailed proposal for your automation project within one week. Our engineers are ready to discuss your requirements."
	buttonText="Request Detailed Quote"
	theme="dark"
	contactInfo={["email", "location", "hours"]}
	hoursText="Mon–Fri: 8 AM – 5 PM"
/>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
