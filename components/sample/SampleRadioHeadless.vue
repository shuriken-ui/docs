<script setup lang="ts">
const { rounded } = usePlayground()

const value = ref('value_1')
</script>

<template>
  <div class="relative pb-4">
    <div class="space-y-4">
      <PlaygroundSampleRow label="Example" label-align="start">
        <div class="grid gap-4 sm:grid-cols-4">
          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_1"
          >
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="relative border-2 p-5 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100">
              <div class="flex flex-col">
                <h4 class="mb-3 font-sans text-sm font-medium uppercase leading-tight text-muted-500 dark:text-muted-200">
                  Starter
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">1</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$5</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="h-7 w-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_2"
          >
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="relative border-2 p-5 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100">
              <div class="flex flex-col">
                <h4 class="mb-3 font-sans text-sm font-medium uppercase leading-tight text-muted-500 dark:text-muted-200">
                  Freelancer
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">5</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$10</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="h-7 w-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_3"
          >
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="relative border-2 p-5 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100">
              <div class="flex flex-col">
                <h4 class="mb-3 font-sans text-sm font-medium uppercase leading-tight text-muted-500 dark:text-muted-200">
                  Business
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">10</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$15</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="h-7 w-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
          <BaseRadioHeadless
            v-model="value"
            name="radio_custom"
            value="value_4"
          >
            <BaseCard :rounded="(rounded as 'none' | 'sm' | 'md' | 'lg')" class="relative border-2 p-5 peer-checked:!border-success-500 peer-checked:!bg-success-500/10 peer-checked:[&_.child]:!opacity-100">
              <div class="flex flex-col">
                <h4 class="mb-3 font-sans text-sm font-medium uppercase leading-tight text-muted-500 dark:text-muted-200">
                  Enterprise
                </h4>
                <h3 class="font-sans font-bold text-muted-800 dark:text-muted-100">
                  <span class="text-4xl">20</span>
                  <span class="text-2xl uppercase">GB</span>
                </h3>
                <div class="font-sans">
                  <span class="text-xl font-bold text-muted-800 dark:text-muted-100">$20</span>
                  <span class="text-sm font-medium text-muted-500 dark:text-muted-400">/month</span>
                </div>
              </div>
              <div class="child absolute end-2 top-3 opacity-0">
                <Icon name="ph:check-circle-duotone" class="h-7 w-7 text-success-500" />
              </div>
            </BaseCard>
          </BaseRadioHeadless>
        </div>
      </PlaygroundSampleRow>
    </div>
  </div>
</template>
