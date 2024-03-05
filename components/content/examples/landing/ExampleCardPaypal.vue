<template>
  <BaseCard
    color="default-contrast"
    rounded="lg"
    shadow="flat"
    class="relative z-10 p-6 shadow-xl"
  >
    <div class="flex items-center justify-between gap-4">
      <div class="flex items-center space-x-2">
        <Icon name="logos:paypal" class="h-8 w-auto" />
        <div>
          <BaseHeading
            as="h3"
            size="md"
            weight="semibold"
            lead="tight"
            class="text-muted-800 dark:text-muted-100"
          >
            PayPal
          </BaseHeading>
          <BaseParagraph size="xs" class="text-muted-400">
            Payment Captured
          </BaseParagraph>
        </div>
      </div>

      <div class="flex items-center space-x-2">
        <BaseTag
          rounded="full"
          class="bg-muted-900 text-white dark:bg-muted-950"
        >
          - $367.14
        </BaseTag>
      </div>
    </div>
  </BaseCard>
</template>
