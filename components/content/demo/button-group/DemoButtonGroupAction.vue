<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButtonGroup>
            <BaseButtonAction rounded="md">
              View
            </BaseButtonAction>
            <BaseButtonAction rounded="md">
              <Icon name="ph:pen" class="h-4 w-4" />
            </BaseButtonAction>
            <BaseButtonAction muted rounded="md">
              Muted
            </BaseButtonAction>
            <BaseDropdown label="plus">
              <template #button>
                <BaseButtonAction rounded="none">
                  plus
                </BaseButtonAction>
              </template>
              <BaseDropdownItem> Edit </BaseDropdownItem>
              <BaseDropdownItem> Cancel </BaseDropdownItem>
            </BaseDropdown>
            <BaseButtonAction disabled rounded="md">
              Disabled
            </BaseButtonAction>
            <BaseButtonAction rounded="md">
              Share
            </BaseButtonAction>
          </BaseButtonGroup>
        </div>
      </div>
    </div>
  </div>
</template>
