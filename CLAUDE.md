# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Krka** website built with SvelteKit 2.x, using Svelte 5 with runes syntax and TailwindCSS 4.x (via Vite plugin). The project includes MDSvEx for markdown support, DaisyUI for UI components, and Lucide for icons.

**Package Manager**: This project uses `pnpm` as the package manager.

### Current Versions (package.json)
- **SvelteKit**: ^2.50.1
- **Svelte**: ^5.48.2
- **Vite**: ^7.3.1
- **TailwindCSS**: ^4.1.18
- **DaisyUI**: ^5.5.14
- **MDSvEx**: ^0.12.6
- **Lucide Svelte**: ^0.563.1 (icons library)

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
pnpm run dev -- --open  # opens in browser

# Type checking
pnpm run check           # one-time type check
pnpm run check:watch     # watch mode for type checking

# Build for production
pnpm run build

# Preview production build
pnpm run preview

# Sync SvelteKit (auto-run by prepare script)
pnpm run prepare
```

## Tech Stack & Architecture

### Svelte 5 with Runes
This project uses Svelte 5's modern runes syntax:
- Use `$state()` for reactive state (not `export let`)
- Use `$props()` for component props (not `export let`)
- Use `$derived()` for computed values
- Use `{@render children()}` for slots (not `<slot />`)

Example:
```svelte
<script>
let { data } = $props();
let count = $state(0);
let doubled = $derived(count * 2);
</script>

{#if count > 0}
  <p>{doubled}</p>
{/if}
```

### File Extensions
- `.svelte` - Svelte components
- `.svx` - Markdown files processed by MDSvEx (can be used as routes)

### Project Structure
- `src/routes/` - File-based routing (SvelteKit convention)
- `src/lib/` - Importable code via `$lib` alias
- `static/` - Static assets served at root `/`
- `src/app.html` - HTML template

### Styling
- TailwindCSS 4.x is configured as a Vite plugin (no `tailwind.config.js` file)
- DaisyUI is available for pre-built components
- Global styles are in `src/routes/layout.css` (imported in root layout)

### Icons
- Use `@lucide/svelte` for icons
- Example: `import { Menu, X } from '@lucide/svelte';`

### Type Checking
- Uses JSDoc type annotations (not TypeScript)
- Configured via `jsconfig.json` with `checkJs: true`
- Run `pnpm run check` before committing

## Important Configuration

### Svelte Configuration (`svelte.config.js`)
- MDSvEx preprocessor enabled for `.svx` files
- Adapter-auto for deployment (supports Vercel, Netlify, etc.)

### Vite Configuration (`vite.config.js`)
- TailwindCSS Vite plugin
- SvelteKit plugin

### HTML Template (`src/app.html`)
- Preloading enabled: `data-sveltekit-preload-data="hover"`

## Svelte MCP Server

You are able to use the Svelte MCP server, which provides comprehensive Svelte 5 and SvelteKit documentation.

### Available MCP Tools:

1. **list-sections** - Discover all available documentation sections with use_cases
2. **get-documentation** - Retrieve full documentation for specific sections
3. **svelte-autofixer** - Analyze and fix Svelte code issues (MUST use before sending Svelte code to user)
4. **playground-link** - Generate Svelte Playground links (ask user first, never for code written to project files)

When working with Svelte code:
- ALWAYS use `svelte-autofixer` before sending code to the user
- Keep calling it until no issues or suggestions are returned
