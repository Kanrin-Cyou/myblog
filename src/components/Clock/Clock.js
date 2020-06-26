import React from 'react';
import './Clock.css';
import './Clock.png';

const Clock = (props) => {

        let day = props.day;
        let deg = 6;
        let hh = day.getHours()*30;
        let mm = day.getMinutes()*deg;
        let ss = day.getSeconds()*deg;

        return(
            <div className='clock'>
                <div className='hour'>
                    <div className='hr' id='hr' style={{transform:`rotateZ(${hh+(mm/12)}deg)`}}></div>
                </div>
                <div className='min'>
                    <div className='mn' id='mn' style={{transform:`rotateZ(${mm}deg)`}}></div>
                </div>
                <div className='sec'>
                    <div className='sc' id='sc' style={{transform:`rotateZ(${ss}deg)`}}></div>
                </div>
            </div>
        )
}
export default Clock;