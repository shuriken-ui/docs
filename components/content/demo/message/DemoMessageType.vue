<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-50 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="flex items-center p-4">
        <div class="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <BaseMessage type="default"> A default message. </BaseMessage>
          <BaseMessage type="primary"> A primary message. </BaseMessage>
          <BaseMessage type="success"> A successful message. </BaseMessage>
          <BaseMessage type="info"> An information message. </BaseMessage>
          <BaseMessage type="warning"> A warning message. </BaseMessage>
          <BaseMessage type="danger"> A destructive message. </BaseMessage>
        </div>
      </div>
    </div>
  </div>
</template>
