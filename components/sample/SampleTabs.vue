<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="types"
    :tabs="[
      { label: 'Types', value: 'types' },
      { label: 'Icons', value: 'icons' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'types'" class="relative pb-4">
        <div class="space-y-8">
          <PlaygroundSampleRow label="Regular" label-align="start">
            <div class="flex items-center">
              <BaseTabs
                model-value="team"
                :tabs="[
                  { label: 'Team', value: 'team' },
                  { label: 'Projects', value: 'projects' },
                ]"
              >
                <template #tab="{ activeValue: activeChildValue }">
                  <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                  </p>

                  <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                  </p>
                </template>
              </BaseTabs>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Boxed" label-align="start">
            <div class="flex items-center">
              <BaseTabs
                model-value="team"
                type="box"
                :tabs="[
                  { label: 'Team', value: 'team' },
                  { label: 'Projects', value: 'projects' },
                ]"
              >
                <template #tab="{ activeValue: activeChildValue }">
                  <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                  </p>

                  <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                  </p>
                </template>
              </BaseTabs>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'icons'" class="relative pb-4">
        <div class="space-y-8">
          <PlaygroundSampleRow label="Regular" label-align="start">
            <div class="flex items-center">
              <BaseTabs
                model-value="team"
                color="dark"
                :tabs="[
                  {
                    label: 'Team',
                    value: 'team',
                    icon: 'ph:users-three-duotone',
                  },
                  {
                    label: 'Projects',
                    value: 'projects',
                    icon: 'ph:briefcase-duotone',
                  },
                  {
                    label: 'Tasks',
                    value: 'tasks',
                    icon: 'ph:check-circle-duotone',
                  },
                ]"
              >
                <template #tab="{ activeValue: activeChildValue }">
                  <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                  </p>

                  <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                  </p>

                  <p v-else-if="activeChildValue === 'tasks'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra.
                  </p>
                </template>
              </BaseTabs>
            </div>
          </PlaygroundSampleRow>
          <PlaygroundSampleRow label="Boxed" label-align="start">
            <div class="flex items-center">
              <BaseTabs
                type="box"
                color="dark"
                model-value="team"
                :tabs="[
                  {
                    label: 'Team',
                    value: 'team',
                    icon: 'ph:users-three-duotone',
                  },
                  {
                    label: 'Projects',
                    value: 'projects',
                    icon: 'ph:briefcase-duotone',
                  },
                  {
                    label: 'Tasks',
                    value: 'tasks',
                    icon: 'ph:check-circle-duotone',
                  },
                ]"
              >
                <template #tab="{ activeValue: activeChildValue }">
                  <p v-if="activeChildValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
                  </p>

                  <p v-else-if="activeChildValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
                  </p>

                  <p v-else-if="activeChildValue === 'tasks'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime
                    contra.
                  </p>
                </template>
              </BaseTabs>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
