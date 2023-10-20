import { styled } from 'styled-components';

export const AsteroidsContainer = styled.div``;
export const AsteroidsProperties = styled.div`
  display: flex;
  align-items: center;
  > * {
    &:last-child {
      border: none;
      padding-right: 0;
    }
    &:first-child {
      padding-left: 0;
    }
  }
`;
export const AsteroidProperty = styled.div`
  padding: 0 0.7em;
  border-right: 1px solid white;
`;
export const AsteroidsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;
