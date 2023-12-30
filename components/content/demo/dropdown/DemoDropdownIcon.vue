<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-8">
          <BaseDropdown variant="button" label="Dropdown" orientation="start">
            <BaseDropdownItem to="#" title="Profile" text="View your profile" color="default" rounded="sm">
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem to="#" title="Projects" text="View your projects" color="default" rounded="sm">
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem to="#" title="Team" text="Manage your team" color="default" rounded="sm">
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem to="#" title="Settings" text="Set your preferences" color="default" rounded="sm">
              <template #start>
                <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
