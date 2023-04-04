import React from 'react';
import { Card } from 'react-bootstrap';
import EnrollButton from './EnrollButton';

interface ClassProps {
    imageSrc: string;
    title: string;
    description: string;
    code: string;
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const Class: React.FC<ClassProps> = ({ imageSrc, title, description, code, loggedInUser, setLoggedInUser }) => {
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        window.location.href = "CHG"+code;
    };

    return (
        <Card className='my-3 mx-auto' style={{ width: '300px', cursor: 'pointer' }}>
            <div style={{ height: '170px', overflow: 'hidden' }} onClick={handleClick}>
                <Card.Img variant="top" src={imageSrc} style={{ objectFit: 'cover', width: '100%', height: '100%' }} />
            </div>
            <Card.Body className='my-3 mx-auto text-center' style={{ padding: '1rem' }}>
                <div style={{ minHeight: '75px' }} className="d-flex align-items-center justify-content-center" onClick={handleClick}>
                    <Card.Title style={{ fontSize: '1.2rem' }}>{title}</Card.Title>
                </div>
                <hr></hr>
                <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>{description}</Card.Text>
            </Card.Body>
            <div className='text-center mb-4'>
                <EnrollButton
                    loggedInUser={loggedInUser}
                    setLoggedInUser={setLoggedInUser}
                    courseId={code}
                />
            </div>
        </Card>

    );
};

export default Class;
