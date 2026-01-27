<script>
	import { Bot, Package, Hand, Eye, Users, ScanLine, ArrowRight } from '@lucide/svelte';
	import { robotics } from '$lib/data/services.js';

	/** @type {Record<string, typeof Package>} */
	const roboticsIcons = {
		palletizing: Package,
		picking: Hand,
		'vision-testing': Eye,
		'human-benefits': Users,
		'machine-vision': ScanLine
	};
</script>

<section id="robotics" class="py-20">
	<div class="max-w-7xl mx-auto px-4">
		<div class="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-12 text-primary-content">
			<div class="text-center mb-10">
				<div class="badge badge-neutral mb-4">ROBOTICS</div>
				<h2 class="text-4xl md:text-5xl font-bold mb-4">Robotics Integration</h2>
				<p class="text-xl opacity-80 max-w-2xl mx-auto">
					Bring intelligence to your manufacturing with robotics designed for real-world production
				</p>
			</div>

			<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each robotics as application (application.id)}
					{@const IconComponent = roboticsIcons[application.id] || Bot}
					<div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all group">
						<div class="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4 group-hover:bg-white/30 transition-colors">
							<IconComponent class="w-6 h-6" />
						</div>
						<h4 class="font-bold text-lg mb-2">{application.title}</h4>
						<p class="text-sm opacity-70">{application.description}</p>
					</div>
				{/each}
			</div>

			<div class="text-center mt-10">
				<button class="btn btn-neutral btn-lg gap-2">
					Explore Robotics Solutions
					<ArrowRight class="w-5 h-5" />
				</button>
			</div>
		</div>
	</div>
</section>
