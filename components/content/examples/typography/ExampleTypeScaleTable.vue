<script setup lang="ts">
const scales = [
  {
    step: 1,
    size: '0.75rem',
    letterSpacing: '0',
    lineHeight: '1rem',
  },
  {
    step: 2,
    size: '0.875rem',
    letterSpacing: '0',
    lineHeight: '1.25rem',
  },
  {
    step: 3,
    size: '1rem',
    letterSpacing: '0',
    lineHeight: '1.5rem',
  },
  {
    step: 4,
    size: '1.125rem',
    letterSpacing: '0',
    lineHeight: '1.75rem',
  },
  {
    step: 5,
    size: '1.25rem',
    letterSpacing: '0',
    lineHeight: '1.75rem',
  },
  {
    step: 6,
    size: '1.5rem',
    letterSpacing: '0',
    lineHeight: '2rem',
  },
  {
    step: 7,
    size: '1.875rem',
    letterSpacing: '0',
    lineHeight: '2.25rem',
  },
  {
    step: 8,
    size: '2.25rem',
    letterSpacing: '0',
    lineHeight: '2.5rem',
  },
  {
    step: 9,
    size: '3rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: 10,
    size: '3.75rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: 11,
    size: '4.5rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: 12,
    size: '6rem',
    letterSpacing: '0',
    lineHeight: '1',
  },
  {
    step: 13,
    size: '8rem',
    letterSpacing: '0',
    lineHeight: '1',
  }
]
</script>

<template>
  <div class="py-6">
    <div class="bg-white dark:bg-muted-950 rounded-md border border-muted-200 dark:border-muted-800 overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Step</th>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Size</th>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Letter spacing</th>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Line height</th>
          </tr>
        </thead>
        <tbody>
          <!--Row-->
          <tr v-for="scale in scales" :key="scale.step" class="border-t border-muted-200 dark:border-muted-800 text-sm">
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">{{ scale.step }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="px-1 text-muted-600 dark:text-muted-100 rounded bg-muted-100 dark:bg-muted-950">{{ scale.size }}</code>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="px-1 text-muted-600 dark:text-muted-100 rounded bg-muted-100 dark:bg-muted-950">{{ scale.letterSpacing }}</code>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="px-1 text-muted-600 dark:text-muted-100 rounded bg-muted-100 dark:bg-muted-950">{{ scale.lineHeight }}</code>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
