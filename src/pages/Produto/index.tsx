import React from 'react';
import { StatusBar, FlatList } from 'react-native';
import IconPicker from 'react-native-vector-icons/Feather';

import {
  Container,
  ContainerRadius,
  TopImageContainer,
  TopImage,
  TituloProdutoContainer,
  TituloProdutotext,
  BackIcon,
  CartIcon,
  StarIconContainer,
  StarIcon,
  StarIconWhite,
  RatingText,
  PriceText,
  PersonPrice,
  DescriptionTitle,
  DescriptionText,
  LineBorder,
  OrderText,
  PickerCustomContainer,
  PickerCustom,
  PickerCustomText,
  IconPickerConatainer,
  PortionContainer,
  PortionText,
  PortionBackagroundSelectorSubtract,
  PortionIconSelectorSubtract,
  PortionBackagroundSelectorNumber,
  PortionSelectorNumberText,
  PortionBackagroundSelectorSum,
  PortionIconSelectorSum,
  TotalPriceContainer,
  TotalPriceLeftBackground,
  TotalPriceMiddleBackground,
  TotalPriceValorTitle,
  TotalPriceValorValue,
  TotalPriceCartBackground,
  TotalPriceCartIcon,
  TotalPriceCartText,
  TotalPriceCartRightBackground,
  TotalPriceRightCartIcon,
  HeartContainer,
  HeartIcon,
  BottomNavigationContainer,
  BottomNavigationBackground,
  BottomNavigationBackgroundLeft,
  BottomNavigationBackgroundRight,
  BottomNavigationGradient,
  BottomNavigationGradientCircle,
  BottomNavigationHomeBackground,
  BottomNavigationHomeIcon,
  BottomNavigationMenuIconContainer,
  BottomNavigationOffersIconContainer,
  BottomNavigationProfileIconContainer,
  BottomNavigationMoreIconContainer,
  BottomNavigationMenuIcon,
  BottomNavigationOffersIcon,
  BottomNavigationProfileIcon,
  BottomNavigationMoreIcon,
  MenuIconText,
  OffersIconText,
  ProfileIconText,
  MoreIconText,
} from './styles';

import imgTop from '../../assets/chad-montano-MqT0asuoIcU-unsplash.png';
import imgBack from '../../assets/left-chevron.png';
import imgCart from '../../assets/shopping-cart.png';
import imgHeart from '../../assets/heart.png';
import imgCartOrange from '../../assets/shopping-cartOrange.png';
import imgStar from '../../assets/star.png';
import imgStarW from '../../assets/starw.png';
import imgSubtract from '../../assets/-.png';
import imgSum from '../../assets/+.png';
import imgCartTotal from '../../assets/Grupo8089.png';

import imgMenu from '../../assets/Grupo6847.png';
import imgOffers from '../../assets/002-shopping-bag.png';
import imgProfile from '../../assets/man-user.png';
import imgMore from '../../assets/Grupo6814.png';
import imgHome from '../../assets/001-home.png';

const Produto: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <FlatList
        style={{ flex: 1, backgroundColor: '#fafafa' }}
        data={[Produto]}
        keyExtractor={produto => String(produto)}
        renderItem={() => (
          <>
            <Container>
              <>
                <>
                  <TopImageContainer>
                    <TopImage source={imgTop} />
                    <BackIcon source={imgBack} />
                    <CartIcon source={imgCart} />
                  </TopImageContainer>

                  <ContainerRadius />

                  <HeartContainer>
                    <HeartIcon source={imgHeart} />
                  </HeartContainer>
                  <TituloProdutoContainer>
                    <TituloProdutotext>Mama Pizza</TituloProdutotext>
                  </TituloProdutoContainer>

                  <StarIconContainer>
                    <StarIcon source={imgStar} />
                    <StarIcon source={imgStar} />
                    <StarIcon source={imgStar} />
                    <StarIcon source={imgStar} />
                    <StarIconWhite source={imgStarW} />
                    <PriceText>R$ 75</PriceText>
                  </StarIconContainer>
                </>
                <RatingText>4.9 Avaliações</RatingText>
                <PersonPrice>/ por pessoa</PersonPrice>
                <DescriptionTitle>Descrição</DescriptionTitle>
                <DescriptionText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{'\n'}
                  Ornare leo non mollis id cursus. Eu euismod faucibus in leo
                </DescriptionText>

                <LineBorder />

                <OrderText>Personalize seu pedido</OrderText>

                <PickerCustomContainer>
                  <PickerCustom>
                    <PickerCustomText>
                      - Selecione o tamanho da porção -
                    </PickerCustomText>
                    <IconPickerConatainer>
                      <IconPicker
                        name="chevron-down"
                        size={31}
                        color="#828282"
                      />
                    </IconPickerConatainer>
                  </PickerCustom>
                </PickerCustomContainer>

                <PickerCustomContainer>
                  <PickerCustom>
                    <PickerCustomText>
                      - Selecione os ingredientes -
                    </PickerCustomText>
                    <IconPickerConatainer>
                      <IconPicker
                        name="chevron-down"
                        size={31}
                        color="#828282"
                      />
                    </IconPickerConatainer>
                  </PickerCustom>
                </PickerCustomContainer>

                <PortionContainer>
                  <PortionText>Número de porções</PortionText>
                  <PortionBackagroundSelectorSubtract>
                    <PortionIconSelectorSubtract source={imgSubtract} />
                  </PortionBackagroundSelectorSubtract>
                  <PortionBackagroundSelectorNumber>
                    <PortionSelectorNumberText>2</PortionSelectorNumberText>
                  </PortionBackagroundSelectorNumber>
                  <PortionBackagroundSelectorSum>
                    <PortionIconSelectorSum source={imgSum} />
                  </PortionBackagroundSelectorSum>
                </PortionContainer>

                <TotalPriceContainer>
                  <TotalPriceLeftBackground />
                  <TotalPriceMiddleBackground>
                    <TotalPriceValorTitle>Valor Total</TotalPriceValorTitle>
                    <TotalPriceValorValue>R$ 150,00</TotalPriceValorValue>
                    <TotalPriceCartBackground>
                      <TotalPriceCartIcon source={imgCartTotal} />
                      <TotalPriceCartText>Add ao carrinho</TotalPriceCartText>
                    </TotalPriceCartBackground>
                  </TotalPriceMiddleBackground>

                  <TotalPriceCartRightBackground>
                    <TotalPriceRightCartIcon source={imgCartOrange} />
                  </TotalPriceCartRightBackground>
                </TotalPriceContainer>

                <BottomNavigationContainer>
                  <BottomNavigationGradient />
                  <BottomNavigationBackground>
                    <BottomNavigationBackgroundLeft>
                      <BottomNavigationMenuIconContainer>
                        <BottomNavigationMenuIcon source={imgMenu} />
                        <MenuIconText>Menu</MenuIconText>
                      </BottomNavigationMenuIconContainer>
                      <BottomNavigationOffersIconContainer>
                        <BottomNavigationOffersIcon source={imgOffers} />
                        <OffersIconText>Ofertas</OffersIconText>
                      </BottomNavigationOffersIconContainer>
                    </BottomNavigationBackgroundLeft>
                    <BottomNavigationBackgroundRight>
                      <BottomNavigationProfileIconContainer>
                        <BottomNavigationProfileIcon source={imgProfile} />
                        <ProfileIconText>Perfil</ProfileIconText>
                      </BottomNavigationProfileIconContainer>
                      <BottomNavigationMoreIconContainer>
                        <BottomNavigationMoreIcon source={imgMore} />
                        <MoreIconText>Mais</MoreIconText>
                      </BottomNavigationMoreIconContainer>
                    </BottomNavigationBackgroundRight>
                  </BottomNavigationBackground>
                </BottomNavigationContainer>
                <BottomNavigationGradientCircle />
                <BottomNavigationHomeBackground />
                <BottomNavigationHomeIcon source={imgHome} />
              </>
            </Container>
          </>
        )}
      />
    </>
  );
};

export default Produto;
