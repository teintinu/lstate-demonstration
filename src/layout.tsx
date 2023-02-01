import { Flex, View, Grid, Button, Heading } from "@adobe/react-spectrum";
import { TodoListView } from "./components/collection-sample";
import { ComputedDependencySample } from "./components/computed-dependency-sample";
import { CounterSample } from "./components/simple-sample";
import { Header } from "./layout/header";

export function Layout() {
    return <Flex direction={"column"}
        gap="size-100"
    >
        <Header />
        <View
            backgroundColor="gray-50"
        ><Flex direction={"column"}
            gap="size-100"
        >
                <CounterSample />
                <ComputedDependencySample />
                <TodoListView />
            </Flex>
        </View>
        <View
            height="size-1000"
        />
    </Flex>
}