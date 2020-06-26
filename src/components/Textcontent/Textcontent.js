import React from 'react';
import './Textcontent.css';
import OpenSSH from './test';
import Clock from '../Clock/Clock';

const Textcontent = (props) => {
    switch (props.route){
        case "/one" : return(<div className='Textcontent'><Clock day={props.day}/></div>);

        case "/two" : return(<div className='Textcontent'><OpenSSH/></div>);

        default : 
            return(<div className='Textcontent'><p>Hello</p></div>);
    }

};

export default Textcontent;