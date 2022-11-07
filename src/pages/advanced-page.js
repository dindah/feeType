import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function AdvancedPage() {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2">
        <Button onClick={toggleShowA} variant="light" className="mb-2">
          <strong>Advanced Option <i className="bi bi-chevron-double-down"></i></strong> 
        </Button>
        <Toast show={showA} onClose={toggleShowA} >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      </Col>
      <Col md="6" className="d-flex justify-content-end">
       <i className="bi bi-download"></i>&nbsp;
       <i class="bi bi-printer-fill"></i>&nbsp;
       <Button variant="warning" size="xs"><i className="bi bi-file-earmark-plus"></i>&nbsp;
           Create New
       </Button>
      </Col>
    </Row>
  );
}

export default AdvancedPage;