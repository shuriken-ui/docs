<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-end gap-8">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="end"
            size="md"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              color="default"
              rounded="sm"
            />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              color="default"
              rounded="sm"
            />
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
