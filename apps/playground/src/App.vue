<script setup lang="ts">
import { HButton } from '@aco/headless'
import { AcoButton } from '@aco/plus'
import Card from './components/Card.vue'
</script>

<template>
  <div class="flex justify-around">
    <Card title="headless">
      <HButton />
    </Card>
    <Card title="plus">
      <AcoButton />
    </Card>
  </div>
</template>
