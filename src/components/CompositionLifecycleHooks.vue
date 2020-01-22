<script>
import { onBeforeMount } from "@vue/composition-api";

/** Available:
 * onBeforeMount()
 * onMounted()
 * onBeforeUpdate()
 * onUpdated()
 * onBeforeUnmount()
 * onUnmounted()
 * onActivated()
 * onDeactivated()
 * onErrorCaptured()
 *
 * NEW VUE 3 lifecycle methods
 * onRenderTracked() - called when a reactive dependency is first being accessed in the render function, during render
 * onRenderTriggered() - called when a new render is triggered, allowing to inspect what dependency triggered a component to re-render
 *
 * beforeCreate() and created() are not needed when using composition API, beacuse of setup() presence
 */

export default {
  setup() {
    onBeforeMount(() => {
      console.log("Before mount");
    });
  },
  render() {
    return this.$scopedSlots.default({ msg: "Testing lifecycle hooks " });
  }
};
</script>