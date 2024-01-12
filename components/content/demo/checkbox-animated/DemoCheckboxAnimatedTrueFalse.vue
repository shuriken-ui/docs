<template>
  <div class="flex items-center gap-4 p-4">
    <BaseCheckboxAnimated
      color="primary"
    />
    <BaseCheckboxAnimated
      :model-value="true"
      color="primary"
    />
    <BaseCheckboxAnimated
      :model-value="true"
      color="primary"
      disabled
    />
  </div>
</template>
