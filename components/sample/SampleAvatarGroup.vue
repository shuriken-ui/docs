<script setup lang="ts">
const people = [
  {
    src: '/img/photo/avatars/19.jpg',
  },
  {
    src: '/img/photo/avatars/25.jpg',
  },
  {
    src: '/img/photo/avatars/29.jpg',
  },
  {
    src: '/img/photo/avatars/43.jpg',
  },
  {
    src: '/img/photo/avatars/42.jpg',
  },
  {
    src: '/img/photo/avatars/49.jpg',
  },
  {
    src: '/img/photo/avatars/14.jpg',
  },
  {
    src: '/img/photo/avatars/30.jpg',
  },
  {
    src: '/img/photo/avatars/50.jpg',
  },
  {
    src: '/img/photo/avatars/22.jpg',
  },
  {
    src: '/img/photo/avatars/23.jpg',
  },
]
</script>

<template>
  <BaseTabs
    model-value="sizes"
    :tabs="[
      { label: 'Sizes', value: 'sizes' },
      { label: 'Limit', value: 'limit' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'sizes'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="xs">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup size="xs" :avatars="people" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="sm">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup size="sm" :avatars="people" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="md">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup size="md" :avatars="people" />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="lg">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup size="lg" :avatars="people" />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'limit'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="3 max">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup
                size="sm"
                :avatars="people"
                :limit="3"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="5 max">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup
                size="sm"
                :avatars="people"
                :limit="5"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="7 max">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup
                size="sm"
                :avatars="people"
                :limit="7"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="9 max">
            <div class="flex items-end gap-3">
              <BaseAvatarGroup
                size="sm"
                :avatars="people"
                :limit="9"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
