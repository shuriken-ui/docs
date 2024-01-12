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
            <BaseText weight="light" lead="none">
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Normal" label-align="start">
            <BaseText weight="normal" lead="none">
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Medium" label-align="start">
            <BaseText weight="medium" lead="none">
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Semibold" label-align="start">
            <BaseText weight="semibold" lead="none">
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Bold" label-align="start">
            <BaseText weight="bold" lead="none">
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Extrabold" label-align="start">
            <BaseText weight="extrabold" lead="none">
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'sizes'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Xs" label-align="center">
            <BaseText
              weight="normal"
              size="xs"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Sm" label-align="center">
            <BaseText
              weight="normal"
              size="sm"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Md" label-align="center">
            <BaseText
              weight="normal"
              size="md"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Lg" label-align="center">
            <BaseText
              weight="normal"
              size="lg"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Xl" label-align="center">
            <BaseText
              weight="normal"
              size="xl"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="2Xl" label-align="center">
            <BaseText
              weight="normal"
              size="2xl"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="3Xl" label-align="center">
            <BaseText
              weight="normal"
              size="3xl"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="4Xl" label-align="center">
            <BaseText
              weight="normal"
              size="4xl"
              lead="normal"
            >
              <BaseLink to="#">
                Iam a nice link component
              </BaseLink>
            </BaseText>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
