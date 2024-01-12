<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref('')

const fields = reactive({
  first: '',
  second: '',
  third: '',
})
</script>

<template>
  <BaseTabs
    model-value="contrasts"
    :tabs="[
      { label: 'Contrasts', value: 'contrasts' },
      { label: 'Sizes', value: 'sizes' },
      { label: 'Label', value: 'label' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'contrasts'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Default" label-align="center">
            <div class="w-full max-w-xs">
              <BaseInput
                v-model="value"
                contrast="default"
                :rounded="rounded"
                label="Username"
                placeholder="Ex: username"
                :classes="{
                  wrapper: 'w-full',
                }"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="center">
            <div class="w-full max-w-xs">
              <BaseInput
                v-model="value"
                contrast="default-contrast"
                :rounded="rounded"
                label="Username"
                placeholder="Ex: username"
                :classes="{
                  wrapper: 'w-full',
                }"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted" label-align="center">
            <div class="w-full max-w-xs">
              <BaseInput
                v-model="value"
                contrast="muted"
                :rounded="rounded"
                label="Username"
                placeholder="Ex: username"
                :classes="{
                  wrapper: 'w-full',
                }"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="center">
            <div class="w-full max-w-xs">
              <BaseInput
                v-model="value"
                contrast="muted-contrast"
                :rounded="rounded"
                label="Username"
                placeholder="Ex: username"
                :classes="{
                  wrapper: 'w-full',
                }"
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Normal" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: username"
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: username"
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: username"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Icon" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  icon="lucide:user-2"
                  placeholder="Ex: username"
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  icon="lucide:user-2"
                  placeholder="Ex: username"
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  icon="lucide:user-2"
                  placeholder="Ex: username"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'label'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Float" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3 pt-5">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: username"
                  label-float
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: username"
                  label-float
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: username"
                  label-float
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Icon" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3 pt-5">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  icon="lucide:user-2"
                  placeholder="Ex: username"
                  label-float
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  icon="lucide:user-2"
                  placeholder="Ex: username"
                  label-float
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  icon="lucide:user-2"
                  placeholder="Ex: username"
                  label-float
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Focus" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: username"
                  color-focus
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: username"
                  color-focus
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: username"
                  color-focus
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Error" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: username"
                  error="Please enter a valid value"
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: username"
                  error="Please enter a valid value"
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: username"
                  error="Please enter a valid value"
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Loading" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: username"
                  loading
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: username"
                  loading
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: username"
                  loading
                />
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="end">
            <div class="flex max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseInput
                  v-model="fields.first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  placeholder="Ex: username"
                  disabled
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  placeholder="Ex: username"
                  disabled
                />
              </div>

              <div class="flex-1">
                <BaseInput
                  v-model="fields.third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  placeholder="Ex: username"
                  disabled
                />
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
