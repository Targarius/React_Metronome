import React from 'react';

const RythmeDetail = (props) => {
    return (
        <div className="rythme_info">  
            <div className="temps_container">
                <h2>Temps</h2>
                <p>{props.temps}</p>
            </div>
            <div className="mesures_container">
                <h2>Mesures</h2>
                <p>{props.mesure}</p>
            </div>
        </div>
    );
}

export default RythmeDetail;