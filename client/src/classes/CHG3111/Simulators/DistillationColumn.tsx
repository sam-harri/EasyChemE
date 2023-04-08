import React, { useState, useEffect, useRef } from 'react';
import Plot from 'react-plotly.js';



interface DistillationSimulatorProps {
}

const DistillationSimulator: React.FC = () => {
    const [data, setData] = useState<any[]>([]);
    const [qValue, setQValue] = useState<number>(0.5);
    const [refluxRatio, setRefluxRatio] = useState<number>(2);
    const [feedComposition, setFeedComposition] = useState<number>(0.5);
    const [distillateComposition, setDistillateComposition] = useState<number>(0.98);
    const [bottomsComposition, setBottomsComposition] = useState<number>(0.03);
    const [error, setError] = useState<string>('');

    const inputRangeRef = useRef<HTMLDivElement>(null);
    const [inputRangeWidth, setInputRangeWidth] = useState<number>(0);

    useEffect(() => {
        if (inputRangeRef.current) {
            setInputRangeWidth(inputRangeRef.current.clientWidth);
        }
    }, []);

    // const animateSlider = async () => {

    //     const sliderId = 'bottomsComposition';
    //     const slider = designParameters.find((p) => p.id === sliderId);
    //     if (!slider) return;

    //     const startValue = 0.02;
    //     const endValue = 0.49;
    //     const duration = 800; // 2 seconds
    //     const frameInterval = 10; // Capture a frame every 50 ms

    //     const steps = Math.ceil(duration / frameInterval);
    //     const stepSize = (endValue - startValue) / steps;

    //     for (let i = 0; i <= steps; i++) {
    //         const currentValue = startValue + i * stepSize;
    //         slider.onChange(currentValue);

    //         await new Promise((resolve) => setTimeout(resolve, frameInterval));
    //     }

    //     // Reverse animation
    //     for (let i = steps; i >= 0; i--) {
    //         const currentValue = startValue + i * stepSize;
    //         slider.onChange(currentValue);
    //         await new Promise((resolve) => setTimeout(resolve, frameInterval));
    //     }
    // };

    const designParameters = [
        {
            id: 'qValue',
            label: 'qValue',
            min: 0,
            max: 3,
            step: 0.01,
            value: qValue,
            onChange: (value: number) => setQValue(value)
        },
        {
            id: 'refluxRatio',
            label: 'Reflux Ratio',
            min: 0,
            max: 5,
            step: 0.01,
            value: refluxRatio,
            onChange: (value: number) => setRefluxRatio(value)
        },
        {
            id: 'feedComposition',
            label: 'Feed Composition',
            min: 0,
            max: 1,
            step: 0.01,
            value: feedComposition,
            onChange: (value: number) => setFeedComposition(value)
        },
        {
            id: 'distillateComposition',
            label: 'Distillate Composition',
            min: 0,
            max: 1,
            step: 0.01,
            value: distillateComposition,
            onChange: (value: number) => setDistillateComposition(value)
        },
        {
            id: 'bottomsComposition',
            label: 'Bottoms Composition',
            min: 0,
            max: 1,
            step: 0.01,
            value: bottomsComposition,
            onChange: (value: number) => setBottomsComposition(value)
        }
    ]

    const unchangingData = [
        {
            x: Array.from({ length: 101 }, (_, i) => i / 100),
            y: Array.from({ length: 101 }, (_, i) => Math.pow(i / 100, 3) - 2.8 * Math.pow(i / 100, 2) + 2.8 * (i / 100)),
            mode: 'lines',
            name: 'VLE'
        },
        {
            x: [0, 1],
            y: [0, 1],
            mode: 'lines',
            name: 'Azeotropic Line'
        }
    ]

    const findIntersection = ([m1, b1]: [number, number], [m2, b2]: [number, number]): [number, number] => [(b2 - b1) / (m1 - m2), m1 * (b2 - b1) / (m1 - m2) + b1];


    useEffect(() => {
        setError('');
        if (feedComposition > distillateComposition) { setError("Feed Composition Can't Be Greater Than Distillate Composition") };
        if (feedComposition < bottomsComposition) { setError("Feed Composition Cant Be Less Than Distillate Composition") };

        if (qValue == 1) { setQValue(0.999) };
        const rectifying: [number, number] = [refluxRatio / (refluxRatio + 1), distillateComposition / (refluxRatio + 1)];
        const q: [number, number] = [qValue / (qValue - 1), -feedComposition / (qValue - 1)];
        const intersection: [number, number] = findIntersection(rectifying, q);

        if ((Math.pow(intersection[0], 3) - 2.8 * Math.pow(intersection[0], 2) + 2.8 * (intersection[0])) < intersection[1]) { setError("Pinch Point Can't Be Above VLE Line") };

        const updatedData = [
            {
                x: [distillateComposition, intersection[0]],
                y: [distillateComposition, intersection[1]],
                mode: 'lines',
                name: 'Operating Line'
            },
            {
                x: [bottomsComposition, intersection[0]],
                y: [bottomsComposition, intersection[1]],
                mode: 'lines',
                name: 'Stripping Line'
            },
            {
                x: [feedComposition, intersection[0]],
                y: [feedComposition, intersection[1]],
                mode: 'lines',
                name: 'qLine'
            }
        ];

        setData(updatedData);
    }, [qValue, refluxRatio, distillateComposition, bottomsComposition, feedComposition]);

    return (
        <div className="container mb-5" style={{ position: 'relative' }}>
            <div className="row">
                <div className="col-9" style={{ marginLeft: '-80px' }}>
                    <Plot
                        data={[...unchangingData, ...data]}
                        layout={{
                            width: 1000,
                            height: 800,
                            xaxis: {
                                range: [0, 1],
                                showgrid: false,
                                title: 'Liquid Composition',
                            },
                            yaxis: {
                                range: [0, 1],
                                showgrid: false,
                                title: 'Vapor Composition',
                            },
                            legend: {
                                x: 0,
                                y: 1,
                                xanchor: 'left',
                                yanchor: 'top',
                            },
                        }}
                    />
                </div>
                <div className='col-3 d-flex flex-column justify-content-center' style={{ marginLeft: '80px' }}>
                    <div className='text-center' style={{ minHeight: '4rem' }}>
                        <small style={{ fontSize: "1.2rem" }} className={error ? "text-danger fw-bold" : ""}>
                            {error || "\u00A0"}
                        </small>
                    </div>
                    <div ref={inputRangeRef}>
                        {designParameters.map(({ id, label, min, max, step, value, onChange }) => (
                            <div key={id} className="row align-items-center my-4">
                                <div className="col-12 text-center">
                                    <label htmlFor={id} className="form-label lead">
                                        {label}: <kbd>{value.toFixed(2)}</kbd>
                                    </label>
                                </div>
                                <div className="col-12 my-2">
                                    <input
                                        type="range"
                                        className="form-range"
                                        id={id}
                                        min={min}
                                        max={max}
                                        step={step}
                                        value={value}
                                        onChange={(e) => onChange(parseFloat(e.target.value))}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* <button
                className="btn btn-primary mb-3"
                onClick={animateSlider}
            >
                Animate and Create GIF
            </button> */}
        </div>



    );
};

export default DistillationSimulator;

