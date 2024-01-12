<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900 md:p-6">
      <div class="max-w-sm">
        <BaseCard rounded="md" class="p-4 md:p-6">
          <div class="flex items-center gap-3">
            <BasePlaceload class="h-10 w-10 rounded-full" />
            <div class="grow space-y-2">
              <BasePlaceload class="h-3 w-full rounded" />
              <BasePlaceload class="h-3 w-[85%] rounded" />
            </div>
          </div>
        </BaseCard>
      </div>
    </div>
  </div>
</template>
