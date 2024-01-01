<template>
  <div class="flex items-center p-4">
    <div class="w-full max-w-sm">
      <BaseTabSlider
        v-slot="{ activeValue }"
        model-value="team"
        rounded="sm"
        :tabs="[
          { label: 'Team', value: 'team' },
          { label: 'Projects', value: 'projects' },
          { label: 'Tasks', value: 'tasks' },
        ]"
      >
        <p v-if="activeValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
        </p>

        <p v-else-if="activeValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra
          Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
        </p>

        <p v-else-if="activeValue === 'tasks'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra.
        </p>
      </BaseTabSlider>
    </div>
  </div>
</template>
