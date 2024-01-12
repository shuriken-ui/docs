<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="text"
    :tabs="[
      { label: 'Text', value: 'text' },
      { label: 'Shapes', value: 'shapes' },
      { label: 'Composition', value: 'composition' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'text'" class="relative pb-4">
        <div class="space-y-8">
          <PlaygroundSampleRow label="2 rows" label-align="center">
            <div class="max-w-sm space-y-2">
              <BasePlaceload class="h-4 w-full" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-4 w-[85%]" :class="`rounded-${rounded}`" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="3 rows" label-align="center">
            <div class="max-w-sm space-y-2">
              <BasePlaceload class="h-4 w-full" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-4 w-[85%]" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-4 w-[65%]" :class="`rounded-${rounded}`" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="4 rows" label-align="center">
            <div class="max-w-sm space-y-2">
              <BasePlaceload class="h-4 w-full" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-4 w-[75%]" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-4 w-[85%]" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-4 w-[55%]" :class="`rounded-${rounded}`" />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'shapes'" class="relative pb-4">
        <div class="space-y-6">
          <PlaygroundSampleRow label="Square" label-align="center">
            <div class="flex flex-wrap items-end gap-2">
              <BasePlaceload class="h-12 w-12" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-12 w-12" :class="`rounded-${rounded}`" />
              <BasePlaceload class="h-12 w-12" :class="`rounded-${rounded}`" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Circle" label-align="center">
            <div class="flex flex-wrap items-end gap-2">
              <BasePlaceload class="h-12 w-12 rounded-full" />
              <BasePlaceload class="h-12 w-12 rounded-full" />
              <BasePlaceload class="h-12 w-12 rounded-full" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Mask" label-align="center">
            <div class="flex flex-wrap items-end gap-2">
              <BasePlaceload class="nui-mask nui-mask-hex h-12 w-12 rounded-none" />
              <BasePlaceload class="nui-mask nui-mask-hexed h-12 w-12 rounded-none" />
              <BasePlaceload class="nui-mask nui-mask-blob h-12 w-12 rounded-none" />
              <BasePlaceload class="nui-mask nui-mask-deca h-12 w-12 rounded-none" />
              <BasePlaceload class="nui-mask nui-mask-diamond h-12 w-12 rounded-none" />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'composition'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Card" label-align="center">
            <div class="max-w-sm">
              <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="p-4 md:p-6">
                <div class="flex items-center gap-3">
                  <BasePlaceload class="h-10 w-10" :class="`rounded-${rounded}`" />
                  <div class="grow space-y-2">
                    <BasePlaceload class="h-3 w-full" :class="`rounded-${rounded}`" />
                    <BasePlaceload class="h-3 w-[85%]" :class="`rounded-${rounded}`" />
                  </div>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
