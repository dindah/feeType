import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AdvancedPage from './advanced-page';
import DataTable from './table';
import './style.css'

class MainPage extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render () {
        
        return (
            <div>
                <Container style={{ margin : "0", maxWidth: "100%", padding: "2em"}}>
                    <div>
                        <h2>Fee Type</h2>
                    </div>
                    <div>
                    <Form>
                        <Row className="mb-3" style={{ paddingTop: "2em"}}>
                            <Col md="3">
                                <Form.Group >
                                <Form.Control type="text" placeholder="Search..." required></Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <AdvancedPage ></AdvancedPage>
                            </Col>
                        </Row>
                        </Form>
                    </div>
                    <DataTable> </DataTable>
                </Container>
            </div>
        );
    }
}


export default MainPage;
