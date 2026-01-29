<script>
	/**
	 * @typedef {Object} Slide
	 * @property {string} title
	 * @property {string} [image]
	 */

	/** @type {{ slides: Slide[], accentColor?: string }} */
	let { slides, accentColor = "bg-primary" } = $props();

	let currentIndex = $state(0);
	let touchStartX = $state(0);
	let touchEndX = $state(0);

	function next() {
		if (slides.length > 1) {
			currentIndex = (currentIndex + 1) % slides.length;
		}
	}

	function prev() {
		if (slides.length > 1) {
			currentIndex = (currentIndex - 1 + slides.length) % slides.length;
		}
	}

	/**
	 * @param {number} index
	 */
	function goTo(index) {
		currentIndex = index;
	}

	// Touch/Swipe handlers
	/** @param {TouchEvent} e */
	function handleTouchStart(e) {
		touchStartX = e.changedTouches[0].screenX;
	}

	/** @param {TouchEvent} e */
	function handleTouchEnd(e) {
		touchEndX = e.changedTouches[0].screenX;
		handleSwipe();
	}

	function handleSwipe() {
		const threshold = 50; // Minimum swipe distance
		const diff = touchEndX - touchStartX;

		if (Math.abs(diff) > threshold) {
			if (diff > 0) {
				prev(); // Swipe right -> previous
			} else {
				next(); // Swipe left -> next
			}
		}
	}

	let currentSlide = $derived(slides[currentIndex]);
</script>

<!-- Full-width on mobile: negates parent padding -->
<div class="relative -mx-4 md:mx-0">
	<!-- Image Container -->
	<div
		class="aspect-video md:aspect-square bg-gradient-to-br from-base-300 to-base-200 rounded-none md:rounded-xl overflow-hidden relative cursor-pointer select-none"
		onclick={next}
		role="button"
		tabindex="0"
		onkeydown={(e) => e.key === "Enter" && next()}
		ontouchstart={handleTouchStart}
		ontouchend={handleTouchEnd}
	>
		{#if currentSlide?.image}
			<img
				src={currentSlide.image}
				alt={currentSlide.title}
				class="w-full h-full object-cover pointer-events-none"
				draggable="false"
			/>
		{:else}
			<div
				class="w-full h-full flex items-center justify-center text-base-content/20"
			>
				<span class="text-sm">[{currentSlide?.title}]</span>
			</div>
		{/if}

		<!-- Title Overlay -->
		<div
			class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 pb-12"
		>
			<p class="text-white font-medium text-sm md:text-base">
				{currentSlide?.title}
			</p>
		</div>

		<!-- Dots Navigation (inside image) -->
		{#if slides.length > 1}
			<div
				class="absolute bottom-3 left-0 right-0 flex justify-center gap-2"
			>
				{#each slides as slide, i (slide.title)}
					<button
						onclick={() => goTo(i)}
						class="w-2 h-2 rounded-full transition-all {i ===
						currentIndex
							? `${accentColor} w-6`
							: 'bg-white/50 hover:bg-white/80'}"
						aria-label="Go to slide {i + 1}"
					></button>
				{/each}
			</div>
		{/if}
	</div>
</div>
