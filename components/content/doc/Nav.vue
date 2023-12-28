<script setup lang="ts">
const { prev, next } = useContent()
const editUrl = computed(() => {
  const url = `${process.env.SHURIKEN_UI_DOCS_GITHUB_URL}`
  return url
})
</script>

<template>
  <div class="pb-20">
    <div class="flex items-center justify-between">
      <div class="text-start">
        <NuxtLink v-if="prev" :to="prev._path" class="group/link">
          <div>
            <p class="text-xs uppercase font-medium text-muted-400">Previous Section</p>
            <p
              class="text-muted-600 dark:text-muted-200 group-hover/link:underline underline-offset-4 group-hover/link:text-muted-900 dark:group-hover/link:text-muted-100 transition-colors duration-300"
            >
              {{ prev.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="text-end">
        <NuxtLink v-if="next" :to="next._path" class="group/link">
          <div>
            <p class="text-xs uppercase font-medium text-muted-400">Next Section</p>
            <p
              class="text-muted-600 dark:text-muted-200 group-hover/link:underline underline-offset-4 group-hover/link:text-muted-900 dark:group-hover/link:text-muted-100 transition-colors duration-300"
            >
              {{ next.title }}
            </p>
          </div></NuxtLink
        >
      </div>
    </div>
    <hr class="my-8 border-t border-muted-200 dark:border-muted-800" />

    <div>
      <NuxtLink :to="editUrl" target="_blank" rel="noopener" class="tracking-wide text-sm text-muted-400 hover:text-muted-900 dark:hover:text-muted-100 hover:underline underline-offset-4"
        >Edit this page on Github</NuxtLink
      >
    </div>
  </div>
</template>
