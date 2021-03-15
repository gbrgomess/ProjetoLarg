import React from 'react';

import { Container } from './styles';

function Buttons({ label, onClick }) {
  return (
    <Container>
      <button type="button" onClick={onClick}>{label}</button>

    </Container>
  );
}

export default Buttons;
