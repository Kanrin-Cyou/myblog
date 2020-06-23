import React from 'react';
import './Textbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup'
import {Tab,Row,Col} from 'react-bootstrap'

const Textbar = () => {
    return(

        <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
                <Col sm={5}>

                <ListGroup className="thelist">
                    <ListGroup.Item action href="#link1">
                    HTML&CSS
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link2">
                    JavaScript
                    </ListGroup.Item>
                    <ListGroup.Item action href="#link3">
                    React&Redux
                    </ListGroup.Item>
                </ListGroup>

                </Col>

                
                <Col sm={6}>

                <Tab.Content className="thebrief">
                    <Tab.Pane eventKey="#link1">
                    <p>good morning</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link2">
                    <p>good afternoon</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="#link3">
                    <p>good evening</p>
                    </Tab.Pane>
                </Tab.Content>

                </Col>
            </Row>
        </Tab.Container>

    )
};

export default Textbar;