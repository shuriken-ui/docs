<script setup lang="ts">
const date = new Date().getFullYear()
const appConfig = useAppConfig()
</script>

<template>
  <footer class="group/footer relative z-0 w-full overflow-hidden bg-muted-50 px-4 pt-16 font-sans dark:bg-muted-950">
    <div class="absolute -left-6 -top-6 h-14 w-0 origin-top-left rotate-45 rounded-full bg-muted-200/60 transition-all delay-[25ms] duration-300 group-hover/footer:w-72 dark:bg-muted-900" />
    <div class="absolute -top-12 left-20 h-14 w-0 origin-top-left rotate-45 rounded-full bg-muted-200/60 transition-all delay-75 duration-300 group-hover/footer:w-48 dark:bg-muted-900" />
    <div class="absolute -left-7 top-24 h-14 w-0 origin-top-left rotate-45 rounded-full bg-muted-200/60 transition-all delay-150 duration-300 group-hover/footer:w-40 dark:bg-muted-900" />

    <div class="absolute -bottom-6 -right-6 h-14 w-0 origin-bottom-right rotate-45 rounded-full bg-muted-200/60 transition-all delay-150 duration-300 group-hover/footer:w-72 dark:bg-muted-900" />
    <div class="absolute -bottom-12 right-20 h-14 w-0 origin-bottom-right rotate-45 rounded-full bg-muted-200/60 transition-all delay-75 duration-300 group-hover/footer:w-48 dark:bg-muted-900" />
    <div
      class="absolute -right-7 bottom-24 h-14 w-0 origin-bottom-right rotate-45 rounded-full bg-muted-200/60 transition-all delay-[25ms] duration-300 group-hover/footer:w-40 dark:bg-muted-900"
    />

    <div class="relative mx-auto w-full max-w-7xl">
      <div class="flex w-full flex-col gap-16 pb-16">
        <div class="flex flex-col gap-y-6 md:flex-row md:items-center md:justify-between">
          <div class="flex flex-col items-start">
            <div class="w-36">
              <LogoText class="text-muted-400 dark:text-muted-100" />
            </div>
            <BaseParagraph
              size="sm"
              class="mt-3 max-w-sm text-muted-600 dark:text-muted-400"
            >
              Shuriken UI is a finely crafted set of components for Nuxt, React and HTML. It provides everything you need to build a modern web application.
            </BaseParagraph>
          </div>
          <div class="flex flex-col gap-2">
            <BaseInput
              icon="lucide:mail"
              rounded="md"
              placeholder="Email Address"
            />
            <BaseButton
              color="none"
              rounded="md"
              class="bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800"
            >
              Subscribe
            </BaseButton>
          </div>
        </div>
        <div class="flex flex-wrap gap-12">
          <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="uppercase"
            >
              Shuriken UI
            </BaseHeading>
            <ul class="flex flex-col gap-3 font-normal">
              <li>
                <NuxtLink to="/" class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400">
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/docs/guide" class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400">
                  Guide
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/docs/reference"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Reference
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://github.com/shuriken-ui/nuxt/blob/main/LICENSE.md"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  MIT License
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="flex flex-1 flex-col gap-10">
            <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="uppercase"
              >
                Github
              </BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    Organization
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui/nuxt"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    @shuriken-ui/nuxt
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui/react"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    @shuriken-ui/react
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://github.com/shuriken-ui/tailwind"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    @shuriken-ui/tailwind
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="uppercase"
              >
                NPM
              </BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://www.npmjs.com/package/@shuriken-ui/nuxt"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    @shuriken-ui/nuxt
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://www.npmjs.com/package/@shuriken-ui/tailwind"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    @shuriken-ui/tailwind
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="uppercase"
            >
              Tools
            </BaseHeading>
            <ul class="flex flex-col gap-3 font-normal">
              <li>
                <NuxtLink
                  to="/playground"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Playground
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="/blog"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Blog
                </NuxtLink>
              </li>
              <!--li>
                <NuxtLink to="#" class="text-muted-500 dark:text-muted-400 hover:text-primary-600 dark:hover:text-primary-400 hover:underline underline-offset-4 transition-colors duration-200">
                  Figma UI Kit
                </NuxtLink>
              </li-->
              <li>
                <NuxtLink
                  :to="`${appConfig.storybookUrl}?path=/docs/shuriken-ui-base-accordion--docs`"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Storybook UI
                </NuxtLink>
              </li>
            </ul>
          </div>

          <div class="flex flex-1 flex-col gap-10">
            <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="uppercase"
              >
                Resources
              </BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://nuxt.com/docs/getting-started/introduction"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    Nuxt documentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://react.dev/learn"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    React documentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://nextjs.org/docs"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    Next.js documentation
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://tailwindcss.com/docs/installation"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    Tailwind CSS
                  </NuxtLink>
                </li>
              </ul>
            </div>
            <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
              <BaseHeading
                as="h4"
                size="sm"
                weight="medium"
                class="uppercase"
              >
                UI Themes
              </BaseHeading>
              <ul class="flex flex-col gap-3 font-normal">
                <li>
                  <NuxtLink
                    to="https://tairo.cssninja.io"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    Tairo
                  </NuxtLink>
                </li>
                <li>
                  <NuxtLink
                    to="https://apollux.cssninja.io"
                    target="_blank"
                    rel="noopener"
                    class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                  >
                    Apollux
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <div class="flex min-w-max flex-1 flex-col gap-4 text-sm">
            <BaseHeading
              as="h4"
              size="sm"
              weight="medium"
              class="uppercase"
            >
              Css Ninja
            </BaseHeading>
            <ul class="flex flex-col gap-3 font-normal">
              <li>
                <NuxtLink
                  to="https://cssninja.io"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Home
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://cssninja.io/product"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Products
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://cssninja.io/company"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Company
                </NuxtLink>
              </li>
              <li>
                <NuxtLink
                  to="https://cssninja.io/blog"
                  target="_blank"
                  rel="noopener"
                  class="text-muted-500 underline-offset-4 transition-colors duration-200 hover:text-primary-600 hover:underline dark:text-muted-400 dark:hover:text-primary-400"
                >
                  Latest News
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="flex w-full flex-col items-center justify-between gap-y-4 border-t border-muted-200 py-8 text-sm font-normal dark:border-muted-800 md:flex-row">
        <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
          &copy; Shuriken UI 2022-{{ date }}. All Rights Reserved
        </BaseParagraph>
        <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
          Made by <BaseLink to="https://cssninja.io" class="font-semibold">
            cssninja.io
          </BaseLink>
        </BaseParagraph>
      </div>
    </div>
  </footer>
</template>
