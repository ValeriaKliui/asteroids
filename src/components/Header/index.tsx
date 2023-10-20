import { type FC } from 'react';
import { HeaderContainer, Logo, Info } from './styled';
export const Header: FC = () => {
  return (
    <HeaderContainer>
      <Logo>armageddon 2023</Logo>
      <Info>ООО “Команда им. Б. Уиллиса”.</Info>
      <Info>Взрываем астероиды с 1998 года.</Info>
    </HeaderContainer>
  );
};
