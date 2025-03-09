<template>
  <div class="info-container">
    <div class="flex">
      <div class="head-shot shrink-0">
        <img src="/src/assets/img/headshot.jpg" alt="">
      </div>
      <div>
        <div class="name">王子恒 Alex</div>
        <div class="text-[#888888] ml-1">{{ `${t('frontend_engineer')} 3-4${t('experience')}` }}</div>
        <div class="about">{{ t('about') }}</div>
      </div>
    </div>
    <div class="flex flex-col items-end">
      <div class="text-[#888888] mb-2">{{ `1997/03/06 ${t('taipei')}` }}</div>
      <a class="text-[#888888] mb-2" href="tel:+886955030940">(+886)955030940</a>
      <a class="text-[#0052a3]" href="mailto:alex8603062000@gmail.com">alex8603062000@gmail.com</a>
    </div>
  </div>
  <div class="divider"></div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.info-container {
  @apply flex justify-between text-[1.2vw];
  padding: 4vw 5vw 2vw;
  & .head-shot {
    @apply rounded-full overflow-hidden object-fill mr-[2vw];
    width: 12vw;
    height: 12vw;
    border: 0.3vw solid #246bb0;
  }
  & .name {
    @apply text-[2.8vw] font-bold mb-1;
  }
  & .about {
    @apply whitespace-pre-wrap;
    padding: 1vw 10vw 0 0;
  }
}
</style>
