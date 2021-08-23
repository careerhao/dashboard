<template>
  <div id="app" :style="themeVars">
    <router-view />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  mounted() {
    this.$store.dispatch('config/setTheme', 'light');
  },
  computed: {
    ...mapGetters('config', {
      themeVars: 'themeVars',
    })
  }
}
</script>

<style lang="scss">
@import '@/assets/main';

#app {
  background-color: var(--app__backgroundColor);
}
</style>
