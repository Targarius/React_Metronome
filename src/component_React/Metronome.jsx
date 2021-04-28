import React, {useState, useEffect} from 'react';
import MetronomeController from './Metronome_Controller'
import MetronomeInfo from './Metronome_Info'


const Metronome = () => {
    const [tempo, setTempo] = useState(100);
    const [temps, setTemps] = useState(0);
    const [mesure, setMesure] = useState(0);
    const [timerUp, setTimerUp] = useState(false);

    const toogleTimer = () =>{
        setTimerUp(!timerUp);
    }

    const resetInfo = () => {
        setTimerUp(false)
        setMesure(m => 0);
        setTemps(t => 0);
    }

    useEffect(() => {
        let timer = null;

        if (timerUp) {
            timer = setInterval(() => {
                if (mesure < 4) {
                    setMesure( m => m + 1)
                } else {
                    setMesure( m => 1);
                    setTemps( t => t + 1);
                } 
            }, Math.round(60000 / tempo));
        } else if (!timerUp) {
            clearInterval(timer);
        }

        return () => {
            clearInterval(timer);
        };

    });


    return (
        <section className="metronome_component">
            <h1 className="metronome_title">Metronome</h1>
            <div className="metronome_container">
                <MetronomeInfo tempo={tempo} setTempo={setTempo} temps={temps} mesure={mesure} />
                <MetronomeController toggleTimer={toogleTimer} timerUp={timerUp} resetInfo={resetInfo} />
            </div>
        </section>
    );
}

export default Metronome;