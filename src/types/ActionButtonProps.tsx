import React from 'react';

type ActionButtonProps = {
    clearAllMessages: (event: React.MouseEvent<HTMLButtonElement>) => void,
    stopIncomingMessages: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export default ActionButtonProps;