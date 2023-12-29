<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-50 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="flex items-center p-4">
        <div class="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <BaseMessage type="muted" icon="mingcute:globe-fill" rounded="md"> A muted message. </BaseMessage>
          <BaseMessage type="primary" icon="mingcute:bling-fill" rounded="md"> A primary message. </BaseMessage>
          <BaseMessage type="success" icon rounded="md"> A successful message. </BaseMessage>
          <BaseMessage type="info" icon rounded="md"> An information message. </BaseMessage>
          <BaseMessage type="warning" icon rounded="md"> A warning message. </BaseMessage>
          <BaseMessage type="danger" icon rounded="md"> A destructive message. </BaseMessage>
        </div>
      </div>
    </div>
  </div>
</template>
