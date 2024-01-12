<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <BasePlaceholderPage
        image-size="md"
        title="Starting Soon!"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Erat enim Polemonis. Duo Reges."
      >
        <template #image>
          <NuxtImg
            loading="lazy"
            decoding="async"
            class="dark:invert"
            src="/img/illustrations/placeholders/placeholder-2.svg"
            alt="placeholder-image"
          />
        </template>

        <div class="mt-2 flex justify-center gap-2">
          <BaseButton rounded="lg" class="w-32">
            Cancel
          </BaseButton>
          <BaseButton
            color="primary"
            rounded="lg"
            class="w-32"
          >
            Confirm
          </BaseButton>
        </div>
      </BasePlaceholderPage>
    </div>
  </div>
</template>
