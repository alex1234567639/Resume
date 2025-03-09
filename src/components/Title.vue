<template>
  <div class="title-container">
    <img src="/src/assets/img/item.webp" alt="">
    {{ title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
</script>

<style lang="scss" scoped>
.title-container {
  @apply flex items-center text-[#0052A3] font-semibold;
  font-size: 1.4vw;
  & img {
    margin: 0 0.2vw 0 0;
    width: 3vw;
  }
}
</style>