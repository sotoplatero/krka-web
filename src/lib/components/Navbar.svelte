<script>
	import { Menu, X, ChevronDown, Phone, ArrowRight } from '@lucide/svelte';
	import logo from '$lib/assets/krka-logo.webp';

	let mobileMenuOpen = $state(false);
	let servicesDropdownOpen = $state(false);
	let scrolled = $state(false);

	// Update scrolled state on browser after mount
	$effect(() => {
		if (typeof window !== 'undefined') {
			const updateScrolled = () => (scrolled = window.scrollY > 50);
			updateScrolled();
			window.addEventListener('scroll', updateScrolled);
			return () => window.removeEventListener('scroll', updateScrolled);
		}
	});

	const navLinks = [
		{ href: '#hero', label: 'Home' },
		{ href: '#about', label: 'About' },
		{
			href: '#services',
			label: 'Services',
			dropdown: [
				{ href: '#design', label: 'Design & Manufacturing' },
				{ href: '#engineering', label: 'Engineering Services' },
				{ href: '#automation', label: 'Automation & Control' },
				{ href: '#robotics', label: 'Robotics' }
			]
		},
		{ href: '#industries', label: 'Industries' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-base-100/90 backdrop-blur-md shadow-sm"
>
	<nav class="max-w-7xl mx-auto px-4 py-4">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="#hero" class="flex items-center gap-3">
				<img src={logo} alt="Krka Power Inc." class="h-10 md:h-12" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-8">
				{#each navLinks as link (link.label)}
					{#if link.dropdown}
						<div
							class="relative"
							role="button"
							tabindex="0"
							onmouseenter={() => (servicesDropdownOpen = true)}
							onmouseleave={() => (servicesDropdownOpen = false)}
							onfocus={() => (servicesDropdownOpen = true)}
							onblur={() => (servicesDropdownOpen = false)}
						>
							<button
								class="flex items-center gap-1 font-medium text-sm uppercase tracking-wide hover:text-primary transition-colors"
							>
								{link.label}
								<ChevronDown
									class="w-4 h-4 transition-transform {servicesDropdownOpen ? 'rotate-180' : ''}"
								/>
							</button>

							{#if servicesDropdownOpen}
								<div
									class="absolute top-full left-0 mt-2 w-56 bg-base-100 rounded-lg shadow-xl border border-base-300 py-2"
								>
									{#each link.dropdown as item (item.label)}
										<a
											href={item.href}
											class="block px-4 py-2 text-sm hover:bg-base-200 hover:text-primary transition-colors"
										>
											{item.label}
										</a>
									{/each}
								</div>
							{/if}
						</div>
					{:else}
						<a
							href={link.href}
							class="font-medium text-sm uppercase tracking-wide hover:text-primary transition-colors"
						>
							{link.label}
						</a>
					{/if}
				{/each}
			</div>

			<!-- CTA Buttons -->
			<div class="hidden lg:flex items-center gap-4">
				<a href="tel:9056910691" class="flex items-center gap-2 text-sm font-medium">
					<Phone class="w-4 h-4" />
					<span>905 691-0691</span>
				</a>
				<a href="#contact" class="btn btn-primary btn-sm gap-2">
					Get Quote
					<ArrowRight class="w-4 h-4" />
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden p-2 hover:bg-base-200 rounded-lg transition-colors"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				{#if mobileMenuOpen}
					<X class="w-6 h-6" />
				{:else}
					<Menu class="w-6 h-6" />
				{/if}
			</button>
		</div>

		<!-- Mobile Menu -->
		{#if mobileMenuOpen}
			<div class="lg:hidden mt-4 pb-4 border-t border-base-300 pt-4">
				<div class="flex flex-col gap-2">
					{#each navLinks as link (link.label)}
						{#if link.dropdown}
							<div class="py-2">
								<span class="font-medium text-sm uppercase tracking-wide text-base-content/60">
									{link.label}
								</span>
								<div class="mt-2 ml-4 flex flex-col gap-1">
									{#each link.dropdown as item (item.label)}
										<a
											href={item.href}
											class="py-2 text-sm hover:text-primary transition-colors"
											onclick={closeMobileMenu}
										>
											{item.label}
										</a>
									{/each}
								</div>
							</div>
						{:else}
							<a
								href={link.href}
								class="py-2 font-medium text-sm uppercase tracking-wide hover:text-primary transition-colors"
								onclick={closeMobileMenu}
							>
								{link.label}
							</a>
						{/if}
					{/each}

					<div class="mt-4 pt-4 border-t border-base-300 flex flex-col gap-3">
						<a href="tel:9056910691" class="flex items-center gap-2 text-sm font-medium">
							<Phone class="w-4 h-4" />
							<span>905 691-0691</span>
						</a>
						<a href="#contact" class="btn btn-primary btn-sm gap-2 w-full" onclick={closeMobileMenu}>
							Get Quote
							<ArrowRight class="w-4 h-4" />
						</a>
					</div>
				</div>
			</div>
		{/if}
	</nav>
</header>
