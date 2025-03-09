<template>
  <div class="work-experience-container">
    <Title :title="t('work.title')"/>
    <Divider :color="'rgba(185,185,185,0.3)'"/>

    <div v-if="Array.isArray(workExperienceList)">
      <div
          v-for="(item, index) in workExperienceList"
          class="work-list-item"
          :key="index"
      >
        <div class="duration">
          <div class="dot"></div>{{ item.duration }}
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="subtitle">{{ item.subtitle }}</div>
        <div class="description">{{ item.description }}</div>
        <div v-for="w in item.website" class="website-item" :key="w.name">
          <a v-if="w.link" :href="w.link" target="_blank">- {{ w.name }}</a>
          <span v-else class="text-black">- {{ w.name }}</span>
          <span class="text-[#888888]">{{ `（${w.skills}）` }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import Divider from "./Divider.vue";
import { ref } from "vue";
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

const workExperienceList = ref(tm("work.list"))
</script>

<style lang="scss" scoped>
.work-experience-container {
  padding: 2vw 5vw;
  & .work-list-item {
    padding: 0.7vw 1vw;
    & .duration {
      @apply flex items-center text-[1vw] text-[#888888];
      & .dot {
        @apply rounded-full bg-[#b4d1eb];
        width: 0.8vw;
        height: 0.8vw;
        margin:  0 0.5vw 0 0;
      }
    }
    & .title {
      @apply text-[1.3vw] font-bold;
      margin: 0 0 0 1.2vw;
    }
    & .subtitle {
      @apply text-[1.2vw] text-[#888888];
      margin: 0 0 0 1.2vw;
    }
    & .description {
      @apply text-[1vw] text-[#888888] text-justify;
      margin: 1vw 1.2vw;
    }
    & .website-item {
      @apply text-[1.2vw] text-[#246bb0];
      margin: 0.5vw 1.2vw;
    }
  }
}

@media (max-width: 900px) {
  .work-experience-container {
    padding: 4vw 5vw;
    & .work-list-item {
      padding: 2vw 1vw;
      & .duration {
        @apply flex items-center text-[2.8vw] text-[#888888];
        & .dot {
          width: 1.6vw;
          height: 1.6vw;
          margin:  0 1vw 0 0;
        }
      }
      & .title {
        @apply text-[3.73vw] font-bold;
        margin: 0 0 0 2.2vw;
      }
      & .subtitle {
        @apply text-[3.2vw] text-[#888888];
        margin: 0 0 0 2.2vw;
      }
      & .description {
        @apply text-[2.8vw] text-[#888888];
        margin: 2vw 2.2vw;
      }
      & .website-item {
        @apply text-[3.2vw] text-[#246bb0];
        margin: 1vw 2.2vw;
      }
    }
  }
}
</style>
