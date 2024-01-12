<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex flex-wrap items-end gap-4">
          <BaseButtonGroup>
            <BaseButton color="muted">
              <span>USD</span>
            </BaseButton>
            <BaseInput
              v-model.number="amount"
              :classes="{
                wrapper: 'w-28',
              }"
              type="number"
              placeholder="0.00"
            />
            <BaseSelect
              v-model="taxes"
              :classes="{
                wrapper: 'w-36',
              }"
            >
              <option value="With taxes">
                With taxes
              </option>
              <option value="Without taxes">
                Without taxes
              </option>
            </BaseSelect>
          </BaseButtonGroup>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const amount = ref<number | undefined>(undefined)
const taxes = ref('With taxes')
</script>
