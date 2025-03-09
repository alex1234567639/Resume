<template>
  <div class="other-project-container">
    <Title :title="t('other.title')"/>
    <Divider :color="'rgba(185,185,185,0.3)'"/>

    <div class="subtitle">{{ t('other.description') }}</div>

    <div v-if="Array.isArray(otherProjectList)">
      <div
          v-for="(item, index) in otherProjectList"
          class="project-list-item"
          :key="index"
      >
        <a v-if="item.link" :href="item.link" target="_blank">- {{ item.name }}</a>
        <span v-else class="text-black">- {{ item.name }}</span>
        <span class="text-[#888888]">{{ `（${item.skills}）` }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import Title from "./Title.vue";
import Divider from "./Divider.vue";
import { computed } from "vue";
import { useI18n } from 'vue-i18n'
const { t, tm } = useI18n()

const otherProjectList = computed(() => tm("other.list"));
</script>

<style lang="scss" scoped>
.other-project-container {
  padding: 2vw 5vw;
  & .subtitle {
    @apply text-[1.2vw];
    padding: 0.7vw 1vw;
  }
  & .project-list-item {
    @apply text-[1.2vw] text-[#246bb0];
    margin: 0.5vw 1.2vw;
  }
}

@media (max-width: 900px) {
  .other-project-container {
    padding: 4vw 5vw;
    & .subtitle {
      @apply text-[3.2vw];
      padding: 2vw 1vw;
    }
    & .project-list-item {
      @apply text-[3.2vw] text-[#246bb0];
      margin: 2vw 3.2vw;
    }
  }
}
</style>
