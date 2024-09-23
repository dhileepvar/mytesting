import React, { useState } from 'react';
import './InputFields.css';

interface InputFieldsProps {
  onAdd: (value: string) => void;
  onSubmit: (value: string) => void;
}

const InputFields: React.FC<InputFieldsProps> = ({ onAdd, onSubmit }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isSubmitDisabled || /^(3[0-6]|[0-2]?[0-9])?$/.test(value)) {
      setInputValue(value);
    }
  };

  const handleAdd = () => {
    onAdd(inputValue);
    setInputValue('');
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
    setInputValue('');
  };

  const toggleSubmitButton = () => {
    setIsSubmitDisabled(!isSubmitDisabled);
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter values with space starts with latest"
        value={inputValue}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
      <button onClick={handleSubmit} disabled={isSubmitDisabled}>Submit</button>
      <button onClick={toggleSubmitButton}>
        {isSubmitDisabled ? 'Enable Submit' : 'Disable Submit'}
      </button>
    </div>
  );
};

export default InputFields;
