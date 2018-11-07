<template>
  <md-app>
    <md-app-toolbar class="md-primary">
      <h3 class="md-title">Flag Quiz</h3>
    </md-app-toolbar>
    <md-app-content>
      <router-view/>
    </md-app-content>
  </md-app>
</template>

<style lang="scss">
  .md-app-content{
    max-width: 480px;
    margin-left: auto;
    margin-right: auto;
    border: 0 !important;
  }
</style>
