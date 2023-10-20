import { type FC } from 'react';
import { AsteroidsContainer, AsteroidsProperties, AsteroidProperty, AsteroidsList } from './styled';
import { Asteroid } from '@components/Asteroid';
export const Asteroids: FC = () => {
  return (
    <AsteroidsContainer>
      <h2>Ближайшие подлёты астероидов</h2>
      <AsteroidsProperties>
        <AsteroidProperty className="bold">
          <p>в километрах</p>
        </AsteroidProperty>
        <AsteroidProperty className="underlined">
          <p>в лунных орбитах</p>
        </AsteroidProperty>
      </AsteroidsProperties>
      <AsteroidsList>
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
        <Asteroid />
      </AsteroidsList>
    </AsteroidsContainer>
  );
};
