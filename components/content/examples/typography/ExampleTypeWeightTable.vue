<script setup lang="ts">
const weights = [
  {
    name: 'light',
    value: '300',
  },
  {
    name: 'normal',
    value: '400',
  },
  {
    name: 'medium',
    value: '500',
  },
  {
    name: 'semibold',
    value: '600',
  },
  {
    name: 'bold',
    value: '700',
  },
  {
    name: 'extrabold',
    value: '800',
  },
]
</script>

<template>
  <div class="py-6">
    <div class="rounded-md border border-muted-200 dark:border-muted-800 overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900 dark:text-muted-100">Weight</th>
            <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900 dark:text-muted-100">Default Value</th>
          </tr>
        </thead>
        <tbody>
          <!--Row-->
          <tr v-for="weight in weights" :key="weight.name" class="border-t border-muted-200 dark:border-muted-800 text-sm">
            <td class="px-4 py-3">
              <div class="flex items-center gap-1 capitalize">{{ weight.name }}</div>
            </td>
            <td class="px-4 py-3">
              <div class="flex items-center gap-1">
                <code class="px-1 text-muted-600 dark:text-muted-100 rounded bg-muted-100 dark:bg-muted-950">{{ weight.value }}</code>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
