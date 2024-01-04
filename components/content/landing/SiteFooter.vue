<script setup lang="ts">
const date = new Date().getFullYear()
</script>

<template>
  <footer class="group/footer relative overflow-hidden w-full px-4 pt-16 font-sans bg-muted-50 dark:bg-muted-950">
    <div class="absolute -top-6 -left-6 h-14 w-0 group-hover/footer:w-72 origin-top-left rotate-45 bg-muted-200/60 dark:bg-muted-900 rounded-full transition-all duration-300 delay-[25ms]"></div>
    <div class="absolute -top-12 left-20 h-14 w-0 group-hover/footer:w-48 origin-top-left rotate-45 bg-muted-200/60 dark:bg-muted-900 rounded-full transition-all duration-300 delay-75"></div>
    <div class="absolute top-24 -left-7 h-14 w-0 group-hover/footer:w-40 origin-top-left rotate-45 bg-muted-200/60 dark:bg-muted-900 rounded-full transition-all duration-300 delay-150"></div>

    <div class="absolute -bottom-6 -right-6 h-14 w-0 group-hover/footer:w-72 origin-bottom-right rotate-45 bg-muted-200/60 dark:bg-muted-900 rounded-full transition-all duration-300 delay-150"></div>
    <div class="absolute -bottom-12 right-20 h-14 w-0 group-hover/footer:w-48 origin-bottom-right rotate-45 bg-muted-200/60 dark:bg-muted-900 rounded-full transition-all duration-300 delay-75"></div>
    <div
      class="absolute bottom-24 -right-7 h-14 w-0 group-hover/footer:w-40 origin-bottom-right rotate-45 bg-muted-200/60 dark:bg-muted-900 rounded-full transition-all duration-300 delay-[25ms]"
    ></div>

    <div class="relative w-full max-w-7xl mx-auto">
      <div class="flex flex-col w-full gap-16 pb-16">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-y-6">
          <div class="flex items-start flex-col">
            <div class="w-36">
              <LogoText class="text-muted-400 dark:text-muted-100" />
            </div>
            <BaseParagraph size="sm" class="mt-3 max-w-sm text-muted-600 dark:text-muted-400"
              >Shuriken UI is a finely crafted set of components for Nuxt, React and HTML. It provides everything you need to build a modern web application.</BaseParagraph
            >
          </div>
          <div class="flex flex-col gap-2">
            <BaseInput icon="lucide:mail" rounded="md" placeholder="Email Address" />
            <BaseButton color="none" rounded="md" class="bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white">Subscribe</BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap gap-12">
          <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
            <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">Shuriken UI</BaseHeading>
            <ul class="flex flex-col gap-3 font-normal">
              <li>
                <NuxtLink to="/home" class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs" class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">
                  Documentation
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/nuxt"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Nuxt version
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/next"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  React version
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/tailwind"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Html version
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">
                  Licensing
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="flex flex-1 flex-col gap-10">
            <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
              <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">Github</BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    Organization
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui/nuxt"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    @shuriken-ui/nuxt
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui/react"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    @shuriken-ui/react
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui/tailwind"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    @shuriken-ui/tailwind
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
              <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">NPM</BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://www.npmjs.com/package/@shuriken-ui/nuxt"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    @shuriken-ui/nuxt
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://www.npmjs.com/package/@shuriken-ui/tailwind"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    @shuriken-ui/tailwind
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
            <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">Tools</BaseHeading>
            <ul class="flex flex-col gap-3 font-normal">
              <li>
                <NuxtLink
                  to="/playground"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Playground
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/changelog"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Changelog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">
                  Figma UI Kit
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">
                  Storybook UI
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="flex flex-1 flex-col gap-10">
            <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
              <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">Resources</BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://nuxt.com/docs/getting-started/introduction"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    Nuxt documentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://react.dev/learn"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    React documentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    Next.js documentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://tailwindcss.com/docs/installation"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    Tailwind CSS
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
              <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">UI Themes</BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://tairo.cssninja.io"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    Tairo
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://apollux.cssninja.io"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                  >
                    Apollux
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex-1 flex flex-col gap-4 text-sm min-w-max">
            <BaseHeading as="h4" size="sm" weight="medium" class="uppercase">Css Ninja</BaseHeading>
            <ul class="flex flex-col gap-3 font-normal">
              <li>
                <NuxtLink
                  to="https://cssninja.io"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://cssninja.io/product"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Products
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://cssninja.io/company"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Company
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://cssninja.io/blog"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200"
                >
                  Latest News
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between flex-col md:flex-row gap-y-4 w-full text-sm font-normal py-8 border-t border-muted-200 dark:border-muted-800">
        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">&copy; Shuriken UI 2022-{{ date }}. All Rights Reserved</BaseParagraph>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">Made by <BaseLink to="https://cssninja.io" class="font-semibold">cssninja.io</BaseLink></BaseParagraph>
      </div>
    </div>
  </footer>
</template>
