<template>
  <div class="flex items-center p-4">
    <BaseTabs
      model-value="team"
      :tabs="[
        { label: 'Team', value: 'team' },
        { label: 'Projects', value: 'projects' },
      ]"
    >
      <template #tab="{ activeValue }">
        <p v-if="activeValue === 'team'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times.
        </p>

        <p v-else-if="activeValue === 'projects'" class="font-sans text-sm text-muted-500 dark:text-muted-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae diligentissime contra
          Aristonem dicuntur a Chryippo. Duo Reges: constructio interrete.
        </p>
      </template>
    </BaseTabs>
  </div>
</template>
