import { reactive, computed } from '@vue/composition-api';

interface TestEvent {
  capacity: number;
  attending: string[];
}

function useEventSpace() {
  const participants: string[] = ['Tim', 'Bob', 'Joe'];
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

export default useEventSpace;
