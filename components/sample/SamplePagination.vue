<script setup lang="ts">
const { rounded } = usePlayground()

const route = useRoute()
const currentPage = computed(() => {
  try {
    return Number.parseInt(route.query.page as string) || 1
  }
  catch {
    return 1
  }
})
</script>

<template>
  <div class="relative pb-4">
    <div class="space-y-4">
      <PlaygroundSampleRow label="Base" label-align="center">
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          :rounded="rounded"
        />
      </PlaygroundSampleRow>
      <PlaygroundSampleRow label="Dark" label-align="center">
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          :rounded="rounded"
          color="dark"
        />
      </PlaygroundSampleRow>
      <PlaygroundSampleRow label="Black" label-align="center">
        <BasePagination
          :item-per-page="8"
          :total-items="512"
          :current-page="currentPage"
          :max-links-displayed="5"
          :rounded="rounded"
          color="black"
        />
      </PlaygroundSampleRow>
    </div>
  </div>
</template>
