<script setup lang="ts">
const tree = [
  {
    item: 'Item 1',
    children: [
      {
        item: 'Item 1.1',
      },
      {
        item: 'Item 1.2',
      },
    ],
  },
  {
    item: 'Item 2',
  },
  {
    item: 'Item 3',
    open: true,
    children: [
      {
        item: 'Item 3.0',
      },
      {
        item: 'Item 3.1',
        open: true,
        children: [
          {
            item: 'Item 3.1.1',
          },
          {
            item: 'Item 3.1.2',
            open: true,
            children: [],
          },
          {
            item: 'Item 3.1.3',
          },
        ],
      },
      {
        item: 'Item 3.2',
      },
      {
        item: 'Item 3.3',
        children: [],
      },
    ],
  },
  {
    item: 'Item 4',
  },
]

const tree2 = [
  {
    item: {
      media: undefined,
      name: 'General',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          icon: 'ph:cards-duotone',
          name: 'Company',
          text: 'Everything about the company',
        },
      },
      {
        item: {
          icon: 'ph:buildings-duotone',
          name: 'Company',
          text: 'Select filial',
        },
        children: [
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 1',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 2',
              text: 'Everything about the company',
            },
          },
          {
            item: {
              icon: 'ph:buildings-duotone',
              name: 'Sub-Company 3',
              text: 'Everything about the company',
            },
          },
        ],
      },
      {
        item: {
          icon: 'ph:suitcase-duotone',
          name: 'Business',
          text: 'Questions regarding business',
        },
        children: [],
      },
    ],
  },
  {
    item: {
      icon: 'ph:suitcase-duotone',
      name: 'Business',
      text: 'Questions regarding business',
    },
  },
  {
    item: {
      media: undefined,
      name: 'Topics',
      text: undefined,
    },
    children: [
      {
        item: {
          media: undefined,
          name: 'Business',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:rocket-duotone',
              name: 'Startups',
              text: 'Managing startups',
            },
          },
          {
            item: {
              icon: 'ph:robot-duotone',
              name: 'Products',
              text: 'Product lifecycles',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Web Content',
          text: undefined,
        },
        children: [
          {
            item: {
              icon: 'ph:pencil-duotone',
              name: 'Blogging',
              text: 'Tips & tricks about blogging',
              children: [],
            },
          },
          {
            item: {
              icon: 'ph:circles-four-duotone',
              name: 'Social media',
              text: 'Managing social media content',
            },
          },
        ],
      },
    ],
  },
]

const tree3 = [
  {
    item: {
      media: undefined,
      name: 'Top Management',
      text: undefined,
    },
    children: [
      {
        item: {
          media: '/img/avatars/8.svg',
          name: 'Harold Frazier',
          text: 'Group Founder',
        },
        children: [],
      },
      {
        item: {
          media: '/img/avatars/5.svg',
          name: 'Clarissa Miller',
          text: 'Executive Director',
        },
      },
    ],
  },
  {
    item: {
      media: undefined,
      name: 'Teams',
      text: undefined,
    },
    open: true,
    children: [
      {
        item: {
          media: undefined,
          name: 'Marketing',
          text: undefined,
        },
        open: true,
        children: [
          {
            item: {
              media: '/img/avatars/3.svg',
              name: 'Clark Smith',
              text: 'Marketing Associate',
            },
          },
          {
            item: {
              media: '/img/avatars/2.svg',
              name: 'Olga familly',
              text: 'Marketing Associate',
            },
            children: [
              {
                item: {
                  media: '/img/avatars/2.svg',
                  name: 'Clark Smith',
                  text: 'Marketing Associate',
                },
                children: [],
              },
              {
                item: {
                  media: '/img/avatars/2.svg',
                  name: 'Olga familly',
                  text: 'Marketing Associate',
                },
              },
            ],
          },
          {
            item: {
              media: '/img/avatars/16.svg',
              name: 'Hermann Mayer',
              text: 'Marketing Officer',
            },
          },
        ],
      },
      {
        item: {
          media: undefined,
          name: 'Sales',
          text: undefined,
        },
        children: [
          {
            item: {
              media: '/img/avatars/9.svg',
              name: 'Anna Lopez',
              text: 'Sales Manager',
            },
            children: [],
          },
          {
            item: {
              media: '/img/avatars/25.svg',
              name: 'Melany Lawfield',
              text: 'Sales Manager',
            },
          },
        ],
      },
    ],
  },
  {
    item: {
      media: '/img/avatars/14.svg',
      name: 'Jean LeBeauss',
      text: 'Marketing Associate',
    },
  },
]
</script>

<template>
  <BaseTabs
    model-value="base"
    :tabs="[
      { label: 'Base', value: 'base' },
      { label: 'Item icon', value: 'item-icon' },
      { label: 'Item media', value: 'item-media' },
    ]"
    class="[&>div:first-of-type]:border-b [&>div:first-of-type]:border-muted-200 dark:[&>div:first-of-type]:border-muted-800"
  >
    <template #tab="{ activeValue }">
      <div v-if="activeValue === 'base'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Example" label-align="start">
            <div class="md:max-w-lg">
              <BaseTreeSelect :children="tree" treeline />
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'item-icon'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Example" label-align="start">
            <div class="md:max-w-lg">
              <BaseTreeSelect :children="tree2">
                <template #item-label="{ level, child, toggle }">
                  <BaseTreeSelectItem
                    :level="level"
                    :toggle="toggle"
                    :value="{
                      name: child.item.name,
                      text: child.item.text,
                      icon: child.item.icon,
                    }"
                  />
                </template>
              </BaseTreeSelect>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
      <div v-if="activeValue === 'item-media'" class="relative pb-4">
        <div class="space-y-4">
          <PlaygroundSampleRow label="Example" label-align="start">
            <div class="md:max-w-lg">
              <BaseTreeSelect :children="tree3" treeline>
                <template #item-label="{ level, child, toggle }">
                  <BaseTreeSelectItem
                    :level="level"
                    :toggle="toggle"
                    :value="{
                      name: child.item.name,
                      text: child.item.text,
                      media: child.item.media,
                    }"
                  />
                </template>
              </BaseTreeSelect>
            </div>
          </PlaygroundSampleRow>
        </div>
      </div>
    </template>
  </BaseTabs>
</template>
