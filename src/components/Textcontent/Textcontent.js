import React from 'react';
import './Textcontent.css';
import OpenSSH from './test'

const Textcontent = (route) => {
    switch (route.route){
        case "/one" : return(<div className='Textcontent'><p>this is one</p></div>);

        case "/two" : return(<div className='Textcontent'><OpenSSH/></div>);

        default : 
            return(<div className='Textcontent'><p>Hello</p></div>);
    }

};

export default Textcontent;