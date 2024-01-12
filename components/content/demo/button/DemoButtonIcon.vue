<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButton color="default">
            <Icon name="lucide:moon" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="primary">
            <span>Button</span>
            <Icon name="lucide:arrow-right" class="me-1 h-4 w-4" />
          </BaseButton>
          <BaseButton variant="outline" color="success">
            <Icon name="cib:circleci" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="info">
            <Icon name="fa:twitter" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton color="warning">
            <Icon name="ion:shapes" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
          <BaseButton variant="pastel" color="danger">
            <Icon name="mingcute:heart-fill" class="-ms-1 h-4 w-4" />
            <span>Button</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
