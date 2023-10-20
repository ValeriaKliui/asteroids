import { type FC } from 'react';
import {
  AsteroidContainer,
  AsteroidActions,
  AsteroidDanger,
  AsteroidInfo,
  AsteroidKilometres,
  AsteroidKilometresText,
  Arrows,
  AsteroidOrbites,
} from './styled';
import { Button } from '@components/Button';
import Danger from '@assets/img/danger.svg';
import asteroidPic from '@assets/img/asteroid.png';

export const Asteroid: FC = () => {
  return (
    <AsteroidContainer>
      <h2>12 сент 2023</h2>
      <AsteroidInfo>
        <AsteroidKilometres>
          <AsteroidKilometresText>5 652 334 км</AsteroidKilometresText>
          <Arrows />
        </AsteroidKilometres>
        <img src={asteroidPic} alt="asteroid" />
        <AsteroidOrbites>
          <p className={['bold', 'underlined'].join(' ')}>2021 FQ</p>
          <p>Ø 234 м</p>
        </AsteroidOrbites>
      </AsteroidInfo>
      <AsteroidActions>
        <Button text="заказать" active={true} />
        <AsteroidDanger>
          <Danger />
          <p>Опасен</p>
        </AsteroidDanger>
      </AsteroidActions>
    </AsteroidContainer>
  );
};
