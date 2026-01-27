<script>
	import { Star, Quote } from '@lucide/svelte';

	const testimonials = [
		{
			id: 1,
			quote:
				"Krka Power delivered a custom switchboard solution that exceeded our specifications. Their engineering team understood our unique requirements and delivered on time. The equipment has performed flawlessly for three years.",
			author: 'Michael Chen',
			title: 'Facilities Director',
			company: 'Regional Healthcare System',
			rating: 5
		},
		{
			id: 2,
			quote:
				"When our data center expansion required specialized power distribution equipment, Krka's team designed a solution that met our redundancy requirements. Their 24/7 support during commissioning was exceptional.",
			author: 'Sarah Williams',
			title: 'Infrastructure Manager',
			company: 'Enterprise Data Services',
			rating: 5
		},
		{
			id: 3,
			quote:
				"We've partnered with Krka Power on multiple manufacturing facility upgrades. Their automation expertise and understanding of industrial requirements make them our go-to for electrical infrastructure projects.",
			author: 'David Thompson',
			title: 'Plant Operations Manager',
			company: 'Advanced Manufacturing Corp',
			rating: 5
		}
	];

	let currentIndex = $state(0);

	function nextTestimonial() {
		currentIndex = (currentIndex + 1) % testimonials.length;
	}

	function prevTestimonial() {
		currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
	}
</script>

<section id="testimonials" class="py-20 bg-base-200">
	<div class="max-w-4xl mx-auto px-4">
		<div class="text-center mb-12">
			<div class="badge badge-secondary mb-4">TESTIMONIALS</div>
			<h2 class="text-4xl md:text-5xl font-bold mb-4">What Our Clients Say</h2>
		</div>

		<div class="relative">
			{#each testimonials as testimonial, i (testimonial.id)}
				{#if i === currentIndex}
					<div class="bg-base-100 rounded-2xl p-8 md:p-12 shadow-xl">
						<!-- Rating -->
						<div class="flex gap-1 mb-6 justify-center">
							{#each Array(testimonial.rating) as _, starIdx (starIdx)}
								<Star class="w-6 h-6 fill-warning text-warning" />
							{/each}
						</div>

						<!-- Quote Icon -->
						<div class="flex justify-center mb-6">
							<Quote class="w-12 h-12 text-primary/20" />
						</div>

						<!-- Quote Text -->
						<blockquote class="text-xl md:text-2xl text-center leading-relaxed mb-8 quote-text">
							"{testimonial.quote}"
						</blockquote>

						<!-- Author -->
						<div class="text-center">
							<div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-primary-content font-bold text-xl">
								{testimonial.author
									.split(' ')
									.map((n) => n[0])
									.join('')}
							</div>
							<div class="font-bold text-lg">{testimonial.author}</div>
							<div class="text-sm text-base-content/60">
								{testimonial.title}, {testimonial.company}
							</div>
						</div>
					</div>
				{/if}
			{/each}

			<!-- Navigation Dots -->
			<div class="flex justify-center gap-3 mt-8">
				{#each testimonials as t, i (t.id)}
					<button
						class="w-3 h-3 rounded-full transition-all {i === currentIndex
							? 'bg-primary w-8'
							: 'bg-base-content/20'}"
						onclick={() => (currentIndex = i)}
						aria-label="Go to testimonial {i + 1}"
					></button>
				{/each}
			</div>

			<!-- Navigation Arrows -->
			<div class="flex justify-center gap-4 mt-6">
				<button
					class="btn btn-circle btn-outline btn-sm"
					onclick={prevTestimonial}
					aria-label="Previous testimonial"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
					</svg>
				</button>
				<button
					class="btn btn-circle btn-outline btn-sm"
					onclick={nextTestimonial}
					aria-label="Next testimonial"
				>
					<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</section>
