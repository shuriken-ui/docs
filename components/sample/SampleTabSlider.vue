<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="double-slot"
    :tabs="[
      { label: '2 slots', value: 'double-slot' },
      { label: '3 slots', value: 'triple-slot' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'double-slot'" class="relative pb-4">
        <div class="space-y-8">
          <PlaygroundSampleRow label="Normal" label-align="start">
            <div class="w-full max-w-sm">
              <BaseTabSlider
                v-slot="{ activeValue: activeChildValue }"
                model-value="team"
                :rounded="rounded"
                :tabs="[
                  { label: 'Team', value: 'team' },
                  { label: 'Projects', value: 'projects' },
                ]"
              >
                <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                </p>

                <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra
                  Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                </p>
              </BaseTabSlider>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Small" label-align="start">
            <div class="w-full max-w-sm">
              <BaseTabSlider
                v-slot="{ activeValue: activeChildValue }"
                model-value="team"
                :rounded="rounded"
                size="sm"
                :tabs="[
                  { label: 'Team', value: 'team' },
                  { label: 'Projects', value: 'projects' },
                ]"
              >
                <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                </p>

                <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra
                  Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                </p>
              </BaseTabSlider>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'triple-slot'" class="relative pb-4">
        <div class="space-y-8">
          <PlaygroundSampleRow label="Normal" label-align="start">
            <div class="w-full max-w-sm">
              <BaseTabSlider
                v-slot="{ activeValue: activeChildValue }"
                model-value="team"
                :rounded="rounded"
                color="dark"
                :tabs="[
                  { label: 'Team', value: 'team' },
                  { label: 'Projects', value: 'projects' },
                  { label: 'Tasks', value: 'tasks' },
                ]"
              >
                <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                </p>
                <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra
                  Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                </p>
                <p v-if="activeChildValue === 'tasks'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                </p>
              </BaseTabSlider>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Small" label-align="start">
            <div class="w-full max-w-sm">
              <BaseTabSlider
                v-slot="{ activeValue: activeChildValue }"
                model-value="team"
                :rounded="rounded"
                size="sm"
                color="dark"
                :tabs="[
                  { label: 'Team', value: 'team' },
                  { label: 'Projects', value: 'projects' },
                  { label: 'Tasks', value: 'tasks' },
                ]"
              >
                <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                </p>
                <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra
                  Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                </p>
                <p v-if="activeChildValue === 'tasks'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                </p>
              </BaseTabSlider>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
