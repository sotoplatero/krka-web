<script>
	import { onMount } from "svelte";
	import {
		Check,
		Shield,
		Wrench,
		AlertTriangle,
		FileText,
		Zap,
		Award,
		Users,
		ChevronRight,
		Building,
		Factory,
		Server,
		Hospital,
		Target,
		Clock,
		ArrowRight,
		MapPin,
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
			id: "installation",
			icon: Wrench,
			title: "Installation & Commissioning",
			subtitle: "Full-Service Electrical Equipment Deployment",
			description:
				"From medium-voltage switchgear to complete power distribution systems, our certified technicians ensure every installation meets CSA and IEEE standards. We handle the entire process: site preparation, equipment placement, connections, and rigorous commissioning protocols.",
			features: [
				"Factory Acceptance Testing (FAT) coordination",
				"Site Acceptance Testing (SAT) execution",
				"Protective relay configuration and testing",
				"Grounding system verification",
				"Insulation resistance and hi-pot testing",
				"Complete documentation and as-built drawings",
			],
			stats: { value: "500+", label: "Installations Completed" },
		},
		{
			id: "maintenance",
			icon: Clock,
			title: "Preventive Maintenance",
			subtitle: "Maximize Uptime, Extend Equipment Life",
			description:
				"Ontario's industrial facilities lose an average of $260,000 per hour of unplanned downtime. Our preventive maintenance programs are designed to identify issues before they become failures, keeping your critical systems running at peak performance.",
			features: [
				"Thermographic scanning for hot spots",
				"Breaker timing and contact resistance tests",
				"Oil sampling and analysis for transformers",
				"Relay calibration and function testing",
				"Torque verification on all connections",
				"Comprehensive condition assessment reports",
			],
			stats: { value: "99.8%", label: "Uptime Achieved" },
		},
		{
			id: "emergency",
			icon: AlertTriangle,
			title: "24/7 Emergency Repair",
			subtitle: "Rapid Response When Every Minute Counts",
			description:
				"Electrical failures don't wait for business hours. Our emergency response team is available around the clock, with service vehicles stocked with critical components. Average response time across the Greater Toronto Area and Southern Ontario: under 4 hours.",
			features: [
				"24/7/365 dispatch availability",
				"Mobile service units with diagnostic equipment",
				"Critical spare parts inventory",
				"Coordination with utility providers",
				"Temporary power solutions",
				"Root cause analysis and prevention planning",
			],
			stats: { value: "<4hrs", label: "Average Response Time" },
		},
		{
			id: "arcflash",
			icon: FileText,
			title: "Arc Flash Studies",
			subtitle: "NFPA 70E & CSA Z462 Compliance",
			description:
				"Arc flash incidents cause over 2,000 injuries annually in North America. Our engineering team conducts comprehensive studies per IEEE 1584-2018 standards, providing the analysis and labeling required to protect your workers and meet regulatory requirements.",
			features: [
				"Short-circuit and coordination studies",
				"Incident energy calculations (IEEE 1584-2018)",
				"PPE category determination",
				"Arc flash boundary mapping",
				"Custom warning labels for all equipment",
				"Recommendations for hazard mitigation",
			],
			stats: { value: "100%", label: "NFPA 70E Compliant" },
		},
	];

	const processSteps = [
		{
			step: 1,
			title: "Initial Assessment",
			description:
				"We conduct a thorough evaluation of your facility's electrical infrastructure, identifying risks and opportunities.",
		},
		{
			step: 2,
			title: "Custom Proposal",
			description:
				"Receive a detailed scope of work, timeline, and investment breakdown tailored to your specific requirements.",
		},
		{
			step: 3,
			title: "Scheduled Execution",
			description:
				"Our certified technicians execute the work with minimal disruption to your operations.",
		},
		{
			step: 4,
			title: "Documentation & Training",
			description:
				"Complete documentation, compliance certificates, and optional staff training on new systems.",
		},
	];

	const certifications = [
		"CSA Certified",
		"IEEE Member",
		"NETA Accredited",
		"NFPA 70E Compliant",
		"ESA Licensed",
	];

	const industries = [
		{
			icon: Hospital,
			name: "Healthcare",
			example: "Hospital backup systems",
		},
		{ icon: Server, name: "Data Centers", example: "UPS commissioning" },
		{
			icon: Factory,
			name: "Manufacturing",
			example: "Production line power",
		},
		{ icon: Building, name: "Commercial", example: "Building switchgear" },
	];
</script>

<svelte:head>
	<title
		>Engineering & Field Services | Krka Power Inc. - Burlington, Ontario</title
	>
	<meta
		name="description"
		content="Professional electrical engineering services in Ontario. Installation, commissioning, preventive maintenance, 24/7 emergency repair, and NFPA 70E arc flash studies. CSA certified, serving Burlington, GTA, and across Canada."
	/>
	<meta
		name="keywords"
		content="electrical engineering services Ontario, arc flash study Toronto, switchgear installation Burlington, electrical maintenance GTA, NFPA 70E compliance Canada, CSA Z462"
	/>
</svelte:head>

<!-- Hero Section -->
<section
	class="relative min-h-[70vh] flex items-center bg-gradient-to-br from-secondary/10 via-base-100 to-secondary/5 overflow-hidden pt-20"
>
	<!-- Background Pattern: Blueprint diagonal lines -->
	<div class="absolute inset-0 opacity-[0.05]">
		<div
			class="absolute inset-0"
			style="background-image:
				repeating-linear-gradient(45deg, oklch(60% 0.12 195) 0, oklch(60% 0.12 195) 1px, transparent 1px, transparent 20px),
				repeating-linear-gradient(-45deg, oklch(60% 0.12 195) 0, oklch(60% 0.12 195) 1px, transparent 1px, transparent 20px);"
		></div>
	</div>
	<div class="absolute inset-0 opacity-5">
		<div
			class="absolute top-20 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl"
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
				<div class="badge badge-secondary mb-4">
					ENGINEERING & FIELD SERVICES
				</div>
				<h1
					class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
				>
					Your equipment doesn't
					<span class="text-secondary">
						wait for business hours.
					</span>
				</h1>
				<p class="text-xl text-base-content/70 mb-8 leading-relaxed">
					From installation to emergency repair, our certified
					engineers deliver the expertise Ontario's critical
					facilities trust. 24/7 response. CSA Z462 & NFPA 70E Compliant.
				</p>

				<div class="flex flex-col sm:flex-row gap-4">
					<a
						href="#contact"
						class="btn btn-secondary btn-lg gap-2 shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:scale-105 motion-reduce:transform-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2"
					>
						Request Quote
						<ArrowRight class="w-5 h-5" />
					</a>
				</div>
			</div>

			<!-- Hero Image Placeholder -->
			<div class="relative hidden lg:block pb-6 pl-6">
				<div
					class="aspect-[4/3] bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl flex items-center justify-center border border-secondary/20 shadow-2xl"
				>
					<div class="text-center p-8">
						<Wrench class="w-32 h-32 mx-auto mb-4 text-secondary/40" />
						<p class="text-base-content/40 text-sm">
							[Engineering Team at Work]
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
							<Shield class="w-6 h-6 text-success" />
						</div>
						<div>
							<div
								class="text-2xl font-bold text-primary tabular-nums"
							>
								24/7
							</div>
							<div class="text-xs text-base-content/60">
								Emergency Response
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
						class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4"
					>
						<Zap class="w-8 h-8 text-secondary" />
					</div>
					<h3 class="card-title text-lg">Minimize Downtime</h3>
					<p class="text-sm text-base-content/70">
						Industrial facilities lose $260,000/hour on average
						during unplanned outages. Our proactive approach keeps
						your systems running.
					</p>
				</div>
			</div>
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4"
					>
						<Shield class="w-8 h-8 text-secondary" />
					</div>
					<h3 class="card-title text-lg">Ensure Compliance</h3>
					<p class="text-sm text-base-content/70">
						Stay ahead of CSA Z462 and NFPA 70E requirements. Our
						studies and documentation protect your workers and your
						business.
					</p>
				</div>
			</div>
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none"
			>
				<div class="card-body items-center text-center">
					<div
						class="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4"
					>
						<Award class="w-8 h-8 text-secondary" />
					</div>
					<h3 class="card-title text-lg">Expert Execution</h3>
					<p class="text-sm text-base-content/70">
						50+ certified engineers and technicians with hands-on
						experience across healthcare, data centers, and
						industrial facilities.
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
			<div class="badge badge-secondary mb-4">OUR SERVICES</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Comprehensive Field Services
			</h2>
			<p class="text-lg text-base-content/70 max-w-3xl mx-auto">
				From planned installations to urgent repairs, we deliver the
				full spectrum of electrical engineering services your facility
				requires.
			</p>
		</div>

		<div class="space-y-24">
			{#each services as service, index (service.id)}
				{@const IconComponent = service.icon}
				<div class="grid lg:grid-cols-2 gap-12 items-center">
					<!-- Image -->
					<div class={index % 2 === 1 ? "lg:order-2" : ""}>
						<div
							class="aspect-[4/3] bg-gradient-to-br from-secondary/10 to-primary/5 rounded-2xl flex items-center justify-center border border-secondary/20 relative overflow-hidden group"
						>
							<div class="text-center p-8">
								<IconComponent
									class="w-24 h-24 mx-auto mb-4 text-secondary/30 group-hover:text-secondary/50 transition-colors"
								/>
								<p class="text-base-content/40 text-sm">
									[{service.title} in Action]
								</p>
							</div>
							<!-- Stats Badge -->
							<div
								class="absolute bottom-4 right-4 bg-base-100/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg"
							>
								<div class="text-xl font-bold text-secondary">
									{service.stats.value}
								</div>
								<div class="text-xs text-base-content/60">
									{service.stats.label}
								</div>
							</div>
						</div>
					</div>

					<!-- Content -->
					<div class={index % 2 === 1 ? "lg:order-1" : ""}>
						<div class="flex items-center gap-3 mb-4">
							<div
								class="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center"
							>
								<IconComponent class="w-6 h-6 text-secondary" />
							</div>
							<div>
								<h3 class="text-2xl md:text-3xl font-bold">
									{service.title}
								</h3>
								<p class="text-sm text-secondary font-medium">
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
							class="btn btn-secondary btn-outline gap-2"
						>
							Learn More About {service.title.split(" ")[0]}
							<ChevronRight class="w-4 h-4" />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Ontario Context Section -->
<section class="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid lg:grid-cols-2 gap-12 items-center">
			<div>
				<div class="badge badge-primary mb-4">SERVING ONTARIO</div>
				<h2 class="text-3xl md:text-4xl font-bold mb-6">
					Local Expertise for Canadian Standards
				</h2>
				<p class="text-base-content/70 text-lg mb-6 leading-relaxed">
					Operating from Burlington, we understand Ontario's unique
					regulatory landscape. Our engineers are certified to CSA
					Z462 (the Canadian standard harmonized with NFPA 70E) and
					work closely with the Electrical Safety Authority (ESA) to
					ensure all work meets provincial requirements.
				</p>
				<div class="space-y-4 mb-8">
					<div class="flex items-center gap-3">
						<MapPin class="w-5 h-5 text-primary" />
						<span
							><strong>Headquarters:</strong> Burlington, Ontario</span
						>
					</div>
					<div class="flex items-center gap-3">
						<Target class="w-5 h-5 text-primary" />
						<span
							><strong>Service Area:</strong> GTA, Southern Ontario,
							and across Canada</span
						>
					</div>
					<div class="flex items-center gap-3">
						<Clock class="w-5 h-5 text-primary" />
						<span
							><strong>Emergency Coverage:</strong> 24/7/365 for existing
							clients</span
						>
					</div>
				</div>

				<!-- Industries Served -->
				<div class="grid grid-cols-2 gap-4">
					{#each industries as industry (industry.name)}
						{@const IndustryIcon = industry.icon}
						<div
							class="flex items-center gap-3 p-3 bg-base-100 rounded-lg shadow-sm"
						>
							<IndustryIcon class="w-8 h-8 text-primary/60" />
							<div>
								<div class="font-semibold text-sm">
									{industry.name}
								</div>
								<div class="text-xs text-base-content/60">
									{industry.example}
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- Map/Location Placeholder -->
			<div class="relative pt-6 pr-6">
				<div
					class="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center border border-primary/20"
				>
					<div class="text-center p-8">
						<MapPin
							class="w-24 h-24 mx-auto mb-4 text-primary/30"
						/>
						<p class="text-base-content/40 text-sm">
							[Service Area Map – Ontario]
						</p>
					</div>
				</div>
				<!-- Service Radius Indicator -->
				<div
					class="absolute top-0 right-0 bg-secondary text-secondary-content rounded-full px-4 py-2 shadow-lg"
				>
					<span class="font-bold">Province-wide Service</span>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Process Section -->
<section class="py-20 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-secondary mb-4">HOW WE WORK</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Simple, Transparent Process
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				From first contact to project completion, we keep you informed
				at every step.
			</p>
		</div>

		<div class="grid md:grid-cols-4 gap-6">
			{#each processSteps as step (step.step)}
				<div class="relative">
					<!-- Connector Line -->
					{#if step.step < 4}
						<div
							class="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-secondary/20"
						></div>
					{/if}

					<div
						class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none relative z-10"
					>
						<div class="card-body items-center text-center">
							<div
								class="w-16 h-16 rounded-full bg-secondary text-secondary-content flex items-center justify-center text-2xl font-bold mb-4 tabular-nums"
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

<!-- Social Proof / Case Studies Placeholder -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-16">
			<div class="badge badge-secondary mb-4">PROVEN RESULTS</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Trusted by Ontario's Critical Facilities
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				Our engineering services have supported hospitals, data centers,
				and manufacturing facilities across the province.
			</p>
		</div>

		<!-- Case Studies Grid -->
		<div class="grid md:grid-cols-3 gap-8 mb-12">
			<!-- Case Study 1 -->
			<div
				class="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300 motion-reduce:transition-none group"
			>
				<figure
					class="aspect-video bg-gradient-to-br from-secondary/10 to-primary/5 flex items-center justify-center"
				>
					<Hospital
						class="w-16 h-16 text-secondary/30 group-hover:text-secondary/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-secondary badge-outline mb-2">
						Healthcare
					</div>
					<h3 class="card-title">
						Regional Hospital Switchgear Upgrade
					</h3>
					<p class="text-sm text-base-content/70">
						Complete installation and commissioning of
						medium-voltage switchgear with zero disruption to
						critical care operations.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-secondary tabular-nums">
								0 hrs
							</div>
							<div class="text-xs text-base-content/60">
								Downtime
							</div>
						</div>
						<div>
							<div class="font-bold text-secondary tabular-nums">
								100%
							</div>
							<div class="text-xs text-base-content/60">
								On Schedule
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
					class="aspect-video bg-gradient-to-br from-secondary/10 to-primary/5 flex items-center justify-center"
				>
					<Factory
						class="w-16 h-16 text-secondary/30 group-hover:text-secondary/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-secondary badge-outline mb-2">
						Manufacturing
					</div>
					<h3 class="card-title">Automotive Plant Arc Flash Study</h3>
					<p class="text-sm text-base-content/70">
						Comprehensive IEEE 1584-2018 study covering 200+ panels,
						with hazard mitigation recommendations that reduced PPE
						requirements.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-secondary tabular-nums">
								200+
							</div>
							<div class="text-xs text-base-content/60">
								Panels Analyzed
							</div>
						</div>
						<div>
							<div class="font-bold text-secondary tabular-nums">
								40%
							</div>
							<div class="text-xs text-base-content/60">
								Risk Reduction
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
					class="aspect-video bg-gradient-to-br from-secondary/10 to-primary/5 flex items-center justify-center"
				>
					<Server
						class="w-16 h-16 text-secondary/30 group-hover:text-secondary/50 transition-colors motion-reduce:transition-none"
					/>
				</figure>
				<div class="card-body">
					<div class="badge badge-secondary badge-outline mb-2">
						Data Center
					</div>
					<h3 class="card-title">
						Emergency Transformer Replacement
					</h3>
					<p class="text-sm text-base-content/70">
						Emergency response and replacement of a failed 2 MVA
						transformer, restoring full capacity within 72 hours.
					</p>
					<div class="flex gap-4 mt-4 text-sm">
						<div>
							<div class="font-bold text-secondary tabular-nums">
								72 hrs
							</div>
							<div class="text-xs text-base-content/60">
								Full Restoration
							</div>
						</div>
						<div>
							<div class="font-bold text-secondary tabular-nums">
								2 MVA
							</div>
							<div class="text-xs text-base-content/60">
								Capacity
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<!-- Testimonial Placeholder -->
		<div
			class="card bg-secondary/5 border border-secondary/20 max-w-4xl mx-auto"
		>
			<div class="card-body text-center py-12">
				<blockquote
					class="text-xl md:text-2xl italic text-base-content/80 mb-6"
				>
					"Krka's team completed our arc flash study and switchgear
					upgrade on schedule and within budget. Their expertise in
					healthcare electrical systems gave us confidence throughout
					the project."
				</blockquote>
				<div class="flex items-center justify-center gap-4">
					<div
						class="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center"
					>
						<Users class="w-6 h-6 text-secondary" />
					</div>
					<div class="text-left">
						<div class="font-semibold">
							[Facilities Director Name]
						</div>
						<div class="text-sm text-base-content/60">
							[Regional Hospital], Ontario
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-16 bg-secondary text-secondary-content">
	<div class="max-w-7xl mx-auto px-4">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					500+
				</div>
				<div class="text-sm opacity-80">Projects Completed</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					50+
				</div>
				<div class="text-sm opacity-80">Certified Engineers</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					99.8%
				</div>
				<div class="text-sm opacity-80">Safety Record</div>
			</div>
			<div>
				<div class="text-4xl md:text-5xl font-bold mb-2 tabular-nums">
					&lt;4hr
				</div>
				<div class="text-sm opacity-80">Emergency Response</div>
			</div>
		</div>
	</div>
</section>

<!-- FAQ Section -->
<section class="py-20 bg-base-200">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-secondary mb-4">COMMON QUESTIONS</div>
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
					aria-label="How often should arc flash studies be updated?"
					checked
				/>
				<label
					for="faq-1"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					How often should arc flash studies be updated?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Per NFPA 70E and CSA Z462, arc flash studies should be
						reviewed and updated at least every 5 years, or sooner
						if there are modifications to the electrical system (new
						equipment, changed configurations, or utility changes).
						We recommend a review after any significant change to
						your power distribution.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-2"
					aria-label="What areas do you service for emergency repairs?"
				/>
				<label
					for="faq-2"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					What areas do you service for emergency repairs?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Our emergency response team provides 24/7 coverage
						across the Greater Toronto Area and Southern Ontario,
						with typical response times under 4 hours. For clients
						outside this region, we coordinate with local
						contractors to ensure rapid response anywhere in Ontario
						and across Canada.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-3"
					aria-label="What certifications do your technicians hold?"
				/>
				<label
					for="faq-3"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					What certifications do your technicians hold?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Our team includes licensed electricians (309A),
						certified engineering technologists, and P.Eng licensed
						engineers. We maintain certifications from NETA
						(InterNational Electrical Testing Association), and all
						field staff are trained to NFPA 70E and CSA Z462
						standards for electrical safety.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-4"
					aria-label="Can you work during off-hours to minimize disruption?"
				/>
				<label
					for="faq-4"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					Can you work during off-hours to minimize disruption?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						Yes. We regularly schedule installations, maintenance,
						and testing during nights, weekends, and planned
						shutdown periods. For critical facilities like hospitals
						and data centers, we develop detailed outage plans to
						ensure zero impact on essential operations.
					</p>
				</div>
			</div>

			<div class="collapse collapse-plus bg-base-100 shadow-md">
				<input
					type="radio"
					name="faq"
					id="faq-5"
					aria-label="How quickly can I get a quote for engineering services?"
				/>
				<label
					for="faq-5"
					class="collapse-title text-lg font-semibold cursor-pointer"
				>
					How quickly can I get a quote for engineering services?
				</label>
				<div class="collapse-content text-base-content/70">
					<p>
						For standard services like arc flash studies or
						preventive maintenance programs, we typically provide
						detailed proposals within 2-3 business days. For complex
						installations or custom projects, we'll schedule a site
						visit and deliver a comprehensive quote within one week.
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<ServiceCTA
	title="Ready to Protect Your Facility?"
	description="Get a detailed quote for engineering services within 48 hours. Our team is ready to discuss your electrical safety and maintenance needs."
	buttonText="Request Detailed Quote"
	theme="dark"
	contactInfo={["email", "location", "hours"]}
	hoursText="24/7 Emergency Line"
/>

<style>
	:global(html) {
		scroll-behavior: smooth;
	}
</style>
