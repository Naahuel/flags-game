<template>
  <md-content>
    <md-toolbar class="md-primary">
      <h3 class="md-title">Flag Quiz</h3>
    </md-toolbar>
  </md-content>
</template>


<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'App',

  // Imported components
  components: {

  },

  // Computed methods & state
  computed: {
    ...mapState({
      groups: ({groups}) => groups
    })
  },
};
</script>

<style lang="scss">

</style>
