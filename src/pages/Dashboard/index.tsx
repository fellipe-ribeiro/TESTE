import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Container,
  ContainerCart,
  TextCart,
  IconCart,
  TextDelivery,
  TextLocalization,
  ContainerLocalization,
  LocalizationIcon,
  CategoriesList,
  CategoriesContainer,
  CategoriesImg,
} from './styles';

import { InputSearch } from '../../components/Input';

import cartImg from '../../assets/shopping-cart.png';
import iconLocalizationImg from '../../assets/Grupo6819.png';

import img1 from '../../assets/photos/photo-1.png';
import img2 from '../../assets/photos/photo-2.png';
import img3 from '../../assets/photos/photo-3.png';
import img4 from '../../assets/photos/photo-4.png';
import img5 from '../../assets/photos/photo-5.png';
import img6 from '../../assets/photos/photo-6.png';
import img7 from '../../assets/photos/photo-7.png';
import img8 from '../../assets/photos/photo-8.png';
import img9 from '../../assets/photos/photo-9.png';

export interface ICategories {
  img: any;
  name: string;
}

const Dashboard: React.FC = () => {
  const categories: ICategories[] = [img1, img2, img3, img4];

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <Container>
        <ContainerCart>
          <TextCart>Bom dia!</TextCart>

          <IconCart source={cartImg} />
        </ContainerCart>

        <TextDelivery>Entregar para</TextDelivery>
        <ContainerLocalization>
          <TextLocalization>Sua localização</TextLocalization>
          <LocalizationIcon source={iconLocalizationImg} />
        </ContainerLocalization>
        <InputSearch
          placeholder="Buscar comida"
          name="search"
          icon="searchFood"
        />

        <CategoriesContainer onPress={() => {}}>
          <CategoriesList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={categorie => String(categorie)}
            renderItem={({ item: categorie }) => (
              <CategoriesImg source={categorie} />
            )}
          />
        </CategoriesContainer>
      </Container>
    </>
  );
};

export default Dashboard;
