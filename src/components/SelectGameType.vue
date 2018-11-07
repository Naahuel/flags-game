<template>
  <div>
    <h1 class="md-display-2">Select your mode:</h1>
    <p>
      <md-button class="md-raised md-primary">
        <img src="../assets/icons/hourglass-white.svg">
        Timed
      </md-button>
    </p>
    <p>
      <md-button class="md-raised md-accent">
        <img src="../assets/icons/infinity-white.svg">
        Infinite
      </md-button>
    </p>
  </div>
</template>

<script>
export default {
  // Component name
  name: 'SelectGameType',
};
</script>

<style lang="scss" scoped>
  .md-button{
    display: block;
    width: 100%;
    height: 50px;
    margin: 0;
    img{
      display: inline-block;
      max-width: 30px;
    }
  }
</style>
