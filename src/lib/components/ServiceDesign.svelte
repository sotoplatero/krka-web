<script>
	import { Zap, Settings, Network, ScanLine } from '@lucide/svelte';
	import { designManufacturing } from '$lib/data/services.js';

	/** @type {Record<string, typeof Zap>} */
	const productIcons = {
		switchgear: Zap,
		switchboard: Settings,
		arcflash: Zap,
		distribution: Network,
		panels: Settings,
		metering: ScanLine
	};
</script>

<section id="design" class="py-20 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-primary mb-4">DESIGN & MANUFACTURING</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">Design and Manufacturing</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				From single line to industrial engineered builds that install fast and service easily
			</p>
		</div>

		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each designManufacturing as product (product.id)}
				{@const IconComponent = productIcons[product.id] || Zap}
				<div class="card bg-base-100 hover:shadow-xl transition-all duration-300 group">
					<div class="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center group-hover:from-primary/10 group-hover:to-secondary/10 transition-all relative overflow-hidden">
						<div class="text-center">
							<IconComponent class="w-16 h-16 mx-auto text-primary/30 group-hover:text-primary/50 transition-colors" />
						</div>
					</div>

					<div class="card-body">
						<div class="flex items-center gap-2 mb-2">
							<h4 class="card-title text-lg">{product.title}</h4>
							{#if product.subtitle}
								<span class="badge badge-outline badge-sm">{product.subtitle}</span>
							{/if}
						</div>
						<p class="text-sm text-base-content/70">{product.description}</p>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-sm btn-ghost text-primary">Learn More</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
