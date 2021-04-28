import React from 'react';

const BpmController = (props) => {

    const increaseTempo = (e) => {
        e.preventDefault();
        props.tempo < 300 ? props.setTempo( t => t + 1) : props.setTempo( t => 300); /* changer l'état en passant par des vars et non l'etat directement */
    }

    const decreaseTempo = (e) => {
        e.preventDefault();
        props.tempo > 10 ? props.setTempo( t => t - 1) : props.setTempo( t => 10);
    }

    return (
        <div className="bpm_contoller">
            <button className="btn more" onClick={increaseTempo}>
                <i className="fas fa-play"></i>
            </button>
            <button className="btn less" onClick={decreaseTempo}>
                <i className="fas fa-play"></i>
            </button>
        </div>
    );
}

export default BpmController;