import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MessageListProps from '../types/MessageListProps';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Priority } from '../Api';
import Button from '@mui/material/Button';

const ErrorMessageList: React.FC<MessageListProps> = (props: MessageListProps) => {
    let [count, setCount] = useState(0);

    useEffect(() => {
        let count = 0;
        props.messages.forEach((message) => {
            if(message.priority === Priority.Error) {
                count++;
            }
        });
        setCount(count);
    }, [props.messages]);

    return (
        <Grid item md={3} sx={{ m: 1 }}>
            <Typography variant="h5" component="div" gutterBottom>Error Type 1</Typography>
            <Typography component="div" gutterBottom>Count {count}</Typography>

            { props.messages.map((message, index) => {
                if(message.priority === Priority.Error) {
                    return (
                        <Card key={index} sx={{ maxWidth: '100%', bgcolor: 'error.light', my: 1 }}>
                            <CardContent>{message.message}</CardContent>
                            <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Button sx={{ color: 'initial' }} onClick={ (event: React.MouseEvent<HTMLButtonElement>) => { props.clearMessage(index); } }>Clear</Button>
                            </CardActions>
                        </Card>
                    );
                }
                else {
                    return null;
                }
            })}
        </Grid>
    );
};

export default ErrorMessageList;
