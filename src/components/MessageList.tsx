import React from 'react';
import Grid from '@mui/material/Grid';
import InfoMessageList from './InfoMessageList';
import WarningMessageList from './WarningMessageList';
import ErrorMessageList from './ErrorMessageList';
import MessageListProps from '../types/MessageListProps';

const MessageList: React.FC<MessageListProps> = (props: MessageListProps) => {
    return (
        <Grid container sx={{ m: 1 }}>
            <Grid item md></Grid>
            <ErrorMessageList messages={props.messages} clearMessage={props.clearMessage} />
            <WarningMessageList messages={props.messages} clearMessage={props.clearMessage} />
            <InfoMessageList messages={props.messages} clearMessage={props.clearMessage} />
            <Grid item md></Grid>
        </Grid>
    );
};

export default MessageList;
