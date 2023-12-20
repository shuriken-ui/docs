<template>
  <div class="bg-muted-50 dark:bg-muted-900 min-h-screen">
    <div class="w-full border-b border-muted-200 dark:border-muted-800 px-4">
      <div class="h-16 w-full max-w-7xl mx-auto flex items-center justify-between lg:px-6">
        <div class="w-1/5 shrink-0 flex items-center gap-2">
          <NuxtLink to="/" class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
            <Icon name="fa6-brands:github" class="w-5 h-5" />
          </NuxtLink>
          <NuxtLink to="/" class="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted-100 dark:hover:bg-muted-800 transition-colors duration-300">
            <Icon name="ri:twitter-x-fill" class="w-4 h-4" />
          </NuxtLink>
        </div>
        <div class="grow flex items-center justify-center">
          <NuxtLink to="/" class="text-muted-600 dark:text-muted-100 hover:text-primary-800 dark:hover:text-primary-500 transition-colors duration-300">
            <LogoText class="h-8 w-auto hidden md:block" />
            <Logo class="h-10 w-auto block md:hidden" />
          </NuxtLink>
        </div>
        <div class="w-1/5 shrink-0 flex items-center justify-end">
          <BaseThemeSwitch />
        </div>
      </div>
    </div>
    <div class="pt-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center mb-6">
        <h1 class="px-6 text-sm font-medium text-muted-600 dark:text-muted-400 uppercase">Documentation</h1>
        <p class="mt-5 text-4xl font-light leading-tight text-muted-900 dark:text-muted-100 sm:leading-tight sm:text-4xl lg:text-4xl lg:leading-tight">Select a Framework</p>
      </div>

      <div class="w-full py-10">
        <div class="grid grid-cols-1 md:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3 gap-5">
          <div class="group/stack relative p-0.5">
            <span class="bg-gradient-to-r from-primary-500 to-info-400 blur-lg filter opacity-0 group-hover/stack:opacity-30 w-full h-full absolute inset-0 transition-opacity duration-500"></span>
            <NuxtLink to="/docs/nuxt">
              <BaseCard color="white-contrast" rounded="md" class="p-6 !border-muted-300 dark:!border-muted-800">
                <DiagramNuxt class="grayscale opacity-40 group-hover/stack:grayscale-0 group-hover/stack:opacity-100 transition-all duration-300" />
                <div class="mt-4">
                  <h3 class="font-sans font-medium text-lg mb-1 text-muted-800 dark:text-muted-100">Nuxt</h3>
                  <p class="font-alt text-sm ltablet:text-xs text-muted-500 dark:text-muted-400">
                    Shuriken UI/Nuxt is a layer on top of Shuriken/Tailwind that provides a set of components and directives to work with Nuxt.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
          <div class="group/stack relative p-0.5">
            <span class="bg-gradient-to-r from-primary-500 to-info-400 blur-lg filter opacity-0 group-hover/stack:opacity-30 w-full h-full absolute inset-0 transition-opacity duration-500"></span>
            <NuxtLink to="/docs/next">
              <BaseCard color="white-contrast" rounded="md" class="p-6 !border-muted-300 dark:!border-muted-800">
                <DiagramNext class="grayscale opacity-40 group-hover/stack:grayscale-0 group-hover/stack:opacity-100 transition-all duration-300" />
                <div class="mt-4">
                  <h3 class="font-sans font-medium text-lg mb-1 text-muted-800 dark:text-muted-100">Next.js</h3>
                  <p class="font-alt text-sm ltablet:text-xs text-muted-500 dark:text-muted-400">
                    Shuriken UI/Next is a plugin built on top of Shuriken/Tailwind that provides a set of components and directives to work with Next.js.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
          <div class="group/stack relative p-0.5">
            <span class="bg-gradient-to-r from-primary-500 to-info-400 blur-lg filter opacity-0 group-hover/stack:opacity-30 w-full h-full absolute inset-0 transition-opacity duration-500"></span>
            <NuxtLink to="/docs/tailwind">
              <BaseCard color="white-contrast" rounded="md" class="p-6 !border-muted-300 dark:!border-muted-800">
                <DiagramTailwind class="grayscale opacity-40 group-hover/stack:grayscale-0 group-hover/stack:opacity-100 transition-all duration-300" />
                <div class="mt-4">
                  <h3 class="font-sans font-medium text-lg mb-1 text-muted-800 dark:text-muted-100">Tailwind CSS</h3>
                  <p class="font-alt text-sm ltablet:text-xs text-muted-500 dark:text-muted-400">
                    Shuriken/Tailwind is built on top of Tailwind CSS and made to work everywhere. You don't need anything than the default Tailwind setup.
                  </p>
                </div>
              </BaseCard>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
