import React from 'react';

import { Container, ToggleButton, Icon } from './styles';

const Header = () => (
  <Container>
    <div>
      <p>Where in the world?</p>
      <ToggleButton>
        <Icon className="fa fa-moon-o" />
        Dark mode
      </ToggleButton>
    </div>
  </Container>
);

export default Header;
