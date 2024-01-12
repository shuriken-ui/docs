<template>
  <div class="relative -start-20 z-10 w-full max-w-md">
    <div
      class="flex items-center justify-between rounded-xl border border-muted-300 bg-white px-3 py-2 text-muted-600 shadow-xl shadow-muted-300/20 dark:border-muted-800 dark:bg-muted-950 dark:text-white dark:shadow-muted-900/50"
    >
      <button type="button" class="flex h-10 w-10 items-center justify-center rounded-full text-muted-600 hover:bg-muted-100 dark:text-white dark:hover:bg-muted-700">
        <Icon name="lucide:menu" class="h-4 w-4" />
      </button>
      <div class="flex items-center gap-2">
        <button type="button" class="flex h-8 w-8 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-500 dark:hover:bg-muted-700 dark:hover:text-muted-100">
          <Icon name="mingcute:mail-fill" class="h-4 w-4" />
        </button>
        <button type="button" class="flex h-8 w-8 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-500 dark:hover:bg-muted-700 dark:hover:text-muted-100">
          <Icon name="mingcute:message-1-fill" class="h-4 w-4" />
        </button>
        <button type="button" class="flex h-8 w-8 items-center justify-center rounded-full text-muted-400 transition-colors duration-300 hover:bg-muted-100 hover:text-muted-900 dark:text-muted-500 dark:hover:bg-muted-700 dark:hover:text-muted-100">
          <Icon name="mingcute:notification-fill" class="h-4 w-4" />
        </button>
        <BaseDropdown
          variant="button"
          label="Dropdown"
          orientation="end"
          size="md"
        >
          <template #button>
            <div role="button" class="relative top-1 flex h-full items-center justify-center">
              <BaseAvatar src="/img/photo/avatars/49.jpg" size="xs" />
            </div>
          </template>
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
</template>
