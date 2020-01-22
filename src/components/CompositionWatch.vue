<template>
  <div>
    Search for
    <input v-model="searchInput" />
    <div>
      <p>Number of events: {{ result }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch } from "@vue/composition-api";
import { getSomeNumber } from "@/helpers/utils";

export default {
  setup() {
    const searchInput = ref("");
    const result = ref(0);

    // first param is the source of change which triggers watch() (can be array of values)
    watch(searchInput, () => {
      result.value = getSomeNumber(searchInput.value);
    });

    return { searchInput, result };
  }
};
</script>

<style lang="scss" scoped>
</style>