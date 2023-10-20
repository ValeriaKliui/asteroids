import { styled } from 'styled-components';

export const CartContainer = styled.div`
  background-color: var(--cart);
  padding: 1em;
  border-radius: 1em;
  display: flex;
  width: 100px;
  max-height: 120px;
  justify-content: center;
  align-items: flex-start;
  align-content: flex-start;
  gap: 1em;
  flex-wrap: wrap;
  position: sticky;
  height: 100vh;
  top: 10%;
`;
export const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;
