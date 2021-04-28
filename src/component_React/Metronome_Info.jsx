import React from 'react';
import BpmController from './Bpm_Controller';
import TempoInfo from  './Tempo_Info';
import RythmeDetail from './Rythme_Detail';

const MetronomeInfo = (props) => {
    

    return (
        <div className="metronome_info_container">
            <BpmController  tempo = {props.tempo} setTempo={props.setTempo} />
            <TempoInfo tempo = {props.tempo} />
            <RythmeDetail temps={props.temps} mesure={props.mesure} />
        </div>
    );
}

export default MetronomeInfo;