import { type FC } from 'react';
import { MainContainer, PhotoContainer, Photo } from './styled';
import earth from '@assets/img/earth.png';
import { Cart } from '@components/Cart';
import { Asteroids } from '@components/Asteroids';
export const Main: FC = () => {
  return (
    <MainContainer>
      <PhotoContainer>
        <Photo src={earth} alt="earth"></Photo>
      </PhotoContainer>
      <Asteroids />
      <Cart />
    </MainContainer>
  );
};
