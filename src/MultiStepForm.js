import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import WelcomePage from './WelcomePage'; 

function MultiStepForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const nextStep = () => setStep(step + 1);

  const handleChange = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleSubmit = () => {
    if (step === 2) {
      nextStep();
    }
  };

  return (
    <div>
      {step === 1 && <Step1 onNext={nextStep} formData={formData} setFormData={handleChange} />}
      {step === 2 && <Step2 onNext={nextStep} formData={formData} setFormData={handleChange} />}
      {step === 3 && <WelcomePage />}
    </div>
  );
}

export default MultiStepForm;

