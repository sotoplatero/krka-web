<script>
	import { Wrench, HardHat, AlertTriangle, Clock } from '@lucide/svelte';
	import { engineeringServices } from '$lib/data/services.js';

	/** @type {Record<string, typeof Wrench>} */
	const serviceIcons = {
		installation: HardHat,
		maintenance: Wrench,
		emergency: Clock,
		'arcflash-study': AlertTriangle
	};
</script>

<section id="engineering" class="py-20 bg-base-100">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-secondary mb-4">FIELD SERVICES</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">Engineering and Field Services</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				On-site expertise to keep your electrical systems safe, reliable, and running
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-8">
			{#each engineeringServices as service (service.id)}
				{@const IconComponent = serviceIcons[service.id] || Wrench}
				<div class="card bg-base-100 border border-base-300 hover:shadow-xl hover:border-primary/30 transition-all duration-300 group">
					<div class="card-body">
						<div class="flex items-start gap-4">
							<div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
								<IconComponent class="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" />
							</div>
							<div class="flex-1">
								<h4 class="card-title text-xl mb-2">{service.title}</h4>
								<p class="text-base-content/70">{service.description}</p>
							</div>
						</div>
						<div class="card-actions justify-end mt-4">
							<button class="btn btn-sm btn-primary">Request Service</button>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
