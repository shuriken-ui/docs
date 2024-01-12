<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref('')
const first = ref('')
const second = ref('')
const third = ref('')
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
            <div class="flex w-full max-w-xs items-end gap-4">
              <BaseSelect
                v-model="value"
                contrast="default"
                :rounded="rounded"
                label="Select Hero"
                :classes="{
                  wrapper: 'w-full',
                }"
              >
                <option value="">
                  Select a hero
                </option>
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </BaseSelect>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="center">
            <div class="flex w-full max-w-xs items-end gap-4">
              <BaseSelect
                v-model="value"
                contrast="default-contrast"
                :rounded="rounded"
                label="Select Hero"
                :classes="{
                  wrapper: 'w-full',
                }"
              >
                <option value="">
                  Select a hero
                </option>
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </BaseSelect>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted" label-align="center">
            <div class="flex w-full max-w-xs items-end gap-4">
              <BaseSelect
                v-model="value"
                contrast="muted"
                :rounded="rounded"
                label="Select Hero"
                :classes="{
                  wrapper: 'w-full',
                }"
              >
                <option value="">
                  Select a hero
                </option>
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </BaseSelect>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="center">
            <div class="flex w-full max-w-xs items-end gap-4">
              <BaseSelect
                v-model="value"
                contrast="muted-contrast"
                :rounded="rounded"
                label="Select Hero"
                :classes="{
                  wrapper: 'w-full',
                }"
              >
                <option value="">
                  Select a hero
                </option>
                <option value="Superman">
                  Superman
                </option>
                <option value="Batman">
                  Batman
                </option>
                <option value="Iron man">
                  Iron man
                </option>
                <option value="Magneto">
                  Magneto
                </option>
                <option value="Cyclops">
                  Cyclops
                </option>
              </BaseSelect>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Normal" label-align="end">
            <div class="flex w-full max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseSelect
                  v-model="first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Icon" label-align="end">
            <div class="flex w-full max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseSelect
                  v-model="first"
                  icon="fa6-solid:masks-theater"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="second"
                  icon="fa6-solid:masks-theater"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="third"
                  icon="fa6-solid:masks-theater"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'label'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Float" label-align="end">
            <div class="flex w-full max-w-2xl flex-wrap items-end gap-3 pt-8">
              <div class="flex-1">
                <BaseSelect
                  v-model="first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  label-float
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  label-float
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  label-float
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Error" label-align="end">
            <div class="flex w-full max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseSelect
                  v-model="first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  error="Please select a value"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  error="Please select a value"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  error="Please select a value"
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Loading" label-align="end">
            <div class="flex w-full max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseSelect
                  v-model="first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  loading
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  loading
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  loading
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="end">
            <div class="flex w-full max-w-2xl flex-wrap items-end gap-3">
              <div class="flex-1">
                <BaseSelect
                  v-model="first"
                  size="sm"
                  :rounded="rounded"
                  label="Size: sm"
                  disabled
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="second"
                  size="md"
                  :rounded="rounded"
                  label="Size: md"
                  disabled
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>

              <div class="flex-1">
                <BaseSelect
                  v-model="third"
                  size="lg"
                  :rounded="rounded"
                  label="Size: lg"
                  disabled
                  :classes="{
                    wrapper: 'w-full',
                  }"
                >
                  <option value="">
                    Select a hero
                  </option>
                  <option value="Superman">
                    Superman
                  </option>
                  <option value="Batman">
                    Batman
                  </option>
                  <option value="Iron man">
                    Iron man
                  </option>
                  <option value="Magneto">
                    Magneto
                  </option>
                  <option value="Cyclops">
                    Cyclops
                  </option>
                </BaseSelect>
              </div>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
