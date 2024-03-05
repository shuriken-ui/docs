<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Contrast', value: 'contrast' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Primary" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="sm"
                :value="85"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Success" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Success progress bar"
                size="sm"
                :value="85"
                color="success"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Info" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Info progress bar"
                size="sm"
                :value="85"
                color="info"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Warning" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Warning progress bar"
                size="sm"
                :value="85"
                color="warning"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Danger" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Danger progress bar"
                size="sm"
                :value="85"
                color="danger"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Dark" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Dark progress bar"
                size="sm"
                :value="85"
                color="dark"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Black" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Black progress bar"
                size="sm"
                :value="85"
                color="black"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Xs" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="xs"
                :value="85"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Sm" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="sm"
                :value="85"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Md" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="md"
                :value="85"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Lg" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="lg"
                :value="85"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'contrast'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Default" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="sm"
                contrast="default"
                :value="50"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="start">
            <div class="max-w-sm pt-2">
              <BaseProgress
                title="Primary progress bar"
                size="sm"
                contrast="contrast"
                :value="50"
                color="primary"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
