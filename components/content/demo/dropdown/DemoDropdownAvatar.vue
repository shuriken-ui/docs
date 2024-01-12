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
              title="Lana Jensen"
              text="Software Engineer"
              color="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar src="/img/avatars/4.svg" size="xs" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="Shawn Miller"
              text="Product Manager"
              color="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar src="/img/avatars/3.svg" size="xs" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownItem
              to="#"
              title="John Marynski"
              text="Sales Manager"
              color="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar src="/img/avatars/18.svg" size="xs" />
              </template>
            </BaseDropdownItem>
            <BaseDropdownDivider />
            <BaseDropdownItem
              to="#"
              title="Garry Porter"
              text="CEO - Founder"
              color="default"
              rounded="sm"
            >
              <template #start>
                <BaseAvatar src="/img/avatars/6.svg" size="xs" />
              </template>
            </BaseDropdownItem>
          </BaseDropdown>
        </div>
      </div>
    </div>
  </div>
</template>
