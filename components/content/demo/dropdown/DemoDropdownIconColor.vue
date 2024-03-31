<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex w-full justify-start gap-8">
          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              color="dark"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>

          <BaseDropdown
            variant="button"
            label="Dropdown"
            orientation="start"
          >
            <BaseDropdownItem
              to="#"
              title="Profile"
              text="View your profile"
              color="primary"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:user-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Projects"
              text="View your projects"
              color="primary"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:briefcase-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Team"
              text="Manage your team"
              color="primary"
              rounded="sm"
            >
              <template #start>
                <Icon name="ph:users-four-duotone" class="me-2 block h-5 w-5" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              to="#"
              title="Settings"
              text="Set your preferences"
              color="primary"
              rounded="sm"
            >
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
