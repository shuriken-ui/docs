<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="45"
          :value="65"
          class="text-primary-500"
        />
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="55"
          :value="65"
          class="text-primary-500"
        />
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="65"
          :value="65"
          class="text-primary-500"
        />
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="75"
          :value="65"
          class="text-primary-500"
        />
      </div>
    </div>
  </div>
</template>
