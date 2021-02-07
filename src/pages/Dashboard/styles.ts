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
  font-family: 'metropolis.bold';
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
  height: 22%;
`;

export const CategoriesList = styled(
  FlatList as new () => FlatList<ICategories>,
)``;

export const CategoriesImg = styled.Image`
  width: 88px;
  height: 88px;
  position: relative;
  border-radius: 10px;
  margin-bottom: 125px;
  margin-right: 20px;
`;

export const CategoriesTitleContainer = styled.View`
  align-items: center;

  align-self: center;
  position: absolute;
  margin-left: 15%;
`;

export const CategoriesTitle = styled.Text`
  margin-top: 50px;

  font-family: 'metropolis.bold';
  font-size: 14px;
  color: #4a4b4d;
  text-align: center;
`;

export const ContainerRestaurants = styled.View`
  flex-direction: row;
  margin-left: 6%;
  margin-bottom: 28px;
`;

export const RestaurantsText = styled.Text`
  font-family: 'metropolis.bold';
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
  margin-top: 7px;

  font-family: 'metropolis.extra-bold';
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
  font-size: 12px;
  color: #b6b7b7;
  text-align: left;
`;

export const PopularContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;

  margin-bottom: 40px;
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
  height: 22%;
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
  align-items: center;

  align-self: center;
  position: absolute;
`;

export const PopularRestaurantsTitle = styled.Text`
  margin-top: 140px;

  font-family: 'metropolis.bold';
  font-size: 18px;
  color: #4a4b4d;
  text-align: left;
`;

export const PopularRatingRestaurantContainer = styled.View`
  flex-direction: row;
  margin-left: 5%;
  margin-bottom: 40px;
`;

export const PopularRatingRestaurantDescription = styled.Text`
  font-family: 'metropolis.regular';
  font-size: 12px;
  color: #b6b7b7;
  text-align: left;
`;

export const PopularRatingRestaurantIcon = styled.Image``;
