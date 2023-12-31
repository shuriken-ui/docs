<template>
  <div class="flex items-center justify-center px-4 pt-4 pb-0">
    <div class="w-full bg-muted-100 dark:bg-muted-900 rounded-xl p-4 md:p-6">
      <div class="flex flex-col md:flex-row max-w-3xl items-end gap-3">
        <div class="flex-1">
          <BaseSelect
            v-model="fields.first"
            rounded="sm"
            label="Select Hero"
            label-float
            :classes="{
              wrapper: 'w-full',
            }"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
        </div>

        <div class="flex-1">
          <BaseSelect
            v-model="fields.second"
            rounded="sm"
            icon="fa6-solid:masks-theater"
            label="Select Hero"
            label-float
            :classes="{
              wrapper: 'w-full',
            }"
          >
            <option value="">Select a hero</option>
            <option value="Superman">Superman</option>
            <option value="Batman">Batman</option>
            <option value="Iron man">Iron man</option>
            <option value="Magneto">Magneto</option>
            <option value="Cyclops">Cyclops</option>
          </BaseSelect>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const fields = reactive({
  first: '',
  second: '',
})
</script>
