import { type FC } from 'react';
import { CartContainer, CartInfo } from './styled';
import { Button } from '@components/Button';

export const Cart: FC = () => {
  return (
    <CartContainer>
      <CartInfo>
        <h3>Корзина</h3>
        <p>2 астероида</p>
      </CartInfo>
      <Button text="отправить" />
    </CartContainer>
  );
};
