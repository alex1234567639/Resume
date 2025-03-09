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
  @apply flex items-center text-[#023365] font-semibold;
  font-size: 1.4vw;
  & img {
    margin: 0 0.2vw 0 0;
    width: 3vw;
  }
}

@media (max-width: 900px) {
  .title-container {
    font-size: 4.26vw;
    & img {
      margin: 0 1vw 0 0;
      width: 6vw;
    }
  }
}
</style>