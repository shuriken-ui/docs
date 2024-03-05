<template>
  <div class="max-w-sm p-4">
    <div class="max-w-xs space-y-4">
      <div class="flex items-end gap-2">
        <BaseProgressCircle
          title="Primary circle progress bar"
          :size="55"
          :value="65"
          color="primary"
        />
        <BaseProgressCircle
          title="Info circle progress bar"
          :size="55"
          :value="65"
          color="info"
        />
        <BaseProgressCircle
          title="Success circle progress bar"
          :size="55"
          :value="65"
          color="success"
        />
        <BaseProgressCircle
          title="Warning circle progress bar"
          :size="55"
          :value="65"
          color="warning"
        />
        <BaseProgressCircle
          title="Danger circle progress bar"
          :size="55"
          :value="65"
          color="danger"
        />
        <BaseProgressCircle
          title="Dark circle progress bar"
          :size="55"
          :value="65"
          color="dark"
        />
        <BaseProgressCircle
          title="Black circle progress bar"
          :size="55"
          :value="65"
          color="black"
        />
      </div>
    </div>
  </div>
</template>
