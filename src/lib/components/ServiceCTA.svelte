<script>
	import { ArrowRight, Phone, Mail, MapPin, Clock } from "@lucide/svelte";

	let {
		title = "",
		description = "",
		buttonText = "Request Quote",
		theme = "light",
		contactInfo = ["email", "phone"],
		hoursText = "",
	} = $props();
</script>

<section
	id="contact"
	class="py-20 {theme === 'dark'
		? 'bg-secondary text-primary-content relative overflow-hidden'
		: 'bg-gradient-to-br from-base-200 via-base-100 to-primary/5 text-base-content'}"
>
	{#if theme === "dark"}
		<div class="absolute inset-0 opacity-10">
			<div
				class="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"
			></div>
			<div
				class="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"
			></div>
		</div>
	{/if}

	<div
		class="max-w-4xl mx-auto px-4 text-center {theme === 'dark'
			? 'relative z-10'
			: ''}"
	>
		<h2 class="text-3xl md:text-4xl font-bold mb-6">
			{@html title}
		</h2>

		<p
			class="text-xl mb-8 {theme === 'dark'
				? 'opacity-90'
				: 'text-base-content/70'} max-w-2xl mx-auto"
		>
			{description}
		</p>

		<div class="flex flex-col sm:flex-row gap-4 justify-center mb-12">
			<a
				href="mailto:[email protected]"
				class="btn {theme === 'dark'
					? 'btn-neutral'
					: 'btn-primary'} btn-lg gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 hover:scale-105 transition-transform motion-reduce:transition-none motion-reduce:hover:scale-100"
			>
				{buttonText}
				<ArrowRight class="w-5 h-5" />
			</a>
			<a
				href="tel:9056910691"
				class="btn btn-outline {theme === 'dark'
					? 'border-primary-content text-primary-content hover:bg-primary-content hover:text-primary'
					: ''} btn-lg gap-2 focus-visible:ring-2 {theme === 'dark'
					? 'focus-visible:ring-primary-content'
					: 'focus-visible:ring-primary'} focus-visible:ring-offset-2"
			>
				<Phone class="w-5 h-5" />
				905 691-0691
			</a>
		</div>

		{#if hoursText}
			<div
				class="divider {theme === 'dark'
					? 'divider-primary before:bg-primary-content/30 after:bg-primary-content/30 text-primary-content/50'
					: ''}"
			>
				OR
			</div>
		{/if}

		<div
			class="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm {theme ===
			'dark'
				? ''
				: 'text-base-content/60'} mt-8"
		>
			{#each contactInfo as key (key)}
				{#if key === "email"}
					<a
						href="mailto:[email protected]"
						class="flex items-center gap-2 {theme === 'dark'
							? 'hover:underline'
							: 'hover:text-primary transition-colors'}"
					>
						<Mail class="w-5 h-5" />
						<span class="font-medium">[email protected]</span>
					</a>
				{:else if key === "phone"}
					<a
						href="tel:9056910691"
						class="flex items-center gap-2 {theme === 'dark'
							? 'hover:underline'
							: 'hover:text-primary transition-colors'}"
					>
						<Phone class="w-5 h-5" />
						<span class="font-medium">905 691-0691</span>
					</a>
				{:else if key === "location"}
					<div class="flex items-center gap-2">
						<MapPin class="w-5 h-5" />
						<span class="font-medium">Burlington, Ontario</span>
					</div>
				{:else if key === "hours" && hoursText}
					<div class="flex items-center gap-2">
						<Clock class="w-5 h-5" />
						<span class="font-medium">{hoursText}</span>
					</div>
				{:else if key === "hours"}
					<div class="flex items-center gap-2">
						<Clock class="w-5 h-5" />
						<span class="font-medium">24/7 Emergency Line</span>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>
