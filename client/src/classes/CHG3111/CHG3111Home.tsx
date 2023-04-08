import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import React from 'react';

interface Module {
    title: string;
    description: string;
    link: string;
    image: string;
}

interface CHG3111HomeProps {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const modules: Module[] = [
    {
        title: 'Distillation',
        description: "Learn how distillation processes work to separate and purify chemical compounds based on their boiling points and vapor pressures. Explore the design of distillation columns and how to optimize their operation, as well as the use of azeotropic distillation and extractive distillation to overcome difficult separations and gain an understanding of the different types of distillation, including batch, continuous, and pressure swing",
        link: '/CHG3111/module1',
        image: 'https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/chg3111_module1_cover.jpg'
    },
    {
        title: 'Water Cooling / Air Humidification',
        description: "Use of water cooling and air humidification in a variety of industrial processes, such as cooling towers, refrigeration systems, and humidifiers. This module discusses the principles behind evaporative cooling and humidification, and the different types of cooling towers and humidifiers used in industry. Learn how to calculate the cooling load and humidification requirements for a given process, and how to design and operate cooling and humidification systems.",
        link: '/CHG3111/module2',
        image: 'https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/chg3111_module2_cover.jpg'
    },
    {
        title: 'Liquid-Liquid Extraction',
        description: "Apply liquid-liquid extraction techniques to separate and purify chemical compounds based on their solubility properties. Discover the different types of extraction systems, including single-stage, multistage, and continuous extraction, and the factors that affect extraction efficiency, and how to select the appropriate solvent for a given extraction to optimize the extraction process for maximum yield.",
        link: '/CHG3111/module3',
        image: 'https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/chg3111_module3_cover.jpg'
    },
    {
        title: 'Absorption / Stripping',
        description: "Investigate the principles and applications of absorption and stripping processes in gas purification and chemical separation. Explore the design and operation of absorption and stripping columns, including the use of packing and trays to enhance mass transfer. Learn about the different types of absorption and stripping systems, such as scrubbers, regenerators, and membrane systems, and their advantages and disadvantages.",
        link: '/CHG3111/module4',
        image: 'https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/chg3111_module4_cover.jpg'
    },
    {
        title: 'Liquid - Solid Leaching',
        description: "Explore the use of liquid-solid leaching techniques to extract valuable substances from solid materials such as ores and biomass, cover the different types of leaching systems, including heap leaching, tank leaching, and in-situ leaching, and the factors that affect leaching efficiency. Explore the selection of leaching agents and the design and operation of leaching equipment.",
        link: '/CHG3111/module5',
        image: 'https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/chg3111_module5_cover.jpg'
    },
    {
        title: 'Drying',
        description: "Cover the principles and techniques of drying various materials, such as foods, chemicals, and pharmaceuticals, to remove moisture and improve their stability and shelf life. Explore the different types of drying equipment, including tray dryers, spray dryers, and fluidized bed dryers, and the factors that affect drying efficiency. Learn about the selection of drying parameters, such as temperature and airflow, and how to optimize the drying process for a given material.",
        link: '/CHG3111/module6',
        image: 'https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/chg3111_module6_cover.jpg'
    }
];

const CHG3111Home: React.FC<CHG3111HomeProps> = ({ loggedInUser, setLoggedInUser }) => {
    const moduleList = modules.map((module, index) => (
        <Card key={index} className='mb-3 p-0 mx-4' style={{ width: '29.66%', position: 'relative' }}>
            <Card.Img variant="top" src={module.image} style={{ objectFit: 'cover', width: '100%', height: '200px' }} />
            <Card.Body className='my-3 mx-auto text-center'>
                <div style={{ minHeight: '30px' }} className="d-flex align-items-center justify-content-center">
                    <Card.Title style={{ fontSize: '1.2rem' }}>{module.title}</Card.Title>
                </div>
                <hr />
                <Card.Text className="text-muted" style={{ fontSize: '0.9rem' }}>{module.description}</Card.Text>
            </Card.Body>
            <div className='text-center mb-4'>
                <Link to={module.link}>
                    <button type="button" className="btn btn-primary" style={{ cursor: 'pointer' }}>View Module</button>
                </Link>
            </div>
        </Card>
    ));



    
    return (
        <>
            <div className="jumbotron jumbotron-fluid mb-4" style={{ marginTop: '70px' }}>
                <div className="container text-center">
                    <h1 className="display-1 text-center fw-bold">Unit Operations</h1>
                    <hr className="mb-4" style={{ borderColor: 'black', borderWidth: '2px', marginLeft:'300px', marginRight:'300px' }} />
                </div>

            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <p className="lead text-center">
                            Are you ready to become an expert in Unit Ops? Our course provides a comprehensive overview of the various unit operations commonly used in the chemical process industry. With a visually-rich teaching approach and an engaging simulator for every unit operation, we enable you to easily grasp the impact of each design parameter. You'll leave this course with a deep understanding of the principles and applications of unit operations and be ready to apply them to real-world problems.
                        </p>
                    </div>
                </div>
                <h1 className="text-center mt-4">Modules</h1>
                <hr style={{ borderColor: 'black' }} className='mx-4' />
                <div className="row mt-2">
                    {moduleList}
                </div>
            </div>
        </>
    );


};

export default CHG3111Home;