<template>
  <md-content>
    <img class="md-elevation-15" :src="getFlagPath(code)">
  </md-content>
</template>

<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'Flag',

  // Imported components
  props: {
    code: String,
  },

  // Methods
  methods: {
    getFlagPath(iconName) {
      return iconName ? require(`../assets/flags-normal/${iconName}.png`) : '';
    },
  },

  // Computed methods & state
  computed: {
    ...mapState({
      flags: ({ flags }) => flags,
    }),
  },
};
</script>

<style lang="scss" scoped>
  img {
    display: block;
    height: 200px;
    width: auto;
    margin-left: auto;
    margin-right: auto;
  }
</style>
