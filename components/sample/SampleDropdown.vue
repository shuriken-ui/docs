<script setup lang="ts">
const { rounded } = usePlayground()
</script>

<template>
  <BaseTabs
    model-value="button"
    :tabs="[
      { label: 'Button', value: 'button' },
      { label: 'Context', value: 'context' },
      { label: 'Text', value: 'text' },
      { label: 'Icons', value: 'icons' },
      { label: 'Media', value: 'media' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'button'" class="relative pb-4">
        <div>
          <PlaygroundSampleRow label="Button" label-align="center">
            <div class="flex w-full justify-start gap-8">
              <BaseDropdown
                variant="button"
                label="Dropdown"
                orientation="start"
                size="md"
                fixed
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
              <BaseDropdown
                variant="button"
                label="Dropdown"
                button-color="primary"
                orientation="start"
                size="md"
                fixed
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
              <BaseDropdown
                variant="button"
                label="Dropdown"
                orientation="end"
                size="lg"
                fixed
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
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'context'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Context" label-align="center">
            <div class="flex w-full justify-start gap-8 py-3">
              <BaseDropdown
                variant="context"
                label="Dropdown"
                orientation="start"
                size="md"
                fixed
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
              <BaseDropdown
                variant="context"
                label="Dropdown"
                orientation="end"
                size="md"
                fixed
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
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'text'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Text" label-align="center">
            <div class="flex w-full justify-start gap-8">
              <BaseDropdown
                variant="text"
                label="Dropdown"
                orientation="start"
                size="md"
                fixed
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
              <BaseDropdown
                variant="text"
                label="Dropdown"
                orientation="end"
                size="md"
                fixed
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
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'icons'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Icons" label-align="center">
            <div class="flex w-full justify-start gap-8">
              <BaseDropdown
                variant="button"
                label="Dropdown"
                orientation="start"
                fixed
              >
                <BaseDropdownItem
                  to="#"
                  title="Profile"
                  text="View your profile"
                  color="default"
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
                  color="default"
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
                  color="default"
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
                  color="default"
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
                orientation="end"
                fixed
              >
                <BaseDropdownItem
                  to="#"
                  title="Profile"
                  text="View your profile"
                  color="default"
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
                  color="default"
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
                  color="default"
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
                  color="default"
                  rounded="sm"
                >
                  <template #start>
                    <Icon name="ph:gear-six-duotone" class="me-2 block h-5 w-5" />
                  </template>
                </BaseDropdownItem>
              </BaseDropdown>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'media'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Images" label-align="center">
            <div class="flex w-full justify-start gap-8">
              <BaseDropdown
                variant="button"
                label="Dropdown"
                orientation="start"
                fixed
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
              <BaseDropdown
                variant="button"
                label="Dropdown"
                orientation="end"
                fixed
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
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
