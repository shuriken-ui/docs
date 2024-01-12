<template>
  <div>
    <code class="font-mono rounded px-1 py-0.5 text-xs bg-muted-100 dark:bg-muted-900 text-muted-700 dark:text-muted-100 ">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </code>
  </div>
</template>
