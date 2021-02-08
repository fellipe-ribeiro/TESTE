import React from 'react';
import { StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, ImageTop, Logo, Descricao } from './styles';

import topImg from '../../assets/Organe_top_shape.png';
import logoImg from '../../assets/Logo.png';

import { ButtonLogin, ButtonConta } from '../../components/Button';

const Index: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageTop source={topImg} />
      <Container>
        <Logo source={logoImg} />
        <Descricao>
          Descubra os melhores alimentos em mais de{'\n'} 1.000 restaurantes e
          entrega rápida à sua porta
        </Descricao>

        <ButtonLogin
          style={{ marginBottom: 20 }}
          onPress={() => {
            navigation.navigate('Login');
          }}
        >
          Login
        </ButtonLogin>
        <ButtonConta
          onPress={() => {
            console.log('Deu');
          }}
        >
          Criar Conta
        </ButtonConta>
      </Container>
    </>
  );
};

export default Index;
