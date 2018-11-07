<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <h3 class="md-title">Flag Quiz</h3>
    </md-app-toolbar>
    <md-app-content>
      <select-game-type></select-game-type>
    </md-app-content>
  </md-app>
</template>


<script>
// Imported components
import SelectGameType from '@/components/SelectGameType.vue';

export default {
  // Component name
  name: 'App',

  // Imported components
  components: {
    SelectGameType,
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
