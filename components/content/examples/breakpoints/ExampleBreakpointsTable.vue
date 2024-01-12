<script setup lang="ts">
const breakpoints = [
  {
    name: 'initial',
    description: 'Phone, all devices',
    value: 'min: 0px',
  },
  {
    name: 'xs',
    description: 'Phone only',
    value: 'max: 639px',
  },
  {
    name: 'sm',
    description: 'Phone',
    value: 'min: 640px',
  },
  {
    name: 'md',
    description: 'Tablet',
    value: 'min: 768px',
  },
  {
    name: 'ptablet',
    description: 'Tablet (portrait)',
    value: 'min: 768px / max: 1024px',
  },
  {
    name: 'ltablet',
    description: 'Tablet (landscape)',
    value: 'min: 768px / max: 1024px',
  },
  {
    name: 'lg',
    description: 'Desktop (small)',
    value: 'min: 1025px',
  },
  {
    name: 'xl',
    description: 'Desktop (medium)',
    value: 'min: 1280px',
  },
  {
    name: '2xl',
    description: 'Desktop (large)',
    value: 'min: 1536px',
  },
]
</script>

<template>
  <div class="py-6">
    <div class="overflow-x-auto rounded-md border border-muted-300 bg-white dark:border-muted-800 dark:bg-muted-950">
      <table class="w-full">
        <thead>
          <tr>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
              Size
            </th>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">
              Width
            </th>
          </tr>
        </thead>
        <tbody>
          <!--Row-->
          <tr
            v-for="breakpoint in breakpoints"
            :key="breakpoint.name"
            class="border-t border-muted-300 text-sm dark:border-muted-800"
          >
            <td class="px-4 py-3">
              <div class="">
                <p>{{ breakpoint.name }}</p>
                <p class="text-xs text-muted-400">
                  {{ breakpoint.description }}
                </p>
              </div>
            </td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap items-center gap-1">
                <p>{{ breakpoint.value }}</p>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
