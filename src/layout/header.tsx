import { View, Heading, IllustratedMessage, Content } from "@adobe/react-spectrum";

export function Header() {
    return <View
        backgroundColor="gray-100"
        paddingX={8}
        height="size-1000"
    >
        <Heading><span style={({ fontFamily: 'cursive' })} >lstate</span></Heading>
        <Content>A simple, super-efficient and small (just 2.5kb) UI external state for React/Typescript applications</Content>
    </View>
}