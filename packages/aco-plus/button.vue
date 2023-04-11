<script lang="ts" setup>
import { type } from 'node:os'
import { HButton } from '@aco/headless'

// eslint-disable-next-line @typescript-eslint/no-redeclare, no-import-assign
const { type } = defineProps(['type'])

const commonStyle = [
  'm-5px',
  'b-rd-12px',
  'text-sm',
  'px-12px',
  'py-8px',
  `border-${type}`,
  `bg-${type}`,
  `color-${type}-content`,
  `hover-border-${type}-focus`,
  `hover-bg-${type}-focus`,
]
const typeStyle = {}
</script>

<template>
  <HButton :class="commonStyle">
    <slot />
  </HButton>
</template>
