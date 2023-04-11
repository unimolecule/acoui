import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Color from 'color'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(
    {
      theme: {
        colors: {
          'colorScheme': 'light',
          'primary': '#570df8',
          'primaryFocus': Color('#570df8').darken(0.2).hex(),
          'primaryContent': '#ffffff',
          'secondary': '#f000b8',
          'secondaryContent': '#ffffff',
          'secondaryFocus': Color('#f000b8').darken(0.2).hex(),
          'accent': '#37cdbe',
          'accentContent': '#163835',
          'accentFocus': Color('#37cdbe').darken(0.2).hex(),
          'default': '#3d4451',
          'defaultContent': '#ffffff',
          'defaultFocus': Color('#3d4451').darken(0.2).hex(),
          'base-100': '#ffffff',
          'base-200': '#F2F2F2',
          'base-300': '#E5E6E6',
          'baseContent': '#1f2937',
          'baseFocus': Color('#ffffff').darken(0.2).hex(),
        },
      },
      safelist: [
        'border-primary',
        'bg-primary',
        'color-primary-content',
        'hover-border-primary-focus',
        'hover-bg-primary-focus',
        'border-secondary',
        'bg-secondary',
        'color-secondary-content',
        'hover-border-secondary-focus',
        'hover-bg-secondary-focus',
        'border-accent',
        'bg-accent',
        'color-accent-content',
        'hover-border-accent-focus',
        'hover-bg-accent-focus',
        'border-default',
        'bg-default',
        'color-default-content',
        'hover-border-default-focus',
        'hover-bg-default-focus',
      ],
    },
  )],
})
