<script>
	import { MapPin, Phone, Mail } from '@lucide/svelte';
	import logo from '$lib/assets/krka-logo.webp';

	const services = [
		{ href: '#design', label: 'Design & Manufacturing' },
		{ href: '#engineering', label: 'Engineering Services' },
		{ href: '#automation', label: 'Automation & Control' },
		{ href: '#robotics', label: 'Robotics Integration' }
	];

	const industries = [
		{ href: '#industries', label: 'Healthcare' },
		{ href: '#industries', label: 'Data Centers' },
		{ href: '#industries', label: 'Manufacturing' },
		{ href: '#industries', label: 'Oil & Gas' },
		{ href: '#industries', label: 'Commercial' },
		{ href: '#industries', label: 'Government' }
	];
</script>

<footer class="bg-neutral text-neutral-content">
	<div class="max-w-7xl mx-auto px-4 py-16">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
			<!-- Company Info -->
			<div>
				<img src={logo} alt="Krka Power Inc." class="h-12 mb-6 brightness-0 invert" />
				<p class="text-sm opacity-85 leading-relaxed mb-6">
					Custom power distribution equipment manufacturer serving Ontario's most critical
					facilities since 2013. CSA and ANSI certified solutions engineered for precision.
				</p>
				<div class="flex gap-4">
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
						class="w-10 h-10 rounded-lg bg-neutral-content/10 flex items-center justify-center hover:bg-primary transition-colors"
						aria-label="LinkedIn"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
							/>
						</svg>
					</a>
				</div>
			</div>

			<!-- Services -->
			<div>
				<h4 class="font-bold text-lg mb-6">Services</h4>
				<ul class="space-y-3">
					{#each services as service (service.label)}
						<li>
							<a
								href={service.href}
								class="text-sm opacity-85 hover:text-secondary hover:opacity-100 transition-colors"
							>
								{service.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Industries -->
			<div>
				<h4 class="font-bold text-lg mb-6">Industries</h4>
				<ul class="space-y-3">
					{#each industries as industry (industry.label)}
						<li>
							<a
								href={industry.href}
								class="text-sm opacity-85 hover:text-secondary hover:opacity-100 transition-colors"
							>
								{industry.label}
							</a>
						</li>
					{/each}
				</ul>
			</div>

			<!-- Contact -->
			<div>
				<h4 class="font-bold text-lg mb-6">Contact</h4>
				<ul class="space-y-4">
					<li>
						<a
							href="https://maps.google.com/?q=Burlington,ON"
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-start gap-3 text-sm opacity-85 hover:text-secondary hover:opacity-100 transition-colors"
						>
							<MapPin class="w-5 h-5 flex-shrink-0 mt-0.5" />
							<span>Burlington, Ontario<br />Canada</span>
						</a>
					</li>
					<li>
						<a
							href="tel:9056910691"
							class="flex items-center gap-3 text-sm opacity-85 hover:text-secondary hover:opacity-100 transition-colors"
						>
							<Phone class="w-5 h-5 flex-shrink-0" />
							<span>905 691-0691</span>
						</a>
					</li>
					<li>
						<a
							href="mailto:[email protected]"
							class="flex items-center gap-3 text-sm opacity-85 hover:text-secondary hover:opacity-100 transition-colors"
						>
							<Mail class="w-5 h-5 flex-shrink-0" />
							<span>[email protected]</span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- Bottom Bar -->
	<div class="border-t border-neutral-content/20">
		<div class="max-w-7xl mx-auto px-4 py-6">
			<div class="flex flex-col md:flex-row justify-between items-center gap-4">
				<p class="text-sm opacity-70">
					&copy; {new Date().getFullYear()} Krka Power Inc. All rights reserved.
				</p>
				<div class="flex gap-6 text-sm opacity-70">
					<a href="/privacy" class="hover:opacity-100 transition-opacity">Privacy Policy</a>
					<a href="/terms" class="hover:opacity-100 transition-opacity">Terms of Service</a>
				</div>
			</div>
		</div>
	</div>
</footer>
