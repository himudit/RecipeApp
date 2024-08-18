// import React from 'react'

// function RecipeAi() {
//     return (
//         <button
//             className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
//         >
//             Button
//         </button>
//     )
// }

// export default RecipeAi

import React, { useState } from 'react';
// Step1 Component
const Step1 = ({ nextStep }) => {
    return (
        <div>
            <h1 className='text-white'>Step 1</h1>

            <h2 className='text-white'>Choose your primary protein:</h2>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Beef
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Chicken
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Fish
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Pork
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Turkey
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Vegetarian
            </button>

            {/* next line */}
            <h2 className="text-white">Select a nutritional style:</h2>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Healthy
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Hearty
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Low Carb
            </button>
            <button
                className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
            >
                Whole Foods
            </button>
            {/* next line */}
            <h2 className="text-white">Pick a cuisine:</h2>

            {/* submission */}
            <button className="px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
                onClick={nextStep}>generate Suggestions</button>
        </div>
    );
};

// Step2 Component
const Step2 = ({ nextStep, prevStep }) => {
    return (
        <div>
            <h2>Step 2</h2>
            <input type="text" placeholder="Step 2 Input" />
            <button onClick={prevStep}>Back</button>
            <button onClick={nextStep}>Next</button>
        </div>
    );
};

// Step3 Component
const Step3 = ({ prevStep }) => {
    return (
        <div>
            <h2>Step 3</h2>
            <input type="text" placeholder="Step 3 Input" />
            <button onClick={prevStep}>Back</button>
            <button onClick={() => alert('Form Submitted!')}>Submit</button>
        </div>
    );
};

// Main MultiStepForm Component
const RecipeAi = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    return (
        <div>
            {step === 1 && <Step1 nextStep={nextStep} />}
            {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
            {step === 3 && <Step3 prevStep={prevStep} />}
        </div>
    );
};

export default RecipeAi;
