<script setup lang="ts">
const { rounded } = usePlayground()

const isPanelOpen = ref(false)
</script>

<template>
  <div class="relative pt-32 pb-16 bg-white dark:bg-muted-900">
    <div class="w-full max-w-7xl mx-auto px-4">
      <div class="grid grid-cols-12 gap-8">
        <div class="col-span-12 lg:col-span-8">
          <div class="mt-3">
            <div class="space-y-20">
              <PlaygroundSample title="Avatar" component="Avatar" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAvatar />
              </PlaygroundSample>

              <PlaygroundSample title="Avatar Group" component="Avatar-Group" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAvatarGroup />
              </PlaygroundSample>

              <PlaygroundSample title="Accordion" component="Accordion" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAccordion />
              </PlaygroundSample>

              <PlaygroundSample title="Card" component="Card" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleCard />
              </PlaygroundSample>

              <PlaygroundSample title="Icon Box" component="Iconbox" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleIconBox />
              </PlaygroundSample>

              <PlaygroundSample title="List" component="List" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleList />
              </PlaygroundSample>

              <PlaygroundSample title="Message" component="Message" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleMessage />
              </PlaygroundSample>

              <PlaygroundSample title="Placeload" component="Placeload" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SamplePlaceload />
              </PlaygroundSample>

              <PlaygroundSample title="Tag" component="Tag" category="display" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleTag />
              </PlaygroundSample>

              <PlaygroundSample title="Breadcrumb" component="Breadcrumb" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleBreadcrumb />
              </PlaygroundSample>

              <PlaygroundSample title="Button" component="Button" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleButton />
              </PlaygroundSample>

              <PlaygroundSample title="Button Action" component="Button-Action" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleButtonAction />
              </PlaygroundSample>

              <PlaygroundSample title="Button Close" component="Button-Close" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleButtonClose />
              </PlaygroundSample>

              <PlaygroundSample title="Button Icon" component="Button-Icon" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleButtonIcon />
              </PlaygroundSample>

              <PlaygroundSample title="Dropdown" component="Dropdown" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleDropdown />
              </PlaygroundSample>

              <PlaygroundSample title="Pagination" component="Pagination" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SamplePagination />
              </PlaygroundSample>

              <PlaygroundSample title="Progress" component="Progress" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleProgress />
              </PlaygroundSample>

              <PlaygroundSample title="Progress Circle" component="Progress-Circle" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleProgressCircle />
              </PlaygroundSample>

              <PlaygroundSample title="Snack" component="Snack" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleSnack />
              </PlaygroundSample>

              <PlaygroundSample title="Tab Slider" component="Tab-Slider" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleTabSlider />
              </PlaygroundSample>

              <PlaygroundSample title="Tabs" component="Tabs" category="interaction" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleTabs />
              </PlaygroundSample>

              <PlaygroundSample title="Autocomplete" component="Autocomplete" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleAutocomplete />
              </PlaygroundSample>

              <PlaygroundSample title="Checkbox" component="Checkbox" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleCheckbox />
              </PlaygroundSample>

              <PlaygroundSample title="Checkbox Headless" component="Checkbox-Headless" category="form" :available-in="['nuxt', 'react']">
                <SampleCheckboxHeadless />
              </PlaygroundSample>

              <PlaygroundSample title="Checkbox Animated" component="Checkbox-Animated" category="form" :available-in="['nuxt', 'react']">
                <SampleCheckboxAnimated />
              </PlaygroundSample>

              <PlaygroundSample title="Input" component="Input" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleInput />
              </PlaygroundSample>

              <PlaygroundSample title="Listbox" component="Listbox" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleListbox />
              </PlaygroundSample>

              <PlaygroundSample title="Radio" component="Radio" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleRadio />
              </PlaygroundSample>

              <PlaygroundSample title="Radio Headless" component="Radio-Headless" category="form" :available-in="['nuxt', 'react']">
                <SampleRadioHeadless />
              </PlaygroundSample>

              <PlaygroundSample title="Select" component="Select" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleSelect />
              </PlaygroundSample>

              <PlaygroundSample title="Switch Ball" component="Switch-Ball" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleSwitchBall />
              </PlaygroundSample>

              <PlaygroundSample title="Switch Thin" component="Switch-Thin" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleSwitchThin />
              </PlaygroundSample>

              <PlaygroundSample title="Textarea" component="Textarea" category="form" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleTextarea />
              </PlaygroundSample>

              <PlaygroundSample title="Tree Select" component="Treeselect" category="form" :available-in="['nuxt', 'react']">
                <SampleTreeSelect />
              </PlaygroundSample>

              <PlaygroundSample title="Heading" component="Heading" category="typography" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleHeading />
              </PlaygroundSample>

              <PlaygroundSample title="Paragraph" component="Paragraph" category="typography" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleParagraph />
              </PlaygroundSample>

              <PlaygroundSample title="Text" component="Text" category="typography" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleText />
              </PlaygroundSample>

              <PlaygroundSample title="Link" component="Link" category="typography" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleLink />
              </PlaygroundSample>

              <PlaygroundSample title="Kbd" component="Kbd" category="typography" :available-in="['nuxt', 'react', 'tailwind']">
                <SampleKbd />
              </PlaygroundSample>
            </div>
          </div>
        </div>
        <div class="relative col-span-12 lg:col-span-4">
          <div class="relative h-full">
            <div class="sticky top-24">
              <PlaygroundPanel :open="isPanelOpen" @close="isPanelOpen = false" />
              <div class="fixed top-24 end-5 md:end-7 z-50 lg:hidden transition-transform duration-300" :class="!isPanelOpen ? 'translate-x-0' : 'translate-x-16'">
                <BaseButtonIcon size="sm" rounded="lg" @click="() => (isPanelOpen = true)">
                  <Icon name="mingcute:drop-fill" class="w-4 h-4 text-primary-500" />
                </BaseButtonIcon>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
