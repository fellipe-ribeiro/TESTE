import React from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  Logo,
  TextLogin,
  TextFacebook,
  TextConta,
  ContainerConta,
  TextCriarConta,
} from './styles';

import logoImg from '../../assets/Logo2.png';

import { ButtonLogin, ButtonFacebook } from '../../components/Button';
import { InputAuth } from '../../components/Input';

const Login: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <Logo source={logoImg} />

        <InputAuth name="email" icon="mail" placeholder="E-mail" />

        <InputAuth name="password" icon="lock" placeholder="Senha" />

        <ButtonLogin
          style={{ marginBottom: 20 }}
          onPress={() => {
            console.log('Deu');
          }}
        >
          Login
        </ButtonLogin>

        <TextLogin>Esqueceu sua senha?</TextLogin>

        <TextFacebook>ou faça login com</TextFacebook>

        <ButtonFacebook />

        <ContainerConta>
          <TextConta>Não tem conta? </TextConta>
          <TextCriarConta>Criar conta</TextCriarConta>
        </ContainerConta>
      </Container>
    </>
  );
};

export default Login;
