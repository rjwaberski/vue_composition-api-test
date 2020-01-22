<template>
  <div>
    <!-- refs -->
    <!-- <p>spaces left: {{ spacesLeft}} out of {{ capacity }}</p>
    <button @click="increaseCapacity">increase capacity</button>

    <h2>attending</h2>
    <ul>
      <li v-for="(name, index) in attending" :key="index">{{ name }}</li>
    </ul>-->

    <!-- reactive -->
    <p>spaces left: {{ event.spacesLeft }} out of {{ event.capacity }}</p>
    <button @click="increaseCapacity">increase capacity</button>

    <h2>attending</h2>
    <ul>
      <li v-for="(name, index) in event.attending" :key="index">{{ name }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { ref, computed, Ref, reactive } from "@vue/composition-api";

interface TestEvent {
  capacity: number;
  attending: string[];
}

export default {
  setup() {
    const participants: string[] = ["Tim", "Bob", "Joe"];
    //  refs
    // const capacity = ref(3);
    // const attending = ref(participants);
    // const spacesLeft = computed(() => {
    //   return capacity.value - attending.value.length;
    // });
    // const increaseCapacity = () => {
    //   capacity.value++;
    // };
    // return { capacity, attending, increaseCapacity, spacesLeft };

    //  reactive
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