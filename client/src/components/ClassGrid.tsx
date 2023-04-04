import React from 'react';
import Class from './Class';

interface ClassGridProps {
    classes: Array<{
        imageSrc : string,
        title : string,
        code : string,
        description : string,
    }>;
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const ClassGrid: React.FC<ClassGridProps> = ({ classes, loggedInUser, setLoggedInUser }) => {
    const classList = classes.map((classItem, index) => (
        <Class
            key={classItem.title}
            title={classItem.title}
            description={classItem.description}
            imageSrc={classItem.imageSrc}
            code={classItem.code}
            loggedInUser={loggedInUser}
            setLoggedInUser={setLoggedInUser}
        />
    ));

    return (
        
        <div className='bg-light'>
            <h1 id = "ClassesList" className="display-4 fw-bold text-center mb-3" style={{ marginBottom: '14px' }}>Classes</h1>
            <div className="bg-light p-4" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridGap: '1rem' }}>
                {classList}
            </div>
        </div>
    );
};

export default ClassGrid;
