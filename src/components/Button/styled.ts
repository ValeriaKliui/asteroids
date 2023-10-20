import { styled } from 'styled-components';

export const ButtonStyled = styled.button<{ $active?: boolean }>`
  background-color: ${(props) =>
    props.$active !== null && props.$active === true ? 'var(--active-button)' : 'var(--primary)'};
  color: ${(props) => (props.$active !== null && props.$active === true ? 'var(--primary)' : 'inherit')};
  border: none;
  border-radius: 2em;
  padding: 0.5em 1em;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.2s ease all;
  &:hover {
    background-color: var(--active-button);
    color: var(--primary);
    transform: scale(1.01);
  }
`;
