<template>
  <div id="app">
    <composition-ref />
    <composition-reactive />
    <composition-lifecycle-hooks v-slot="{msg}">
      <p>{{ msg }}</p>
    </composition-lifecycle-hooks>
    <composition-watch />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CompositionRef from "@/components/CompositionRef.vue";
import CompositionReactive from "@/components/CompositionReactive.vue";
import CompositionLifecycleHooks from "@/components/CompositionLifecycleHooks.vue";
import CompositionWatch from "@/components/CompositionWatch.vue";

@Component({
  components: {
    CompositionRef,
    CompositionReactive,
    CompositionLifecycleHooks,
    CompositionWatch
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

  display: flex;
  justify-content: space-evenly;
}
</style>
