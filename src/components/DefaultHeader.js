import React from 'react';
import {Navbar, Container, Row, Col } from "react-bootstrap";

let DefaultHeader = () => {
    return (
        <>
        <Navbar bg="light" expand='md' variant="dark">
            <Container style={{ maxWidth: "100%"}}>
                <Row>
                    <Col>
                        <img src='asset/BAYU BUANA_LOGO_HORIZONTAL_COLOR.svg' className="justify-content-left" />
                    </Col>
                </Row>
                <Navbar.Brand>Fee Type</Navbar.Brand>
            </Container>
        </Navbar>
        </>
    )

}

export default DefaultHeader;