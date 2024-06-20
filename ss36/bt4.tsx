import React, { useRef, useEffect } from 'react';

const Focus = () => {
    const inputRef = useRef<HTMLInputElement>(null); 

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return (
        <div>
            <input type="text" ref={inputRef} placeholder='focus me...' />
        </div>
    );
}

export default Focus;
