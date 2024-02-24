<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="shadows"
    :tabs="[
      { label: 'Shadows', value: 'shadows' },
      { label: 'Contrasts', value: 'contrasts' },
      { label: 'Colors', value: 'colors' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'shadows'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="None">
            <div class="max-w-xs">
              <BaseCard class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/25.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Clarence Bodicker
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Software Engineer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Flat">
            <div class="max-w-xs">
              <BaseCard shadow="flat" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/29.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Christina Chu
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Product Manager
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Hover">
            <div class="max-w-xs">
              <BaseCard shadow="hover" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/51.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Walter Johnson
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Frontend Developer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'contrasts'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="White">
            <div class="max-w-xs">
              <BaseCard color="default" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/35.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Alan Grunwald
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Backend Developer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast">
            <div class="max-w-xs">
              <BaseCard color="default-contrast" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/36.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Lana Stokes
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Mobile Developer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Muted">
            <div class="max-w-xs">
              <BaseCard color="muted" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/17.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Edna Callaway
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Project Manager
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Contrast">
            <div class="max-w-xs">
              <BaseCard color="muted-contrast" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/58.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Nevia Simmons
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Account Manager
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'colors'" class="relative">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Primary">
            <div class="max-w-xs">
              <BaseCard color="primary" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/30.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Amber Kirzian
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Software Engineer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Info">
            <div class="max-w-xs">
              <BaseCard color="info" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/31.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Dana Wilkins
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Project Manager
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Success">
            <div class="max-w-xs">
              <BaseCard color="success" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/26.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Eddie Sparikz
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Frontend Developer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Warning">
            <div class="max-w-xs">
              <BaseCard color="warning" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/32.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Sandra Brettner
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Backend Developer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Danger">
            <div class="max-w-xs">
              <BaseCard color="danger" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/51.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-800 dark:text-muted-100"
                  >
                    Hakeem Jackson
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    UI/UX Designer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Dark">
            <div class="max-w-xs">
              <BaseCard color="dark" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/25.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-muted-100 dark:text-muted-900"
                  >
                    Harold Stevens
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Software Engineer
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Black">
            <div class="max-w-xs">
              <BaseCard color="black" class="flex items-center gap-2 p-3">
                <BaseAvatar
                  src="/img/photo/avatars/33.jpg"
                  size="sm"
                  :rounded="rounded"
                />
                <div>
                  <BaseHeading
                    as="h3"
                    size="sm"
                    lead="tight"
                    class="text-white dark:text-black"
                  >
                    Anthony Ricketts
                  </BaseHeading>
                  <BaseParagraph size="xs" class="text-muted-400">
                    Product Manager
                  </BaseParagraph>
                </div>
              </BaseCard>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
