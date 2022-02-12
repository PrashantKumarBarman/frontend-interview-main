import React, { useState, useEffect } from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

type Props = {
    message: String|null
};

const ErrorNotification: React.FC<Props> = (props: Props) => {
    let [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(true);
    }, [props.message]);

    const close = () => {
        setOpen(false);
    };

    return (
        <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={2000} onClose={close}>
            <Alert variant="filled" severity="error" onClose={close}>{props.message}</Alert>
        </Snackbar>
    );
};

export default ErrorNotification;
