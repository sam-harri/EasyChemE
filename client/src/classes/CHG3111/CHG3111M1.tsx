import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from '../../components/QuestionList';
import DistillationSimulator from './Simulators/DistillationColumn';

interface CHG3111Props {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG3111M1: React.FC<CHG3111Props> = ({ loggedInUser, setLoggedInUser }) => {
    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <h1 className="pt-5">Module: Distillation Columns</h1>
            <h2>Introduction</h2>
            <p>
                In this module, we will cover the fundamentals of distillation columns used in chemical engineering. Distillation columns are essential for separating mixtures based on differences in their boiling points. Understanding their design and operation is crucial for efficient separation processes in the industry.
            </p>
            <h2>Distillation Columns</h2>
            <p>
                A distillation column is a vertical vessel filled with trays or packing materials that facilitate the separation of a mixture of liquids with different boiling points. In chemical engineering, two primary types of distillation columns are used: tray columns and packed columns. The design and operation of these columns are based on the principles of vapor-liquid equilibrium, mass transfer, and heat transfer.
            </p>
            <h2>Tray Columns</h2>
            <p>
                Tray columns consist of a series of horizontal trays or plates that provide contact between the vapor and liquid phases. The most common types of trays include:
            </p>
            <ul className="list-unstyled">
                <li>- Sieve trays</li>
                <li>- Bubble cap trays</li>
                <li>- Valve trays</li>
            </ul>
            <p>
                The vapor rises through the column, contacting the liquid on the trays, and exchanging mass and heat, causing the components with lower boiling points to become more concentrated in the vapor phase, while those with higher boiling points concentrate in the liquid phase.
            </p>
            <h2>Packed Columns</h2>
            <p>
                Packed columns are filled with packing materials, such as Raschig rings, Pall rings, or structured packings, which provide a large surface area for vapor-liquid contact. Packed columns are often used for applications requiring low pressure drop, high efficiency, or when dealing with fouling or corrosive fluids.
            </p>
            <h2>Column Operation</h2>
            <p>
                Proper operation of a distillation column involves controlling several parameters, such as reflux ratio, feed location, and reboiler duty. These parameters influence the efficiency of the separation process and the purity of the products.
            </p>
            <DistillationSimulator></DistillationSimulator>
            <QuestionList courseCode={'3111'} courseModule={'1'} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
        </div>
    );
};

export default CHG3111M1;
