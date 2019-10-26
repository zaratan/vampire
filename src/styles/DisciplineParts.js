// @flow
import styled, { type StyledComponent } from 'styled-components';

export const Title: StyledComponent<{}, {}, HTMLHeadingElement> = styled.h3`
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

export const Description: StyledComponent<{}, {}, HTMLDivElement> = styled.div`
  font-size: 0.9rem;
`;

export const Item: StyledComponent<{}, {}, HTMLLIElement> = styled.li`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
`;

export const Small: StyledComponent<{}, {}, HTMLElement> = styled.small`
  margin-top: 0.5rem;
  align-self: flex-end;
  max-width: 50%;
  font-size: 0.6rem;
`;

export const Line: StyledComponent<{}, {}, HTMLParagraphElement> = styled.p`
  margin-bottom: 0.3rem;
`;
