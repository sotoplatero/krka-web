<script>
	/**
	 * @typedef {Object} Slide
	 * @property {string} title
	 * @property {string} [image]
	 */

	/** @type {{ slides: Slide[], accentColor?: string }} */
	let { slides, accentColor = 'bg-primary' } = $props();

	let currentIndex = $state(0);

	function next() {
		if (slides.length > 1) {
			currentIndex = (currentIndex + 1) % slides.length;
		}
	}

	/**
	 * @param {number} index
	 */
	function goTo(index) {
		currentIndex = index;
	}

	let currentSlide = $derived(slides[currentIndex]);
</script>

<div class="relative w-full">
	<!-- Image Container -->
	<div
		class="aspect-video md:aspect-square bg-gradient-to-br from-base-300 to-base-200 rounded-xl overflow-hidden relative cursor-pointer"
		onclick={next}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === 'Enter' && next()}
	>
		{#if currentSlide?.image}
			<img
				src={currentSlide.image}
				alt={currentSlide.title}
				class="w-full h-full object-cover"
			/>
		{:else}
			<div class="w-full h-full flex items-center justify-center text-base-content/20">
				<span class="text-sm">[{currentSlide?.title}]</span>
			</div>
		{/if}

		<!-- Title Overlay -->
		<div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pb-12">
			<p class="text-white font-medium text-sm md:text-base">{currentSlide?.title}</p>
		</div>

		<!-- Dots Navigation (inside image) -->
		{#if slides.length > 1}
			<div class="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
				{#each slides as slide, i (slide.title)}
					<button
						onclick={() => goTo(i)}
						class="w-2 h-2 rounded-full transition-all {i === currentIndex
							? `${accentColor} w-6`
							: 'bg-white/50 hover:bg-white/80'}"
						aria-label="Go to slide {i + 1}"
					></button>
				{/each}
			</div>
		{/if}
	</div>
</div>
