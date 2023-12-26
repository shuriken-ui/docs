<script setup lang="ts">
const typefaces = [
  {
    name: 'sans',
    values: ['ui-sans-serif', 'system-ui', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'],
  },
  {
    name: 'serif',
    values: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  },
  {
    name: 'mono',
    values: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
  },
]
</script>



<template>
  <div class="py-6">
    <div class="rounded-md border border-muted-200 dark:border-muted-800 overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900 dark:text-muted-100">Type</th>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900 dark:text-muted-100">Default Value</th>
          </tr>
        </thead>
        <tbody>
          <!--Row-->
          <tr v-for="typeface in typefaces" :key="typeface.name" class="border-t border-muted-200 dark:border-muted-800 text-sm">
            <td class="px-4 py-3">
              <div class="flex items-center gap-1 capitalize">{{ typeface.name }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center flex-wrap gap-1">
                <code v-for="value in typeface.values" :key="typeface.name" class="px-1 text-muted-600 dark:text-muted-100 rounded bg-muted-100 dark:bg-muted-950">
                  {{ value }}{{ typeface.values.length > 1 && value !== typeface.values[typeface.values.length - 1] ? ',' : ''  }}
                </code>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
