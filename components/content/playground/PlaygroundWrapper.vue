<script setup lang="ts">
const { rounded } = usePlayground()

const isPanelOpen = ref(false)
</script>

<template>
  <div class="relative pt-32 pb-16 bg-white dark:bg-muted-900">
    <div class="w-full max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-8">
          <div class="mt-3">
            <div class="space-y-20">
              <PlaygroundSample title="Avatar" component="Avatar" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAvatar />
              </PlaygroundSample>

              <PlaygroundSample title="Avatar Group" component="Avatar-Group" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAvatarGroup />
              </PlaygroundSample>

              <PlaygroundSample title="Accordion" component="Accordion" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAccordion />
              </PlaygroundSample>

              <PlaygroundSample title="Card" component="Card" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleCard />
              </PlaygroundSample>

              <PlaygroundSample title="Icon Box" component="Iconbox" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleIconBox />
              </PlaygroundSample>

              <PlaygroundSample title="List" component="List" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleList />
              </PlaygroundSample>
            </div>
          </div>
        </div>
        <div class="relative col-span-12 lg:col-span-4">
          <div class="relative h-full">
            <div class="sticky top-24">
              <PlaygroundPanel :open="isPanelOpen" @close="isPanelOpen = false" />
              <div class="fixed top-24 end-5 md:end-7 z-50 lg:hidden transition-transform duration-300" :class="!isPanelOpen ? 'translate-x-0' : 'translate-x-16'">
                <BaseButtonIcon size="sm" rounded="lg" @click="() => (isPanelOpen = true)">
                  <Icon name="mingcute:drop-fill" class="w-4 h-4 text-primary-500" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
