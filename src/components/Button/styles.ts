import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const ContainerLogin = styled(RectButton)`
  width: 80%;
  height: 56px;

  border-radius: 35px;

  justify-content: center;
  align-items: center;

  background: #fc6011;
`;

export const ButtonTextLogin = styled.Text`
  font-family: 'metropolis.semi-bold';
  color: #ffffff;
  font-size: 16px;
`;

export const ContainerConta = styled(RectButton)`
  border-radius: 35px;
  width: 80%;
`;

export const BorderConta = styled.View`
  border-width: 2px;
  border-color: #fc6011;
  border-radius: 35px;

  height: 56px;

  justify-content: center;
  align-items: center;

  background: #ffffff;
`;

export const ButtonTextConta = styled.Text`
  font-family: 'metropolis.semi-bold';
  color: #fc6011;
  font-size: 16px;
`;

export const ContainerFacebook = styled(RectButton)`
  width: 80%;
  height: 55px;

  border-radius: 35px;

  justify-content: center;
  align-items: center;
`;

export const ButtonImageFacebook = styled.Image``;
