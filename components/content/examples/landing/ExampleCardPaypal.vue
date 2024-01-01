<template>
  <BaseCard color="white-contrast" rounded="lg" shadow="flat" class="relative p-6 z-10 shadow-xl">
    <div class="flex justify-between items-center gap-4">
      <div class="flex items-center space-x-2">
        <Icon name="logos:paypal" class="w-auto h-8" />
        <div>
          <BaseHeading as="h3" size="md" weight="semibold" lead="tight" class="text-muted-800 dark:text-muted-100"> PayPal </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-400"> Payment Captured </BaseParagraph>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <BaseTag color="none" rounded="full" class="bg-muted-900 dark:bg-muted-950 text-white"> - $367.14 </BaseTag>
      </div>
    </div>
  </BaseCard>
</template>
