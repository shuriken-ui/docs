<script setup lang="ts">
const team = [
  {
    name: 'Helen Miller',
    role: 'UI/UX Designer',
    avatar: '/img/photo/avatars/42.jpg',
  },
  {
    name: 'Erik Michaels',
    role: 'Product Manager',
    avatar: '/img/photo/avatars/33.jpg',
  },
  {
    name: 'Lakisha Jackson',
    role: 'Project Manager',
    avatar: '/img/photo/avatars/50.jpg',
  },
  {
    name: 'Greg Pozinsky',
    role: 'Solution Architecht',
    avatar: '/img/photo/avatars/19.jpg',
  },
]
</script>

<template>
  <Section>
    <div class="max-w-2xl mx-auto text-center">
      <BaseParagraph size="md" weight="semibold" class="text-primary-600">Solid & Robust</BaseParagraph>
      <BaseHeading as="h2" size="3xl" weight="semibold" class="mt-4 sm:!text-4xl lg:!text-5xl tracking-light text-muted-900 dark:text-white"
        >Everything you need to build an outstanding app
      </BaseHeading>
    </div>

    <div class="grid grid-cols-1 mt-10 text-center md:mt-20 md:max-w-full sm:max-w-sm sm:mx-auto gap-y-16 ltablet:grid-cols-3 lg:grid-cols-3 md:gap-x-6 lg:gap-x-16 md:text-left">
      <div class="group/ui">
        <BaseHeading as="h3" size="2xl" weight="semibold" class="text-muted-900 dark:text-white">Customize components <br class="block" />to fit your needs </BaseHeading>
        <BaseParagraph size="md" lead="normal" class="mt-4 text-muted-700 dark:text-muted-400 ptablet:max-w-sm">Customize Shuriken UI components using built-in props and configuration options.</BaseParagraph>

        <div class="mt-10 mx-auto md:mx-0 w-full h-72 rounded-xl bg-muted-100 dark:bg-muted-800/40">
          <div class="h-full w-full flex items-end px-4 pt-4 overflow-hidden">
            <div class="relative flex flex-col h-full w-full max-w-[300px] mx-auto">
              <!--Regular card-->
              <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="text-start absolute top-6 start-0 group-hover/ui:-translate-x-full opacity-100 group-hover/ui:opacity-0 !duration-500 p-4 md:p-6">
                <div class="mb-8 flex items-center justify-between">
                  <BaseHeading size="md">Team</BaseHeading>
                  <Icon name="lucide:more-horizontal" class="w-4 h-4 text-muted-400" />
                </div>
                <div class="space-y-6">
                  <!--Loop-->
                  <div v-for="(member, index) in team" :key="member.name" class="flex items-center gap-2 transition-all duration-300">
                    <BaseAvatar :src="member.avatar" size="xs" />
                    <div>
                      <BaseHeading size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100">{{ member.name }}</BaseHeading>
                      <BaseParagraph size="xs" lead="none" class="text-muted-500 dark:text-muted-400">{{ member.role }}</BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <BaseButtonIcon size="sm" rounded="full" class="scale-90">
                        <Icon name="lucide:arrow-right" class="w-4 h-4" />
                      </BaseButtonIcon>
                    </div>
                  </div>
                </div>
              </BaseCard>
              <!--Customized card-->
              <BaseCard
                color="white-contrast"
                rounded="lg"
                shadow="flat"
                class="text-start absolute top-6 start-0 translate-x-full group-hover/ui:translate-x-0 opacity-0 group-hover/ui:opacity-100 !duration-500 p-4 md:p-6"
              >
                <div class="mb-8 flex items-center justify-between">
                  <BaseHeading size="md">Team</BaseHeading>
                  <Icon name="lucide:more-horizontal" class="w-4 h-4 text-muted-400" />
                </div>
                <div class="space-y-6">
                  <!--Loop-->
                  <div v-for="(member, index) in team" :key="member.name" class="flex items-center gap-2 transition-all duration-300">
                    <BaseAvatar :src="member.avatar" rounded="none" mask="blob" size="xs" />
                    <div>
                      <BaseHeading size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100">{{ member.name }}</BaseHeading>
                      <BaseParagraph size="xs" lead="none" class="text-muted-500 dark:text-muted-400">{{ member.role }}</BaseParagraph>
                    </div>
                    <div class="ms-auto">
                      <BaseButtonIcon size="sm" rounded="lg" class="scale-90">
                        <Icon name="lucide:arrow-right" class="w-4 h-4" />
                      </BaseButtonIcon>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
        <BaseParagraph size="md" lead="relaxed" class="mt-7 text-muted-700 dark:text-muted-400">
          Every component brings in its own set of props that allow you to customize its visual style, wether it is the size, the border radius, or the built in color schemes.
        </BaseParagraph>
      </div>

      <div class="group/ui">
        <BaseHeading as="h3" size="2xl" weight="semibold" class="text-muted-900 dark:text-white">Setup your own <br class="block" />custom color palette </BaseHeading>
        <BaseParagraph size="md" lead="normal" class="mt-4 text-muted-700 dark:text-muted-400 ptablet:max-w-sm">Implement your branding guidelines by setting a primary as well as support colors.</BaseParagraph>

        <div class="mt-10 mx-auto md:mx-0 w-full h-72 rounded-xl bg-muted-100 dark:bg-muted-800/40">
          <div class="h-full w-full flex items-end px-4 pt-4 overflow-hidden">
            <div class="relative flex flex-col w-full max-w-[320px] mx-auto">
              <!--Regular card-->
              <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="relative text-start p-4 md:p-6 -mb-2">
                <span class="absolute top-3 end-3 flex h-3 w-3">
                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-muted-700 dark:bg-muted-800 group-hover/ui:!bg-primary-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-3 w-3 bg-muted-800 dark:bg-muted-600 group-hover/ui:!bg-primary-500"></span>
                </span>
                <div class="space-y-4">
                  <div class="flex items-center gap-2 transition-all duration-300">
                    <BaseIconBox
                      size="sm"
                      rounded="none"
                      mask="blob"
                      color="none"
                      class="bg-muted-100 dark:bg-muted-900 group-hover/ui:!bg-primary-500/10 group-hover/ui:!text-primary-500 text-muted-800 dark:text-muted-200 transition-colors duration-300"
                    >
                      <Icon name="ph:chat-teardrop-text-duotone" class="w-5 h-5" />
                    </BaseIconBox>
                    <div>
                      <BaseHeading size="sm" weight="medium" lead="tight" class="text-muted-800 dark:text-muted-100">Saved Reply</BaseHeading>
                      <BaseParagraph size="xs" lead="none" class="text-muted-500 dark:text-muted-400">Register a new saved reply</BaseParagraph>
                    </div>
                  </div>
                  <div>
                    <BaseTextarea contrast="muted-contrast" placeholder="The reply content..." rounded="md" :rows="4" />
                  </div>
                  <div class="mb-6">
                    <BaseButton size="md" color="none" rounded="md" class="w-full bg-muted-900 dark:bg-muted-950 group-hover/ui:!bg-primary-600 dark:group-hover/ui:!bg-primary-500 text-white">
                      <span>Save Reply</span>
                    </BaseButton>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
        <BaseParagraph size="md" lead="relaxed" class="mt-7 text-muted-700 dark:text-muted-400">
          Shuriken UI allows you to define a brand color that will be applied to all components. You can also defined the main gray shade and additional support colors.
        </BaseParagraph>
      </div>

      <div class="group/ui">
        <BaseHeading as="h3" size="2xl" weight="semibold" class="text-muted-900 dark:text-white">Dark mode native <br class="block" />component styling </BaseHeading>
        <BaseParagraph size="md" lead="normal" class="mt-4 text-muted-700 dark:text-muted-400 ptablet:max-w-sm">All components have native dark mode styling, meaning you don't need to worry about it.</BaseParagraph>

        <div class="mt-10 mx-auto md:mx-0 w-full h-72 rounded-xl bg-muted-100 dark:bg-muted-800/40 group-hover/ui:!bg-muted-900 dark:group-hover/ui:!bg-muted-100 transition-colors duration-300 overflow-hidden">
          <div class="h-full w-full flex items-end px-4 pt-4 overflow-hidden">
            <div class="relative flex flex-col w-full max-w-[420px] shrink-0 mx-auto ltablet:mx-0 lg:mx-0 ltablet:start-8 lg:start-8">
              <!--Regular card-->
              <BaseCard
                color="white-contrast"
                rounded="lg"
                shadow="flat"
                class="text-start p-4 md:p-6 -mb-14 space-y-6 group-hover/ui:!bg-muted-950 group-hover/ui:!border-muted-800 dark:group-hover/ui:!bg-white dark:group-hover/ui:!border-muted-300"
              >
                <div class="flex gap-3 mt-4">
                  <BaseAvatar src="/img/photo/avatars/29.jpg" size="xs" />
                  <div class="flex flex-col gap-2">
                    <BaseHeading size="sm" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100 group-hover/ui:!text-white dark:group-hover/ui:!text-muted-800"
                      >Christina Chu</BaseHeading
                    >
                    <BaseParagraph lead="snug" class="!text-[0.8rem] text-muted-600 dark:text-muted-200 group-hover/ui:!text-muted-200 dark:group-hover/ui:!text-muted-600"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas?</BaseParagraph
                    >
                    <div class="flex items-center gap-2 text-muted-400">
                      <BaseText size="xs">7 hours ago</BaseText>
                      <span>&middot;</span>
                      <BaseText size="xs">Reply</BaseText>
                    </div>
                  </div>
                </div>
                <div class="flex gap-3 ps-10">
                  <BaseAvatar src="/img/photo/avatars/44.jpg" size="xs" />
                  <div class="flex flex-col gap-2">
                    <BaseHeading size="sm" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100 group-hover/ui:!text-white dark:group-hover/ui:!text-muted-800"
                      >Anna Lopez</BaseHeading
                    >
                    <BaseParagraph lead="snug" class="!text-[0.8rem] text-muted-600 dark:text-muted-200 group-hover/ui:!text-muted-200 dark:group-hover/ui:!text-muted-600"
                      >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estne, quaeso, inquam, sitienti in bibendo voluptas?</BaseParagraph
                    >
                    <div class="flex items-center gap-2 text-muted-400">
                      <BaseText size="xs">7 hours ago</BaseText>
                      <span>&middot;</span>
                      <BaseText size="xs">Reply</BaseText>
                    </div>
                  </div>
                </div>
              </BaseCard>
            </div>
          </div>
        </div>
        <BaseParagraph size="md" lead="relaxed" class="mt-7 text-muted-700 dark:text-muted-400">
          Dark mode has become prevalent in modern web design, and Shuriken UI provides a native dark mode styling for all components, as well as dark mode contrast options.
        </BaseParagraph>
      </div>
    </div>
  </Section>
</template>
