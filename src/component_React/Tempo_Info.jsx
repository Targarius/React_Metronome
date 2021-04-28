import React from 'react';

const TempoInfo = (props) => {
    return (
        <div className="tempo_info">
            <h2>Tempo</h2>
            <p>{props.tempo}</p>
        </div>
    );
}

export default TempoInfo;