<script>
	import { ChevronDown } from '@lucide/svelte';
	import { faqItems } from '$lib/data/faq.js';

	/** @type {string | null} */
	let openItem = $state(null);

	/**
	 * @param {string} id
	 */
	function toggleItem(id) {
		openItem = openItem === id ? null : id;
	}
</script>

<section id="faq" class="py-20 bg-base-100">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-primary mb-4">FAQ</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
			<p class="text-lg text-base-content/70">
				Common questions about our services, capabilities, and process
			</p>
		</div>

		<div class="space-y-4">
			{#each faqItems as item (item.id)}
				<div
					class="border border-base-300 rounded-lg overflow-hidden transition-all {openItem === item.id
						? 'bg-base-200'
						: 'bg-base-100'}"
				>
					<button
						class="w-full px-6 py-5 flex items-center justify-between gap-4 text-left hover:bg-base-200 transition-colors"
						onclick={() => toggleItem(item.id)}
						aria-expanded={openItem === item.id}
					>
						<span class="font-semibold text-lg">{item.question}</span>
						<ChevronDown
							class="w-5 h-5 flex-shrink-0 transition-transform duration-300 {openItem === item.id
								? 'rotate-180'
								: ''}"
						/>
					</button>

					{#if openItem === item.id}
						<div class="px-6 pb-5">
							<p class="text-base-content/70 leading-relaxed">{item.answer}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>
