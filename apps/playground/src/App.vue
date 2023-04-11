<script setup lang="ts">
import { HButton } from '@aco/headless'
import { AcoButton } from '@aco/plus'
import Card from './components/Card.vue'
</script>

<template>
  <div class="flex justify-around">
    <Card title="headless">
      <!-- basic -->
      <HButton>test</HButton>
    </Card>
    <Card title="plus">
      <!-- basic -->
      <!-- 1. type: 'default'| 'primary'| 'secondary'| 'accent'| 'ghost' -->
      <AcoButton type="default">
        default
      </AcoButton>
      <AcoButton type="primary">
        primary
      </AcoButton>
      <AcoButton type="secondary">
        secondary
      </AcoButton>
      <AcoButton type="accent">
        accent
      </AcoButton>
      <AcoButton type="ghost">
        ghost
      </AcoButton>
    </Card>
  </div>
</template>
