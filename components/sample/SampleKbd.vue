<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <div class="relative pb-4">
    <div class="space-y-6">
      <PlaygroundSampleRow label="Default" label-align="end">
        <div class="flex items-end gap-6">
          <BaseKbd
            color="default"
            size="xs"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
          <BaseKbd
            color="default"
            size="sm"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
          <BaseKbd
            color="default"
            size="md"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
          <BaseKbd
            color="default"
            size="lg"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
        </div>
      </PlaygroundSampleRow>
      <PlaygroundSampleRow label="Muted" label-align="end">
        <div class="flex items-end gap-6">
          <BaseKbd
            color="muted"
            size="xs"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
          <BaseKbd
            color="muted"
            size="sm"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
          <BaseKbd
            color="muted"
            size="md"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
          <BaseKbd
            color="muted"
            size="lg"
            :rounded="rounded"
          >
            Ctrl
          </BaseKbd>
        </div>
      </PlaygroundSampleRow>
    </div>
  </div>
</template>
