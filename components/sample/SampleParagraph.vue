<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="weights"
    :tabs="[
      { label: 'Weights', value: 'weights' },
      { label: 'Sizes', value: 'sizes' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'weights'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Light" label-align="start">
            <BaseParagraph
              as="p"
              weight="light"
              lead="none"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Normal" label-align="start">
            <BaseParagraph
              as="p"
              weight="normal"
              lead="none"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Medium" label-align="start">
            <BaseParagraph
              as="p"
              weight="medium"
              lead="none"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Semibold" label-align="start">
            <BaseParagraph
              as="p"
              weight="semibold"
              lead="none"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Bold" label-align="start">
            <BaseParagraph
              as="p"
              weight="bold"
              lead="none"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Extrabold" label-align="start">
            <BaseParagraph
              as="p"
              weight="extrabold"
              lead="none"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Xs" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="xs"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Sm" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="sm"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Md" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="md"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Lg" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="lg"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Xl" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="xl"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="2Xl" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="2xl"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="3Xl" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="3xl"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="4Xl" label-align="center">
            <BaseParagraph
              as="p"
              weight="normal"
              size="4xl"
              lead="normal"
            >
              Iam a nice paragraph component
            </BaseParagraph>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
