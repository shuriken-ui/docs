<template>
  <div class="p-4">
    <form
      action=""
      method="POST"
      @submit.prevent=""
    >
      <BaseInputFileHeadless
        v-slot="{ open, remove, preview, files }"
        v-model="inputFile"
        accept="image/*"
      >
        <div class="relative h-20 w-20">
          <NuxtImg
            v-if="files?.length && files.item(0)"
            loading="lazy"
            decoding="async"
            :src="preview(files.item(0)!).value"
            alt="Upload preview"
            class="h-20 w-20 rounded-full bg-muted-200 object-cover object-center dark:bg-muted-700/60"
          />

          <NuxtImg
            v-else
            loading="lazy"
            decoding="async"
            :src="currentAvatar"
            alt="Upload preview"
            class="h-20 w-20 rounded-full bg-muted-200 object-cover object-center dark:bg-muted-700/60"
          />

          <div v-if="files?.length && files.item(0)" class="absolute bottom-0 end-0 z-20">
            <BaseButtonIcon
              size="sm"
              rounded="full"
              data-nui-tooltip="Remove image"
              class="scale-90"
              @click="remove(files.item(0)!)"
            >
              <Icon name="lucide:x" class="h-4 w-4" />
            </BaseButtonIcon>
          </div>

          <div v-else class="absolute bottom-0 end-0 z-20">
            <div class="relative" data-nui-tooltip="Upload image">
              <BaseButtonIcon
                size="sm"
                rounded="full"
                @click="open"
              >
                <Icon name="lucide:plus" class="h-4 w-4" />
              </BaseButtonIcon>
            </div>
          </div>
        </div>
      </BaseInputFileHeadless>
    </form>
  </div>
</template>

<script setup lang="ts">
// This is the computed value that will be used to display the current avatar
const currentAvatar = computed(() => '/img/avatars/10.svg')
const inputFile = ref<FileList | null>(null)
</script>
