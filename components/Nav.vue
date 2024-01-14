<script setup lang="ts">
import { joinURL } from 'ufo'

const appConfig = useAppConfig()
const { prev, next, page } = useContent()

const editUrl = computed(() => joinURL('https://github.com', appConfig.github.org, appConfig.github.repo, 'edit', appConfig.github.branch, page.value._source, page.value._file))
</script>

<template>
  <div class="pb-20">
    <div class="flex items-center justify-between">
      <div class="text-start">
        <NuxtLink
          v-if="prev"
          :to="prev._path"
          class="group/link"
        >
          <div>
            <p class="text-xs font-medium uppercase text-muted-400">
              Previous Section
            </p>
            <p
              class="text-muted-600 underline-offset-4 transition-colors duration-300 group-hover/link:text-muted-900 group-hover/link:underline dark:text-muted-200 dark:group-hover/link:text-muted-100"
            >
              {{ prev.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="text-end">
        <NuxtLink
          v-if="next"
          :to="next._path"
          class="group/link"
        >
          <div>
            <p class="text-xs font-medium uppercase text-muted-400">
              Next Section
            </p>
            <p
              class="text-muted-600 underline-offset-4 transition-colors duration-300 group-hover/link:text-muted-900 group-hover/link:underline dark:text-muted-200 dark:group-hover/link:text-muted-100"
            >
              {{ next.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <hr class="my-8 border-t border-muted-200 dark:border-muted-800">

    <div>
      <NuxtLink
        :to="editUrl"
        target="_blank"
        rel="noopener"
        class="text-sm tracking-wide text-muted-400 underline-offset-4 hover:text-muted-900 hover:underline dark:hover:text-muted-100"
      >
        Edit this page on Github
      </NuxtLink>
    </div>
  </div>
</template>
