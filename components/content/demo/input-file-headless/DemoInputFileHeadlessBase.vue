<template>
  <div class="p-4">
    <div class="max-w-full">
      <BaseInputFileHeadless
        v-slot="{ open, remove, preview, drop, files }"
        v-model="uploadedFiles"
        multiple
      >
        <!-- Controls -->
        <div class="mb-4 flex items-center gap-2">
          <button
            type="button"
            class="nui-focus relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted-200 bg-white text-muted-700 transition-colors duration-300 hover:border-primary-500 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:hover:border-primary-500 dark:hover:text-primary-600"
            tooltip="Select files"
            @click="open"
          >
            <Icon name="lucide:plus" class="h-4 w-4" />

            <span class="sr-only">Select files</span>
          </button>

          <button
            type="button"
            class="nui-focus relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted-200 bg-white text-muted-700 transition-colors duration-300 hover:border-primary-500 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-800 dark:text-muted-200 dark:hover:border-primary-500 dark:hover:text-primary-600"
            tooltip="Start Upload"
          >
            <Icon name="lucide:arrow-up" class="h-4 w-4" />

            <span class="sr-only">Start Upload</span>
          </button>
        </div>

        <div
          role="button"
          tabindex="-1"
          class=""
          @dragenter.stop.prevent
          @dragover.stop.prevent
          @drop="drop"
        >
          <div
            v-if="!files?.length"
            class="group nui-focus cursor-pointer rounded-lg border-[3px] border-dashed border-muted-300 p-8 transition-colors duration-300 hover:border-muted-400 focus:border-muted-400 dark:border-muted-700 dark:hover:border-muted-600 dark:focus:border-muted-700"
            tabindex="0"
            role="button"
            @click="open"
            @keydown.enter.prevent="open"
          >
            <div class="p-5 text-center">
              <Icon name="mdi-light:cloud-upload" class="mb-2 h-10 w-10 text-muted-400 transition-colors duration-300 group-hover:text-primary-500 group-focus:text-primary-500" />

              <h4 class="font-sans text-sm text-muted-400">
                Drop files to upload
              </h4>

              <div>
                <span class="font-sans text-[0.7rem] font-semibold uppercase text-muted-400"> Or </span>
              </div>

              <label
                for="file"
                class="cursor-pointer font-sans text-sm text-muted-400 underline underline-offset-4 transition-colors duration-300 group-hover:text-primary-500 group-focus:text-primary-500"
              >
                Select files
              </label>
            </div>
          </div>

          <ul v-else class="mt-6 space-y-2">
            <li v-for="file in files" :key="file.name">
              <div class="relative flex items-center justify-end gap-2 rounded-xl border border-muted-200 bg-white p-3 dark:border-muted-700 dark:bg-muted-800">
                <div class="flex items-center gap-2">
                  <div class="shrink-0">
                    <NuxtImg
                      v-if="file.type.startsWith('image')"
                      loading="lazy"
                      decoding="async"
                      class="h-14 w-14 rounded-xl object-cover object-center"
                      :src="preview(file).value"
                      alt="Image preview"
                    />

                    <NuxtImg
                      v-else
                      loading="lazy"
                      decoding="async"
                      format="webp"
                      class="h-14 w-14 rounded-xl object-cover object-center"
                      src="/img/avatars/placeholder-file.png"
                      alt="Image preview"
                    />
                  </div>

                  <div class="font-sans">
                    <span class="line-clamp-1 block text-sm text-muted-800 dark:text-muted-100">
                      {{ file.name }}
                    </span>

                    <span class="block text-xs text-muted-400">
                      {{ file.size }}
                    </span>
                  </div>
                </div>

                <div class="ms-auto w-32 px-4 transition-opacity duration-300" :class="'opacity-100'">
                  <BaseProgress
                    :value="0"
                    size="xs"
                    :color="'success'"
                  />
                </div>

                <div class="flex gap-2">
                  <button
                    class="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted-200 bg-white text-muted-700 transition-colors duration-300 hover:border-primary-500 hover:text-primary-600 disabled:cursor-not-allowed disabled:opacity-60 dark:border-muted-700 dark:bg-muted-900 dark:text-muted-200 dark:hover:border-primary-500 dark:hover:text-primary-600"
                    disabled
                    type="button"
                    tooltip="Cancel"
                  >
                    <Icon name="lucide:slash" class="h-4 w-4" />

                    <span class="sr-only">Cancel</span>
                  </button>

                  <button
                    class="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted-200 bg-white text-muted-700 transition-colors duration-300 hover:border-primary-500 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:text-muted-200 dark:hover:border-primary-500 dark:hover:text-primary-600"
                    type="button"
                    tooltip="Upload"
                  >
                    <Icon name="lucide:arrow-up" class="h-4 w-4" />

                    <span class="sr-only">Upload</span>
                  </button>

                  <button
                    class="relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border border-muted-200 bg-white text-muted-700 transition-colors duration-300 hover:border-primary-500 hover:text-primary-600 dark:border-muted-700 dark:bg-muted-900 dark:text-muted-200 dark:hover:border-primary-500 dark:hover:text-primary-600"
                    type="button"
                    tooltip="Remove"
                    @click.prevent="remove(file)"
                  >
                    <Icon name="lucide:x" class="h-4 w-4" />

                    <span class="sr-only">Remove</span>
                  </button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </BaseInputFileHeadless>
    </div>
  </div>
</template>

<script setup lang="ts">
const uploadedFiles = ref<FileList | null>(null)
</script>
