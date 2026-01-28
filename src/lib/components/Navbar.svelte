<script>
	import {
		Menu,
		X,
		ChevronDown,
		Phone,
		ArrowRight,
		Cog,
		Wrench,
		Cpu,
		Bot,
	} from "@lucide/svelte";
	import logo from "$lib/assets/krka-logo.webp";

	let mobileMenuOpen = $state(false);
	let scrolled = $state(false);

	$effect(() => {
		if (typeof window !== "undefined") {
			const updateScrolled = () => (scrolled = window.scrollY > 50);
			updateScrolled();
			window.addEventListener("scroll", updateScrolled);
			return () => window.removeEventListener("scroll", updateScrolled);
		}
	});

	const services = [
		{
			href: "/services/design-manufacturing",
			label: "Design & Manufacturing",
			description: "Custom switchgear, panels & enclosures",
			icon: Cog,
		},
		{
			href: "/services/engineering",
			label: "Engineering Services",
			description: "Installation, maintenance & arc flash",
			icon: Wrench,
		},
		{
			href: "/services/automation",
			label: "Automation & Control",
			description: "PLC, DCS & control systems",
			icon: Cpu,
		},
		{
			href: "/services/robotics",
			label: "Robotics",
			description: "Integration, palletizing & vision",
			icon: Bot,
		},
	];

	const navLinks = [
		{ href: "/#about", label: "About" },
		{ href: "/#industries", label: "Industries" },
		{ href: "/#projects", label: "Projects" },
		{ href: "/#contact", label: "Contact" },
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<header
	class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 {scrolled
		? 'bg-base-100/95 backdrop-blur-md shadow-md'
		: 'bg-base-100/90 backdrop-blur-sm'}"
>
	<nav class="max-w-7xl mx-auto px-4 py-3">
		<div class="flex items-center justify-between">
			<!-- Logo -->
			<a href="/" class="flex items-center gap-3 shrink-0">
				<img src={logo} alt="Krka Power Inc." class="h-10 md:h-12" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center gap-1">
				<!-- Services Dropdown -->
				<div class="dropdown dropdown-hover dropdown-bottom">
					<div
						tabindex="0"
						role="button"
						class="btn btn-ghost btn-sm gap-1 font-medium text-sm uppercase tracking-wide"
					>
						Services
						<ChevronDown class="w-4 h-4" />
					</div>
					<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
					<div
						tabindex="0"
						class="dropdown-content z-50 mt-1 p-2 shadow-xl bg-base-100 rounded-box w-72 border border-base-200"
					>
						<ul class="menu menu-sm gap-1 p-0">
							{#each services as service (service.label)}
								<li>
									<a
										href={service.href}
										class="flex items-start gap-3 p-3 rounded-lg hover:bg-primary/10 group transition-colors"
									>
										<div
											class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-colors"
										>
											<service.icon class="w-5 h-5" />
										</div>
										<div class="min-w-0">
											<div class="font-semibold text-sm">{service.label}</div>
											<div class="text-xs text-base-content/60 mt-0.5">
												{service.description}
											</div>
										</div>
									</a>
								</li>
							{/each}
						</ul>
					</div>
				</div>

				<!-- Other Nav Links -->
				{#each navLinks as link (link.label)}
					<a
						href={link.href}
						class="btn btn-ghost btn-sm font-medium text-sm uppercase tracking-wide"
					>
						{link.label}
					</a>
				{/each}
			</div>

			<!-- CTA Buttons -->
			<div class="hidden lg:flex items-center gap-3">
				<a
					href="tel:9056910691"
					class="btn btn-ghost btn-sm gap-2 font-medium"
				>
					<Phone class="w-4 h-4" />
					<span class="hidden xl:inline">905 691-0691</span>
				</a>
				<a href="/get-quote" class="btn btn-primary btn-sm gap-2">
					Get Quote
					<ArrowRight class="w-4 h-4" />
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="lg:hidden btn btn-ghost btn-sm btn-square"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
				aria-expanded={mobileMenuOpen}
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
			<div class="lg:hidden mt-4 pb-4 border-t border-base-200 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
				<!-- Services Section -->
				<div class="mb-4">
					<p class="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2 px-2">
						Services
					</p>
					<div class="grid gap-1">
						{#each services as service (service.label)}
							<a
								href={service.href}
								class="flex items-center gap-3 p-3 rounded-lg hover:bg-base-200 transition-colors"
								onclick={closeMobileMenu}
							>
								<div
									class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
								>
									<service.icon class="w-4 h-4 text-primary" />
								</div>
								<div>
									<div class="font-medium text-sm">{service.label}</div>
									<div class="text-xs text-base-content/60">{service.description}</div>
								</div>
							</a>
						{/each}
					</div>
				</div>

				<!-- Other Links -->
				<div class="border-t border-base-200 pt-4 mb-4">
					<div class="flex flex-wrap gap-2">
						{#each navLinks as link (link.label)}
							<a
								href={link.href}
								class="btn btn-ghost btn-sm"
								onclick={closeMobileMenu}
							>
								{link.label}
							</a>
						{/each}
					</div>
				</div>

				<!-- CTA -->
				<div class="border-t border-base-200 pt-4 flex flex-col gap-3">
					<a
						href="tel:9056910691"
						class="btn btn-ghost btn-sm justify-start gap-2"
					>
						<Phone class="w-4 h-4" />
						905 691-0691
					</a>
					<a
						href="/get-quote"
						class="btn btn-primary gap-2 w-full"
						onclick={closeMobileMenu}
					>
						Get Quote
						<ArrowRight class="w-4 h-4" />
					</a>
				</div>
			</div>
		{/if}
	</nav>
</header>

<!-- Spacer for fixed header -->
<div class="h-16 md:h-18"></div>
