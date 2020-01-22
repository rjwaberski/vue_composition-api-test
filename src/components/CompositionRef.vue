<template>
  <div>
    <p>spaces left: {{ event.spacesLeft }} out of {{ event.capacity }}</p>
    <button @click="increaseCapacity">increase capacity</button>

    <h2>attending</h2>
    <ul>
      <li v-for="(name, index) in event.attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, reactive } from "@vue/composition-api";
import useEventSpace from "@/use/event-space";

export default {
  setup() {
    return useEventSpace();
  }
};
</script>