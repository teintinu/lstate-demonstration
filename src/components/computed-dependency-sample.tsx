import { useLState } from "lstate"
import { doubleOfValueStore } from "../state/computed-dependency-sample"
import { Flex, View, Text, Heading, ProgressCircle } from "@adobe/react-spectrum";
import { ShowCode } from "./show-code";

export function ComputedDependencySample() {
    const [{ doubleOfValue }, pending] = useLState(doubleOfValueStore)
    return <View padding="size-200">
        <Flex wrap gap="size-100" direction={'column'}>
            <Heading>Computed dependency sample</Heading>
            This sample computes the double of counter of simple state throttled by 3 seconds.
            <Flex alignItems={'end'} gap="size-100" >
                <Text width={'size-3000'} height={'size-150'}>
                    double of count value: {doubleOfValue}
                    {pending ? <ProgressCircle
                        aria-label="Loading…"
                        size="S"
                        isIndeterminate
                    /> : null}
                </Text>
                <ShowCode title="Computed dependency sample" code={code} />
            </Flex>
        </Flex>
    </View>
}

const code = `
// computed-dependency-sample.tsx
import { createLState } from "lstate"
import { counterStore } from "../simple-sample"

const doubleOfValueStore = createLState({
    default: { doubleOfValue: 0 },
    dependencies: [counterStore],
    debounce: 3000,
    compute: (setter) => {
      setter((_, counter) => ({ doubleOfValue: counter.value * 2 }))
    }
})

export function CounterSample() {
    const [{ doubleOfValue }, pending] = useLState(doubleOfValueStore)
    return <div>
      double of count value: {doubleOfValue} {pending?' pending':''}
    </div>
}
`