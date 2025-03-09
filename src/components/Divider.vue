<template>
  <div
      class="divider-container"
      :style="{ background: color }"
  ></div>
</template>

<script setup>
const props = defineProps({
  color: String,
})
</script>

<style lang="scss" scoped>
.divider-container {
  @apply w-full;
  height: 0.2vw;
}
</style>