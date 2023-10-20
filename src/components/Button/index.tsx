import { type FC } from 'react';
import { ButtonStyled } from './styled';
import { type iButtonProps } from '@constants/types/interfaces';

export const Button: FC<iButtonProps> = ({ text, active }) => {
  return <ButtonStyled $active={active}>{text}</ButtonStyled>;
};
