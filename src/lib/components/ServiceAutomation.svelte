<script>
	import { Cpu, Network, Workflow, Settings } from '@lucide/svelte';
	import { automationControl } from '$lib/data/services.js';

	/** @type {Record<string, typeof Cpu>} */
	const automationIcons = {
		plc: Cpu,
		distributed: Network,
		communication: Workflow,
		turnkey: Settings
	};
</script>

<section id="automation" class="py-20 bg-base-200">
	<div class="max-w-7xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-accent mb-4">AUTOMATION</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">Automation and Control</h2>
			<p class="text-lg text-base-content/70 max-w-2xl mx-auto">
				End-to-end automation from concept and electrical design to manufacturing
			</p>
		</div>

		<div class="grid md:grid-cols-2 gap-6 mb-12">
			{#each automationControl as service (service.id)}
				{@const IconComponent = automationIcons[service.id] || Cpu}
				<div class="card bg-base-100 hover:shadow-xl transition-all duration-300 group">
					<div class="card-body">
						<div class="flex items-start gap-4">
							<div class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
								<IconComponent class="w-7 h-7 text-primary group-hover:text-primary-content transition-colors" />
							</div>
							<div>
								<h4 class="card-title text-lg mb-2">{service.title}</h4>
								<p class="text-sm text-base-content/70">{service.description}</p>
							</div>
						</div>
					</div>
				</div>
			{/each}
		</div>

		<!-- Partner Logos -->
		<div class="bg-base-100 rounded-xl p-8">
			<p class="text-center text-sm text-base-content/50 mb-6 uppercase tracking-widest font-medium">
				Automation Partners
			</p>
			<div class="flex flex-wrap justify-center items-center gap-12">
				<div class="text-base-content/30 font-bold text-xl">Siemens</div>
				<div class="text-base-content/30 font-bold text-xl">Allen-Bradley</div>
				<div class="text-base-content/30 font-bold text-xl">ABB</div>
				<div class="text-base-content/30 font-bold text-xl">Schneider</div>
			</div>
		</div>
	</div>
</section>
