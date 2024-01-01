
<template>
  <div class="relative -start-20 w-full max-w-md z-10">
    <div
      class="px-3 py-2 flex items-center justify-between rounded-xl text-muted-600 dark:text-white border border-muted-300 dark:border-muted-800 bg-white dark:bg-muted-950 shadow-xl shadow-muted-300/20 dark:shadow-muted-900/50"
    >
      <button type="button" class="h-10 w-10 flex items-center justify-center rounded-full text-muted-600 dark:text-white hover:bg-muted-100 dark:hover:bg-muted-700">
        <Icon name="lucide:menu" class="w-4 h-4" />
      </button>
      <div class="flex items-center gap-2">
        <button type="button" class="h-8 w-8 flex items-center justify-center rounded-full text-muted-400 dark:text-muted-500 hover:text-muted-900 dark:hover:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors duration-300">
          <Icon name="mingcute:mail-fill" class="w-4 h-4" />
        </button>
        <button type="button" class="h-8 w-8 flex items-center justify-center rounded-full text-muted-400 dark:text-muted-500 hover:text-muted-900 dark:hover:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors duration-300">
          <Icon name="mingcute:message-1-fill" class="w-4 h-4" />
        </button>
        <button type="button" class="h-8 w-8 flex items-center justify-center rounded-full text-muted-400 dark:text-muted-500 hover:text-muted-900 dark:hover:text-muted-100 hover:bg-muted-100 dark:hover:bg-muted-700 transition-colors duration-300">
          <Icon name="mingcute:notification-fill" class="w-4 h-4" />
        </button>
        <BaseDropdown variant="button" label="Dropdown" orientation="end" size="md">
          <template #button>
            <div role="button" class="relative top-1 h-full flex items-center justify-center">
              <BaseAvatar src="/img/photo/avatars/49.jpg" size="xs" />
            </div>
          </template>
          <BaseDropdownItem to="#" title="Profile" text="View your profile" color="default" rounded="sm" />
          <BaseDropdownItem to="#" title="Projects" text="View your projects" color="default" rounded="sm" />
          <BaseDropdownItem to="#" title="Team" text="Manage your team" color="default" rounded="sm" />
          <BaseDropdownItem to="#" title="Settings" text="Set your preferences" color="default" rounded="sm" />
        </BaseDropdown>
      </div>
    </div>
  </div>
</template>
