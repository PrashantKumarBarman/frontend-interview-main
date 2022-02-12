import { Message } from '../Api';

type MessageListProps = {
    messages: Message[],
    clearMessage: (index: Number) => void
};

export default MessageListProps;