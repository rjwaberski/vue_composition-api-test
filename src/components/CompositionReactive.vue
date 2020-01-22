<template>
  <div>
    <p>spaces left: {{ spacesLeft}} out of {{ capacity }}</p>
    <button @click="increaseCapacity">increase capacity</button>

    <h2>attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, ref } from "@vue/composition-api";

export default {
  setup() {
    const participants: string[] = ["Tim", "Bob", "Joe"];
    const capacity = ref(3);
    const attending = ref(participants);
    const spacesLeft = computed(() => {
      return capacity.value - attending.value.length;
    });
    const increaseCapacity = () => {
      capacity.value++;
    };
    return { capacity, attending, increaseCapacity, spacesLeft };
  }
};
</script>