<template>
  <div class="p-4 max-w-sm">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle title="Primary circle progress bar" :size="55" :value="65" class="text-primary-500" />
        <BaseProgressCircle title="Yellow circle progress bar" :size="55" :value="65" class="text-yellow-500" />
        <BaseProgressCircle title="Pink circle progress bar" :size="55" :value="65" class="text-pink-500" />
        <BaseProgressCircle title="Indigo circle progress bar" :size="55" :value="65" class="text-indigo-400" />
        <BaseProgressCircle title="Pink circle progress bar" :size="55" :value="65" class="text-lime-500" />
        <BaseProgressCircle title="Pink circle progress bar" :size="55" :value="65" class="text-sky-500" />
      </div>
    </div>
  </div>
</template>
