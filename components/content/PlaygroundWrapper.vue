<script setup lang="ts">
import { UseClipboard } from '@vueuse/components'
const { rounded } = usePlayground()

const isPanelOpen = ref(false)
const isModalOpen = ref(false)
const isLoading = ref(false)

const currentPrimary = ref('violet')
const currentMuted = ref('slate')

const generate = () => {
  isLoading.value = true
  setTimeout(() => {
    isModalOpen.value = true
    isLoading.value = false
  }, 1000)
}

const tailwindConfig = computed(() => {
  return `
  import { withShurikenUI } from '@shuriken-ui/tailwind'
  import colors from 'tailwindcss/colors'

  export default withShurikenUI({
    content: [],
    theme: {
      extend: {
        colors: {
          'primary-invert': colors.white,
          primary: colors.${currentPrimary.value},
          muted: colors.${currentMuted.value},
          info: colors.sky,
          success: colors.teal,
          warning: colors.amber,
          danger: colors.rose,
        },
      },
    },
  })`
})

const appConfig = computed(() => {
  return `
    export default defineAppConfig({
      nui: {
        BaseAccordion: {
          color: 'default',
          rounded: '${rounded.value}',
          action: 'dot',
          dotColor: 'primary',
        },
        BaseAutocomplete: {
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseAutocompleteItem: {
          rounded: '${rounded.value}',
        },
        BaseAvatar: {
          size: 'sm',
          rounded: '${rounded.value}',
          color: 'muted',
        },
        BaseAvatarGroup: {
          limit: 4,
          size: 'sm',
        },
        BaseBreadcrumb: {
          color: 'primary',
        },
        BaseButton: {
          variant: 'solid',
          rounded: '${rounded.value}',
          color: 'default',
          size: 'md',
        },
        BaseButtonAction: {
          rounded: '${rounded.value}',
          color: 'default',
        },
        BaseButtonClose: {
          rounded: '${rounded.value}',
        },
        BaseButtonIcon: {
          rounded: '${rounded.value}',
          color: 'default',
          size: 'md',
        },
        BaseCard: {
          rounded: '${rounded.value}',
          color: 'default',
        },
        BaseCheckbox: {
          rounded: '${rounded.value}',
          color: 'default',
        },
        BaseCheckboxAnimated: {
          color: 'primary',
        },
        BaseDropdown: {
          variant: 'button',
          buttonColor: 'default',
          color: 'default',
          rounded: '${rounded.value}',
          size: 'md',
        },
        BaseDropdownItem: {
          rounded: '${rounded.value}',
          contrast: 'default',
          color: 'primary',
        },
        BaseFullscreenDropfile: {
          color: 'primary',
        },
        BaseHeading: {
          as: 'p',
          size: 'xl',
          weight: 'semibold',
          lead: 'normal',
        },
        BaseIconBox: {
          variant: 'solid',
          color: 'default',
          size: 'xs',
          rounded: '${rounded.value}',
        },
        BaseInput: {
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseInputFile: {
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseInputNumber: {
          inputmode: 'numeric',
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseListbox: {
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseMessage: {
          color: 'success',
          rounded: '${rounded.value}',
          closable: false,
        },
        BasePagination: {
          color: 'primary',
          rounded: '${rounded.value}',
        },
        BaseParagraph: {
          as: 'p',
          size: 'md',
          weight: 'normal',
          lead: 'normal',
        },
        BasePlaceholderPage: {
          imageSize: 'xs',
        },
        BaseProgress: {
          size: 'sm',
          contrast: 'default',
          color: 'primary',
          rounded: '${rounded.value}',
        },
        BaseProgressCircle: {
          color: 'primary',
        },
        BaseProse: {
          rounded: '${rounded.value}',
        },
        BaseRadio: {
          color: 'default',
        },
        BaseSelect: {
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseSnack: {
          size: 'md',
          color: 'muted',
        },
        BaseSwitchBall: {
          color: 'primary',
        },
        BaseSwitchThin: {
          color: 'primary',
        },
        BaseTabs: {
          type: 'tabs',
          justify: 'start',
          color: 'primary',
        },
        BaseTabSlider: {
          color: 'primary',
          justify: 'start',
          size: 'md',
          rounded: '${rounded.value}',
        },
        BaseTag: {
          variant: 'solid',
          color: 'default',
          size: 'md',
          rounded: '${rounded.value}',
        },
        BaseText: {
          size: 'md',
          weight: 'normal',
          lead: 'normal',
        },
        BaseTextarea: {
          rounded: '${rounded.value}',
          size: 'md',
          contrast: 'default',
        },
        BaseTreeSelectItem: {
          rounded: '${rounded.value}',
        },
      },
    })
  `
})
</script>

<template>
  <div class="relative bg-white pb-16 pt-32 dark:bg-muted-900">
    <div class="mx-auto w-full max-w-7xl px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-8">
          <div class="mt-3">
            <div class="space-y-20">
              <PlaygroundSample
                title="Avatar"
                component="Avatar"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleAvatar />
              </PlaygroundSample>

              <PlaygroundSample
                title="Avatar Group"
                component="Avatar-Group"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleAvatarGroup />
              </PlaygroundSample>

              <PlaygroundSample
                title="Accordion"
                component="Accordion"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleAccordion />
              </PlaygroundSample>

              <PlaygroundSample
                title="Card"
                component="Card"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleCard />
              </PlaygroundSample>

              <PlaygroundSample
                title="Icon Box"
                component="Iconbox"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleIconBox />
              </PlaygroundSample>

              <PlaygroundSample
                title="List"
                component="List"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleList />
              </PlaygroundSample>

              <PlaygroundSample
                title="Message"
                component="Message"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleMessage />
              </PlaygroundSample>

              <PlaygroundSample
                title="Placeload"
                component="Placeload"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SamplePlaceload />
              </PlaygroundSample>

              <PlaygroundSample
                title="Tag"
                component="Tag"
                category="display"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleTag />
              </PlaygroundSample>

              <PlaygroundSample
                title="Breadcrumb"
                component="Breadcrumb"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleBreadcrumb />
              </PlaygroundSample>

              <PlaygroundSample
                title="Button"
                component="Button"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleButton />
              </PlaygroundSample>

              <PlaygroundSample
                title="Button Action"
                component="Button-Action"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleButtonAction />
              </PlaygroundSample>

              <PlaygroundSample
                title="Button Close"
                component="Button-Close"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleButtonClose />
              </PlaygroundSample>

              <PlaygroundSample
                title="Button Icon"
                component="Button-Icon"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleButtonIcon />
              </PlaygroundSample>

              <PlaygroundSample
                title="Dropdown"
                component="Dropdown"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
                class="relative z-[2]"
              >
                <SampleDropdown />
              </PlaygroundSample>

              <PlaygroundSample
                title="Pagination"
                component="Pagination"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SamplePagination />
              </PlaygroundSample>

              <PlaygroundSample
                title="Progress"
                component="Progress"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleProgress />
              </PlaygroundSample>

              <PlaygroundSample
                title="Progress Circle"
                component="Progress-Circle"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleProgressCircle />
              </PlaygroundSample>

              <PlaygroundSample
                title="Snack"
                component="Snack"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleSnack />
              </PlaygroundSample>

              <PlaygroundSample
                title="Tab Slider"
                component="Tab-Slider"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleTabSlider />
              </PlaygroundSample>

              <PlaygroundSample
                title="Tabs"
                component="Tabs"
                category="interaction"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleTabs />
              </PlaygroundSample>

              <PlaygroundSample
                title="Autocomplete"
                component="Autocomplete"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
                class="relative z-[2]"
              >
                <SampleAutocomplete />
              </PlaygroundSample>

              <PlaygroundSample
                title="Checkbox"
                component="Checkbox"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleCheckbox />
              </PlaygroundSample>

              <PlaygroundSample
                title="Checkbox Headless"
                component="Checkbox-Headless"
                category="form"
                :available-in="['nuxt', 'react']"
              >
                <SampleCheckboxHeadless />
              </PlaygroundSample>

              <PlaygroundSample
                title="Checkbox Animated"
                component="Checkbox-Animated"
                category="form"
                :available-in="['nuxt', 'react']"
              >
                <SampleCheckboxAnimated />
              </PlaygroundSample>

              <PlaygroundSample
                title="Input"
                component="Input"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleInput />
              </PlaygroundSample>

              <PlaygroundSample
                title="Input Number"
                component="Input-Number"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleInputNumber />
              </PlaygroundSample>

              <PlaygroundSample
                title="Listbox"
                component="Listbox"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleListbox />
              </PlaygroundSample>

              <PlaygroundSample
                title="Radio"
                component="Radio"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleRadio />
              </PlaygroundSample>

              <PlaygroundSample
                title="Radio Headless"
                component="Radio-Headless"
                category="form"
                :available-in="['nuxt', 'react']"
              >
                <SampleRadioHeadless />
              </PlaygroundSample>

              <PlaygroundSample
                title="Select"
                component="Select"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleSelect />
              </PlaygroundSample>

              <PlaygroundSample
                title="Switch Ball"
                component="Switch-Ball"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleSwitchBall />
              </PlaygroundSample>

              <PlaygroundSample
                title="Switch Thin"
                component="Switch-Thin"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleSwitchThin />
              </PlaygroundSample>

              <PlaygroundSample
                title="Textarea"
                component="Textarea"
                category="form"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleTextarea />
              </PlaygroundSample>

              <PlaygroundSample
                title="Tree Select"
                component="Treeselect"
                category="form"
                :available-in="['nuxt', 'react']"
              >
                <SampleTreeSelect />
              </PlaygroundSample>

              <PlaygroundSample
                title="Heading"
                component="Heading"
                category="typography"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleHeading />
              </PlaygroundSample>

              <PlaygroundSample
                title="Paragraph"
                component="Paragraph"
                category="typography"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleParagraph />
              </PlaygroundSample>

              <PlaygroundSample
                title="Text"
                component="Text"
                category="typography"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleText />
              </PlaygroundSample>

              <PlaygroundSample
                title="Link"
                component="Link"
                category="typography"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleLink />
              </PlaygroundSample>

              <PlaygroundSample
                title="Kbd"
                component="Kbd"
                category="typography"
                :available-in="['nuxt', 'react', 'tailwind']"
              >
                <SampleKbd />
              </PlaygroundSample>
            </div>
          </div>
        </div>
        <div class="relative col-span-12 lg:col-span-4">
          <div class="relative h-full">
            <div class="sticky top-24">
              <PlaygroundPanel
                :open="isPanelOpen"
                :loading="isLoading"
                @close="isPanelOpen = false"
                @generate="generate"
                @primary-changed="(color) => (currentPrimary = color)"
                @muted-changed="(color) => (currentMuted = color)"
              />
              <div class="fixed end-5 top-24 z-50 transition-transform duration-300 md:end-7 lg:hidden" :class="!isPanelOpen ? 'translate-x-0' : 'translate-x-16'">
                <BaseButtonIcon
                  size="sm"
                  rounded="lg"
                  @click="() => (isPanelOpen = true)"
                >
                  <Icon name="mingcute:drop-fill" class="h-4 w-4 text-primary-500" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Modal
      :open="isModalOpen"
      rounded="lg"
      size="xl"
      @close="isModalOpen = false"
    >
      <template #header>
        <!-- Header -->
        <div class="relative z-10 flex w-full items-center justify-between p-4 md:p-6">
          <h3 class="font-heading text-lg font-medium leading-6 text-muted-900 dark:text-white">
            Configuration
          </h3>

          <BaseButtonClose
            rounded="full"
            size="sm"
            color="default"
            @click="isModalOpen = false"
          />
        </div>
      </template>

      <!-- Body -->
      <div class="nui-slimscroll relative z-10 max-h-[550px] overflow-y-auto px-4 pb-4 md:px-6 md:pb-6">
        <BaseTabs
          model-value="tailwind"
          :tabs="[
            { label: 'tailwind.config.ts', value: 'tailwind' },
            { label: 'app.config.ts', value: 'config' },
          ]"
        >
          <template #tab="{ activeValue }">
            <div v-if="activeValue === 'tailwind'" class="relative font-mono text-sm text-muted-500 dark:text-muted-400">
              <pre class="rounded-xl bg-muted-100 px-6 dark:bg-muted-950">
                {{ tailwindConfig }}
              </pre>
              <div class="absolute end-3 top-3">
                <UseClipboard v-slot="{ copy, copied }" :source="tailwindConfig">
                  <BaseButtonIcon
                    size="sm"
                    rounded="md"
                    :data-nui-tooltip="copied ? 'Copied!' : 'Copy'"
                    data-nui-tooltip-position="start"
                    :aria-label="copied ? 'Copied!' : 'Copy'"
                    @click="() => copy()"
                  >
                    <Icon
                      v-if="!copied"
                      name="lucide:copy"
                      class="h-4 w-4"
                    />
                    <Icon
                      v-else
                      name="lucide:check"
                      class="h-4 w-4 text-success-500"
                    />
                  </BaseButtonIcon>
                </UseClipboard>
              </div>
            </div>

            <div v-else-if="activeValue === 'config'" class="relative font-mono text-sm text-muted-500 dark:text-muted-400">
              <pre class="rounded-xl bg-muted-100 px-6 dark:bg-muted-950">
                {{ appConfig }}
              </pre>
              <div class="absolute end-3 top-3">
                <UseClipboard v-slot="{ copy, copied }" :source="appConfig">
                  <BaseButtonIcon
                    size="sm"
                    rounded="md"
                    :data-nui-tooltip="copied ? 'Copied!' : 'Copy'"
                    data-nui-tooltip-position="start"
                    :aria-label="copied ? 'Copied!' : 'Copy'"
                    @click="() => copy()"
                  >
                    <Icon
                      v-if="!copied"
                      name="lucide:copy"
                      class="h-4 w-4"
                    />
                    <Icon
                      v-else
                      name="lucide:check"
                      class="h-4 w-4 text-success-500"
                    />
                  </BaseButtonIcon>
                </UseClipboard>
              </div>
            </div>
          </template>
        </BaseTabs>
      </div>

      <svg class="h-0">
        <defs>
          <clipPath id="clip0_1232_2031"><rect
            width="1440"
            height="1024"
            fill="white"
          /></clipPath>
        </defs>
      </svg>
      <div class="absolute start-0 top-0 flex h-full w-full justify-center">
        <div class="shrink-0">
          <svg
            width="1640"
            height="1024"
            viewBox="0 0 1440 1024"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1232_2031)">
              <path
                d="M15.5 1024V0M79.5 1024V0M143.5 1024V0M207.5 1024V0M271.5 1024V0M335.5 1024V0M399.5 1024V0M463.5 1024V0M527.5 1024V0M591.5 1024V0M655.5 1024V0M719.5 1024V0M783.5 1024V0M847.5 1024V0M911.5 1024V0M975.5 1024V0M1039.5 1024V0M1103.5 1024V0M1167.5 1024V0M1231.5 1024V0M1295.5 1024V0M1359.5 1024V0M1423.5 1024V0M0 31.5H1440M0 95.5H1440M0 159.5H1440M0 223.5H1440M0 287.5H1440M0 351.5H1440M0 415.5H1440M0 479.5H1440M0 543.5H1440M0 607.5H1440M0 671.5H1440M0 735.5H1440M0 799.5H1440M0 863.5H1440M0 927.5H1440M0 991.5H1440"
                class="stroke-current text-muted-100 dark:text-muted-800/50"
              />
              <path d="M272 160H335V223H272V160Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M1168 800H1231V863H1168V800Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M528 96H591V159H528V96Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M1104 160H1167V223H1104V160Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M1232 352H1295V415H1232V352Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M1040 672H1103V735H1040V672Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M784 800H847V863H784V800Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M336 480H399V543H336V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M208 800H271V863H208V800Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M464 736H527V799H464V736Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M336 224H399V287H336V224Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M976 287H1039V350H976V287Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M720 864H783V927H720V864Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M1232 480H1295V543H1232V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M1168 544H1231V607H1168V544Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M784 224H847V287H784V224Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M208 352H271V415H208V352Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M272 608H335V671H272V608Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M144 480H207V543H144V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M848 32H911V95H848V32Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M528 352H591V415H528V352Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
              <path d="M912 480H975V543H912V480Z" class="fill-current text-muted-50 dark:text-muted-800/20" />
            </g>
          </svg>
        </div>
      </div>
    </Modal>
  </div>
</template>
