<template>
  <div id="app">
    <test />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Test from "./components/CompositionTest.vue";

@Component({
  components: {
    Test
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
