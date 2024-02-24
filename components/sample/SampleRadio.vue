<script setup lang="ts">
const value = ref('Option 1')
</script>

<template>
  <div class="relative pb-4">
    <div class="space-y-4">
      <PlaygroundSampleRow label="Colors" label-align="start">
        <div class="flex max-w-sm flex-wrap items-center gap-6">
          <BaseRadio
            v-model="value"
            name="radio_base"
            label="Option 1"
            value="Option 1"
            color="default"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            label="Option 2"
            value="Option 2"
            color="muted"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 3"
            label="Option 3"
            color="primary"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 4"
            label="Option 4"
            color="info"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 5"
            label="Option 5"
            color="success"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 6"
            label="Option 6"
            color="warning"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 7"
            label="Option 7"
            color="danger"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 8"
            label="Option 8"
            color="dark"
          />
          <BaseRadio
            v-model="value"
            name="radio_base"
            value="Option 9"
            label="Option 9"
            color="black"
          />
        </div>
      </PlaygroundSampleRow>
    </div>
  </div>
</template>
