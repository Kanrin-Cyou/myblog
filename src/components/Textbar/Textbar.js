import React from 'react';
import './Textbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import {Tab,Row,Col} from 'react-bootstrap'

const Textbar = () => {
    return(

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={4} style={{margin:0,padding:0}}>
                    <ListGroup>
                        <ListGroup.Item className="theclass" action href="#link1">
                        HTML&CSS
                        </ListGroup.Item>
                        <ListGroup.Item className="theclass" action href="#link2">
                        JavaScript
                        </ListGroup.Item>
                        <ListGroup.Item className="theclass" action href="#link3">
                        React&Redux
                        </ListGroup.Item>
                        <ListGroup.Item className="thelast">
                        </ListGroup.Item>
                    </ListGroup>

                </Col>

                <Col sm={8} style={{margin:0,padding:0}}>

                <Tab.Content className>
                    <Tab.Pane eventKey="#link1">
                        <nav id="pl__container">
                                <a class="pl__all" href="/docker-intro/">
                                    <span class="pl__circle"></span>
                                    <span class="pl__title">Docker 简介</span>
                                    <span class="pl__date">Feb 2016</span>
                                </a>
                        </nav>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link2">
                        <a className='thetitle JavaScript'>JavaScript</a>
                        <a className='thetitle JavaScript'>one</a>
                        <a className='thetitle JavaScript'>one</a>
                        <a className='thetitle JavaScript'>one</a>
                    </Tab.Pane>

                    <Tab.Pane eventKey="#link3">
                        <a className='thetitle ReactRedux'>ReactRedux</a>  
                        <a className='thetitle JavaScript'>one</a>
                        <a className='thetitle JavaScript'>one</a> 
                        <a className='thetitle JavaScript'>one</a>
                    </Tab.Pane>
                    
                </Tab.Content>

                </Col>
            </Row>
        </Tab.Container>

    )
};

export default Textbar;