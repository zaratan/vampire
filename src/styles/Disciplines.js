import styled from 'styled-components';

const Disciplines = styled.ul`
  columns: 3;

  @media only screen and (max-width: 600px) {
    columns: 2;
  }
`;

export default Disciplines;
