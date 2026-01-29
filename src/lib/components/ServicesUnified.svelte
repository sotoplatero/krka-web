<script>
	import {
		Zap,
		Settings,
		Shield,
		Package,
		Gauge,
		Activity,
		Wrench,
		Clock,
		AlertTriangle,
		FileText,
		Cpu,
		Network,
		Radio,
		Cog,
		Bot,
		Package2,
		Eye,
		Users,
		Camera,
		ArrowRight,
	} from "@lucide/svelte";

	import {
		designManufacturing,
		engineeringServices,
		automationControl,
		robotics,
	} from "$lib/data/services.js";

	import ImageSlideshow from "./ImageSlideshow.svelte";

	// Mapeo de iconos para cada tipo de servicio
	/** @type {Record<string, typeof Zap>} */
	const serviceIcons = {
		switchgear: Zap,
		switchboard: Settings,
		arcflash: Shield,
		distribution: Package,
		panels: Gauge,
		metering: Activity,
		installation: Wrench,
		maintenance: Clock,
		emergency: AlertTriangle,
		"arcflash-study": FileText,
		plc: Cpu,
		distributed: Network,
		communication: Radio,
		turnkey: Cog,
		palletizing: Bot,
		picking: Package2,
		"vision-testing": Eye,
		"human-benefits": Users,
		"machine-vision": Camera,
	};

	const servicesData = [
		{
			id: "design",
			title: "Design & Manufacturing",
			subtitle:
				"From single line to industrial engineered builds that install fast and service easily",
			items: designManufacturing,
			bgColor: "bg-primary/5",
			badgeColor: "badge-primary",
			iconColor: "text-primary",
			btnColor: "btn-primary",
			accentColor: "bg-primary",
			imagePosition: "left",
			link: "/services/design-manufacturing",
		},
		{
			id: "engineering",
			title: "Engineering & Field Services",
			subtitle:
				"On-site expertise to keep your electrical systems safe, reliable, and running",
			items: engineeringServices,
			bgColor: "bg-secondary/5",
			badgeColor: "badge-secondary",
			iconColor: "text-secondary",
			btnColor: "btn-secondary",
			accentColor: "bg-secondary",
			imagePosition: "right",
			link: "/services/engineering",
		},
		{
			id: "automation",
			title: "Automation & Control",
			subtitle:
				"End-to-end automation from concept and electrical design to manufacturing",
			items: automationControl,
			bgColor: "bg-accent/5",
			badgeColor: "badge-accent",
			iconColor: "text-accent",
			btnColor: "btn-accent",
			accentColor: "bg-accent",
			imagePosition: "left",
			link: "/services/automation",
		},
		{
			id: "robotics",
			title: "Robotics",
			subtitle:
				"Bring intelligence to your manufacturing with robotics designed for real-world production",
			items: robotics,
			bgColor: "bg-info/5",
			badgeColor: "badge-info",
			iconColor: "text-info",
			btnColor: "btn-info",
			accentColor: "bg-info",
			imagePosition: "right",
			link: "/services/robotics",
		},
	];
</script>

<section id="services">
	<!-- Servicios - Full Width Background -->
	{#each servicesData as service (service.id)}
		<div class="{service.bgColor} py-16 md:py-20">
			<div class="max-w-7xl mx-auto px-4">
				<!-- Título y subtítulo centrado -->
				<div class="text-center mb-12">
					<div class="badge {service.badgeColor} mb-4">SERVICE</div>
					<h2 class="text-3xl md:text-4xl font-bold mb-3">
						{service.title}
					</h2>
					<p class="text-base-content/70 max-w-2xl mx-auto">
						{service.subtitle}
					</p>
				</div>

				<!-- Imagen y detalles en dos columnas -->
				<div class="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
					<!-- Slideshow -->
					<div
						class={service.imagePosition === "right"
							? "md:order-2"
							: ""}
					>
						<ImageSlideshow
							slides={service.items.map((item) => ({
								title: item.title,
								image: item.image,
							}))}
							accentColor={service.accentColor}
						/>
					</div>

					<!-- Detalles -->
					<div
						class={service.imagePosition === "right"
							? "md:order-1"
							: ""}
					>
						<!-- Lista de servicios con iconos -->
						<div class="space-y-8 mb-8">
							{#each service.items as item (item.id)}
								{@const IconComponent = serviceIcons[item.id]}
								<div class="flex items-center gap-3">
									<div class="flex-shrink-0 mt-1">
										{#if IconComponent}
											<div
												class="size-12 rounded-lg bg-base-100 flex items-center justify-center {service.iconColor} shadow-sm"
											>
												<IconComponent
													class="w-6 h-6"
												/>
											</div>
										{/if}
									</div>
									<div>
										<h4 class="font-semibold text-base">
											{item.title}
											{#if item.subtitle}
												<span
													class="text-sm font-normal text-base-content/60"
												>
													({item.subtitle})
												</span>
											{/if}
										</h4>
										<p class="text-sm text-base-content/70">
											{item.description}
										</p>
									</div>
								</div>
							{/each}
						</div>

						<!-- Botón CTA -->
						<a
							href={service.link}
							class="btn {service.btnColor} gap-2"
						>
							Learn More
							<ArrowRight class="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		</div>
	{/each}
</section>
