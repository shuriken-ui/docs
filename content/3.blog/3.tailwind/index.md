---
title: 'Tailwind Blog'
description: 'Read the latest updates and improvements of Shuriken UI'
layout: 'changelog'
section.icon: 'simple-icons:tailwindcss'
section.title: 'Tailwind'
---

# Blog

Follow the latest updates and improvements of Shuriken UI.

::changelog-block{version="3.0.0" releaseDate="March 15, 2024" breaking}
## 3.0.0 release

:::info-block{icon='simple-icons:nuxtdotjs'}
This version includes breaking changes. Follow the instructions to update your project after installing the latest version of shuriken-ui/tailwind. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [@shuriken-ui/tailwind](https://github.com/shuriken-ui/tailwind): `3.0.0`
#title
Dependencies
:::

## Consistency improvements

`<Card />` component had legacy contrast prop values like `white` and `white-contrast`. Those have been renamed to match the naming in other components. The term `white` is removed and replaced with `default`, to remain consistent with other components that share the same color system. Note that the `dark` and `black` colors have also been added. CSS classes have also been renamed for consistency:

* `nui-card-white` **to** `nui-card-default`
* `nui-card-white-contrast` **to** `nui-card-default-contrast`

![Card props](/img/content/changelog/nuxt/card-props.png)

CSS class names have been updated throughout the framework to reflect their role. This change won't impact your project as it is an internal change. Fo instance the rounded classes that were ending with `smooth`, `curved` and such unclear names, are replaced with the actual values:

* `nui-*-rounded` **to** `nui-*-rounded-sm`
* `nui-*-smooth` **to** `nui-*-rounded-md`
* `nui-*-curved` **to** `nui-*-rounded-lg`
* `nui-*-full` **to** `nui-*-rounded-full`

## Colors

Colors have been harmonized through all components and variants. New `dark` and `black` colors have been added to facilitate monochromatic color palettes. The `light` color has been added in components where it was missing and adapted to existing variants. `default-contrast` and `muted-contrast` contrast colors have been added where they were missing. This allows more consistency and the ability to group buttons and inputs for instance, without seeing different background or border styles.

A `color` props has also been added to components that didn't have it before. This allows you to customize the color of the component and to benefit from the newly implemented monochromatic palette. The following components have a new color prop:

* `<DropdownItem />`
* `<InputFile />`
* `<Breadcrumb />`
* `<Pagination />`
* `<Tabs />`
* `<TabSlider />`
* `<Accordion />`

## Monochromatic palette

The monochromatic palette is now available for all components. Rather than using the available theming features, we chose to directly include a new `dark` and `black` color in the components. This allows you to use a monochromatic palette without having to define a theme. The `dark` prop value builds a monochromatic palette from your currently selected `muted` color (can be `slate`, `neutral`, `stone`, `zinc` or `gray`) while the `black` value builds a monochromatic palette based on black and white contrast.

![Monochromatic palette](/img/content/changelog/nuxt/monochrome-colors.png)

## Other improvements

* Input `colorFocus` issue has been fixed and the behaviour has been extended to all form elements that can have a colored border on focus (`Input`, `InputNumber`, `InputFile`, `Select`, `Autocomplete`, `Listbox`, `Textarea`).
* You can now use the features of the `<ButtonGroup />` component on any html element with the `role="group"` attribute on it.
* Tooltip styles have been refactored for more consistency, left and right position arrows fixed.

::

::changelog-block{version="2.0.0" releaseDate="January 15, 2023" breaking}
## 2.0.0 release

:::info-block{icon='simple-icons:tailwindcss'}
This version includes breaking changes. Follow the instructions to update your project after installing the latest version of shuriken-ui/tailwind. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [@shuriken-ui/tailwind](https://github.com/shuriken-ui/tailwind): `2.0.0`
#title
Dependencies
:::

## Component configuration

Component configurations have been entirely rewritten from the ground, for the sake of clarity and simplicity. If you used the configurations to modify your components, you will need to migrate your values to the new configuration options for the related components.

::code-group
```js [Before]
export const defaultConfig = {
  font: 'sans',
  textHover: 'primary-500',
  textHoverDark: 'primary-400',
  textFocus: 'primary-500',
  textFocusDark: 'primary-400',
}
```

```js [After]
export const defaultConfig = {
  font: {
    family: 'sans',
    color: {
      hover: {
        light: 'primary-500',
        dark: 'primary-400',
      },
      focus: {
        light: 'primary-500',
        dark: 'primary-400',
      },
    },
  },
}
```
::

## Prop refactor

* The `shape` prop and its values have been changed accross all components. The prop `shape` has been renamed to `rounded` for overall consistency. `shape` prop accepted values have been renamed from `straight`, `rounded`, `smooth`, `curved`, `full` to `none`, `sm`, `md`, `lg`, `full`. In your projects, if you are using a components that had the `shape` prop, make sure to replace the values with the new ones and to rename the prop to `rounded`.

::code-group
```js [Before]
shape?: 'straight' | 'rounded' | 'smooth' | 'curved' | 'full'
```

```js [After]
rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full'
```
::

* The `flavor` prop has been renamed to `variant`. If you have components in your project using the flavor prop, simply rename it to `variant`. The values remain the same.

::code-group
```js [Before]
flavor?: 'solid' | 'pastel' | 'outline'
```

```js [After]
variant?: 'solid' | 'pastel' | 'outline'
```
::

## New props

* The `<ButtonClose />` component now has a `size` prop accepting `xs`, `sm`, `md`, `lg` as values.
* The `<Snack />` component now has a new size: `xs` value.

## Storybook update

We updated the Shuriken UI Storybook to have all required examples, for all `@shuriken-ui/tailwind` components.

![Shuriken Storybook](/img/content/changelog/tailwind/storybook-gradient.png)

::

::changelog-block{version="1.2.0" releaseDate="September 18, 2023"}
## 1.2.0 release

:::info-block{icon='simple-icons:tailwindcss'}
This version includes breaking changes. Follow the instructions to update your project after installing the latest version of shuriken-ui/tailwind. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [@shuriken-ui/tailwind](https://github.com/shuriken-ui/tailwind): `1.2.0`
#title
Dependencies
:::

## Introducing Storybook

This release introduces Storybook into `@shuriken-ui/tailwind`. Storybook is now part of the component workflow, and is used to develop and test components in isolation.

![Shuriken Storybook](/img/content/changelog/tailwind/storybook-banner.png)

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

::

::changelog-block{version="1.0.2" releaseDate="August 28, 2023"}
## 1.0.2 release

:::info-block{icon='simple-icons:tailwindcss'}
This version includes breaking changes. Follow the instructions to update your project after installing the latest version of shuriken-ui/tailwind. To ensure a smooth experience with the latest version and avoid any unwanted behaviors, please make sure the following dependencies are up to date:
* [@shuriken-ui/tailwind](https://github.com/shuriken-ui/tailwind): `1.0.2`
#title
Dependencies
:::

This release contains a new set of features, exposing the preset factory with options. It also includes component CSS definitions, using the Tailwind CSS plugin system.

Each component is represented by an `index.ts` file, which contains the component CSS definition, using a combination of Tailwind CSS classes and custom CSS classes. The `index.ts` file also exposes a default configuration for the component, which can be overriden to customize the component styles.

Since `1.0.0`, the `@shuriken-ui/tailwind` package acts as the source of CSS definitions for derived packages, like `@shuriken-ui/nuxt`. Derived packages pull styles from the tailwind package and should follow the types, props and variants guidelines defined in the Tailwind package.

::