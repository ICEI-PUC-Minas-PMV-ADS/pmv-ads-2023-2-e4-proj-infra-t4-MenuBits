import React, { useState } from 'react';

import {
  Form
} from './style'

export default function SelectionInput() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <Form>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Cardápio X...</option>
        <option value="option1">Cardápio Principal</option>
        <option value="option2">Option 2</option>
      </select>
    </Form>
  );
}