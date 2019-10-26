// @flow

import { type ComponentType } from 'react';
import styled, { type StyledComponent } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { type ThemeType } from './theme';

export const Icon: StyledComponent<{}, ThemeType, HTMLElement> = styled(
  FontAwesomeIcon
)`
  margin-right: 0.5rem;
  color: ${props => props.theme.highlight1};
  opacity: 1;
  transition: color 0.3s;
  cursor: pointer;
  :hover {
    color: ${props => props.theme.highlight2};
  }
  :focus {
    outline: none;
    box-shadow: none;
    color: ${props => props.theme.highlight2};
  }
`;

export const LinkIcon: StyledComponent<
  {},
  ThemeType,
  ComponentType<HTMLElement>
> = styled(Icon)`
  color: ${props => props.theme.accent};
  font-size: 0.9rem;
  margin: 0 0.5rem;
`;
