<script>
	import { enhance } from "$app/forms";
	import { page } from "$app/stores";
	import {
		Check,
		Shield,
		Clock,
		FileText,
		Send,
		AlertCircle,
		Phone,
		Mail,
	} from "@lucide/svelte";

	/** @type {{ errors?: Record<string, string>, values?: Record<string, FormDataEntryValue> }} */
	let form = $state({});

	/** @type {boolean} */
	let submitting = $state(false);

	const success = $derived($page.url.searchParams.get("success") === "true");
</script>

<svelte:head>
	<title>Request a Quote | Krka Power Inc.</title>
	<meta
		name="description"
		content="Get a detailed quote for custom switchgear, automation systems, or robotics integration. CSA-certified. Response within 24 hours."
	/>
</svelte:head>

{#if success}
	<!-- Success State -->
	<section
		class="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-base-100 to-primary/5 px-4"
	>
		<div class="max-w-xl mx-auto text-center">
			<div
				class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6"
			>
				<Check class="w-8 h-8 text-success" />
			</div>
			<h1 class="text-3xl md:text-4xl font-bold mb-4">
				We've Got Your Request
			</h1>
			<p class="text-lg text-base-content/70 mb-8">
				Our engineering team will review your project details and reach
				out within 24 hours with next steps.
			</p>
			<div class="flex flex-col sm:flex-row gap-3 justify-center">
				<a href="/" class="btn btn-primary gap-2"> Back to Home </a>
				<a href="/services" class="btn btn-outline">
					View Our Services
				</a>
			</div>
		</div>
	</section>
{:else}
	<!-- Quote Request Page -->
	<section
		class="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-base-100 to-primary/5 px-[max(1rem,env(safe-area-inset-left))] pr-[max(1rem,env(safe-area-inset-right))]"
	>
		<div class="max-w-6xl mx-auto">
			<div class="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
				<!-- Left Column: Context -->
				<div class="lg:col-span-2 space-y-6">
					<div>
						<h1
							class="text-3xl md:text-4xl font-bold mb-4 text-wrap: balance"
						>
							Tell Us About Your Project
						</h1>
						<p class="text-base-content/70 leading-relaxed">
							Share your requirements and we'll put together a
							detailed proposal with specifications, timeline, and
							pricing.
						</p>
					</div>

					<!-- Quick Facts -->
					<div class="space-y-3 text-sm">
						<div class="flex items-center gap-3">
							<Clock class="w-5 h-5 text-primary flex-shrink-0" />
							<span>Response within 24 hours</span>
						</div>
						<div class="flex items-center gap-3">
							<Shield
								class="w-5 h-5 text-primary flex-shrink-0"
							/>
							<span>CSA-certified solutions</span>
						</div>
						<div class="flex items-center gap-3">
							<FileText
								class="w-5 h-5 text-primary flex-shrink-0"
							/>
							<span>No obligation to proceed</span>
						</div>
					</div>

					<!-- Direct Contact -->
					<div class="pt-4 border-t border-base-300">
						<p class="text-sm text-base-content/60 mb-3">
							Need to talk now?
						</p>
						<div class="space-y-2">
							<a
								href="tel:9056910691"
								class="flex items-center gap-3 text-base-content hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded"
							>
								<Phone class="w-4 h-4" aria-hidden="true" />
								<span class="font-medium">905 691-0691</span>
							</a>
							<a
								href="mailto:[email protected]"
								class="flex items-center gap-3 text-base-content hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary rounded"
							>
								<Mail class="w-4 h-4" aria-hidden="true" />
								<span class="font-medium"
									>[email protected]</span
								>
							</a>
						</div>
					</div>
				</div>

				<!-- Right Column: Form -->
				<div class="lg:col-span-3">
					<div
						class="card bg-base-100 shadow-lg border border-base-300"
					>
						<div class="card-body p-6 md:p-8">
							<form
								method="POST"
								use:enhance={({ formData }) => {
									submitting = true;
									return async ({ result }) => {
										if (result.type === "failure") {
											form.values =
												Object.fromEntries(formData);
											form.errors =
												/** @type {Record<string, string> | undefined} */ (
													result.data?.errors
												);
											submitting = false;
										}
									};
								}}
								class="space-y-5"
								style="touch-action: manipulation"
							>
								{#if form?.errors?.general}
									<div class="alert alert-error" role="alert">
										<AlertCircle class="w-5 h-5" />
										<span>{form.errors.general}</span>
									</div>
								{/if}

								<!-- Contact Info -->
								<div class="grid sm:grid-cols-2 gap-4">
									<div>
										<label
											for="name"
											class="block text-sm font-medium mb-1.5"
										>
											Your Name <span
												class="text-error"
												aria-label="required">*</span
											>
										</label>
										<input
											type="text"
											id="name"
											name="name"
											autocomplete="name"
											required
											placeholder="Jane Smith…"
											value={form?.values?.name || ""}
											class="input input-bordered w-full focus:input-primary"
										/>
										{#if form?.errors?.name}
											<p
												class="text-error text-xs mt-1"
												role="alert"
											>
												{form.errors.name}
											</p>
										{/if}
									</div>

									<div>
										<label
											for="company"
											class="block text-sm font-medium mb-1.5"
										>
											Company <span
												class="text-error"
												aria-label="required">*</span
											>
										</label>
										<input
											type="text"
											id="company"
											name="company"
											autocomplete="organization"
											required
											placeholder="Acme Manufacturing…"
											value={form?.values?.company || ""}
											class="input input-bordered w-full focus:input-primary"
										/>
										{#if form?.errors?.company}
											<p
												class="text-error text-xs mt-1"
												role="alert"
											>
												{form.errors.company}
											</p>
										{/if}
									</div>
								</div>

								<div class="grid sm:grid-cols-2 gap-4">
									<div>
										<label
											for="email"
											class="block text-sm font-medium mb-1.5"
										>
											Work Email <span
												class="text-error"
												aria-label="required">*</span
											>
										</label>
										<input
											type="email"
											id="email"
											name="email"
											autocomplete="email"
											spellcheck={false}
											inputmode="email"
											required
											placeholder="[email protected]…"
											value={form?.values?.email || ""}
											class="input input-bordered w-full focus:input-primary"
										/>
										{#if form?.errors?.email}
											<p
												class="text-error text-xs mt-1"
												role="alert"
											>
												{form.errors.email}
											</p>
										{/if}
									</div>

									<div>
										<label
											for="phone"
											class="block text-sm font-medium mb-1.5"
										>
											Phone <span
												class="text-base-content/40"
												>(optional)</span
											>
										</label>
										<input
											type="tel"
											id="phone"
											name="phone"
											autocomplete="tel"
											inputmode="tel"
											placeholder="905 555-0123…"
											value={form?.values?.phone || ""}
											class="input input-bordered w-full focus:input-primary"
										/>
									</div>
								</div>

								<!-- Project Info -->
								<div class="grid sm:grid-cols-2 gap-4">
									<div>
										<label
											for="service"
											class="block text-sm font-medium mb-1.5"
										>
											What do you need? <span
												class="text-error"
												aria-label="required">*</span
											>
										</label>
										<select
											id="service"
											name="service"
											required
											class="select select-bordered w-full focus:select-primary"
										>
											<option value="">Select…</option>
											<optgroup
												label="Design & Manufacturing"
											>
												<option value="switchgear"
													>Switchgear</option
												>
												<option value="switchboard"
													>Switchboards</option
												>
												<option value="panels"
													>Custom Panels</option
												>
												<option value="arcflash"
													>Arc Flash Solutions</option
												>
											</optgroup>
											<optgroup
												label="Engineering Services"
											>
												<option
													value="engineering-install"
													>Installation</option
												>
												<option value="maintenance"
													>Maintenance</option
												>
												<option value="emergency"
													>Emergency Repair</option
												>
												<option value="arcflash-study"
													>Arc Flash Study</option
												>
											</optgroup>
											<optgroup
												label="Automation & Robotics"
											>
												<option value="plc"
													>PLC & Automation</option
												>
												<option value="dcs"
													>DCS & Control Systems</option
												>
												<option value="robotics"
													>Robotics Integration</option
												>
												<option value="vision"
													>Machine Vision</option
												>
											</optgroup>
											<option value="other"
												>Other / Multiple</option
											>
										</select>
										{#if form?.errors?.service}
											<p
												class="text-error text-xs mt-1"
												role="alert"
											>
												{form.errors.service}
											</p>
										{/if}
									</div>

									<div>
										<label
											for="timeline"
											class="block text-sm font-medium mb-1.5"
										>
											When do you need it?
										</label>
										<select
											id="timeline"
											name="timeline"
											class="select select-bordered w-full focus:select-primary"
										>
											<option value=""
												>Not sure yet</option
											>
											<option value="immediate"
												>ASAP / Emergency</option
											>
											<option value="1month"
												>Within a month</option
											>
											<option value="1-3months"
												>1–3 months</option
											>
											<option value="3-6months"
												>3–6 months</option
											>
											<option value="6plus"
												>6+ months</option
											>
										</select>
									</div>
								</div>

								<div>
									<label
										for="description"
										class="block text-sm font-medium mb-1.5"
									>
										Project Details <span
											class="text-error"
											aria-label="required">*</span
										>
									</label>
									<textarea
										id="description"
										name="description"
										required
										rows="4"
										placeholder="Describe your project: equipment specs, facility requirements, any constraints…"
										class="textarea textarea-bordered w-full focus:textarea-primary resize-y"
										>{form?.values?.description ||
											""}</textarea
									>
									{#if form?.errors?.description}
										<p
											class="text-error text-xs mt-1"
											role="alert"
										>
											{form.errors.description}
										</p>
									{/if}
								</div>

								<!-- Submit -->
								<div class="pt-2">
									<button
										type="submit"
										disabled={submitting}
										class="btn btn-primary w-full gap-2"
									>
										{#if submitting}
											<span
												class="loading loading-spinner loading-sm"
											></span>
											Sending…
										{:else}
											<Send class="w-5 h-5" />
											Send Request
										{/if}
									</button>
									<p
										class="text-base-content/50 text-xs mt-3 text-center"
									>
										We'll never share your information with
										third parties.
									</p>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
{/if}

<style>
	@media (prefers-reduced-motion: no-preference) {
		:global(html) {
			scroll-behavior: smooth;
		}
	}
	:global(html) {
		scroll-padding-top: 4rem;
	}
</style>
