import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DefaultNav from '../layouts/DashboardNav';
import DefaultHeader from '../components/DefaultHeader';
import MainPage from './main';
import './style.css';

class FeeTypePage extends Component {
    constructor (props) {
        super(props);
        this.state = {
        }
    }

    render () {
        
        return (
            <div>
                <Row fixed lg="12">
                    <Col xs="2" style={{ padding: "0"}}>
                        <DefaultNav />
                    </Col>
                    <Col xs="10" style={{ padding: "0"}}>
                        <DefaultHeader />
                        <MainPage />
                    </Col>
                </Row>
            </div>
        );
    }
}


export default FeeTypePage;
