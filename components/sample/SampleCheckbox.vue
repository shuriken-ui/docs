<script setup lang="ts">
const { rounded } = usePlayground()

const options = reactive({
  first: true,
  second: true,
  third: true,
  fourth: true,
  fifth: true,
  sixth: true,
  seventh: true,
  eighth: true,
})
</script>

<template>
  <div class="relative pb-4">
    <PlaygroundSampleRow label="Colors" label-align="center">
      <div class="space-y-4">
        <div class="flex items-center gap-6 p-4">
          <BaseCheckbox
            v-model="options.first"
            label="Label"
            :rounded="rounded"
            color="default"
          />
          <BaseCheckbox
            v-model="options.second"
            label="Label"
            :rounded="rounded"
            color="muted"
          />
          <BaseCheckbox
            v-model="options.third"
            label="Label"
            :rounded="rounded"
            color="primary"
          />
          <BaseCheckbox
            v-model="options.fourth"
            label="Label"
            :rounded="rounded"
            color="info"
          />
          <BaseCheckbox
            v-model="options.fifth"
            label="Label"
            :rounded="rounded"
            color="success"
          />
          <BaseCheckbox
            v-model="options.sixth"
            label="Label"
            :rounded="rounded"
            color="warning"
          />
          <BaseCheckbox
            v-model="options.seventh"
            label="Label"
            :rounded="rounded"
            color="danger"
          />
          <BaseCheckbox
            v-model="options.eighth"
            label="Label"
            :rounded="rounded"
            color="dark"
          />
        </div>
      </div>
    </PlaygroundSampleRow>
  </div>
</template>
