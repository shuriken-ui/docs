<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-50 p-4 dark:bg-muted-900 md:p-6">
      <div class="flex items-center p-4">
        <div class="grid w-full max-w-2xl grid-cols-1 gap-4 md:grid-cols-2">
          <BaseMessage
            color="muted"
            icon="mingcute:globe-fill"
            rounded="md"
          >
            A muted message.
          </BaseMessage>
          <BaseMessage
            color="primary"
            icon="mingcute:bling-fill"
            rounded="md"
          >
            A primary message.
          </BaseMessage>
          <BaseMessage
            color="success"
            icon
            rounded="md"
          >
            A successful message.
          </BaseMessage>
          <BaseMessage
            color="info"
            icon
            rounded="md"
          >
            An information message.
          </BaseMessage>
          <BaseMessage
            color="warning"
            icon
            rounded="md"
          >
            A warning message.
          </BaseMessage>
          <BaseMessage
            color="danger"
            icon
            rounded="md"
          >
            A destructive message.
          </BaseMessage>
        </div>
      </div>
    </div>
  </div>
</template>
