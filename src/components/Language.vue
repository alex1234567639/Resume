<template>
  <div class="lang-wrapper">
    <button v-for="(item, index) in langType"
            class="lang-btn"
            :class="{ 'lang-btn-active': item.locale === locale }"
            @click="eChangeLang(item.locale)"
            :key="item.locale"
    >
      {{ item.name }}
      <span v-if="index !== langType.length - 1" class="text-[#fcfcfc] mx-1">/</span>
    </button>
  </div>
</template>

<script setup>
import { langType } from '/src/i18n/i18n'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

// 切換語言
const eChangeLang = (lang) => {
  locale.value = lang
  localStorage.setItem('locale', lang)
}
</script>

<style lang="scss" scoped>
.lang-wrapper {
  margin: 0 0 0.5vw;
  & .lang-btn {
    @apply text-[1.2vw];
    color: rgba(255, 255, 255, 0.3);
  }
  & .lang-btn-active {
    @apply text-[#fcfcfc];
  }
}

@media (max-width: 900px) {
  .lang-wrapper {
    margin: 3vw 0 8px;
    & .lang-btn {
      @apply text-[3.2vw];
      color: rgba(255, 255, 255, 0.3);
    }
    & .lang-btn-active {
      @apply text-[#fcfcfc];
    }
  }
}
</style>
