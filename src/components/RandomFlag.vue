<template>
  <div>
    <button @click="getRandomFlag">Random flag</button>
    <h1>{{flags[randomFlagIndex].name}}</h1>
    <p>
      <img :src="getIconPath(flags[randomFlagIndex].code)" alt="" width="200">
    </p>
  </div>
</template>

<script>
// State utils
import { mapState } from 'vuex';

export default {
  // Component name
  name: 'RandomFlag',

  // Imported components
  components: {

  },

  // Data
  data() {
    return {
      randomFlagIndex: 0,
    };
  },

  // Methods
  methods: {
    getIconPath(iconName) {
      return iconName ? require(`../assets/flags-normal/${iconName}.png`) : '';
    },
    getRandomFlag() {
      this.randomFlagIndex = Math.floor(Math.random() * (this.flags.length - 1));
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

<style lang="sass" scoped>

</style>
