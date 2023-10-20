import { styled } from 'styled-components';

export const AsteroidContainer = styled.div``;
export const AsteroidActions = styled.div`
  display: flex;
  gap: 1em;
`;
export const AsteroidInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1em;
`;
export const AsteroidDanger = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3em;
`;
export const AsteroidKilometres = styled.div`
  position: relative;
`;
export const AsteroidKilometresText = styled.p`
  display: block;
  position: relative;
  &:after {
    display: block;
    width: 100%;
    height: 1px;
    background-color: var(--line);
    content: '';
  }
`;
export const Arrows = styled.div`
  &:before {
    content: '';
    border: 5px solid transparent;
    border-right: 5px solid var(--line);
    position: absolute;
    bottom: -4px;
    left: -9px;
  }
  &:after {
    content: '';
    border: 5px solid transparent;
    border-left: 5px solid var(--line);
    position: absolute;
    bottom: -4px;
    right: -9px;
  }
`;
export const AsteroidOrbites = styled.div`
  display: flex;
  flex-direction: column;
`;
