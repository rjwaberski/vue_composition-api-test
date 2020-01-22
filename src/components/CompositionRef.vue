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

interface TestEvent {
  capacity: number;
  attending: string[];
}

export default {
  setup() {
    const participants: string[] = ["Tim", "Bob", "Joe"];
    const event: TestEvent = reactive({
      capacity: 4,
      attending: participants,
      spacesLeft: computed(() => {
        return event.capacity - event.attending.length;
      })
    });
    const increaseCapacity = () => {
      event.capacity++;
    };

    return { event, increaseCapacity };
  }
};
</script>