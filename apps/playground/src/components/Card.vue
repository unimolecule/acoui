<script lang="ts" setup>
defineProps(['title'])
</script>

<template>
  <div>
    <div>{{ title }}</div>
    <div class="w-40vw p-10px min-h-300px b-1 b-dotted b-#888">
      <slot />
    </div>
  </div>
</template>
