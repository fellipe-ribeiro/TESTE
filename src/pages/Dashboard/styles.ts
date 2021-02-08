import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { ICategories, IRestaurants } from './index';

export const Container = styled.View`
  flex: 1;
`;

export const ContainerCart = styled.View`
  margin-left: 5%;
  margin-top: 15%;
  flex-direction: row;
`;

export const TextCart = styled.Text`
  color: #4a4b4d;
  font-family: 'metropolis.extra-bold';
  font-size: 20px;
  text-align: left;
`;

export const IconCart = styled.Image`
  margin-left: auto;
  margin-right: 5%;
`;

export const TextDelivery = styled.Text`
  color: #b6b7b7;
  font-family: 'metropolis.regular';
  font-size: 11px;
  text-align: left;
  margin-left: 5%;
  margin-top: 5%;
`;

export const ContainerLocalization = styled.View`
  flex-direction: row;
  margin-left: 5%;
`;

export const TextLocalization = styled.Text`
  color: #7c7d7e;
  font-family: 'metropolis.bold';
  font-size: 16px;
  text-align: left;
`;

export const LocalizationIcon = styled.Image`
  margin-left: 10%;
  margin-top: 7px;
`;

export const CategoriesContainer = styled.View`
  margin-left: 5%;
  height: 10%;
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<ICategories>,
)``;

export const CategoriesImg = styled.Image`
  width: 88px;
  height: 88px;

  border-radius: 10px;

  margin-right: 20px;
`;

export const CategoriesTitleContainer = styled.View`
  align-items: center;
  align-self: center;
  position: absolute;
  margin-left: 15%;
`;

export const CategoriesTitle = styled.Text`
  margin-top: 35px;
  font-family: 'metropolis.bold';
  font-size: 14px;
  color: #4a4b4d;
  text-align: center;
`;

export const ContainerRestaurants = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-bottom: 28px;
`;

export const RestaurantsText = styled.Text`
  font-family: 'metropolis.extra-bold';
  font-size: 18px;
  color: #4a4b4d;
  text-align: left;
`;

export const ExpandButton = styled(RectButton)`
  margin-left: auto;
  margin-right: 5%;
  margin-top: 8px;
`;

export const ExpandButtonText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 13px;
  color: #fc6011;
  text-align: right;
`;

export const RestaurantsContainer = styled.View`
  flex: 1;
`;

export const RestaurantsList = styled(
  FlatList as new () => FlatList<IRestaurants>,
)``;

export const RestaurantsImg = styled.Image`
  width: 100%;
  height: 193px;
`;

export const RestaurantsTitleContainer = styled.View`
  margin-left: 5%;
  margin-bottom: 5px;
`;

export const RestaurantsTitle = styled.Text`
  margin-top: 9px;
  font-family: 'metropolis.bold';
  font-size: 16px;
  color: #4a4b4d;
  text-align: left;
`;

export const RatingRestaurantContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-bottom: 40px;
`;

export const RatingRestaurantIcon = styled.Image``;

export const RatingRestaurantNumber = styled.Text`
  font-family: 'metropolis.regular';
  font-size: 11px;
  color: #fc6011;
  text-align: left;
  margin-left: 5px;
  margin-right: 5px;
`;

export const RatingRestaurantText = styled.Text`
  font-family: 'metropolis.regular';
  font-size: 12px;
  color: #b6b7b7;
  text-align: left;
`;

export const PopularContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-bottom: 30px;
  margin-top: 60px;
`;

export const PopularTitle = styled.Text`
  margin-top: 7px;
  font-family: 'metropolis.extra-bold';
  font-size: 20px;
  color: #4a4b4d;
  text-align: left;
`;

export const ExpandButtonPopular = styled(RectButton)`
  margin-left: auto;
  margin-right: 5%;
  margin-top: 16px;
`;

export const ExpandButtonPopularText = styled.Text`
  font-family: 'metropolis.medium';
  font-size: 13px;
  color: #fc6011;
  text-align: right;
`;

export const PopularRestaurantsContainer = styled.View`
  margin-left: 5%;
  height: 12%;
  margin-bottom: 10px;
`;

export const PopularRestaurantsList = styled(
  FlatList as new () => FlatList<IRestaurants>,
)``;

export const PopularRestaurantsImg = styled.Image`
  width: 228px;
  height: 135px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 125px;
  margin-right: 20px;
`;

export const PopularRestaurantsTitleContainer = styled.View`
  position: absolute;
  margin-top: 145px;
`;

export const PopularRestaurantsTitle = styled.Text`
  font-family: 'metropolis.bold';
  font-size: 18px;
  color: #4a4b4d;
  text-align: left;
  margin-bottom: 4px;
`;

export const PopularRatingRestaurantContainer = styled.View`
  flex-direction: row;
  position: absolute;

  margin-top: 170px;
`;

export const PopularRatingRestaurantDescription = styled.Text`
  font-family: 'metropolis.regular';
  font-size: 12px;
  color: #b6b7b7;
  text-align: left;
  margin-right: auto;
`;

export const PopularRatingRestaurantIcon = styled.Image`
  width: 10.19px;
  height: 9.91px;

  align-self: center;
  margin-left: 20px;
  margin-right: 5px;
`;

export const PopularRatingRestaurantNumber = styled.Text`
  font-family: 'metropolis.regular';
  font-size: 11px;
  color: #fc6011;
  text-align: left;
  margin-top: 2px;
`;

export const BottomNavigationContainer = styled.View`
  position: relative;
  margin-top: 15px;
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
  margin-top: 1630px;

  position: absolute;
`;

export const BottomNavigationHomeBackground = styled.TouchableOpacity`
  background: #fc6011;
  width: 72px;
  height: 72px;
  border-radius: 36px;
  align-self: center;

  margin-top: 1645px;

  position: absolute;
`;

export const BottomNavigationHomeIcon = styled.Image`
  width: 30.49px;
  height: 28.98px;
  margin-top: 1665px;

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
