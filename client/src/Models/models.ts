//classes imports
import CHG1125 from '../img/classes/CHG1125.jpg'
import CHG1371 from '../img/classes/CHG1371.jpg'
import CHG2312 from '../img/classes/CHG2312.jpg'

//Carousel Imports
import slide1 from '../img/carousel/slide1.jpg'
import slide2 from '../img/carousel/slide2.jpg'

//herounitModem Imports
import icon from '../img/logo/icon.png'

//logoModel Imports
//icon alreaedy imported in herounitModel
import logo from '../img/logo/logo.png'


export const classesModel = [
    {
        imageSrc: CHG1125,
        title: 'Chemical Engineering Fundamentals',
        code: 'CHG1125',
        description: 'Chemical Engineering profession in relation to the chemical process industry. System of units, dimensions. Processes, process variables and flowcharts. Material balances: single and multiple units, recycle and bypass, reactive and non-reactive systems. Chemical equilibrium, single-phase and multi-phase systems, solutions, phase diagrams. Introduction to energy balances. Unit operations and instrumentation.'
    },
    {
        imageSrc: CHG1371,
        title: 'Numerical Methods and Engineering Computation in Chemical Engineering',
        code: 'CHG1371',
        description: "Study of advanced techniques in Excel and coding in Visual Basic for Applications (VBA). Numerical methods common to chemical engineering analysis and design, including linear least squares, empirical model building, methods for solving nonlinear equations and systems of equations using programming and Excel Solver, numerical integration and the solution of differential equations."
    },
    {
        imageSrc: CHG2312,
        title: 'Fluid Flow',
        code: 'CHG2312',
        description: "Application of fluid flow principles to the solution of engineering problems. Macroscopic mass, momentum, and energy balances. Newtonian and non-Newtonian fluids, compressible and incompressible fluids. Friction factors and Reynolds numbers for flow in conduits, around submerged objects, in packed beds and porous media. Fluidization. Flow measurement, dimensional analysis."
    },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Introduction to Chemical Process Analysis and Designs',
    //     code: 'CHG2317',
    //     description: "Process analysis and design using mass and energy balances. Thermodynamic data and relationships. Simultaneous mass and energy balances on reactive and non-reactive systems. Mixing and solutions. Balances on transient processes. Introduction to computer-aided process calculations and design."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Heat Transfer Operations',
    //     code: 'CHG2314',
    //     description: "Steady-state heat conduction in solids with and without extended surfaces. Natural and forced convective heat transfer. Transient heat conduction. Heat exchangers. Boiling heat transfer. Condensation. Evaporation. Thermal radiation."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Fundamentals and Applications of Chemical Engineering Thermodynamics',
    //     code: 'CHG2324',
    //     description: "First and second laws of thermodynamics. PVT behaviour of fluids. Equations of state. Thermal chemical effects. Estimation of physical-chemical properties. Applications of thermodynamics to various processes in the field of chemical engineering."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Chemical Reaction Engineering',
    //     code: 'CHG3127',
    //     description: "The principles of reaction engineering, including a systematic approach to the design of reactors housing single and multiple reactions. Techniques for sizing and evaluating the performance of continuous flow and batch reactors under isothermal and non-isothermal conditions, as well as during significant pressure drop. Introduction to catalysis and techniques for determining rate expressions for catalytic reactions."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Advanced Materials in Chemical Engineering',
    //     code: 'CHG3305',
    //     description: "An introduction to the fundamentals of materials science with special emphasis on materials and applications of interest to chemical engineers.  Biocompatibility and biomedical applications.  Corrosion. Conductivity.  Structure/property relationships in polymers, metals, ceramics, semiconducting materials, nanoporous materials and composites."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Unit Operations',
    //     code: 'CHG3111',
    //     description: "Design of industrial equipment for evaporation, drying, humidification, absorption and stripping in plate and packed towers, distillation, liquid-liquid extraction and adsorption"
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Principles of Phase Equilibria and Chemical Reaction Equilibria',
    //     code: 'CHG3326',
    //     description: "Properties of homogeneous mixtures. Models of solution. Fugacity and fugacity coefficient. Activity coefficient. Excess properties. Gibbs-Duhem equation and its applications. Criteria of equilibrium. Vapour-liquid equilibrium at low and high pressures. Methods of prediction. Chemical equilibrium constant, maximum conversion. Multi-reaction equilibria. Selection of operating conditions. Mathematical techniques related to the study of these topics."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Transport Phenomena',
    //     code: 'CHG3316',
    //     description: "Use of fundamental chemical engineering principles to solve problems in momentum, heat and mass transfer applications. Shell momentum balances. Equations of motion, mass and energy balances to determine velocity, temperature and concentration profiles for different geometries for steady-state and transient systems. Evaluation of concentration profiles in the presence of a chemical reaction, with and without a catalyst. Evaluation of mass transfer coefficients."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Process Control ',
    //     code: 'CHG3335',
    //     description: "Fundamental concepts involved in establishing the transient behaviour and control characteristics of processes. Process dynamics. Dynamics of measuring and control elements. Controller characteristics. Dynamics of control loops. Stability criteria. Multiple loop systems. Advanced control system design. Introduction to sampled-data systems."
    // },
    // {
    //     imageSrc: ComingSoon,
    //     title: 'Data Collection and Interpretation',
    //     code: 'CHG3337 ',
    //     description: "ombinatorial analysis; probability and random variables; discrete and continuous densities and distribution functions; expectation and variance; normal (Gaussian), distributions; statistical estimation and hypothesis testing; method of least squares, correlation and regression. Basic principles and techniques for the efficient design of experiments and effective analysis of data."
    // }
];

export const carouselModel = {
    images: [slide1, slide2],
    text: ["Catalyse Your Success.", "Take Control Of Your Learning, One P&ID At A Time."],
    stexts: ["Unleash Your Potential with Our Comprehensive Online Learning Solution", "200+ Practice Questions and Detailed Solutions"]
}

export const herounitModel = {
    header: "Our Mission",
    imageName: icon,
    paragraph: ["At EasyChemE, we recognize the need for innovative and engaging resources in the chemical engineering field. Traditional learning methods in this industry have often been slow to evolve, leaving students without modern and effective tools to master the subject. We are dedicated to revolutionizing the way students learn chemical engineering by providing a comprehensive platform that combines the power of technology with a deep understanding of the students' needs.", "Our learning application is designed by students, for students, bridging the gap between complex concepts and relatable explanations. By shifting away from the conventional textbook approach, we create a graphical-rich learning experience that enhances comprehension and retention. Our content is developed with the learner in mind, ensuring that even the most intricate ideas are presented in an accessible and engaging manner.", "Join us in our mission to modernize chemical engineering education and empower the next generation of engineers to shape the future of this vital industry by equiping them with the knowledge and skills to excel in their studies and beyond."]
}

export const logoModel = {
    icon: icon,
    logo: logo
}