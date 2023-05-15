import 'bootstrap/dist/css/bootstrap.min.css';
import QuestionList from '../../components/QuestionList';
import DistillationSimulator from './Simulators/DistillationColumn';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

interface CHG3111Props {
    loggedInUser: any;
    setLoggedInUser: (user: any) => void;
}

const CHG3111M1: React.FC<CHG3111Props> = ({ loggedInUser, setLoggedInUser }) => {

    const [qImageSource, setqImageSource] = useState('https://placehold.co/960x960');
    const [rectImageSource, setrectImageSource] = useState('https://placehold.co/960x960');
    const [stripImageSource, setstripImageSource] = useState('https://placehold.co/960x960');


    return (
        <div className="container" style={{ marginTop: '70px' }}>
            <div className="col-md-12 mx-auto">

                <h2 className="mt-4 text-center"> What is Distillation?</h2>
                <div className='row my-5'>
                    <div className='col-md-7 d-flex align-items-center justify-content-center'>
                        <p className='lead text-center'>Distillation is a separation process based on differences in the vapor pressures and boiling points of the components in a mixture. It involves heating a liquid mixture to produce vapor and then condensing the vapor into a purified liquid (distillate). The basic principles of distillation rely on the phase equilibrium between the liquid and vapor phases, and the differences in the relative volatilities of the mixture's components.</p>
                    </div>
                    <div className='col-md-5'>
                        <img
                            src="https://placehold.co/960x540" //relative volatility equation
                            alt="Description"
                            className="img-fluid"
                            style={{
                                aspectRatio: '16/9',
                                borderRadius: '5px',
                                border: '1px solid black',
                            }} />
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-5'>
                        <img
                            src="https://placehold.co/960x540"
                            alt="Description"
                            className="img-fluid"
                            style={{
                                aspectRatio: '16/9',
                                borderRadius: '5px',
                                border: '1px solid black',
                            }} />
                    </div>
                    <div className='col-md-7 d-flex align-items-center justify-content-center'>
                        <p className='lead text-center'>The key to understanding distillation is the vapor-liquid equilibrium (VLE). The VLE describes the relationship between the compositions of the vapor and liquid phases of a mixture at a specific temperature and pressure. The VLE is often represented by a phase diagram, which shows the composition of the liquid and vapor phases as a function of temperature and pressure.</p>
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-8 d-flex align-items-center justify-content-center flex-column'>
                        <h4>Parts of a Distillation Column</h4>
                        <div className='text-center lead'>
                            <ul className="list-group my-4">
                                <li className="list-group-item list-group-item-secondary" style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>Feed</li>
                                <li className="list-group-item text-center lead">The feed is the mixture of liquids that is introduced into the distillation column at the stage that best matches its composition. It contains the components that are to be separated.</li>
                            </ul>
                            <ul className="list-group my-4">
                                <li className="list-group-item list-group-item-secondary" style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>Stages</li>
                                <li className="list-group-item">The stages are the individual sections of the distillation column where the separation process occurs. Each stage consists of a tray or packing material that allows vapor and liquid to come into contact and exchange heat and mass. </li>
                            </ul>

                            <ul className="list-group my-4">
                                <li className="list-group-item list-group-item-secondary" style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>Condenser</li>
                                <li className="list-group-item">The condenser is a heat exchanger located at the top of the distillation column that cools the vapor exiting the top of the column and converts it back into a liquid. The condensed liquid is then collected in the reflux drum and returned to the column as reflux or collected as product.</li>
                            </ul>

                            <ul className="list-group my-4">
                                <li className="list-group-item list-group-item-secondary" style={{ fontSize: '20px', fontWeight: '500', textAlign: 'center' }}>Reboiler</li>
                                <li className="list-group-item">The reboiler is a heat exchanger located at the bottom of the distillation column that heats the liquid in the bottom of the column and converts it into vapor. The vapor rises through the column, contacting the liquid on each stage, and becomes enriched in the more volatile components. </li>
                            </ul>
                        </div>
                    </div>
                    <div className='col-md-4 d-flex align-items-center justify-content-center flex-column' style={{ marginTop: '77px' }}>
                        <img
                            src="https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/CHG3111-Module1/CHG3111-Module1-DistillationColumnDiagram.png"
                            alt="Description"
                            className="img-fluid pl-4 py-5"
                            style={{
                                borderRadius: '5px',
                                border: '1px solid black',
                                height: '660px'
                            }}
                        />
                        <p className='fw-bold fs-xs text-center'>Distillation Column Diagram</p>
                    </div>
                </div>

                <h4 className='text-center'>Design Parameters</h4>
                <hr className="my-5" style={{ borderColor: 'black' }} />



                <h4 className='text-center my-4'>McCabbe-Thiele Graphical Method</h4>
                <p className='lead text-center' style={{ marginLeft: '200px', marginRight: '200px' }}>The McCabe-Thiele method is a graphical method used to determine the number of theoretical trays or equilibrium stages required for a specific separation in a distillation column. This method is based on the equilibrium curve, operating line, and the q-line (feed condition). The McCabe-Thiele method involves plotting the equilibrium curve of the two components, the operating line, and the stripping line. By drawing stepwise constructions (staircase) between the operating lines and the equilibrium curve, the number of theoretical trays required for a specific separation can be determined. The intersections between the stepwise constructions and the equilibrium curve represent the composition of the liquid on each theoretical tray.</p>
                <div className='row my-5'>
                    <div className='col-md-6'>
                        <img
                            src="https://placehold.co/960x960" //diagram w azotrope and VLE
                            alt="Description"
                            className="img-fluid"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '5px',
                                border: '1px solid black',
                            }} />
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-center flex-column' style={{ minHeight: '100%' }}>
                        <h4 className='text-center'>Step 1: Draw the Azeotropic and VLE Lines</h4>
                        <p className='lead text-center'>
                            A mixture is considered azeotropic when its composition in the liquid phase is equal to that in the vapor phase. Azeotropes are essential in distillation processes because they signify the limits of separation achievable through conventional distillation.
                        </p>
                        <p className='lead text-center'>
                            The azeotropic line follows the y=x equation, as this represents the point where the two compositions are equal. In a non-azeotropic system, the liquid and vapor compositions will always be different, and the y=x line will serve as a reference for determining the actual separation achievable through distillation. <strong> The further the VLE line from the azeotropic, line more the components properties differ, and the easier the separation. </strong>
                        </p>
                        <p className='lead text-center'>
                            The Vapor-Liquid Equilibrium (VLE) line represents the relationship between liquid and vapor compositions when the mixture reaches equilibrium. This line is a crucial aspect of the McCabe-Thiele method, as it helps in determining the number of equilibrium stages required for the desired separation. The VLE line is typically obtained by fitting a polynomial curve to a set of VLE data points, which are experimentally determined or calculated using thermodynamic models.
                        </p>
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-6 d-flex align-items-center justify-content-center flex-column' style={{ minHeight: '100%' }}>
                        <h4 className='text-center'>Step 2: Add the q Line Using Feed Conditions</h4>
                        <p className='lead text-center'>
                            The q line is an essential component of the McCabe-Thiele method, representing the feed condition in the distillation process. The feed can be a saturated liquid, saturated vapor, or a mixture of both liquid and vapor phases. The q value determines the slope of the q line and is defined as the fraction of liquid in the feed mixture.
                        </p>
                        <p className='lead text-center'>
                            A q value of 1 indicates a saturated liquid feed, while a q value of 0 represents a saturated vapor feed. For a feed mixture with both liquid and vapor phases, the q value ranges between 0 and 1. The q line starts at the feed composition on the x-axis (xf) and extends to the intersection with the VLE line. <strong> The q line provides insight into the feed compostion and temperature</strong>
                        </p>
                    </div>
                    <div className='col-md-6 position-relative'>
                        <img
                            src={qImageSource}
                            alt="Description"
                            className="img-fluid"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '5px',
                                border: '1px solid black',
                            }} />
                        <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-center">
                            <Form.Check
                                type="radio"
                                id="image1"
                                value="https://placehold.co/960x960" // diagram w/ azeotrope and VLE
                                checked={qImageSource === 'https://placehold.co/960x960'}
                                onClick={() => setqImageSource('https://placehold.co/960x960')}
                                label=""
                                className="me-2"
                            />
                            <Form.Check
                                type="radio"
                                id="image2"
                                value="https://placehold.co/960x960/alternate" // alternate diagram
                                checked={qImageSource === 'https://placehold.co/960x960/white/blue'}
                                onClick={() => setqImageSource('https://placehold.co/960x960/white/blue')}
                                label=""
                                className="ms-2"
                            />
                        </div>
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-6 position-relative'>
                        <img
                            src={rectImageSource}
                            alt="Description"
                            className="img-fluid"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '5px',
                                border: '1px solid black',
                            }} />
                        <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-center">
                            <Form.Check
                                type="radio"
                                id="image1"
                                value="https://placehold.co/960x960" // diagram w/ azeotrope and VLE
                                checked={rectImageSource === 'https://placehold.co/960x960'}
                                onClick={() => setrectImageSource('https://placehold.co/960x960')}
                                label=""
                                className="me-2"
                            />
                            <Form.Check
                                type="radio"
                                id="image2"
                                value="https://placehold.co/960x960/alternate" // alternate diagram
                                checked={rectImageSource === 'https://placehold.co/960x960/white/blue'}
                                onClick={() => setrectImageSource('https://placehold.co/960x960/white/blue')}
                                label=""
                                className="ms-2"
                            />
                        </div>
                    </div>
                    <div className='col-md-6 d-flex align-items-center justify-content-center flex-column' style={{ minHeight: '100%' }}>
                        <h4 className='text-center'>Step 3: Draw the Rectifying Operating Line</h4>
                        <p className='lead text-center'>
                            The rectifying operating line represents the relationship between liquid and vapor compositions in the rectifying section of the distillation column where vapor moves upward and is enriched with the more volatile component, while the liquid flows downward and becomes richer in the less volatile component.
                        </p>
                        <p className='lead text-center'>
                            The slope of this line depends on the reflux ratio, which is the ratio of the liquid returned to the column as reflux to the distillate product, and <strong> will always intersect the azeoptrpic line at the distillate compostion value </strong>
                        </p>
                        <p className='lead text-center'>
                            Given that the reflux ratio is essentially a mass balance, the equation for the rectifying line can also be expressed in terms of liquid and vapor flow rates. This alternative representation can prove useful in determining column parameters, as the slope and y-intercept can be correlated to the flow rates.
                        </p>
                    </div>
                </div>

                <div className='row my-5'>
                    <div className='col-md-6 d-flex align-items-center justify-content-center flex-column' style={{ minHeight: '100%' }}>
                        <h4 className='text-center'>Step 4: Connect Stripping Line to Pinch Point</h4>
                        <p className='lead text-center'>
                            In the stripping section, the primary objective is to strip the more volatile component from the liquid as it flows downward. It is located below the feed entry point of the distillation column, and its purpose is to reduce the concentration of the more volatile component in the bottom product.
                        </p>
                        <p className='lead text-center'>
                        To draw the stripping line, begin by locating the bottoms composition on the azeotropic line, and connect it to the point where the q-line intersects the rectifying line. This intersection is referred to as the pinch point, signifying the transition between the two sections and representing the tray at which the feed is introduced to the distillation column.
                        </p>
                        <p className='lead text-center'>
                        
                        </p>
                    </div>
                    <div className='col-md-6 position-relative'>
                        <img
                            src={stripImageSource}
                            alt="Description"
                            className="img-fluid"
                            style={{
                                aspectRatio: '1/1',
                                borderRadius: '5px',
                                border: '1px solid black',
                            }} />
                        <div className="position-absolute bottom-0 start-0 end-0 d-flex justify-content-center">
                            <Form.Check
                                type="radio"
                                id="image1"
                                value="https://placehold.co/960x960" // diagram w/ azeotrope and VLE
                                checked={stripImageSource === 'https://placehold.co/960x960'}
                                onClick={() => setstripImageSource('https://placehold.co/960x960')}
                                label=""
                                className="me-2"
                            />
                            <Form.Check
                                type="radio"
                                id="image2"
                                value="https://placehold.co/960x960/alternate" // alternate diagram
                                checked={stripImageSource === 'https://placehold.co/960x960/white/blue'}
                                onClick={() => setstripImageSource('https://placehold.co/960x960/white/blue')}
                                label=""
                                className="ms-2"
                            />
                        </div>
                    </div>
                </div>


                <h2 className="mt-4 text-center">Distillation Simulator</h2>
                <div className="col-12">
                    <DistillationSimulator></DistillationSimulator>
                </div>
                <h2 className="t-4 text-center">Take-Aways</h2>

                <div className="col-md-12 my-4">
                    <div className="row">
                        <div className="col-md-6 my-5">
                            <img
                                src="https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/gifs/CHG3111_module1_qGif.gif"
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    aspectRatio: '16/9',
                                    borderRadius: '5px',
                                    border: '2px solid black',
                                }}
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-secondary" style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>q Value</li>
                                    <li className="list-group-item">When the q value increases, which corresponds to a decrease in temperature, the q-line slope gets closer to the azeotropic line slope.</li>
                                    <li className="list-group-item">As the q value changes, the pinch point moves along the operating line.</li>
                                    <li className="list-group-item">A larger q value increases the gap between the VLE line and the stripping line, resulting in fewer stages needed for the process.</li>
                                    <li className="list-group-item">However, keep in mind that a higher q value also leads to a higher heat load on the heat exchanger before the column, which may increase operational costs.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <hr style={{ borderColor: 'black' }} className='' />
                <div className="col-md-12 my-5">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-secondary" style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>Reflux Ratio</li>
                                    <li className="list-group-item">A higher reflux ratio, which means more distillate is recycled back into the column, results in a shorter q-line.</li>
                                    <li className="list-group-item">When the reflux ratio changes, the pinch point shifts along the q-line.</li>
                                    <li className="list-group-item">A higher reflux ratio reduces the number of necessary stages due to the increased distance between the VLE and the operating and stripping lines.</li>
                                    <li className="list-group-item">Note that a higher reflux ratio also leads to less distillate being produced, as more is being recycled. Although the process becomes more stage-efficient, the overall production decreases.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img
                                src="https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/gifs/CHG3111_module1_refluxGif.gif"
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    aspectRatio: '16/9',
                                    borderRadius: '5px',
                                    border: '2px solid black',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <hr style={{ borderColor: 'black' }} className='' />
                <div className="col-md-12 my-5">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                src="https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/gifs/CHG3111_module1_feedGif.gif"
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    aspectRatio: '16/9',
                                    borderRadius: '5px',
                                    border: '2px solid black',
                                }}
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-secondary" style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>Feed Composition</li>
                                    <li className="list-group-item">As the desired product composition increases, the q-line shifts towards the top right, which is expected since the x and y axes represent the liquid and vapor compositions of the desired product.</li>
                                    <li className="list-group-item">Altering the feed composition moves the pinch point along the operating line without changing the q-line slope.</li>
                                    <li className="list-group-item">A higher starting composition reduces the number of necessary stages, as it is closer to the target composition (the distillate composition).</li>
                                    <li className="list-group-item">Feed composition is not an optimizable parameter during the design process, as the need for a distillation unit arises from changing the feed composition in the first place.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <hr style={{ borderColor: 'black' }} className='' />
                <div className="col-md-12 my-5">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-secondary" style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>Distillate Composition</li>
                                    <li className="list-group-item">An increase in distillate composition moves the insertion point of the operating line on the azeotropic line further up.</li>
                                    <li className="list-group-item">Distillate composition moves the pinch point along the line in a similar way to the reflux ratio but does so by shifting the operating line rather than changing its slope.</li>
                                    <li className="list-group-item">A higher distillate composition necessitates more stages, as the gap between the VLE line and the operating line decreases, and the operating line insertion point moves further up.</li>
                                    <li className="list-group-item">Generally, the distillate composition is a set value rather than an optimized one, as product purity is specified and not subject to change during the process.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <img
                                src="https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/gifs/CHG3111_module1_distillateGif.gif"
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    aspectRatio: '16/9',
                                    borderRadius: '5px',
                                    border: '2px solid black',
                                }}
                            />
                        </div>
                    </div>
                </div>
                <hr style={{ borderColor: 'black' }} className='' />
                <div className="col-md-12 my-5">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <img
                                src="https://d1te1vd0zan34p.cloudfront.net/classes/chg3111/gifs/CHG3111_module1_bottomsGif.gif"
                                alt="Description"
                                className="img-fluid"
                                style={{
                                    aspectRatio: '16/9',
                                    borderRadius: '5px',
                                    border: '2px solid black',
                                }}
                            />
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center">
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <ul className="list-group">
                                    <li className="list-group-item list-group-item-secondary" style={{ fontSize: '24px', fontWeight: '600', textAlign: 'center' }}>Bottoms Composition</li>
                                    <li className="list-group-item">Similar to the distillate composition but with the stripping line, an increase in bottoms composition moves the insertion point further up.</li>
                                    <li className="list-group-item">Varying the bottoms composition has no effect on the pinch point or the operating line, only the stripping line is affected.</li>
                                    <li className="list-group-item">A higher bottoms composition requires fewer stages, as the distance between the VLE line and the stripping line increases and the insertion point gets closer to the feed.</li>
                                    <li className="list-group-item">While the diagram may suggest that there's no reason not to increase the bottoms composition, it doesn't show the resulting decrease in the production of the purified product.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <h2 className="mb-4 text-center" style={{ marginTop: '100px' }}>Practice Questions</h2>
                <hr style={{ borderColor: 'black' }} className='' />
                <QuestionList courseCode={'3111'} courseModule={'1'} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
            </div>
        </div>
    );
}

// https://d1te1vd0zan34p.cloudfront.net



export default CHG3111M1;
