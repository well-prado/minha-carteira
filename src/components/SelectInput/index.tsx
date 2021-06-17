import React from 'react';

import { Container } from './styles';

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  } [],
}

const SelectInput: React.FC = () => {
  return (
    <Container>
      <select>
        <option value="a">Janeiro</option>
        <option value="b">Fevereiro</option>
        <option value="c">Março</option>
      </select>
    </Container>
  );
}

export default SelectInput;
