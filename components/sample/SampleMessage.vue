<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="colors"
    :tabs="[
      { label: 'Colors', value: 'colors' },
      { label: 'Icons', value: 'icons' },
      { label: 'Closable', value: 'closable' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'colors'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Colors" label-align="start">
            <div class="grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <BaseMessage :rounded="rounded" color="default">
                A default message.
              </BaseMessage>
              <BaseMessage :rounded="rounded" color="primary">
                A primary message.
              </BaseMessage>
              <BaseMessage :rounded="rounded" color="success">
                A successful message.
              </BaseMessage>
              <BaseMessage :rounded="rounded" color="info">
                An information message.
              </BaseMessage>
              <BaseMessage :rounded="rounded" color="warning">
                A warning message.
              </BaseMessage>
              <BaseMessage :rounded="rounded" color="danger">
                A destructive message.
              </BaseMessage>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'icons'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Icons" label-align="start">
            <div class="grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <BaseMessage
                color="muted"
                icon="mingcute:globe-fill"
                :rounded="rounded"
              >
                A muted message.
              </BaseMessage>
              <BaseMessage
                color="primary"
                icon="mingcute:bling-fill"
                :rounded="rounded"
              >
                A primary message.
              </BaseMessage>
              <BaseMessage
                color="success"
                icon
                :rounded="rounded"
              >
                A successful message.
              </BaseMessage>
              <BaseMessage
                color="info"
                icon
                :rounded="rounded"
              >
                An information message.
              </BaseMessage>
              <BaseMessage
                color="warning"
                icon
                :rounded="rounded"
              >
                A warning message.
              </BaseMessage>
              <BaseMessage
                color="danger"
                icon
                :rounded="rounded"
              >
                A destructive message.
              </BaseMessage>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'closable'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Types" label-align="start">
            <div class="grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <BaseMessage
                color="muted"
                icon="mingcute:globe-fill"
                :rounded="rounded"
                closable
              >
                A muted message.
              </BaseMessage>
              <BaseMessage
                color="primary"
                icon="mingcute:bling-fill"
                :rounded="rounded"
                closable
              >
                A primary message.
              </BaseMessage>
              <BaseMessage
                color="success"
                icon
                :rounded="rounded"
                closable
              >
                A successful message.
              </BaseMessage>
              <BaseMessage
                color="info"
                icon
                :rounded="rounded"
                closable
              >
                An information message.
              </BaseMessage>
              <BaseMessage
                color="warning"
                icon
                :rounded="rounded"
                closable
              >
                A warning message.
              </BaseMessage>
              <BaseMessage
                color="danger"
                icon
                :rounded="rounded"
                closable
              >
                A destructive message.
              </BaseMessage>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
