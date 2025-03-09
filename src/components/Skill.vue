<template>
  <div class="skill-container">
    <Title :title="t('skill.title')"/>
    <Divider :color="'rgba(185,185,185,0.3)'"/>

    <div v-if="Array.isArray(skillList)">
      <div
          v-for="(item, index) in skillList"
          class="skill-list-item"
          :key="index"
      >
        <div class="title">{{ item.title }}</div>
        <div class="content">{{ item.content }}</div>
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

const skillList = ref(tm("skill.list"))
</script>

<style lang="scss" scoped>
.skill-container {
  padding: 2vw 5vw;
  & .skill-list-item {
    padding: 0.7vw 1vw;
    & .title {
      @apply text-[1.3vw] font-bold;
    }
    & .content {
      @apply text-[1.2vw] text-[#888888] whitespace-pre-wrap;
    }
  }
}

@media (max-width: 900px) {
  .skill-container {
    padding: 4vw 5vw;
    & .skill-list-item {
      padding: 2vw 1vw;
      & .title {
        @apply text-[3.73vw] font-bold;
      }
      & .content {
        @apply text-[3.2vw] text-[#888888] whitespace-pre-wrap;
      }
    }
  }
}
</style>
