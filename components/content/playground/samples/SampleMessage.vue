<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="types"
    :tabs="[
      { label: 'Types', value: 'types' },
      { label: 'Icons', value: 'icons' },
      { label: 'Closable', value: 'closable' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'types'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Types" label-align="start">
            <div class="grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <BaseMessage :rounded="rounded" type="default"> A default message. </BaseMessage>
              <BaseMessage :rounded="rounded" type="primary"> A primary message. </BaseMessage>
              <BaseMessage :rounded="rounded" type="success"> A successful message. </BaseMessage>
              <BaseMessage :rounded="rounded" type="info"> An information message. </BaseMessage>
              <BaseMessage :rounded="rounded" type="warning"> A warning message. </BaseMessage>
              <BaseMessage :rounded="rounded" type="danger"> A destructive message. </BaseMessage>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'icons'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Icons" label-align="start">
            <div class="grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <BaseMessage type="muted" icon="mingcute:globe-fill" :rounded="rounded"> A muted message. </BaseMessage>
              <BaseMessage type="primary" icon="mingcute:bling-fill" :rounded="rounded"> A primary message. </BaseMessage>
              <BaseMessage type="success" icon :rounded="rounded"> A successful message. </BaseMessage>
              <BaseMessage type="info" icon :rounded="rounded"> An information message. </BaseMessage>
              <BaseMessage type="warning" icon :rounded="rounded"> A warning message. </BaseMessage>
              <BaseMessage type="danger" icon :rounded="rounded"> A destructive message. </BaseMessage>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'closable'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Types" label-align="start">
            <div class="grid w-full max-w-xl grid-cols-1 gap-4 md:grid-cols-2">
              <BaseMessage type="muted" icon="mingcute:globe-fill" :rounded="rounded" closable> A muted message. </BaseMessage>
              <BaseMessage type="primary" icon="mingcute:bling-fill" :rounded="rounded" closable> A primary message. </BaseMessage>
              <BaseMessage type="success" icon :rounded="rounded" closable> A successful message. </BaseMessage>
              <BaseMessage type="info" icon :rounded="rounded" closable> An information message. </BaseMessage>
              <BaseMessage type="warning" icon :rounded="rounded" closable> A warning message. </BaseMessage>
              <BaseMessage type="danger" icon :rounded="rounded" closable> A destructive message. </BaseMessage>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
