import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  position: relative;
`;

export const TopImageContainer = styled.View`
  flex: 1;
  flex-direction: row;
`;

export const TopImage = styled.Image`
  width: 100%;
  height: 340px;
  position: relative;
  overflow: hidden;
`;

export const BackIcon = styled.Image`
  margin-left: 2%;
  width: 24px;
  height: 24px;
  position: absolute;
  margin-top: 50px;
`;

export const CartIcon = styled.Image`
  margin-left: 350px;
  margin-top: 50px;
  position: absolute;
`;

export const HeartContainer = styled.View`
  background: #ffffff;
  position: absolute;

  width: 55.81px;
  height: 55.63px;

  border-top-left-radius: 55px;
  border-bottom-left-radius: 27px;
  border-top-right-radius: 27px;
  border-bottom-right-radius: 27px;

  margin-left: 320px;
  margin-top: 285px;

  transform: rotate(-45deg);
`;

export const HeartIcon = styled.Image`
  align-self: center;
  margin-top: 19.11px;

  transform: rotate(+45deg);
`;

export const ContainerRadius = styled.View`
  flex: 1;
  margin-top: 7%;
  position: absolute;
  border-top-right-radius: 50px;
  border-top-left-radius: 50px;
  background: #fafafa;
  width: 100%;
  height: 29px;

  margin-top: 80%;
`;

export const TituloProdutoContainer = styled.View`
  margin-top: 10px;
  margin-left: 5%;
  margin-bottom: 3px;
`;

export const TituloProdutotext = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 22px;
  text-align: left;
`;

export const StarIconContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;
  position: relative;
`;

export const StarIcon = styled.Image`
  margin-right: 3px;
  margin-top: 3px;
  margin-bottom: 1px;

  width: 21px;
  height: 21px;
`;

export const StarIconWhite = styled.Image`
  margin-top: 3px;
  margin-bottom: 1px;

  width: 21px;
  height: 21px;
`;

export const RatingText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 11px;
  color: #ee5a30;
  text-align: left;

  margin-top: 410px;
  margin-left: 5%;

  position: absolute;
`;

export const PriceText = styled.Text`
  font-family: 'metropolis.bold';
  font-size: 31px;
  color: #4a4b4d;
  text-align: right;

  position: relative;

  margin-left: auto;
  margin-right: 5%;
`;

export const PersonPrice = styled.Text`
  font-family: 'CircularStd-Medium';
  font-size: 12px;
  color: #4a4b4d;
  text-align: right;

  margin-right: 5%;
`;

export const DescriptionTitle = styled.Text`
  margin-left: 5%;
  font-family: 'metropolis.bold';
  font-size: 14px;
  color: #4a4b4d;
  text-align: left;

  margin-bottom: 10px;
  margin-top: 10px;
`;

export const DescriptionText = styled.Text`
  margin-left: 5%;
  font-family: 'metropolis.regular';
  font-size: 12px;
  color: #7c7d7e;
  text-align: left;
  line-height: 18px;
`;

export const LineBorder = styled.View`
  flex: 1;
  margin-top: 30px;
  margin-bottom: 15px;
  margin-left: 5%;

  background: #4a4b4d;

  width: 90%;
  height: 0.4px;
`;

export const OrderText = styled.Text`
  margin-left: 5%;
  font-family: 'metropolis.bold';
  font-size: 14px;
  color: #4a4b4d;
  text-align: left;

  margin-bottom: 20px;
`;

export const PickerCustomContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-bottom: 12px;
  align-content: center;

  position: relative;
`;

export const PickerCustom = styled(TouchableOpacity)`
  width: 352px;
  height: 45px;

  background: #f2f2f2;
`;

export const PickerCustomText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 14px;
  color: #4a4b4d;
  text-align: left;

  margin-top: 12px;
  margin-left: 36px;
`;

export const IconPickerConatainer = styled.View`
  margin-left: 90%;
  margin-top: 7px;
  position: absolute;
`;

export const PortionContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-top: 10px;
  margin-bottom: 35px;
`;

export const PortionText = styled.Text`
  font-family: 'metropolis.bold';
  font-size: 14px;
  color: #4a4b4d;
  text-align: left;

  margin-top: 6px;
  margin-right: 40px;
`;

export const PortionBackagroundSelectorSubtract = styled.View`
  background: #fc6011;
  width: 52px;
  height: 30px;
  border-radius: 15px;

  margin-left: 3px;
  margin-right: 3px;
`;

export const PortionIconSelectorSubtract = styled.Image`
  margin-left: 22px;
  margin-top: 3px;
`;

export const PortionBackagroundSelectorNumber = styled.View`
  background: #ffffff;
  width: 52px;
  height: 30px;
  border: 1.3px;
  border-radius: 15px;
  border-color: #fc6011;

  margin-left: 3px;
  margin-right: 3px;
`;

export const PortionSelectorNumberText = styled.Text`
  font-family: 'CircularStd-Black';
  font-size: 14px;
  color: #fc6011;
  text-align: center;

  margin-top: 3.5px;
`;

export const PortionBackagroundSelectorSum = styled.View`
  background: #fc6011;
  width: 52px;
  height: 30px;
  border-radius: 15px;

  margin-left: 3px;
  margin-right: 3px;
`;

export const PortionIconSelectorSum = styled.Image`
  margin-left: 22px;
  margin-top: 3px;
`;

export const TotalPriceContainer = styled.View`
  flex-direction: row;
  margin-bottom: 5px;
`;

export const TotalPriceLeftBackground = styled.View`
  border-top-right-radius: 38px;
  border-bottom-right-radius: 38px;
  background: #fc6011;
  width: 97px;
  height: 171px;
`;

export const TotalPriceMiddleBackground = styled.View`
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background: #fdfdfd;
  width: 277px;
  height: 122px;

  margin-top: 24px;
  margin-left: 54px;

  position: absolute;
`;

export const TotalPriceValorTitle = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 12px;
  color: #4a4b4d;
  text-align: center;

  margin-top: 18px;
`;

export const TotalPriceValorValue = styled.Text`
  font-family: 'metropolis.bold';
  font-size: 21px;
  color: #4a4b4d;
  text-align: center;

  margin-top: 3px;
`;

export const TotalPriceCartBackground = styled.View`
  flex-direction: row;

  background: #fc6011;
  width: 157px;
  height: 29px;
  border-radius: 28px;
  align-self: center;

  margin-top: 6px;
`;

export const TotalPriceCartIcon = styled.Image`
  width: 15.76px;
  height: 12.31px;

  margin-top: 8px;
  margin-left: 17.24px;
`;

export const TotalPriceCartText = styled.Text`
  font-family: 'metropolis.semi-bold';
  font-size: 11px;
  color: #ffffff;
  text-align: center;

  margin-top: 6px;
  margin-left: 6px;
`;

export const TotalPriceCartRightBackground = styled.View`
  background: #ffffff;
  width: 47px;
  height: 47px;
  border-radius: 23.5px;

  position: absolute;

  margin-left: 300px;
  margin-top: 55px;
`;

export const TotalPriceRightCartIcon = styled.Image`
  align-self: center;
  margin-top: 14px;
`;

export const BottomNavigationContainer = styled.View`
  position: relative;
`;

export const BottomNavigationBackground = styled.View`
  flex-direction: row;
  background: #ffffff;
  height: 92px;
  width: 100%;

  position: relative;
`;

export const BottomNavigationBackgroundLeft = styled.View`
  flex-direction: row;
  background: #ffffff;
  height: 92px;
  width: 148.71px;
  border-top-right-radius: 35px;
`;

export const BottomNavigationBackgroundRight = styled.View`
  flex-direction: row;
  background: #ffffff;
  height: 92px;
  width: 149px;
  border-top-left-radius: 35px;

  margin-left: auto;
`;

export const BottomNavigationGradient = styled.View`
  background: #f2f2f2;
  width: 100%;
  height: 29px;
`;

export const BottomNavigationGradientCircle = styled.View`
  background: #f2f2f2;
  width: 102px;
  height: 102px;
  border-radius: 51px;

  align-self: center;
  margin-top: 945px;

  position: absolute;
`;

export const BottomNavigationHomeBackground = styled.TouchableOpacity`
  background: #b6b7b7;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  align-self: center;

  margin-top: 960px;

  position: absolute;
`;

export const BottomNavigationHomeIcon = styled.Image`
  width: 30.49px;
  height: 28.98px;
  margin-top: 980px;

  align-self: center;

  position: absolute;
`;

export const BottomNavigationMenuIconContainer = styled.View`
  margin-top: 33px;
  margin-left: 16.71px;
  width: 32px;
  height: 32px;
`;
export const BottomNavigationOffersIconContainer = styled.View`
  margin-top: 31px;
  margin-left: 38px;
  width: 46px;
  height: 46px;
`;
export const BottomNavigationProfileIconContainer = styled.View`
  margin-top: 31px;
  margin-left: 16px;
  width: 46px;
  height: 46px;
`;
export const BottomNavigationMoreIconContainer = styled.View`
  margin-top: 32px;
  margin-left: 30px;
  width: 42px;
  height: 42px;
`;

export const BottomNavigationMenuIcon = styled.Image`
  align-self: center;
`;

export const BottomNavigationOffersIcon = styled.Image`
  align-self: center;
`;

export const BottomNavigationProfileIcon = styled.Image`
  align-self: center;
`;

export const BottomNavigationMoreIcon = styled.Image`
  align-self: center;
`;

export const MenuIconText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 12px;
  color: #b6b7b7;
  text-align: center;
`;

export const OffersIconText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 12px;
  color: #b6b7b7;
  text-align: center;
`;

export const ProfileIconText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 12px;
  color: #b6b7b7;
  text-align: center;
`;

export const MoreIconText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 12px;
  color: #b6b7b7;
  text-align: center;
`;
