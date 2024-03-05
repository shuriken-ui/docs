<script setup lang="ts">
const { rounded } = usePlayground()

const breadcrumb = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    to: '#',
  },
]

const breadcrumbIcon = [
  {
    label: 'Home',
    hideLabel: false,
    icon: 'lucide:home',
    to: '#',
  },
  {
    label: 'Products',
    hideLabel: false,
    icon: 'lucide:layout-grid',
    to: '#',
  },
  {
    label: 'Laptops',
    hideLabel: false,
    icon: 'lucide:laptop',
    to: '#',
  },
]
</script>

<template>
  <BaseTabs
    model-value="basic"
    :tabs="[
      { label: 'Basic', value: 'basic' },
      { label: 'Separator', value: 'separator' },
      { label: 'Colors', value: 'colors' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'basic'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Basic" label-align="start">
            <BaseBreadcrumb :items="breadcrumb" />
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Icons" label-align="start">
            <BaseBreadcrumb :items="breadcrumbIcon" />
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'separator'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Slash" label-align="start">
            <BaseBreadcrumb :items="breadcrumb">
              /
            </BaseBreadcrumb>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Arrow" label-align="start">
            <BaseBreadcrumb :items="breadcrumb">
              <Icon name="lucide:arrow-right" class="block h-3 w-3" />
            </BaseBreadcrumb>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Chevron" label-align="start">
            <BaseBreadcrumb :items="breadcrumb">
              <Icon name="lucide:chevron-right" class="block h-3 w-3" />
            </BaseBreadcrumb>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Marker" label-align="start">
            <BaseBreadcrumb :items="breadcrumb">
              <Icon name="lucide:move-right" class="block h-3 w-3" />
            </BaseBreadcrumb>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Primary" label-align="start">
            <BaseBreadcrumb :items="breadcrumb" />
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Dark" label-align="start">
            <BaseBreadcrumb :items="breadcrumb" color="dark" />
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Black" label-align="start">
            <BaseBreadcrumb :items="breadcrumb" color="black" />
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
