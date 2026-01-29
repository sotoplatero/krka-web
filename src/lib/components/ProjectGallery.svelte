<script>
	import { Image, ArrowRight } from "@lucide/svelte";

	const projects = [
		{
			id: 1,
			title: "Regional Hospital Power Upgrade",
			industry: "Healthcare",
			description:
				"Complete electrical infrastructure modernization including emergency power systems",
		},
		{
			id: 2,
			title: "Data Center Expansion",
			industry: "Data Centers",
			description:
				"Redundant power distribution for 50,000 sq ft facility expansion",
		},
		{
			id: 3,
			title: "Manufacturing Automation",
			industry: "Manufacturing",
			description:
				"PLC integration and motor control center installation",
		},
		{
			id: 4,
			title: "University Campus Infrastructure",
			industry: "Education",
			description: "Campus-wide switchgear replacement and modernization",
		},
		{
			id: 5,
			title: "Chemical Processing Facility",
			industry: "Chemical",
			description: "Hazardous location electrical equipment and controls",
		},
		{
			id: 6,
			title: "High-Rise Commercial Tower",
			industry: "Commercial",
			description: "Complete power distribution for 40-story building",
		},
	];
</script>

<section id="projects" class="py-20 bg-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-accent mb-4">PORTFOLIO</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">
				Krka Past Projects
			</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				A selection of projects showcasing our engineering capabilities
				across diverse industries
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each projects as project (project.id)}
				<div
					class="card bg-base-100 border border-base-300 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group cursor-pointer"
				>
					<!-- Image Placeholder -->
					<div
						class="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all"
					>
						<div class="text-center">
							<Image
								class="w-12 h-12 mx-auto mb-2 text-primary/30"
							/>
							<span class="text-xs text-base-content/30"
								>[Project Image]</span
							>
						</div>
					</div>

					<div class="card-body">
						<div class="badge badge-outline badge-sm">
							{project.industry}
						</div>
						<div class="flex items-start justify-between gap-2">
							<h3
								class="card-title text-lg group-hover:text-primary transition-colors"
							>
								{project.title}
							</h3>
						</div>
						<p class="text-sm text-base-content/70">
							{project.description}
						</p>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
