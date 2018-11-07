<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <h3 class="md-title">Flag Quiz</h3>
    </md-app-toolbar>
    <md-app-content>
      <random-flag></random-flag>
    </md-app-content>
  </md-app>
</template>


<script>
// Imported components
import RandomFlag from '@/components/RandomFlag.vue';

export default {
  // Component name
  name: 'App',

  // Imported components
  components: {
    RandomFlag,
  },
};
</script>

<style lang="scss">
  .md-app-content{
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    border: 0 !important;
  }
</style>
