import React, { useEffect } from 'react';

const UseTitle = (title) => {
    return (
        useEffect(() => {
            document.title = `${title} - PhotoZone`;
        }, [title])
    );
};

export default UseTitle;