<template>
  <Section overflow-hidden>
    <div class="mx-auto max-w-2xl text-center">
      <BaseParagraph
        size="md"
        weight="semibold"
        class="text-primary-600"
      >
        Open Source
      </BaseParagraph>
      <BaseHeading
        as="h2"
        size="3xl"
        weight="semibold"
        class="tracking-light mt-4 text-muted-900 dark:text-white sm:!text-4xl lg:!text-5xl"
      >
        Shuriken UI is an Open Source project
      </BaseHeading>
      <BaseParagraph
        size="md"
        lead="relaxed"
        class="mx-auto mt-4 max-w-xl text-muted-600 dark:text-muted-400"
      >
        Shuriken UI is free and open source. It is distributed under the MIT license. You can use it for both personal and commercial projects.
      </BaseParagraph>
    </div>

    <div class="relative my-14">
      <div class="absolute -inset-2">
        <div class="mx-auto h-full w-full bg-gradient-to-r from-primary-500 to-info-400 opacity-30 blur-lg" />
      </div>

      <div class="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10 ltablet:grid-cols-3">
        <BaseCard
          color="default-contrast"
          rounded="lg"
          shadow="flat"
        >
          <div class="p-6 lg:p-8 lg:py-10">
            <div class="flex shrink-0 justify-start -space-x-4">
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted-900 ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14">
                <Icon name="logos:tailwindcss-icon" class="h-6 w-6 text-white" />
              </div>
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted-900 ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14">
                <Icon name="logos:react" class="h-6 w-6 text-white" />
              </div>
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted-900 ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14">
                <Icon name="logos:nuxt-icon" class="h-6 w-6 text-white" />
              </div>
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted-900 ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14">
                <Icon name="fa6-brands:github" class="h-8 w-8 text-white" />
              </div>
            </div>

            <BaseHeading
              as="h3"
              weight="semibold"
              size="xl"
              class="mt-11 text-muted-900 dark:text-white"
            >
              Follow Shuriken UI
            </BaseHeading>
            <BaseParagraph
              size="md"
              lead="relaxed"
              class="mt-3 text-muted-600 dark:text-muted-400 ltablet:!text-sm"
            >
              Follow and star our repositories on Github to support Shuriken UI.
            </BaseParagraph>

            <BaseButton
              to="https://github.com/shuriken-ui"
              target="_blank"
              rel="noopener"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button mt-8 w-full gap-2 bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800"
            >
              <span>Follow on Github</span>
              <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
            </BaseButton>
          </div>
        </BaseCard>

        <BaseCard
          color="default-contrast"
          rounded="lg"
          shadow="flat"
        >
          <div class="p-6 lg:p-8 lg:py-10">
            <div class="flex shrink-0 justify-start -space-x-4">
              <NuxtImg
                loading="lazy"
                decoding="async"
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="https://avatars.githubusercontent.com/u/1094820?s=64&v=4"
                alt=""
              />
              <NuxtImg
                loading="lazy"
                decoding="async"
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="https://avatars.githubusercontent.com/u/592534?s=64&v=4"
                alt=""
              />
              <NuxtImg
                loading="lazy"
                decoding="async"
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="https://avatars.githubusercontent.com/u/86636408?s=64&v=4"
                alt=""
              />
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted-100 ring-2 ring-white dark:bg-muted-900 dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14">
                <Icon name="lucide:plus" class="h-5 w-5 text-muted-900 dark:text-white" />
              </div>
            </div>

            <BaseHeading
              as="h3"
              weight="semibold"
              size="xl"
              class="mt-11 text-muted-900 dark:text-white"
            >
              Become a contributor
            </BaseHeading>
            <BaseParagraph
              size="md"
              lead="relaxed"
              class="mt-3 text-muted-600 dark:text-muted-400 ltablet:!text-sm"
            >
              Submit your PR and contribute to the improvement of Shuriken UI.
            </BaseParagraph>

            <BaseButton
              to="/docs/guide/advanced/contributing"
              target="_blank"
              rel="noopener"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button mt-8 w-full gap-2 bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800"
            >
              <span>Contribution Guide</span>
              <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
            </BaseButton>
          </div>
        </BaseCard>

        <BaseCard
          color="default-contrast"
          rounded="lg"
          shadow="flat"
          class="ptablet:col-span-2"
        >
          <div class="p-6 lg:p-8 lg:py-10">
            <div class="flex shrink-0 justify-start -space-x-4">
              <NuxtImg
                loading="lazy"
                decoding="async"
                format="webp"
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="/img/photo/avatars/30.jpg"
                alt=""
              />
              <NuxtImg
                loading="lazy"
                decoding="async"
                format="webp"
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="/img/photo/avatars/23.jpg"
                alt=""
              />
              <NuxtImg
                loading="lazy"
                decoding="async"
                format="webp"
                class="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14"
                src="/img/photo/avatars/18.jpg"
                alt=""
              />
              <div class="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted-100 ring-2 ring-white dark:bg-muted-900 dark:ring-muted-950 md:h-12 md:w-12 lg:h-14 lg:w-14">
                <Icon name="lucide:plus" class="h-5 w-5 text-muted-900 dark:text-white" />
              </div>
            </div>

            <BaseHeading
              as="h3"
              weight="semibold"
              size="xl"
              class="mt-11 text-muted-900 dark:text-white"
            >
              Join our community
            </BaseHeading>
            <BaseParagraph
              size="md"
              lead="relaxed"
              class="mt-3 text-muted-600 dark:text-muted-400 ltablet:!text-sm"
            >
              Join our Discord server and get help from our community members.
            </BaseParagraph>

            <BaseButton
              to="https://go.cssninja.io/discord"
              target="_blank"
              rel="noopener"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button mt-8 w-full gap-2 bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-900 dark:hover:bg-muted-800"
            >
              <Icon name="fa6-brands:discord" class="h-4 w-4" />
              <span>Join on Discord</span>
            </BaseButton>
          </div>
        </BaseCard>
      </div>
    </div>

    <div class="grid grid-cols-1 items-center gap-y-10 text-center lg:grid-cols-5 lg:text-left">
      <div class="lg:col-span-2 lg:pe-8 xl:pe-24">
        <BaseHeading
          as="h3"
          size="2xl"
          weight="semibold"
        >
          More resources
        </BaseHeading>
        <BaseParagraph
          size="md"
          lead="relaxed"
          class="mt-5 text-muted-600 dark:text-muted-400 ltablet:mx-auto ltablet:max-w-2xl"
        >
          Make sure to check all available resources for Shuriken UI to help you get started, wether you simply want to use it or involve more by contributing.
        </BaseParagraph>
      </div>

      <div class="lg:col-span-3 lg:pl-8 xl:pl-24">
        <div class="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
          <NuxtLink
            to="https://github.com/sponsors/cssninjaStudio"
            target="_blank"
            rel="noopener"
            class="group/link"
          >
            <BaseCard
              color="default-contrast"
              rounded="lg"
              shadow="flat"
              class="group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100"
            >
              <div class="px-8 py-6">
                <Icon name="system-uicons:coffee" class="mx-auto h-12 w-12 text-muted-900 dark:text-muted-100 lg:mx-0" />
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="semibold"
                  class="mt-8 text-muted-900 dark:text-white lg:mt-12"
                >
                  Sponsor Us
                </BaseHeading>
                <BaseParagraph
                  size="md"
                  lead="relaxed"
                  class="mt-4 text-muted-700 dark:text-muted-400 ltablet:mx-auto ltablet:max-w-xs"
                >
                  Help us make Shuriken UI even better and earn a few perks.
                </BaseParagraph>
              </div>
            </BaseCard>
          </NuxtLink>

          <NuxtLink
            to="https://github.com/shuriken-ui/nuxt/blob/main/LICENSE.md"
            target="_blank"
            rel="noopener"
            class="group/link"
          >
            <BaseCard
              color="default-contrast"
              rounded="lg"
              shadow="flat"
              class="group-hover/link:!border-muted-900 dark:group-hover/link:!border-muted-100"
            >
              <div class="px-8 py-6">
                <Icon name="system-uicons:graph-box" class="mx-auto h-12 w-12 text-muted-900 dark:text-muted-100 lg:mx-0" />
                <BaseHeading
                  as="h3"
                  size="lg"
                  weight="semibold"
                  class="mt-8 text-muted-900 dark:text-white lg:mt-12"
                >
                  MIT License
                </BaseHeading>
                <BaseParagraph
                  size="md"
                  lead="relaxed"
                  class="mt-4 text-muted-700 dark:text-muted-400 ltablet:mx-auto ltablet:max-w-xs"
                >
                  Shuriken UI is distributed under the MIT license agreement.
                </BaseParagraph>
              </div>
            </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </Section>
</template>
