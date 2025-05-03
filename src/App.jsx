import { useState } from 'react';
import Stepper from './components/Stepper.jsx';
import Button from './components/Button.jsx';
import { stepperData } from './assets/data.js';
function App() {
  const [step, setStep] = useState(0);

  // Button Handlers
  const handleNext = () => {
    if (step < stepperData.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handlePervious = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <div className="container mx-auto my-auto flex h-screen max-w-[768px] flex-col items-start justify-between bg-blue-950 p-4">
      {/* setppers number */}
      <div className="flex w-full flex-wrap items-start justify-center gap-4 rounded-md bg-stone-300 px-4 py-2">
        {stepperData.map((item) => (
          <Stepper
            key={item.id}
            number={item.id}
            isActive={step >= item.id - 1 ? true : false}
            title={item.title}
          />
        ))}
      </div>
      {/* Steps data */}
      <div className="my-8 flex h-full w-full items-center justify-center rounded-md border border-stone-400 bg-stone-300 text-stone-500">
        {stepperData[step].description}
      </div>
      {/* Buttons */}
      <div
        className={`flex w-full flex-col items-center gap-2 sm:flex-row ${step > 0 ? 'justify-between' : 'justify-end'} rounded-md bg-stone-300 p-4`}
      >
        {step > 0 && (
          <Button handlePervious={handlePervious} step={step}>
            previous
          </Button>
        )}

        <Button
          handlePervious={handleNext}
          step={step}
          length={stepperData.length - 1}
        >
          {step === stepperData.length - 1 ? 'submit' : 'Next'}
        </Button>
      </div>
    </div>
  );
}

export default App;
