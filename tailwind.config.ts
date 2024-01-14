import { withShurikenUI } from '@shuriken-ui/tailwind'
import colors from 'tailwindcss/colors'
import exposeColors from './tailwind/plugin-expose-colors'

/**
 * Shuriken UI tailwind configuration
 */
export default withShurikenUI({
  content: [],
  theme: {
    extend: {
      /**
       * Customize fonts
       *
       * You must load them yourself
       * (ex: with unplugin-fonts)
       */
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Inter', 'sans-serif'],
      },
      /**
       * Customize colors
       *
       * Use tailwind predefined colors,
       * or generate your own with tools like https://tailwindshades.com
       */
      colors: {
        // Define only the ones you want to override
        // Custom color shades generate with https://www.tints.dev/brand/4E3CB9
        mauve: {
          50: '#EEECF9',
          100: '#DCD8F3',
          200: '#B6AEE5',
          300: '#9488D8',
          400: '#6E5DCB',
          500: '#4E3CB9',
          600: '#3E2F92',
          700: '#302470',
          800: '#1F1849',
          900: '#100C27',
          950: '#080613',
        },

        /**
         * We use CSS variables to define our colors so that we can easily
         * change them in the browser.
         *
         * The <alpha-value> placeholder is replaced with the alpha value
         * @see https://tailwindcss.com/docs/customizing-colors#using-css-variables
         *
         * @example .demo/assets/css/colors.css
         * @example .demo/utils/colors-switcher.ts
         * @example .demo/components/DemoAppLayoutSwitcher.vue
         */
        primary: {
          50: 'rgb(var(--color-primary-50) / <alpha-value>)',
          100: 'rgb(var(--color-primary-100) / <alpha-value>)',
          200: 'rgb(var(--color-primary-200) / <alpha-value>)',
          300: 'rgb(var(--color-primary-300) / <alpha-value>)',
          400: 'rgb(var(--color-primary-400) / <alpha-value>)',
          500: 'rgb(var(--color-primary-500) / <alpha-value>)',
          600: 'rgb(var(--color-primary-600) / <alpha-value>)',
          700: 'rgb(var(--color-primary-700) / <alpha-value>)',
          800: 'rgb(var(--color-primary-800) / <alpha-value>)',
          900: 'rgb(var(--color-primary-900) / <alpha-value>)',
          950: 'rgb(var(--color-primary-950) / <alpha-value>)',
        },
        muted: {
          50: 'rgb(var(--color-muted-50) / <alpha-value>)',
          100: 'rgb(var(--color-muted-100) / <alpha-value>)',
          200: 'rgb(var(--color-muted-200) / <alpha-value>)',
          300: 'rgb(var(--color-muted-300) / <alpha-value>)',
          400: 'rgb(var(--color-muted-400) / <alpha-value>)',
          500: 'rgb(var(--color-muted-500) / <alpha-value>)',
          600: 'rgb(var(--color-muted-600) / <alpha-value>)',
          700: 'rgb(var(--color-muted-700) / <alpha-value>)',
          800: 'rgb(var(--color-muted-800) / <alpha-value>)',
          900: 'rgb(var(--color-muted-900) / <alpha-value>)',
          950: 'rgb(var(--color-muted-950) / <alpha-value>)',
        },
        // muted: colors.slate,
        // primary: colors.violet,
        info: colors.sky,
        success: colors.teal,
        warning: colors.amber,
        danger: colors.rose,
      },

      /**
       * Customize Shuriken UI components
       *
       * @see https://github.com/shuriken-ui/tailwind
       */
      nui: {
        // ...
      },
    },
  },
})
