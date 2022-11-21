import React from 'react';
import './Loading.scss';

const Loading = () => {
    return (
        <div class="lds-ripple">
            <div></div>
            <div></div>
        </div>
    );
};

export default Loading;