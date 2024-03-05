<script setup lang="ts">
const { rounded } = usePlayground()

const values = reactive({
  primary: true,
  info: true,
  success: true,
  warning: true,
  danger: true,
  dark: true,
})

const value = ref(true)
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'Sublabel', value: 'sublabel' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="All" label-align="center">
            <div class="flex items-center gap-6 p-4">
              <BaseSwitchThin
                v-model="values.primary"
                label="Primary"
                color="primary"
              />
              <BaseSwitchThin
                v-model="values.info"
                label="Info"
                color="info"
              />
              <BaseSwitchThin
                v-model="values.success"
                label="Success"
                color="success"
              />
              <BaseSwitchThin
                v-model="values.warning"
                label="Warning"
                color="warning"
              />
              <BaseSwitchThin
                v-model="values.danger"
                label="Danger"
                color="danger"
              />
              <BaseSwitchThin
                v-model="values.dark"
                label="Dark"
                color="dark"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sublabel'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Example" label-align="center">
            <BaseSwitchThin
              v-model="value"
              label="Primary"
              sublabel="This is a primary switch"
              color="primary"
            />
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
