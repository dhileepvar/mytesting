import React, { useState } from 'react';
import './InputFields.css';

interface InputFieldsProps {
  onAdd: (value: string) => void;
  onSubmit: (value: string, isChecked: boolean) => void;
  onEdit: () => string;
}

const InputFields: React.FC<InputFieldsProps> = ({ onAdd, onSubmit, onEdit }) => {
  const [inputValue, setInputValue] = useState('');
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

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
    onSubmit(inputValue, isChecked);
    setIsSubmitDisabled(!isSubmitDisabled);
    setInputValue('');
  };

  const handleEdit = () => {
    const editStr = onEdit();
    setInputValue(editStr);
  };

  const toggleSubmitButton = () => {
    setIsSubmitDisabled(!isSubmitDisabled);
  };

  return (
    <div className="input-container">
      <input style={{ width: '500px' }}
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
      <button onClick={handleEdit} disabled={isSubmitDisabled}>Edit</button>
      <label>
        <input type="checkbox" disabled={isSubmitDisabled} checked={isChecked} onChange={handleCheckboxChange} />
        Is Reverse!
      </label>
    </div>
  );
};

export default InputFields;
