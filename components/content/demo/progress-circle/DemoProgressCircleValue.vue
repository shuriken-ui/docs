<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="55"
          :value="progressCircle"
          class="text-primary-500"
        />
      </div>

      <div class="flex justify-between gap-2">
        <BaseButtonAction :class="progressCircle === 25 && '!border-primary-500 !text-primary-500'" @click="progressCircle = 25">
          25%
        </BaseButtonAction>
        <BaseButtonAction :class="progressCircle === 50 && '!border-primary-500 !text-primary-500'" @click="progressCircle = 50">
          50%
        </BaseButtonAction>
        <BaseButtonAction :class="progressCircle === 75 && '!border-primary-500 !text-primary-500'" @click="progressCircle = 75">
          75%
        </BaseButtonAction>
        <BaseButtonAction :class="progressCircle === 100 && '!border-primary-500 !text-primary-500'" @click="progressCircle = 100">
          100%
        </BaseButtonAction>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const progressCircle = ref(25)
</script>
