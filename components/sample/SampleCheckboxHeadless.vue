<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref(['team_member_1'])

function reset() {
  value.value = []
}
</script>

<template>
  <div class="relative pb-4">
    <div class="space-y-4">
      <PlaygroundSampleRow label="Example" label-align="center">
        <div class="grid gap-3 sm:grid-cols-3">
          <BaseCheckboxHeadless v-model="value" value="team_member_1">
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="border-2 p-4 opacity-50 peer-checked:!border-primary-500 peer-checked:opacity-100 peer-checked:[&_.child]:!text-primary-500">
              <div class="flex w-full items-center gap-2">
                <BaseAvatar
                  size="xs"
                  :rounded="rounded"
                  src="/img/photo/avatars/21.jpg"
                />
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                  >
                    Kendra Wilson
                  </BaseHeading>
                  <BaseText size="xs" class="text-muted-400">
                    Software Engineer
                  </BaseText>
                </div>
                <div class="child ms-auto text-muted-300">
                  <div class="h-2 w-2 rounded-full bg-current" />
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
          <BaseCheckboxHeadless v-model="value" value="team_member_2">
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="border-2 p-4 opacity-50 peer-checked:!border-primary-500 peer-checked:opacity-100 peer-checked:[&_.child]:!text-primary-500">
              <div class="flex w-full items-center gap-2">
                <BaseAvatar
                  size="xs"
                  :rounded="rounded"
                  src="/img/photo/avatars/55.jpg"
                />
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                  >
                    Hermann Mayer
                  </BaseHeading>
                  <BaseText size="xs" class="text-muted-400">
                    Sales Manager
                  </BaseText>
                </div>
                <div class="child ms-auto text-muted-300">
                  <div class="h-2 w-2 rounded-full bg-current" />
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
          <BaseCheckboxHeadless v-model="value" value="team_member_3">
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="border-2 p-4 opacity-50 peer-checked:!border-primary-500 peer-checked:opacity-100 peer-checked:[&_.child]:!text-primary-500">
              <div class="flex w-full items-center gap-2">
                <BaseAvatar
                  size="xs"
                  :rounded="rounded"
                  src="/img/photo/avatars/42.jpg"
                />
                <div>
                  <BaseHeading
                    as="h4"
                    size="sm"
                    weight="medium"
                    lead="none"
                  >
                    Melany Lawright
                  </BaseHeading>
                  <BaseText size="xs" class="text-muted-400">
                    HR Manager
                  </BaseText>
                </div>
                <div class="child ms-auto text-muted-300">
                  <div class="h-2 w-2 rounded-full bg-current" />
                </div>
              </div>
            </BaseCard>
          </BaseCheckboxHeadless>
        </div>
      </PlaygroundSampleRow>
    </div>
  </div>
</template>
