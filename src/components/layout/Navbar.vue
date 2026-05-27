<template>
  <header class="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6">
    <nav
      aria-label="Navegacion principal"
      class="mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.035] px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6"
    >
      <a
        href="/"
        aria-label="Andy Orozco, pagina principal"
        class="group flex items-center gap-3 focus-visible:rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
      >
        <span
          class="grid size-10 place-items-center rounded-xl border border-brand-violet/35 bg-brand-violet/10 text-sm font-semibold tracking-wider text-foreground transition-colors group-hover:border-brand-magenta/45"
        >
          AO
        </span>
        <span class="hidden flex-col leading-tight sm:flex">
          <span class="text-sm font-semibold tracking-wide text-foreground">Andy Orozco</span>
          <span class="text-xs text-muted">Portfolio</span>
        </span>
      </a>

      <a
        href="#contenido"
        class="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-muted transition-colors hover:border-brand-violet/40 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-violet"
      >
        Inicio
      </a>
    </nav>
  </header>
</template>
