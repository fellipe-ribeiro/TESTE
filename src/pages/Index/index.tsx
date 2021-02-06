import React from 'react';

import { Container, ImageTop, Logo, Descricao } from './styles';

import topImg from '../../assets/Organe_top_shape.png';
import logoImg from '../../assets/Logo.png';

import { ButtonLogin, ButtonConta } from '../../components/Button';

const Index: React.FC = () => {
  return (
    <>
      <ImageTop source={topImg} />
      <Container>
        <Logo source={logoImg} />
        <Descricao>
          Descubra os melhores alimentos em mais de 1.000 restaurantes e entrega
          rápida à sua porta
        </Descricao>

        <ButtonLogin
          style={{ marginBottom: 20 }}
          onPress={() => {
            console.log('Deu');
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
