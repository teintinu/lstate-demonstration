import {
    DialogTrigger, ActionButton, Dialog, Button, Heading, Divider, ButtonGroup, Content
} from "@adobe/react-spectrum";
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

export interface ShowCode {
    title: string
    code: string
}
export function ShowCode({ title, code }: ShowCode) {
    return <DialogTrigger>
        <ActionButton>Show Code</ActionButton>
        {(close) => (
            <Dialog size="L">
                <Heading>{title}</Heading>
                <Divider />
                <ButtonGroup>
                    <Button variant="secondary" onPress={close}>Close</Button>
                </ButtonGroup>
                <Content>
                    <SyntaxHighlighter language="typescript" style={dark}>
                        {code}
                    </SyntaxHighlighter>
                </Content>
            </Dialog>
        )}
    </DialogTrigger>
}