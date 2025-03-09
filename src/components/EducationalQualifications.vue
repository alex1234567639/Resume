<template>
  <div class="educational-qualifications-container">
    <Title :title="t('eq.title')"/>
    <Divider :color="'rgba(185,185,185,0.3)'"/>

    <div v-if="Array.isArray(eqList)">
      <div
          v-for="(item, index) in eqList"
          class="eq-list-item"
          :key="index"
      >
        <div>
          <div class="title">{{ item.title }}</div>
          <div class="subtitle">{{ item.subtitle }}</div>
        </div>
        <div class="duration">{{ item.duration }}</div>
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

const eqList = ref(tm("eq.list"))
</script>

<style lang="scss" scoped>
.educational-qualifications-container {
  padding: 2vw 5vw;
  & .eq-list-item {
    @apply flex justify-between;
    padding: 0.7vw 1vw;
    & .title {
      @apply text-[1.3vw] font-bold;
    }
    & .subtitle {
      @apply text-[1.2vw] text-[#888888];
    }
    & .duration {
      @apply text-[1vw] text-[#888888];
    }
  }
}
</style>