<template>
  <div class="flex flex-wrap items-end gap-4 p-4">
    <BaseAvatarGroup
      size="sm"
      :avatars="people"
      :limit="8"
    />
  </div>
</template>

<script setup lang="ts">
const people = [
  {
    src: '/img/avatars/19.svg',
  },
  {
    src: '/img/avatars/16.svg',
  },
  {
    src: '/img/avatars/3.svg',
  },
  {
    src: '/img/avatars/22.svg',
  },
  {
    src: '/img/avatars/2.svg',
  },
  {
    src: '/img/avatars/24.svg',
  },
  {
    src: '/img/avatars/15.svg',
  },
  {
    src: '/img/avatars/25.svg',
  },
  {
    src: '/img/avatars/24.svg',
  },
  {
    src: '/img/avatars/21.svg',
  },
  {
    src: '/img/avatars/22.svg',
  },
]
</script>
