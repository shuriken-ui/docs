<script setup lang="ts">
const swicthThin = ref(false)
const swicthBall = ref(true)
</script>

<template>
  <div class="relative grid gap-6 grid-cols-12 z-10">
    <!-- Row -->
    <div class="relative col-span-12 z-20">
      <div class="flex items-end gap-2">
        <BaseButtonIcon size="lg" rounded="lg">
          <Icon name="octicon:typography-16" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon size="md" rounded="lg">
          <Icon name="mingcute:alarm-2-line" class="w-5 h-5" />
        </BaseButtonIcon>
        <BaseButtonIcon size="sm" rounded="lg">
          <Icon name="lucide:file-question" class="w-4 h-4" />
        </BaseButtonIcon>
      </div>
    </div>
    <!-- Row -->
    <div class="relative col-span-12 z-20">
      <div class="flex items-center gap-4">
        <!-- Button -->
        <BaseButton size="lg" color="none" rounded="lg" badge badge-pulse class="w-32 bg-muted-900 hover:bg-muted-800 dark:bg-muted-950 dark:hover:bg-muted-800 text-white"> Button </BaseButton>
        <!-- Switch -->
        <BaseSwitchThin v-model="swicthThin" />
        <BaseSwitchBall v-model="swicthBall" />
        <BaseCheckbox color="primary" />
      </div>
    </div>
    <!-- Row -->
    <div class="relative col-span-12 z-30">
      <!-- App bar -->
      <ExampleMenuBar />
    </div>
    <!-- Row -->
    <div class="relative col-span-12 z-20">
      <div class="flex items-end gap-4">
        <!-- User card -->
        <ExampleCardUser />
        <!-- Badges -->
        <ExampleCardBadges />
        <div class="flex flex-col justify-end gap-4">
          <!-- Pagination -->
          <ExamplePagination />
          <!-- Paypal card -->
          <ExampleCardPaypal />
        </div>
        <BaseIconBox size="lg" rounded="lg" color="default">
          <Icon name="ph:lightning-duotone" class="w-6 h-6" />
        </BaseIconBox>
        <BaseIconBox size="md" rounded="none" mask="hex" color="primary" variant="pastel">
          <Icon name="ph:subtract-duotone" class="w-5 h-5" />
        </BaseIconBox>
      </div>
    </div>
    <!-- Row -->
    <div class="relative col-span-12 z-20">
      <div class="flex items-start gap-4">
        <div class="flex flex-col justify-end gap-4">
          <!-- Search field -->
          <ExampleSearch />
        </div>
        <!-- User tasks -->
        <ExampleCardTasks />
        <div class="h-full flex flex-col justify-end gap-4">
          <!-- Video card -->
          <ExampleCardVideo />
          <!-- Employee Hire -->
          <ExampleCardHire />
          <div class="flex items-end gap-4 p-4">
            <BaseSnack label="Anna" color="default" size="xs" image="/img/photo/avatars/36.jpg" />
            <BaseSnack label="Christina" color="default" size="xs" image="/img/photo/avatars/29.jpg" />
            <BaseSnack label="Harry" color="default" size="xs" image="/img/photo/avatars/16.jpg" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
