import { createLState } from "lstate"
import { counterStore } from "./simple-sample"

export const doubleOfValueStore = createLState({
    default: { doubleOfValue: 0 },
    dependencies: [counterStore],
    throttle: 3000,
    compute: (setter) => {
      setter((_, counter) => ({ doubleOfValue: counter.value * 2 }))
    }
})