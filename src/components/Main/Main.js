import React from 'react'
import Navi from '../Navi/Navi';
import Textbar from '../Textbar/Textbar';
import Textcontent from '../Textcontent/Textcontent';
import './Main.css'

const Main = () => {
    return(
        <div>
            <Navi/>
            <div className="box">
                <div className="box.aaaa">
                    <Textbar/>
                </div>
                <div className="box.bbbb">
                    <Textcontent/>
                </div>
            </div>
        </div>
        )
}

export default Main;