---
title: 'Nuxt Changelog'
description: 'meta description of the page'
layout: 'changelog'
section.icon: 'simple-icons:nuxtdotjs'
section.title: 'Nuxt'
---

# Changelog

Follow the latest updates and improvements of Shuriken UI.

::changelog-block{version="2.0.0-beta.0" releaseDate="December 4, 2023" breaking}
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

```js [app.config.ts]
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

```js [BaseButtonClose sizes]
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

```js [BaseSnack sizes]
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

```js [BaseKbd component]
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

![A Cool Image](/img/content/changelog/nuxt/docs-overview.png)

## Storybook update

We updated the Shuriken UI Storybook to the latest version of Storybook 6.3.0. This update brings a lot of new features and improvements to the Storybook experience.

![A Cool Image](/img/content/changelog/tailwind/storybook-gradient.png)
::