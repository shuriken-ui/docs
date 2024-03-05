import type { BaseParagraph } from '#build/components'; import type { BaseHeading } from '#build/components';

<script setup lang="ts">
const customers = [
  {
    name: 'Daniel Wilson',
    email: 'danielwilson@gmail.com',
    avatar: '/img/photo/avatars/25.jpg',
    location: 'San Francisco',
    spent: 4100.37,
  },
  {
    name: 'Sophie Anderson',
    email: 'sophieanderson@gmail.com',
    avatar: '/img/photo/avatars/17.jpg',
    location: 'Chicago',
    spent: 3400.99,
  },
  {
    name: 'Olivia Thompson',
    email: 'oliviathompson@gmail.com',
    avatar: '/img/photo/avatars/32.jpg',
    location: 'Seattle',
    spent: 2900.67,
  },
  {
    name: 'Malik Martin',
    email: 'malikmartin@gmail.com',
    avatar: '/img/photo/avatars/51.jpg',
    location: 'New York',
    spent: 2789.72,
  },
  {
    name: 'David Smith',
    email: 'davidsmith@gmail.com',
    avatar: '/img/photo/avatars/55.jpg',
    location: 'Houston',
    spent: 2000.85,
  },
  {
    name: 'Michael Johnson',
    email: 'mikejohnson@gmail.com',
    avatar: '/img/photo/avatars/16.jpg',
    location: 'Los Angeles',
    spent: 1500.25,
  },
]
</script>

<template>
  <Section>
    <div class="grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-7 ltablet:grid-cols-7 ltablet:gap-x-16">
      <div class="grid place-items-end overflow-hidden rounded-3xl lg:col-span-3 ltablet:col-span-4">
        <div class="group/ui flex h-full w-full items-end justify-center bg-muted-100 px-3 pt-3 dark:bg-muted-800/40 ptablet:pt-6">
          <div class="mx-auto flex w-full max-w-sm flex-col gap-6">
            <BaseCard
              color="none"
              rounded="lg"
              shadow="flat"
              class="relative z-10 bg-muted-900 p-4 group-hover/ui:-translate-x-4 dark:bg-muted-950"
            >
              <div class="flex items-center justify-between gap-4">
                <div class="flex items-center space-x-2">
                  <BaseAvatar src="/img/photo/avatars/29.jpg" size="sm" />
                  <div>
                    <BaseHeading
                      as="h3"
                      size="md"
                      weight="medium"
                      lead="tight"
                      class="text-white"
                    >
                      Christina Chu
                    </BaseHeading>
                    <BaseParagraph
                      size="xs"
                      class="text-muted-300"
                      lead="tight"
                    >
                      Sales Manager
                    </BaseParagraph>
                  </div>
                </div>

                <div class="flex items-center space-x-2">
                  <Icon name="lucide:shopping-cart" class="h-4 w-4 text-muted-100" />
                  <BaseText
                    size="sm"
                    weight="medium"
                    lead="none"
                    class="text-muted-100"
                  >
                    261
                  </BaseText>
                </div>
              </div>
            </BaseCard>
            <BaseCard
              color="default-contrast"
              rounded="lg"
              shadow="flat"
              class="group/ui-card relative z-10 -mb-16 p-4 group-hover/ui:translate-x-4 md:p-6"
            >
              <div class="mb-8 flex items-center justify-between">
                <BaseHeading
                  as="h3"
                  size="md"
                  weight="semibold"
                  lead="tight"
                  class="text-muted-800 dark:text-muted-100"
                >
                  Top Customers
                </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
                  <BaseLink to="/">
                    View All
                  </BaseLink>
                </BaseParagraph>
              </div>
              <div class="space-y-6">
                <!--Loop-->
                <div
                  v-for="customer in customers"
                  :key="customer.name"
                  class="flex items-center gap-3 transition-all duration-300"
                >
                  <BaseAvatar :src="customer.avatar" size="xs" />
                  <div>
                    <BaseHeading
                      size="sm"
                      weight="medium"
                      lead="tight"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      {{ customer.name }}
                    </BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                      {{ customer.email }}
                    </BaseParagraph>
                  </div>
                  <div class="ms-auto text-end">
                    <BaseHeading
                      as="p"
                      size="sm"
                      class="text-muted-800 dark:text-muted-100"
                    >
                      ${{ customer.spent }}
                    </BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">
                      {{ customer.location }}
                    </BaseParagraph>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>

      <div class="lg:col-span-4 xl:pe-24 ltablet:col-span-3">
        <div class="max-w-lg lg:max-w-none">
          <BaseParagraph
            size="md"
            weight="semibold"
            class="text-primary-600"
          >
            Modern Design
          </BaseParagraph>
          <BaseHeading
            as="h2"
            size="3xl"
            weight="semibold"
            class="tracking-light mt-6 text-muted-900 dark:text-white sm:!text-4xl lg:mt-8 lg:pe-8 lg:!text-5xl"
          >
            Create modern web interfaces with limitless possibilities.
          </BaseHeading>
          <div class="mt-8">
            <BaseButton
              to="/docs/guide"
              size="lg"
              color="none"
              rounded="lg"
              class="group/button w-full bg-muted-900 text-white hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 sm:w-64"
            >
              <span>Get Started</span>
              <Icon name="lucide:arrow-right" class="h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-2" />
            </BaseButton>
          </div>
        </div>

        <div class="mt-12 border-t border-muted-200 pt-8 dark:border-muted-800 md:mt-16 xl:mt-24">
          <BaseParagraph
            size="xs"
            weight="medium"
            lead="normal"
            class="mb-3 uppercase text-muted-500 xl:pe-24"
          >
            Shuriken UI is available for
          </BaseParagraph>
          <div class="flex items-center gap-6 md:gap-8">
            <!-- Item -->
            <div class="block text-center">
              <div class="mb-1 flex h-16 w-16 items-center justify-center rounded-full border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-muted-200 dark:border-muted-700">
                  <Icon name="logos:nuxt-icon" class="relative h-7 w-7 opacity-60 grayscale" />
                </div>
              </div>
              <BaseText
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-400"
              >
                Nuxt
              </BaseText>
            </div>
            <!-- Item -->
            <div class="block text-center">
              <div class="mb-1 flex h-16 w-16 items-center justify-center rounded-full border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-muted-200 dark:border-muted-700">
                  <Icon name="logos:react" class="relative h-7 w-7 opacity-60 grayscale" />
                </div>
              </div>
              <BaseText
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-400"
              >
                React
              </BaseText>
            </div>
            <!-- Item -->
            <div class="block text-center">
              <div class="mb-1 flex h-16 w-16 items-center justify-center rounded-full border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-muted-200 dark:border-muted-700">
                  <Icon name="logos:nextjs-icon" class="relative h-7 w-7 opacity-60 grayscale" />
                </div>
              </div>
              <BaseText
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-400"
              >
                Next.js
              </BaseText>
            </div>
            <!-- Item -->
            <div class="block text-center">
              <div class="mb-1 flex h-16 w-16 items-center justify-center rounded-full border border-muted-200 bg-white dark:border-muted-700 dark:bg-muted-800">
                <div class="flex h-14 w-14 items-center justify-center rounded-full border-2 border-muted-200 dark:border-muted-700">
                  <Icon name="vscode-icons:file-type-html" class="relative h-7 w-7 opacity-60 grayscale" />
                </div>
              </div>
              <BaseText
                size="sm"
                weight="medium"
                class="text-muted-500 dark:text-muted-400"
              >
                Html
              </BaseText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
