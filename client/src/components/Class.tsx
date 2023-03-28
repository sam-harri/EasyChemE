import React from 'react';
import { Card } from 'react-bootstrap';

interface ClassProps {
    imageSrc: string;
    title: string;
    description: string;
    code: string;
}

const Class: React.FC<ClassProps> = ({ imageSrc, title, description, code }) => {
    const handleClick = () => {
        window.location.href = code;
    };

    return (
        <Card className='my-3 mx-auto' style={{ width: '300px', cursor: 'pointer' }} onClick={handleClick}>
            <div style={{height: '170px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={imageSrc} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <Card.Body className='my-3 mx-auto text-center' style={{ padding: '1rem' }}>
                <div style={{ minHeight: '75px' }} className="d-flex align-items-center justify-content-center">
                    <Card.Title style={{ fontSize: '1.2rem' }}>{title}</Card.Title>
                </div>
                <hr></hr>
                <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Class;
