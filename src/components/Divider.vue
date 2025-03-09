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
  margin: 0.5vw 0;
}

@media (max-width: 900px) {
  .divider-container {
    height: 0.5vw;
    margin: 1vw 0;
  }
}
</style>