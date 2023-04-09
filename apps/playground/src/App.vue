<script setup lang="ts">
import { HButton } from '@aco/headless'
import { AcoButton } from '@aco/ui'
</script>

<template>
  <div class="container">
    <div class="box">
      <HButton />
    </div>
    <div class="box">
      <AcoButton />
    </div>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  justify-content: space-around;
}
.box{
  border: 1px dotted #888;
  width: 40vw;
  padding: 10px;
  min-height: 300px;
}
</style>
