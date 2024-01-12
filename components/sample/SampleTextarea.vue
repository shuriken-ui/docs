<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref('')
</script>

<template>
  <BaseTabs
    model-value="contrasts"
    :tabs="[
      { label: 'Contrasts', value: 'contrasts' },
      { label: 'Addon', value: 'addon' },
      { label: 'Label', value: 'label' },
      { label: 'States', value: 'states' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'contrasts'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Default" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="default"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="default-contrast"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="muted"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="muted-contrast"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'addon'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Example" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                :rows="6"
                addon
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
              >
                <template #addon>
                  <div class="flex items-center gap-2">
                    <BaseAvatar
                      src="/img/avatars/2.svg"
                      class="me-1"
                      size="xs"
                    />

                    <BaseHeading
                      as="h4"
                      size="sm"
                      weight="semibold"
                      class="text-muted-800 dark:text-white"
                    >
                      Maya
                    </BaseHeading>
                  </div>

                  <div class="flex items-center gap-2">
                    <BaseButton size="sm">
                      Post Comment
                    </BaseButton>
                  </div>
                </template>
              </BaseTextarea>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'label'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Float" label-align="center">
            <div class="flex w-full max-w-sm items-center pt-8">
              <BaseTextarea
                v-model="value"
                contrast="default"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
                label-float
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'states'" class="relative pb-4">
        <div class="space-y-6">
          <PlaygroundSampleRow label="Focus" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="default"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
                color-focus
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Error" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="default"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
                error="Please enter a message"
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Loading" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="default"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
                loading
              />
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Disabled" label-align="start">
            <div class="flex w-full max-w-sm items-center">
              <BaseTextarea
                v-model="value"
                contrast="default"
                label="Message"
                :rounded="rounded"
                placeholder="Write a message..."
                rows="4"
                :classes="{
                  wrapper: 'w-full',
                  textarea: 'resize-none overflow-hidden',
                }"
                autogrow
                disabled
              />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
