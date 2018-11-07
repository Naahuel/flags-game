<template>
  <md-content class="md-elevation-12">
    <img :src="getFlagPath(code)">
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
    width: 100%;
  }
</style>
