import { createLState } from "lstate"

export const counterStore = createLState({
    initial: { value: 0 },
    reducers: (setter) => ({
        inc() {
            setter((old) => ({ value: old.value + 1 }))
        },
    })
})