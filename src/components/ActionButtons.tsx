import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ActionButtonProps from '../types/ActionButtonProps';

const ActionButtons: React.FC<ActionButtonProps> = (props: ActionButtonProps) => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant='contained' sx={{ m: 1 }} color="success" onClick={props.stopIncomingMessages}>Stop</Button>
            <Button variant='contained' sx={{ m: 1 }} color="success" onClick={props.clearAllMessages}>Clear</Button>
        </Box>
    );
};

export default ActionButtons;
