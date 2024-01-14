---
title: 'Nuxt Changelog'
description: 'meta description of the page'
layout: 'changelog'
section.icon: 'simple-icons:nuxtdotjs'
section.title: 'Nuxt'
---

# Changelog

Follow the latest updates and improvements of Shuriken UI.

::changelog-block{version="2.0.0" releaseDate="January 15, 2023" breaking}
## 2.0.0 release

:::info-block{icon='simple-icons:nuxtdotjs'}
This version includes breaking changes. Follow the instructions to update your project after installing the latest version of shuriken-ui/nuxt. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [nuxt](https://github.com/nuxt/nuxt/releases/tag/v3.9.0): `3.9.0`
* [@shuriken-ui/nuxt](https://github.com/shuriken-ui/nuxt): `2.0.0`
#title
Dependencies
:::

## Props refactor

Among the many changes that come with the new version of Shuriken UI, we renamed some props to make them more consistent with the rest of the framework. All components using these props are impacted by this change. Here is the list of the renamed props:

* The `flavor` prop is now renamed to `variant`. We found that the `variant` name is more consistent with the rest of the framework and is more explicit. The values remain the same.
* The `shape` prop is now renamed to `rounded`. Since Shuriken UI is based on Tailwind CSS, we decided to use the same naming convention for more consistency. The `shape` prop accepted values have been renamed from `straight`, `rounded`, `smooth`, `curved`, `full` to `none`, `sm`, `md`, `lg`, `full`.

![Props refactor](/img/content/changelog/nuxt/props-refactor-nuxt.png)

Components `jsdocs` have been updated for all props. Deprecated props have been removed from components. If you are using one of these props, please update your code accordingly.

## Updated configuration

The `defaultShapes` object of the `app.config.ts` file has been removed. It is replaced with a new `nui` object that extends the initial configuration by taking component names as keys. Explore the full configuration on [Github](https://github.com). This new object allows you to configure default props values for each component:

::code-group

```ts [app.config.ts]
export default defineAppConfig({
  nui: {
    //...
    BaseButton: {
      variant: 'solid',
      rounded: 'sm',
      color: 'default',
      size: 'md',
    },
    //...
  }
})
```
::

## Button Close

The `<BaseButtonClose />` component now has a `size` prop accepting `xs`, `sm`, `md`, `lg` as values. The default size set in `app.config.ts` is `sm`.

::code-group

```vue [BaseButtonClose sizes]
<template>
  <BaseButtonClose size="xs" rounded="md" color="muted" />
  <BaseButtonClose size="sm" rounded="md" color="muted" />
  <BaseButtonClose size="md" rounded="md" color="muted" />
  <BaseButtonClose size="lg" rounded="md" color="muted" />
</template>
```

#preview
:demo-button-close-size
::

## Snack

The `<BaseSnack />` component now has a new `xs` size.

::code-group

```vue [BaseSnack sizes]
<template>
  <BaseSnack label="React" color="default" size="xs" />
  <BaseSnack label="Angular" color="default" size="sm" />
  <BaseSnack label="Vue" color="default" size="md" />
</template>
```

#preview
:demo-snack-size
::

## Kbd

We've added a new `<BaseKbd />` component for keyboard keys and shortcuts.

::code-group

```vue [BaseKbd component]
<template>
  <BaseKbd color="default" size="sm" rounded="md">Ctrl</BaseKbd>
  <Icon name="lucide:plus" class="w-3 h-3" />
  <BaseKbd color="default" size="sm" rounded="md">K</BaseKbd>
</template>
```

#preview
:demo-kbd-base
::

## Documentation website

We added a new documentation website to help you get started with Shuriken UI. This website is built with Nuxt and Tailwind CSS. It is available at [https://shuriken-ui.github.io/docs](https://shuriken-ui.github.io/docs).

![Shuriken UI docs](/img/content/changelog/nuxt/docs-overview.png)

## Storybook update

We updated the Shuriken UI Storybook to the latest version of Storybook 6.3.0. This update brings a lot of new features and improvements to the Storybook experience.

![Shuriken Storybook](/img/content/changelog/tailwind/storybook-gradient.png)
::


::changelog-block{version="1.8.0" releaseDate="November 16, 2023"}
## 1.8.0 release

:::info-block{icon='simple-icons:nuxtdotjs'}
Follow the instructions to update your project after installing the latest version of shuriken-ui/nuxt. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [nuxt](https://github.com/nuxt/nuxt/releases/tag/v3.7.0): `3.7.0`
* [@shuriken-ui/nuxt](https://github.com/shuriken-ui/nuxt): `1.8.0`
#title
Dependencies
:::

## Introducting Floating UI

We improved the components that have a dropdown menu, like `<BaseDropdown />`, `<BaseAutocomplete />` and `<BaseListbox />`. You now have a `fixed` option to make the dropdown menu float above the other elements. This option is implemented with the `floating-ui` [library](https://floating-ui.com/).

![Shuriken UI docs](/img/content/changelog/nuxt/floating-ui.png)

### Features

This release contains updates that improves some form elements consistency, giving them better defaults and more flexibility. Floating UI has been added to reposition dropdowns automatically when they are too close to the viewport edges.

* add portal and more generic `<BaseAutocompleteItem />` component
* add portal to `<BaseListbox />` component
* add portal to `<BaseDropdown />` component
* add some useful defaults for display and filter
* improve consistency of listbox and `<BaseListbox />` and `<BaseAutocomplete />` with better defaults

### Bug fixes

* Fix `<BaseDropdown />` condition accidentally removed
* Fix page jumping to top by unmounting portal
* Fix `<BaseListbox />` and `<BaseAutocomplete />` `properties` to be undefined by default
* Fix spacing and visibility of `<BaseAutocomplete />` clear icon
* Switch from `portal` to `fixed` property


::


::changelog-block{version="1.0.0" releaseDate="August 28, 2023"}
## 1.0.0 release

:::info-block{icon='simple-icons:nuxtdotjs'}
Follow the instructions to update your project after installing the latest version of shuriken-ui/nuxt. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [nuxt](https://github.com/nuxt/nuxt/releases/tag/v3.5.0): `3.5.0`
* [@shuriken-ui/nuxt](https://github.com/shuriken-ui/nuxt): `1.0.0`
#title
Dependencies
:::

This release includes a consequent refactor to use the new (shuriken-ui/tailwind)[https://github.com/shuriken-ui/tailwind] plugins.

![Shuriken UI docs](/img/content/changelog/tailwind/tailwind-plugins-code.png)

### Unique source of truth

`@shuriken-ui/tailwind` now acts as the unique source of truth for derived packages, like `@shuriken-ui/nuxt` and `@shuriken-ui/react`. Derived packages pull styles from the tailwind package and should follow the types, props and variants guidelines defined in the Tailwind package. Each component now has its own folder, and is composed of the following files:

* `index.ts`: the component CSS definition, using a combination of Tailwind CSS classes and custom CSS classes.
* `component.types.ts`: the component typescript definition, including the component props, events and slots.
* `component.variants.ts`: the component variants definition, including the component variants, and their respective CSS classes.
* `component.component.ts`: the component javascript definition written using [Lit-html](https://lit.dev/docs/libraries/standalone-templates/), including the component logic, and the component template.
* `component.config.ts`: the component configuration, including the component default styles, for each one of its parts and its variants.
* `component.stories.ts`: the component storybook definition, including the component stories, and its variants.
* `component.docs.mdx`: the component documentation, including the component description, examples, and more.
* `component.test.ts`: the component test file, including the component unit tests.

### Consistency improvements

A lot of changes have been made to ensure of a better consistency across the framework. This includes getting rid of the `small` and `condensed` unconsistent props and replacing them with a `size` prop. The `size` prop accepts `xs`, `sm`, `md`, `lg` as values most of the time. This also relates to orphan colors that have been removed and rearranged inside a color prop for each component that accepts different colors.