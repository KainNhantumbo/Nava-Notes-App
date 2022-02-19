import React from 'react';

export default function Button ({ event , icon}) {
    return (
        <button onClick={ event }>
            { icon }
        </button>
    );
}
