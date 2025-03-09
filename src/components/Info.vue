<template>
  <div class="info-container">
    <div class="info-left">
      <div class="head-shot">
        <img src="/src/assets/img/headshot.jpg" alt="">
      </div>
      <div>
        <div class="name">王子恒 Alex</div>
        <div class="text-[#fcfcfc]">{{ `${t('frontend_engineer')} 3-4${t('experience')}` }}</div>
        <div class="about">{{ t('about') }}</div>
      </div>
    </div>
    <div class="info-right">
      <Language/>
      <div class="text-[#fcfcfc] mb-2">{{ `1997/03/06 ${t('taipei')}` }}</div>
      <a class="text-[#fcfcfc] mb-2" href="tel:+886955030940">(+886)955030940</a>
      <a class="text-[#0052a3]" href="mailto:alex8603062000@gmail.com">alex8603062000@gmail.com</a>
    </div>
  </div>
  <Divider :color="'#b4d1eb'"/>
</template>

<script setup>
import Language from "./Language.vue";
import Divider from "./Divider.vue";
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style lang="scss" scoped>
.info-container {
  @apply flex justify-between text-[1.3vw];
  padding: 4vw 5vw 2vw;
  background-color: #a5cbf2;
  & .info-left {
    @apply flex;
    & .head-shot {
      @apply shrink-0 rounded-full overflow-hidden object-fill mr-[2vw];
      width: 12vw;
      height: 12vw;
      border: 0.3vw solid #246bb0;
    }
    & .name {
      @apply text-[2.8vw] font-bold mb-1;
    }
    & .about {
      @apply text-[1.2vw] text-justify whitespace-pre-wrap;
      padding: 1vw 10vw 0 0;
    }
  }
  & .info-right {
    @apply flex flex-col items-end;
  }
}

@media (max-width: 900px) {
  .info-container {
    @apply flex flex-col justify-between text-[4.2vw];
    padding: 4vw 5vw;
    background-color: #a5cbf2;
    & .info-left {
      @apply flex flex-col items-center;
      & .head-shot {
        @apply mr-0;
        width: 25vw;
        height: 25vw;
      }
      & .name {
        @apply text-[7vw] mt-1;
      }
      & .about {
        @apply text-[3.73vw];
        padding: 3vw 0 0;
      }
    }
    & .info-right {
      @apply flex flex-col items-end;
    }
  }
}
</style>
