import React from 'react';
import { useLState } from "lstate"
import { counterStore } from '../state/simple-sample';
import { Flex, View, Text, Button, Heading, Content } from "@adobe/react-spectrum";
import AddIcon from '@spectrum-icons/workflow/Add';
import { ShowCode } from './show-code';

export function CounterSample() {
  const { value } = useLState(counterStore)
  return <View padding="size-200">
    <Flex wrap gap="size-100" direction={'column'}>
      <Heading>Simple state</Heading>
      This is a simple counter with increment action.
      <Flex alignItems={'end'} gap="size-100" >
        <View borderWidth='thick' borderRadius="large" borderColor={"gray-900"} paddingY="size-65" paddingX="size-115" width="size-2000">
          count value: {value}
        </View>
        <Button variant="primary" onPress={counterStore.inc}>
          <AddIcon />
          <Text>Increment Count Value</Text>
        </Button>
        <ShowCode title="Simple state" code={code} />
      </Flex>
    </Flex>
  </View>
}

const code = `
// simple-sample.tsx
import { createLState } from "lstate"

const counterStore = createLState({
  initial: { value: 0 },
  reducers: (setter) => ({
      inc() {
          setter((old) => ({ value: old.value + 1 }))
      },
  })
})

export function CounterSample() {
  const { value } = useLState(counterStore)
  return <div>
      <div>count value: {value}</div>
      <Button onClick={counterStore.inc}>Save</Button>
  </div>
}

`