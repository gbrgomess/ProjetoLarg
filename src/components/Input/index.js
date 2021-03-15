import React from 'react';

import { Container } from './styles';

function Input({
  label, placeholder, type, value, onChange,
}) {
  return (
    <Container>
      <p>{label}</p>
      <input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </Container>
  );
}

export default Input;
