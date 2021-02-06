import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ICategories } from './index';

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
  font-family: 'metropolis.medium';
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

export const CategoriesList = styled(
  FlatList as new () => FlatList<ICategories>,
)``;

export const CategoriesContainer = styled.View`
  margin-left: 15px;
`;

export const CategoriesImg = styled.Image`
  width: 88px;
  height: 88px;
  margin-left: 15px;
  border-radius: 10px;
`;
