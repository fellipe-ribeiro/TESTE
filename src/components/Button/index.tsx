import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import {
  ContainerLogin,
  ButtonTextLogin,
  BorderConta,
  ContainerConta,
  ButtonTextConta,
} from './styles';

interface ButtonProps extends RectButtonProperties {
  children: string;
}

export const ButtonLogin: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ContainerLogin {...rest}>
    <ButtonTextLogin>{children}</ButtonTextLogin>
  </ContainerLogin>
);

export const ButtonConta: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <ContainerConta {...rest}>
    <BorderConta>
      <ButtonTextConta>{children}</ButtonTextConta>
    </BorderConta>
  </ContainerConta>
);
