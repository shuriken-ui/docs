<template>
  <div>
    <pre class="relative w-full" :class="$props.class"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: '',
  },
  language: {
    type: String,
    default: null,
  },
  filename: {
    type: String,
    default: null,
  },
  highlights: {
    type: Array as () => number[],
    default: () => [],
  },
  meta: {
    type: String,
    default: null,
  },
  class: {
    type: String,
    default: null,
  },
})

const inCodeGroup = inject('code-group-context', false)

const { copy, copied, isSupported } = useClipboard({
  source: () => props.code,
})
</script>

<style>
pre code .line {
  display: block;
}
</style>
