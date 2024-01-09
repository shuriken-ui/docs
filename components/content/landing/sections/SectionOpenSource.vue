<template>
  <Section overflow-hidden>
    <div class="max-w-2xl mx-auto text-center">
      <BaseParagraph size="md" weight="semibold" class="text-primary-600">Open Source</BaseParagraph>
      <BaseHeading as="h2" size="3xl" weight="semibold" class="mt-4 sm:!text-4xl lg:!text-5xl tracking-light text-muted-900 dark:text-white">Shuriken UI is an Open Source project </BaseHeading>
      <BaseParagraph size="md" lead="relaxed" class="max-w-xl mx-auto mt-4 text-muted-600 dark:text-muted-400"
        >Shuriken UI is free and open source. It is distributed under the MIT license. You can use it for both personal and commercial projects.
      </BaseParagraph>
    </div>

    <div class="relative my-14">
      <div class="absolute -inset-2">
        <div class="w-full h-full mx-auto opacity-30 blur-lg filter bg-gradient-to-r from-primary-500 to-info-400"></div>
      </div>

      <div class="relative grid grid-cols-1 gap-6 lg:gap-10 sm:grid-cols-2 ltablet:grid-cols-3 lg:grid-cols-3">
        <BaseCard color="white-contrast" rounded="lg" shadow="flat">
          <div class="p-6 lg:p-8 lg:py-10">
            <div class="flex justify-start flex-shrink-0 -space-x-4">
              <div class="inline-flex items-center justify-center bg-muted-900 rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950">
                <Icon name="logos:tailwindcss-icon" class="w-6 h-6 text-white" />
              </div>
              <div class="inline-flex items-center justify-center bg-muted-900 rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950">
                <Icon name="logos:react" class="w-6 h-6 text-white" />
              </div>
              <div class="inline-flex items-center justify-center bg-muted-900 rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950">
                <Icon name="logos:nuxt-icon" class="w-6 h-6 text-white" />
              </div>
              <div class="inline-flex items-center justify-center bg-muted-900 rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950">
                <Icon name="fa6-brands:github" class="w-8 h-8 text-white" />
              </div>
            </div>

            <BaseHeading as="h3" weight="semibold" size="xl" class="mt-11 text-muted-900 dark:text-white">Follow Shuriken UI</BaseHeading>
            <BaseParagraph size="md" lead="relaxed" class="mt-3 ltablet:!text-sm text-muted-600 dark:text-muted-400">Follow and star our repositories on Github to support Shuriken UI.</BaseParagraph>

            <BaseButton
              to="https://github.com/shuriken-ui"
              target="_blank"
              rel="noopener"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button w-full mt-8 gap-2 bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white"
            >
              <span>Follow on Github</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover/button:translate-x-2 transition-transform duration-300" />
            </BaseButton>
          </div>
        </BaseCard>

        <BaseCard color="white-contrast" rounded="lg" shadow="flat">
          <div class="p-6 lg:p-8 lg:py-10">
            <div class="flex justify-start flex-shrink-0 -space-x-4">
              <img
                class="inline-block rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950"
                src="https://avatars.githubusercontent.com/u/1094820?s=64&v=4"
                alt=""
              />
              <img
                class="inline-block rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950"
                src="https://avatars.githubusercontent.com/u/592534?s=64&v=4"
                alt=""
              />
              <img
                class="inline-block rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950"
                src="https://avatars.githubusercontent.com/u/86636408?s=64&v=4"
                alt=""
              />
              <div class="inline-flex items-center justify-center bg-muted-100 dark:bg-muted-900 rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950">
                <Icon name="lucide:plus" class="w-5 h-5 text-muted-900 dark:text-white" />
              </div>
            </div>

            <BaseHeading as="h3" weight="semibold" size="xl" class="mt-11 text-muted-900 dark:text-white">Become a contributor</BaseHeading>
            <BaseParagraph size="md" lead="relaxed" class="mt-3 ltablet:!text-sm text-muted-600 dark:text-muted-400">Submit your PR and contribute to the improvement of Shuriken UI.</BaseParagraph>

            <BaseButton
              to="https://github.com/shuriken-ui/tailwind/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button w-full mt-8 gap-2 bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white"
            >
              <span>Contribution Guide</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover/button:translate-x-2 transition-transform duration-300" />
            </BaseButton>
          </div>
        </BaseCard>

        <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="ptablet:col-span-2">
          <div class="p-6 lg:p-8 lg:py-10">
            <div class="flex justify-start flex-shrink-0 -space-x-4">
              <img class="inline-block rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950" src="/img/photo/avatars/30.jpg" alt="" />
              <img class="inline-block rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950" src="/img/photo/avatars/23.jpg" alt="" />
              <img class="inline-block rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950" src="/img/photo/avatars/18.jpg" alt="" />
              <div class="inline-flex items-center justify-center bg-muted-100 dark:bg-muted-900 rounded-full w-10 h-10 lg:w-14 lg:h-14 md:h-12 md:w-12 ring-2 ring-white dark:ring-muted-950">
                <Icon name="lucide:plus" class="w-5 h-5 text-muted-900 dark:text-white" />
              </div>
            </div>

            <BaseHeading as="h3" weight="semibold" size="xl" class="mt-11 text-muted-900 dark:text-white">Join our community</BaseHeading>
            <BaseParagraph size="md" lead="relaxed" class="mt-3 ltablet:!text-sm text-muted-600 dark:text-muted-400">Join our Discord server and get help from our community members.</BaseParagraph>

            <BaseButton
              to="https://go.cssninja.io/discord"
              target="_blank"
              rel="noopener"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button w-full mt-8 gap-2 bg-muted-900 hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800 text-white"
            >
              <Icon name="fa6-brands:discord" class="w-4 h-4" />
              <span>Join on Discord</span>
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>

    <div class="grid items-center grid-cols-1 text-center lg:text-left gap-y-10 lg:grid-cols-5">
      <div class="lg:col-span-2 lg:pe-8 xl:pe-24">
        <BaseHeading as="h3" size="2xl" weight="semibold">More resources</BaseHeading>
        <BaseParagraph size="md" lead="relaxed" class="mt-5 ltablet:max-w-2xl ltablet:mx-auto text-muted-600 dark:text-muted-400"
          >Make sure to check all available resources for Shuriken UI to help you get started, wether you simply want to use it or involve more by contributing.</BaseParagraph
        >
      </div>

      <div class="lg:col-span-3 lg:pl-8 xl:pl-24">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-6">
          <NuxtLink to="https://github.com/sponsors/cssninjaStudio" target="_blank" rel="noopener" class="group/link">
            <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100">
              <div class="px-8 py-6">
                <Icon name="system-uicons:coffee" class="w-12 h-12 mx-auto text-muted-900 dark:text-muted-100 lg:mx-0" />
                <BaseHeading as="h3" size="lg" weight="semibold" class="mt-8 lg:mt-12 text-muted-900 dark:text-white">Sponsor Us</BaseHeading>
                <BaseParagraph size="md" lead="relaxed" class="mt-4 ltablet:max-w-xs ltablet:mx-auto text-muted-700 dark:text-muted-400"
                  >Help us make Shuriken UI even better and earn a few perks.</BaseParagraph
                >
              </div>
            </BaseCard>
          </NuxtLink>

          <NuxtLink to="https://github.com/shuriken-ui/nuxt/blob/main/LICENSE.md" target="_blank" rel="noopener" class="group/link">
            <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100">
              <div class="px-8 py-6">
                <Icon name="system-uicons:graph-box" class="w-12 h-12 mx-auto text-muted-900 dark:text-muted-100 lg:mx-0" />
                <BaseHeading as="h3" size="lg" weight="semibold" class="mt-8 lg:mt-12 text-muted-900 dark:text-white">Licensing</BaseHeading>
                <BaseParagraph size="md" lead="relaxed" class="mt-4 ltablet:max-w-xs ltablet:mx-auto text-muted-700 dark:text-muted-400"
                  >Shuriken UI is distributed under the MIT license agreement.</BaseParagraph
                >
              </div>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Section>
</template>
