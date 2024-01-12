<script setup lang="ts">
const { rounded } = usePlayground()

const accordion = [
  {
    title: 'Accordion Item 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
  {
    title: 'Accordion Item 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quo tandem modo? Inde igitur, inquit, ordiendum est. Primum quid tu dicis breve? Duo Reges: constructio interrete.',
  },
]
</script>

<template>
  <BaseTabs
    model-value="dot"
    :tabs="[
      { label: 'Dot', value: 'dot' },
      { label: 'Chevron', value: 'chevron' },
      { label: 'Plus', value: 'plus' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'dot'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Inclusive">
            <div class="max-w-md">
              <BaseAccordion :items="accordion" :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Exclusive">
            <div class="max-w-md">
              <BaseAccordion
                :items="accordion"
                :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')"
                exclusive
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-else-if="activeValue === 'chevron'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Inclusive">
            <div class="max-w-md">
              <BaseAccordion
                :items="accordion"
                :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')"
                action="chevron"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Exclusive">
            <div class="max-w-md">
              <BaseAccordion
                :items="accordion"
                :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')"
                action="chevron"
                exclusive
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-else-if="activeValue === 'plus'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Inclusive">
            <div class="max-w-md">
              <BaseAccordion
                :items="accordion"
                :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')"
                action="plus"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Exclusive">
            <div class="max-w-md">
              <BaseAccordion
                :items="accordion"
                :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')"
                action="plus"
                exclusive
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
