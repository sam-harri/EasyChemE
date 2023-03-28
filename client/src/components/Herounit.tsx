import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

interface JumbotronProps {
    header: string;
    imageName: string;
    paragraph: string[];
}

const CustomJumbotron: React.FC<JumbotronProps> = ({ header, paragraph, imageName }) => {
    const paragraphFormatted = paragraph.map((paragraphItem, index) => (
        <p className="lead text-center mb-4" style={{ marginBottom: '16px', width:'1000px', wordWrap:'break-word' }}>{paragraphItem}</p>
    ));

    return (
        <Card bg="light" style={{ paddingTop: '70px', paddingBottom: '0px', border: 0 }}>
            <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-4 fw-bold text-center mb-3" style={{ marginBottom: '14px' }}>{header}</h1>
                <img src={imageName} alt="Logo" width="auto" height="40" className="d-inline-block align-text-top me-2" style={{paddingBottom:"10px"}}/>
                <p className="lead text-center mb-4" style={{ marginBottom: '16px', width:'1000px', wordWrap:'break-word' }}>{paragraphFormatted}</p>
                <Row>
                    <Col md={4} className="d-flex justify-content-between mb-5" style={{ gap: '20px' }}>
                        <Link to="/login">
                            <Button variant="primary">
                                {"Login"}
                            </Button>
                        </Link>
                        <Link to="/createaccount">
                            <Button variant="secondary">
                                {"Register"}
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
};

export default CustomJumbotron;
