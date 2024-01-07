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
    <div class="grid grid-cols-1 ltablet:grid-cols-7 lg:grid-cols-7 ltablet:gap-x-16 gap-x-20 gap-y-12">
      <div class="grid overflow-hidden ltablet:col-span-4 lg:col-span-3 rounded-3xl place-items-end">
        <div class="group/ui flex items-end justify-center h-full w-full px-3 pt-3 ptablet:pt-6 bg-muted-100 dark:bg-muted-800/40">
          <div class="w-full max-w-sm mx-auto flex flex-col gap-6">
            <BaseCard color="none" rounded="lg" shadow="flat" class="relative bg-muted-900 dark:bg-muted-950 p-4 z-10 group-hover/ui:-translate-x-4">
              <div class="flex justify-between items-center gap-4">
                <div class="flex items-center space-x-2">
                  <BaseAvatar src="/img/photo/avatars/29.jpg" size="sm" />
                  <div>
                    <BaseHeading as="h3" size="md" weight="medium" lead="tight" class="text-white"> Christina Chu </BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-300" lead="tight">Sales Manager</BaseParagraph>
                  </div>
                </div>

                <div class="flex items-center space-x-2">
                  <Icon name="lucide:shopping-cart" class="w-4 h-4 text-muted-100" />
                  <BaseText size="sm" weight="medium" lead="none" class="text-muted-100">261</BaseText>
                </div>
              </div>
            </BaseCard>
            <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="group/ui-card relative p-4 md:p-6 z-10 -mb-16 group-hover/ui:translate-x-4">
              <div class="flex items-center justify-between mb-8">
                <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100"> Top Customers </BaseHeading>
                <BaseParagraph size="sm" class="text-muted-500 dark:text-muted-400">
                  <BaseLink to="/">View All</BaseLink>
                </BaseParagraph>
              </div>
              <div class="space-y-6">
                <!--Loop-->
                <div v-for="(customer, index) in customers" :key="customer.name" class="flex items-center gap-3 transition-all duration-300">
                  <BaseAvatar :src="customer.avatar" size="xs" />
                  <div>
                    <BaseHeading size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100">{{ customer.name }}</BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">{{ customer.email }}</BaseParagraph>
                  </div>
                  <div class="ms-auto text-end">
                    <BaseHeading as="p" size="sm" class="text-muted-800 dark:text-muted-100">${{ customer.spent }}</BaseHeading>
                    <BaseParagraph size="xs" class="text-muted-500 dark:text-muted-400">{{ customer.location }}</BaseParagraph>
                  </div>
                </div>
              </div>
            </BaseCard>
          </div>
        </div>
      </div>

      <div class="ltablet:col-span-3 lg:col-span-4 xl:pe-24">
        <div class="max-w-lg lg:max-w-none">
          <BaseParagraph size="md" weight="semibold" class="text-primary-600">Modern Design</BaseParagraph>
          <BaseHeading as="h2" size="3xl" weight="semibold" class="mt-6 sm:!text-4xl lg:mt-8 lg:!text-5xl lg:pe-8 tracking-light text-muted-900 dark:text-white"
            >Create modern web interfaces with limitless possibilities.</BaseHeading
          >
          <div class="mt-8">
            <BaseButton to="/docs" size="lg" color="none" rounded="lg" class="group/button w-full sm:w-64 bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white">
              <span>Get Started</span>
              <Icon name="lucide:arrow-right" class="w-4 h-4 group-hover/button:translate-x-2 transition-transform duration-300" />
            </BaseButton>
          </div>
        </div>

        <div class="pt-8 mt-12 border-t border-muted-200 dark:border-muted-800 md:mt-16 xl:mt-24">
          <BaseParagraph size="xs" weight="medium" lead="normal" class="uppercase text-muted-500 xl:pe-24 mb-3">Shuriken UI is available for</BaseParagraph>
          <div class="flex items-center gap-6 md:gap-8">
            <!-- Item -->
            <div class="block text-center">
              <div class="flex items-center justify-center h-16 w-16 mb-1 border border-muted-200 dark:border-muted-700 rounded-full bg-white dark:bg-muted-800">
                <div class="flex items-center justify-center h-14 w-14 border-muted-200 dark:border-muted-700 border-2 rounded-full">
                  <Icon name="logos:nuxt-icon" class="relative w-7 h-7 grayscale opacity-60" />
                </div>
              </div>
              <BaseText size="sm" weight="medium" class="text-muted-500 dark:text-muted-400">Nuxt</BaseText>
            </div>
            <!-- Item -->
            <div class="block text-center">
              <div class="flex items-center justify-center h-16 w-16 mb-1 border border-muted-200 dark:border-muted-700 rounded-full bg-white dark:bg-muted-800">
                <div class="flex items-center justify-center h-14 w-14 border-muted-200 dark:border-muted-700 border-2 rounded-full">
                  <Icon name="logos:react" class="relative w-7 h-7 grayscale opacity-60" />
                </div>
              </div>
              <BaseText size="sm" weight="medium" class="text-muted-500 dark:text-muted-400">React</BaseText>
            </div>
            <!-- Item -->
            <div class="block text-center">
              <div class="flex items-center justify-center h-16 w-16 mb-1 border border-muted-200 dark:border-muted-700 rounded-full bg-white dark:bg-muted-800">
                <div class="flex items-center justify-center h-14 w-14 border-muted-200 dark:border-muted-700 border-2 rounded-full">
                  <Icon name="logos:nextjs-icon" class="relative w-7 h-7 grayscale opacity-60" />
                </div>
              </div>
              <BaseText size="sm" weight="medium" class="text-muted-500 dark:text-muted-400">Next.js</BaseText>
            </div>
            <!-- Item -->
            <div class="block text-center">
              <div class="flex items-center justify-center h-16 w-16 mb-1 border border-muted-200 dark:border-muted-700 rounded-full bg-white dark:bg-muted-800">
                <div class="flex items-center justify-center h-14 w-14 border-muted-200 dark:border-muted-700 border-2 rounded-full">
                  <Icon name="vscode-icons:file-type-html" class="relative w-7 h-7 grayscale opacity-60" />
                </div>
              </div>
              <BaseText size="sm" weight="medium" class="text-muted-500 dark:text-muted-400">Html</BaseText>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
</template>
