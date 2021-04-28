import React from 'react';

const MetronomeController = (props) => {
    return (
        <div className="metronome_controller_container">
            <button className={props.timerUp ? "btn pause" : "btn start"} onClick={props.toggleTimer}>
                {props.timerUp ? <i className="fas fa-pause"></i> : <i className="fas fa-play"></i>}  
            </button>
            <button className="btn reset" onClick={props.resetInfo}>
                <i className="fas fa-undo"></i>
            </button>
        </div>
    );
}

export default MetronomeController;
