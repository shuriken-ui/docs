<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <BasePlaceholderPage title="Get Notified" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges.">
        <template #image>
          <img class="dark:invert" src="/img/illustrations/placeholders/placeholder-3.svg" alt="placeholder-image" />
        </template>

        <div class="mt-2 flex justify-center gap-2">
          <BaseInput
            rounded="md"
            placeholder="Enter your email"
          />
          <BaseButton color="primary" rounded="md"> Subscribe </BaseButton>
        </div>
      </BasePlaceholderPage>
    </div>
  </div>
</template>
