import { styled } from 'styled-components';

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 1.3fr 1fr 0.7fr;
  gap: 4em;
  height: 100%;
`;
export const PhotoContainer = styled.div`
  position: sticky;
  height: 100vh;
  top: 10%;
`;
export const Photo = styled.img`
  object-fit: contain;
  width: 100%;
`;
