<template>
  <div id="app">
    <composition-ref />
    <composition-reactive />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompositionRef from "./components/CompositionRef.vue";
import CompositionReactive from "./components/CompositionReactive.vue";

@Component({
  components: {
    CompositionRef,
    CompositionReactive
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
