import React, { useEffect, useState } from 'react';

import {
  Form
} from './style'
import axios from 'axios';

export default function SelectionInput({arrayOptions, onChange}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios
    .get(`http://localhost:8080/api/menus/restaurant/28`)
    .then((response) => {
      setMenus(response.data.menu);
    });
  
  },[])

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    onChange(event.target.id)
    console.log(event.target.id)
  };
  

  return (
    <Form>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Selecione...</option>
        {
          menus.map(e => (
            <option key={e.id} value={e.id}>{e.title}</option>
          ))
        }
      </select>
    </Form>
  );
}