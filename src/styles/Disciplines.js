// @flow
import styled, { type StyledComponent } from 'styled-components';

const Disciplines: StyledComponent<{}, {}, HTMLUListElement> = styled.ul`
  columns: 3;

  @media only screen and (max-width: 600px) {
    columns: 2;
  }

  @media only screen and (max-width: 300px) {
    columns: 1;
  }
`;

export default Disciplines;
