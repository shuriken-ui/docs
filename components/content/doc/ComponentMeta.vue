<script setup lang="ts">
import { kebabCase } from 'scule'

const props = defineProps<{
  name: string
}>()
const docs = await useDocumentationMeta(() => props.name as any)

/**
 * Wrap https://... links in markdown with <a href="...">...</a>
 */
function wrapExternalLinks(string: string) {
  return string.replace(/https?:\/\/[^\s)]+/g, (url) => `<a class="text-primary-600 dark:text-primary-400 hover:underline" href="${url}" rel="noopener noreferrer" target="_blank">${url}</a>`)
}
</script>

<template>
  <div class="py-6">
    <div class="relative">
      <div v-if="docs.noOptions" class="mx-auto w-full">
        <div class="p-6">
          <div class="font-alt w-full">
            <div class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12">
              <div class="col-span-1 lg:col-span-4">
                <div class="flex">
                  <div class="text-muted-600 dark:text-muted-300 font-mono text-xs font-medium">
                    <span>This component has no props</span>
                  </div>
                </div>
              </div>
              <div class="col-span-1 lg:col-span-8">
                <pre class="max-w-none">
                  {{ docs.renderNoOptions() }}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Model display -->
      <div v-if="docs.model" class="mx-auto w-full">
        <div class="hidden lg:block">
          <div class="div-auto font-alt w-full">
            <div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase">
              <div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12">
                <div class="col-span-1 lg:col-span-3">
                  <div class="text-left font-semibold">Name</div>
                </div>
                <div class="col-span-1 lg:col-span-9">
                  <div class="text-left font-semibold">Type</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--Model render-->
        <div class="p-6">
          <div class="div-auto font-alt w-full">
            <div class="divide-muted-100 dark:divide-muted-700 space-y-12 divide-y text-sm">
              <div :key="docs.model.name" class="grid grid-cols-1 gap-6 lg:grid-cols-12">
                <div class="col-span-1 lg:col-span-3">
                  <div class="flex">
                    <div class="text-muted-800 dark:text-muted-100 font-medium">
                      <span class="text-muted-800 dark:text-muted-100 font-mono font-medium">
                        <code>v-model</code>
                      </span>
                    </div>
                  </div>

                  <div class="text-muted-400 whitespace-pre-wrap break-words text-left italic">
                    {{ docs.model.description }}
                  </div>
                  <div v-if="docs.model.tags?.length > 0" class="mt-3 space-y-2 break-words">
                    <div v-for="tag in docs.model.tags" :key="tag.name" class="text-muted-400 text-xs">
                      <p class="font-semibold">@{{ tag.name }}</p>
                      <!-- eslint-disable vue/no-v-html -->
                      <p v-if="tag.text" class="block" v-html="wrapExternalLinks(tag.text)" />
                      <!-- eslint-enable vue/no-v-html -->
                    </div>
                  </div>

                  <BaseTag v-if="docs.model.required" color="danger" size="sm" variant="pastel" class="my-2 font-mono"> Required </BaseTag>
                </div>
                <div class="col-span-1 lg:col-span-9">
                  <AddonMarkdownRemark class="inline-sample" :lines="false" :source="`\`\`\`ts\n${docs.model.type}\n\`\`\``" />
                </div>
                <div class="col-span-1 lg:col-span-9 lg:col-start-4">
                  <details class="group">
                    <summary
                      class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
                    >
                      <span class="inline group-open:hidden">Show example</span>
                      <span class="hidden group-open:inline">Hide example</span>
                      <Icon name="lucide:chevron-down" class="text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <AddonMarkdownRemark :lines="false" class="max-w-none" :source="docs.renderModel(docs.model)" />
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Props display -->
      <div v-if="docs.props?.length > 0" class="w-full">
        <div class="bg-white dark:bg-muted-950 rounded-md border border-muted-300 dark:border-muted-800 overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th class="w-32 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Prop</th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Type</th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in docs.props" :key="prop.name" class="border-t border-muted-300 dark:border-muted-800 text-sm">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <code class="px-1 text-[0.8rem] font-medium text-primary-600 rounded bg-primary-500/20">{{ kebabCase(prop.name) }}</code>
                    <div v-if="prop.description">
                      <BaseDropdown color="white-contrast" orientation="start" size="md">
                        <template #button>
                          <button type="button">
                            <Icon name="mingcute:information-line" class="text-muted-500 h-4 w-4" />
                          </button>
                        </template>
                        <div class="p-1">
                          <BaseParagraph size="xs" class="text-muted-700 dark:text-muted-200">{{ prop.description }}</BaseParagraph>
                        </div>
                      </BaseDropdown>
                    </div>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <MarkdownRemark minimal size="xs" :lines="false" :source="`\`\`\`ts\n${prop.type}\n\`\`\``" />
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <MarkdownRemark minimal size="xs" :lines="false" :source="`\`\`\`ts\n${!prop.default || prop.default === 'undefined' ? 'undefined' : prop.default}\n\`\`\``" />
                    <div v-if="prop.tags?.length > 0">
                      <BaseDropdown color="white-contrast" orientation="end" size="md">
                        <template #button>
                          <button type="button">
                            <Icon name="mingcute:information-line" class="text-muted-500 h-4 w-4" />
                          </button>
                        </template>
                        <div class="p-1">
                          <BaseParagraph size="xs" class="mb-2 text-muted-500 dark:text-muted-400">Additional info and tags like the default configuration value.</BaseParagraph>
                          <div v-for="tag in prop.tags" :key="tag.name" class="flex gap-1">
                            <BaseParagraph size="xs" class="text-muted-700 dark:text-muted-200"> @{{ tag.name }}:</BaseParagraph>
                            <BaseParagraph size="xs" v-if="tag.text" class="text-muted-700 dark:text-muted-200" v-html="wrapExternalLinks(tag.text)" />
                          </div>
                        </div>
                      </BaseDropdown>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- Events display -->
      <div v-if="docs.events?.length > 0" class="mx-auto mt-10 w-full">
        <!--div class="hidden lg:block">
          <div class="div-auto font-alt w-full">
            <div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase">
              <div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12">
                <div class="col-span-1 lg:col-span-3">
                  <div class="text-left font-semibold">Name</div>
                </div>
                <div class="col-span-1 lg:col-span-9">
                  <div class="text-left font-semibold">Emitted Value Type</div>
                </div>
              </div>
            </div>
          </div>
        </div-->

        <!--div class="p-6">
          <div class="div-auto font-alt w-full">
            <div v-for="event in docs.events" :key="event.type" class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12">
              <div class="col-span-1 lg:col-span-3">
                <div class="flex items-center">
                  <div class="text-muted-800 dark:text-muted-100 font-mono font-medium">
                    <code>@{{ event.name }}</code>
                    <div v-if="event.description" class="text-muted-400 whitespace-pre-wrap break-words text-left italic">
                      {{ event.description }}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-span-1 lg:col-span-9">
                <MarkdownRemark
                  class="inline-sample max-w-none"
                  :lines="false"
                  :source="`\`\`\`ts\n${(event.type.startsWith('[') ? event.type.slice(1, -1) : event.type).replace('value?: ', '')}\n\`\`\``"
                />
              </div>
              <div class="col-span-1 lg:col-span-9 lg:col-start-4">
                <details class="group">
                  <summary
                    class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
                  >
                    <span class="inline group-open:hidden">Show example</span>
                    <span class="hidden group-open:inline">Hide example</span>
                    <Icon name="lucide:chevron-down" class="text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <MarkdownRemark :lines="false" class="max-w-none" :source="docs.renderEvents(event)" />
                </details>
              </div>
            </div>
          </div>
        </div-->
      </div>
      <!-- Slots display -->
      <div v-if="docs.slots?.length > 0" class="mx-auto mt-10 w-full">
        <div class="bg-white dark:bg-muted-950 rounded-md border border-muted-300 dark:border-muted-800 overflow-x-auto">
          <table class="w-full">
            <thead>
              <tr>
                <th class="w-32 bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Slot</th>
                <th class="bg-muted-50 px-4 py-3 text-start font-sans text-sm font-medium text-muted-800 dark:bg-muted-900/50 dark:text-muted-100">Prop Type</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="slot in docs.slots" :key="slot.name" class="border-t border-muted-300 dark:border-muted-800 text-sm">
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <code class="px-1 text-[0.8rem] font-medium text-primary-600 rounded bg-primary-500/20">#{{ slot.name }}</code>
                  </div>
                </td>
                <td class="px-4 py-3">
                  <div class="flex items-center gap-1">
                    <MarkdownRemark minimal size="xs" :lines="false" :source="`\`\`\`ts\n${slot.type}\n\`\`\``" />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- Exposed display -->
        <div v-if="docs.exposed?.length > 0" class="mx-auto mt-10 w-full">
          <div class="px-6 pb-2 pt-6">
            <BaseHeading as="h3" size="md" weight="semibold" class="text-muted-800 dark:text-muted-200">
              <TairoTocAnchor :id="`${docs?.meta?.kebabName}-exposed`" :level="3" prefix="" suffix="¶" label="Exposed" />
            </BaseHeading>
          </div>

          <div class="hidden lg:block">
            <div class="div-auto font-alt w-full">
              <div class="bg-muted-50 text-muted-400 dark:bg-muted-700 px-4 text-xs font-semibold uppercase">
                <div class="grid grid-cols-1 gap-6 px-2 py-4 lg:grid-cols-12">
                  <div class="col-span-1 lg:col-span-3">
                    <div class="text-left font-semibold">Name</div>
                  </div>
                  <div class="col-span-1 lg:col-span-9">
                    <div class="text-left font-semibold">Type</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="p-6">
            <div class="div-auto font-alt w-full">
              <div v-for="exposed in docs.exposed" :key="exposed.name" class="border-muted-100 dark:border-muted-700 mb-6 grid grid-cols-1 gap-6 border-b pb-6 text-sm lg:grid-cols-12">
                <div class="col-span-1 lg:col-span-3">
                  <div class="flex items-center">
                    <div class="text-muted-800 dark:text-muted-100 font-mono font-medium">
                      <code>{{ exposed.name }}</code>
                      <div v-if="exposed.description" class="text-muted-400 whitespace-pre-wrap break-words text-left italic">
                        {{ exposed.description }}
                      </div>
                    </div>
                  </div>
                  <div class="text-muted-400 whitespace-pre-wrap break-words text-left italic">
                    {{ exposed.description }}
                  </div>
                </div>
                <div class="col-span-1 lg:col-span-9">
                  <MarkdownRemark class="inline-sample max-w-none" :lines="false" :source="`\`\`\`ts\n${exposed.type}\n\`\`\``" />
                </div>
                <div class="col-span-1 lg:col-span-9 lg:col-start-4">
                  <details class="group">
                    <summary
                      class="nui-focus hover:bg-muted-100 text-muted-500 inline-flex cursor-pointer list-none items-center justify-center gap-2 rounded-lg px-2 py-1.5 font-sans text-[0.8rem] transition-all duration-100"
                    >
                      <span class="inline group-open:hidden">Show example</span>
                      <span class="hidden group-open:inline">Hide example</span>
                      <Icon name="lucide:chevron-down" class="text-muted-400 h-4 w-4 transition-transform duration-200 group-open:rotate-180" />
                    </summary>
                    <MarkdownRemark :lines="false" class="max-w-none" :source="docs.renderExposed(exposed)" />
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inline-sample:deep(.shiki) {
  @apply my-0;
}
</style>
