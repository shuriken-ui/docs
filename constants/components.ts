interface Component {
  name: string,
  description: string,
  category: string,
  url: string,
  image: {
    light: string,
    dark: string,
  },
  availableIn: string[],
}

export const components: Component[] = [
  {
    name: 'avatar',
    description: 'A profile picture, a company logo or abstracted initials as fallback.',
    category: 'display',
    url: '/display/avatar',
    image: {
      light: '/img/illustrations/components/icon-avatar.svg',
      dark: '/img/illustrations/components/icon-avatar-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'avatar group',
    description: 'A group of users or of company logos stacked together, featuring a limit counter.',
    category: 'display',
    url: '/display/avatar-group',
    image: {
      light: '/img/illustrations/components/icon-avatar-group.svg',
      dark: '/img/illustrations/components/icon-avatar-group-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'accordion',
    description: 'A simple accordion component to display collapsible content.',
    category: 'display',
    url: '/display/accordion',
    image: {
      light: '/img/illustrations/components/icon-accordion.svg',
      dark: '/img/illustrations/components/icon-accordion-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'card',
    description: 'A versatile and customizable container that can hold any type of content.',
    category: 'display',
    url: '/display/card',
    image: {
      light: '/img/illustrations/components/icon-card.svg',
      dark: '/img/illustrations/components/icon-card-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'icon box',
    description: 'A flexible icon container that can be used to display any svg icon or image.',
    category: 'display',
    url: '/display/iconbox',
    image: {
      light: '/img/illustrations/components/icon-icon-box.svg',
      dark: '/img/illustrations/components/icon-icon-box-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'list',
    description: 'A list shortcut component to display simple Html lists or more complex setups.',
    category: 'display',
    url: '/display/list',
    image: {
      light: '/img/illustrations/components/icon-list.svg',
      dark: '/img/illustrations/components/icon-list-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'message',
    description: 'A useful component to display important or informative messages to the user.',
    category: 'display',
    url: '/display/message',
    image: {
      light: '/img/illustrations/components/icon-message.svg',
      dark: '/img/illustrations/components/icon-message-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'placeholder',
    description: 'A placeholder component that can be used for empty states or empty search results.',
    category: 'display',
    url: '/display/placeholder',
    image: {
      light: '/img/illustrations/components/icon-placeholder.svg',
      dark: '/img/illustrations/components/icon-placeholder-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'placeload',
    description: 'A flexible loading indicator that can mimic real components while they load.',
    category: 'display',
    url: '/display/placeload',
    image: {
      light: '/img/illustrations/components/icon-placeload.svg',
      dark: '/img/illustrations/components/icon-placeload-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'tag',
    description: 'A badge-like component to display smaller pieces of info, like topic or categories.',
    category: 'display',
    url: '/display/tag',
    image: {
      light: '/img/illustrations/components/icon-tag.svg',
      dark: '/img/illustrations/components/icon-tag-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'breadcrumb',
    description: 'A list of navigation link to help users know where they are in the app.',
    category: 'interaction',
    url: '/interaction/breadcrumb',
    image: {
      light: '/img/illustrations/components/icon-breadcrumb.svg',
      dark: '/img/illustrations/components/icon-breadcrumb-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'button',
    description: 'A classic button interaction that can be used as a button or as a link.',
    category: 'interaction',
    url: '/interaction/button',
    image: {
      light: '/img/illustrations/components/icon-button.svg',
      dark: '/img/illustrations/components/icon-button-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'button action',
    description: 'A smaller button interaction that can be used for minor actions.',
    category: 'interaction',
    url: '/interaction/button-action',
    image: {
      light: '/img/illustrations/components/icon-button-action.svg',
      dark: '/img/illustrations/components/icon-button-action-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'button close',
    description: 'A closing interaction that can be used in dialogs or messages.',
    category: 'interaction',
    url: '/interaction/button-close',
    image: {
      light: '/img/illustrations/components/icon-button-close.svg',
      dark: '/img/illustrations/components/icon-button-close-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'button icon',
    description: 'A specialized button made to hold icons and potentially small images.',
    category: 'interaction',
    url: '/interaction/button-icon',
    image: {
      light: '/img/illustrations/components/icon-button-icon.svg',
      dark: '/img/illustrations/components/icon-button-icon-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'dropdown',
    description: 'A dropdown menu that can be used as a any type of menu or filter.',
    category: 'interaction',
    url: '/interaction/dropdown',
    image: {
      light: '/img/illustrations/components/icon-dropdown.svg',
      dark: '/img/illustrations/components/icon-dropdown-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'focus loop',
    description: 'An abstract component that acts as a focus wrapper for nested elements.',
    category: 'interaction',
    url: '/interaction/focus-loop',
    image: {
      light: '/img/illustrations/components/icon-focus-loop.svg',
      dark: '/img/illustrations/components/icon-focus-loop-dark.svg',
    },
    availableIn: ['nuxt', 'react']
  },
  {
    name: 'pagination',
    description: 'A navigation component that allows to paginate long data lists.',
    category: 'interaction',
    url: '/interaction/pagination',
    image: {
      light: '/img/illustrations/components/icon-pagination.svg',
      dark: '/img/illustrations/components/icon-pagination-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'progress',
    description: 'A progress bar component to be used as a progression indicator.',
    category: 'interaction',
    url: '/interaction/progress',
    image: {
      light: '/img/illustrations/components/icon-progress.svg',
      dark: '/img/illustrations/components/icon-progress-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'progress circle',
    description: 'A circle progress component to be used as a progression indicator.',
    category: 'interaction',
    url: '/interaction/progress-circle',
    image: {
      light: '/img/illustrations/components/icon-progress-circle.svg',
      dark: '/img/illustrations/components/icon-progress-circle-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'snack',
    description: 'A closable pill that works great with multiple selection components.',
    category: 'interaction',
    url: '/interaction/snack',
    image: {
      light: '/img/illustrations/components/icon-snack.svg',
      dark: '/img/illustrations/components/icon-snack-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'tab slider',
    description: 'A tabbed navigation component with a nice sliding effect.',
    category: 'interaction',
    url: '/interaction/tab-slider',
    image: {
      light: '/img/illustrations/components/icon-tab-slider.svg',
      dark: '/img/illustrations/components/icon-tab-slider-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'tabs',
    description: 'A flexible tabbed navigation component with different style options.',
    category: 'interaction',
    url: '/interaction/tabs',
    image: {
      light: '/img/illustrations/components/icon-tabs.svg',
      dark: '/img/illustrations/components/icon-tabs-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'theme toggle',
    description: 'A special switch that allows you to change the light/dark theme.',
    category: 'interaction',
    url: '/interaction/theme-toggle',
    image: {
      light: '/img/illustrations/components/icon-theme-toggle.svg',
      dark: '/img/illustrations/components/icon-theme-toggle-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'autocomplete',
    description: 'A search input component that displays suggestions while typing.',
    category: 'form',
    url: '/form/autocomplete',
    image: {
      light: '/img/illustrations/components/icon-autocomplete.svg',
      dark: '/img/illustrations/components/icon-autocomplete-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'checkbox',
    description: 'A simple checkbox component that can be used in different setups.',
    category: 'form',
    url: '/form/checkbox',
    image: {
      light: '/img/illustrations/components/icon-checkbox.svg',
      dark: '/img/illustrations/components/icon-checkbox-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'checkbox headless',
    description: 'A headless checkbox component that lets you build custom styles.',
    category: 'form',
    url: '/form/checkbox-headless',
    image: {
      light: '/img/illustrations/components/icon-checkbox-headless.svg',
      dark: '/img/illustrations/components/icon-checkbox-headless-dark.svg',
    },
    availableIn: ['nuxt', 'react']
  },
  {
    name: 'checkbox animated',
    description: 'An animated checkbox component for smart and fancy interfaces.',
    category: 'form',
    url: '/form/checkbox-animated',
    image: {
      light: '/img/illustrations/components/icon-checkbox-animated.svg',
      dark: '/img/illustrations/components/icon-checkbox-animated-dark.svg',
    },
    availableIn: ['nuxt', 'react']
  },
  {
    name: 'input',
    description: 'An versatile input component that can be used in any type form.',
    category: 'form',
    url: '/form/input',
    image: {
      light: '/img/illustrations/components/icon-input.svg',
      dark: '/img/illustrations/components/icon-input-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'listbox',
    description: 'A customizable select component that can be used to display enhanced results.',
    category: 'form',
    url: '/form/listbox',
    image: {
      light: '/img/illustrations/components/icon-listbox.svg',
      dark: '/img/illustrations/components/icon-listbox-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'radio',
    description: 'A simple and straightforward radio button component to be used in forms.',
    category: 'form',
    url: '/form/radio',
    image: {
      light: '/img/illustrations/components/icon-radio.svg',
      dark: '/img/illustrations/components/icon-radio-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'radio headless',
    description: 'A headless radio component that lets you build custom styles.',
    category: 'form',
    url: '/form/radio-headless',
    image: {
      light: '/img/illustrations/components/icon-radio-headless.svg',
      dark: '/img/illustrations/components/icon-radio-headless-dark.svg',
    },
    availableIn: ['nuxt', 'react']
  },
  {
    name: 'select',
    description: 'A native select box component to be used in forms of any type.',
    category: 'form',
    url: '/form/select',
    image: {
      light: '/img/illustrations/components/icon-select.svg',
      dark: '/img/illustrations/components/icon-select-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'switch thin',
    description: 'A thin switch with a unique visual style to use in forms of any type.',
    category: 'form',
    url: '/form/switch-thin',
    image: {
      light: '/img/illustrations/components/icon-switch-thin.svg',
      dark: '/img/illustrations/components/icon-switch-thin-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'switch ball',
    description: 'A toggle switch with a unique visual style to use in forms of any type.',
    category: 'form',
    url: '/form/switch-ball',
    image: {
      light: '/img/illustrations/components/icon-switch-ball.svg',
      dark: '/img/illustrations/components/icon-switch-ball-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'treeselect',
    description: 'A customizable tree view that supports icons, images and async data.',
    category: 'form',
    url: '/form/treeselect',
    image: {
      light: '/img/illustrations/components/icon-treeselect.svg',
      dark: '/img/illustrations/components/icon-treeselect-dark.svg',
    },
    availableIn: ['nuxt', 'react']
  },
  {
    name: 'heading',
    description: 'A flexible and versatile heading component to use in typographic compositions.',
    category: 'typography',
    url: '/typography/heading',
    image: {
      light: '/img/illustrations/components/icon-heading.svg',
      dark: '/img/illustrations/components/icon-heading-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'paragraph',
    description: 'A flexible and versatile paragraph component to use in typographic compositions.',
    category: 'typography',
    url: '/typography/paragraph',
    image: {
      light: '/img/illustrations/components/icon-paragraph.svg',
      dark: '/img/illustrations/components/icon-paragraph-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'text',
    description: 'A flexible and versatile text component to use in typographic compositions.',
    category: 'typography',
    url: '/typography/text',
    image: {
      light: '/img/illustrations/components/icon-typography.svg',
      dark: '/img/illustrations/components/icon-typography-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'link',
    description: 'A simple link component that you can use inside other typography components.',
    category: 'typography',
    url: '/typography/link',
    image: {
      light: '/img/illustrations/components/icon-link.svg',
      dark: '/img/illustrations/components/icon-link-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  },
  {
    name: 'kbd',
    description: 'An abstraction of a keyboard key to show UI shortcuts or keys to press.',
    category: 'typography',
    url: '/typography/kbd',
    image: {
      light: '/img/illustrations/components/icon-kbd.svg',
      dark: '/img/illustrations/components/icon-kbd-dark.svg',
    },
    availableIn: ['nuxt', 'react', 'tailwind']
  }
]