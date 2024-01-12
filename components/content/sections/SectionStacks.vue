<template>
  <Section overflow-hidden>
    <div class="mx-auto max-w-2xl text-center">
      <BaseParagraph
        size="md"
        weight="semibold"
        class="text-primary-600"
      >
        Works Everywhere
      </BaseParagraph>
      <BaseHeading
        as="h2"
        size="3xl"
        weight="semibold"
        class="tracking-light mt-4 text-muted-900 dark:text-white sm:!text-4xl lg:!text-5xl"
      >
        Made to work with your favorite tools
      </BaseHeading>
      <BaseParagraph
        size="md"
        lead="relaxed"
        class="mx-auto mt-4 max-w-xl text-muted-600 dark:text-muted-400"
      >
        Wether you go with the Nuxt/React version, or the HTML version, Shuriken UI is able to seamlessly blend in your development environment.
      </BaseParagraph>
    </div>
    <NuxtImg
      loading="lazy"
      decoding="async"
      class="mx-auto mt-12 block w-full min-w-full max-w-7xl scale-150 dark:hidden lg:mt-0 lg:min-w-0 lg:scale-100"
      src="/img/illustrations/stacks.svg"
      alt=""
    />
    <NuxtImg
      loading="lazy"
      decoding="async"
      class="mx-auto mt-12 hidden w-full min-w-full max-w-7xl scale-150 dark:block lg:mt-0 lg:min-w-0 lg:scale-100"
      src="/img/illustrations/stacks-dark.svg"
      alt=""
    />
  </Section>
</template>
