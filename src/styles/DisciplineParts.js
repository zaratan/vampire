import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 0.5rem;

  @media (pointer: fine) and (hover: hover) {
    .link {
      transition: display 0.3s ease-in-out;
      display: none;
    }

    :hover .link {
      display: inline;
    }
  }
`;

export const Description = styled.div`
  font-size: 0.9rem;
`;

export const Item = styled.li`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Small = styled.small`
  margin-top: 0.5rem;
  align-self: flex-end;
  max-width: 50%;
  font-size: 0.6rem;
`;

export const Line = styled.p`
  margin-bottom: 0.3rem;
`;
