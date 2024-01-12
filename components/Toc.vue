<script setup lang="ts">
const { toc } = useContent()
</script>

<template>
  <div>
    <div v-if="toc && toc.links.length > 0" class="mb-4">
      <BaseParagraph
        size="lg"
        weight="medium"
        class="text-muted-800 dark:text-muted-100"
      >
        <span>Quick Nav</span>
      </BaseParagraph>
    </div>
    <ul v-if="toc && toc.links" class="space-y-2">
      <li
        v-for="link in toc.links"
        :key="link.text"
        class="text-sm tracking-wide text-muted-600 dark:text-muted-400"
      >
        <a :href="`#${link.id}`">
          {{ link.text }}
        </a>
        <ul v-if="link.children" class="space-y-1 py-3">
          <li
            v-for="childLink in link.children"
            :key="childLink.text"
            class="ps-6 text-[0.8rem] tracking-wide text-muted-600 dark:text-muted-400"
          >
            <a :href="`#${childLink.id}`">
              {{ childLink.text }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
