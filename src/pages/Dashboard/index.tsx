import React, { useCallback } from 'react';
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
  CategoriesTitleContainer,
  CategoriesTitle,
  ContainerRestaurants,
  RestaurantsText,
  ExpandButton,
  ExpandButtonText,
  RestaurantsContainer,
  RestaurantsList,
  RestaurantsImg,
  RestaurantsTitle,
  RestaurantsTitleContainer,
  RatingRestaurantContainer,
  RatingRestaurantIcon,
  RatingRestaurantNumber,
  PopularContainer,
  PopularTitle,
  ExpandButtonPopular,
  ExpandButtonPopularText,
  PopularRestaurantsContainer,
  PopularRestaurantsImg,
  PopularRestaurantsList,
  PopularRestaurantsTitle,
  PopularRestaurantsTitleContainer,
  PopularRatingRestaurantContainer,
  PopularRatingRestaurantDescription,
  PopularRatingRestaurantIcon,
} from './styles';

import { InputSearch } from '../../components/Input';

import cartImg from '../../assets/shopping-cart.png';
import iconLocalizationImg from '../../assets/Grupo6819.png';
import ratingImg from '../../assets/Caminho8560.png';

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
  name: any;
}

export interface IRestaurants {
  img: any;
  name: any;
}

const Dashboard: React.FC = () => {
  const categories: ICategories[] = [img1, img2, img3, img4];
  const restaurants: IRestaurants[] = [img5, img6, img7];

  const handleCategory = useCallback(category => {
    let title = '';
    switch (category) {
      case 11:
        title = 'Ofertas';
        return title;
      case 12:
        title = 'Almoço';
        return title;
      case 13:
        title = 'Italiana';
        return title;

      default:
        title = 'Indiana';
        return title;
    }
  }, []);

  const handleRestaurant = useCallback(restaurant => {
    let title = '';
    switch (restaurant) {
      case 15:
        title = 'Mama Pizza';
        return title;
      case 16:
        title = 'Café de Noir';
        return title;
      default:
        title = 'Panificadora Bella Manhã';
        return title;
    }
  }, []);

  const handleRatingNumber = useCallback(restaurant => {
    let description = '';
    switch (restaurant) {
      case 15:
        description = '(124 avaliações) Pizza Itália';
        return description;
      case 16:
        description = '(124 avaliações) Café';
        return description;
      default:
        description = '(124 avaliações) Café Padaria';
        return description;
    }
  }, []);

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
            keyExtractor={category => String(category)}
            renderItem={({ item: category }) => (
              <>
                <CategoriesImg source={category} />
                <CategoriesTitleContainer>
                  <CategoriesTitle>{handleCategory(category)}</CategoriesTitle>
                </CategoriesTitleContainer>
              </>
            )}
          />
        </CategoriesContainer>

        <ContainerRestaurants>
          <RestaurantsText>Restaurantes mais populares</RestaurantsText>

          <ExpandButton>
            <ExpandButtonText>Ver tudo</ExpandButtonText>
          </ExpandButton>
        </ContainerRestaurants>

        <RestaurantsContainer onPress={() => {}}>
          <RestaurantsList
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={restaurant => String(restaurant)}
            renderItem={({ item: restaurant }) => (
              <>
                <RestaurantsImg source={restaurant} />
                <RestaurantsTitleContainer>
                  <RestaurantsTitle>
                    {handleRestaurant(restaurant)}
                  </RestaurantsTitle>
                </RestaurantsTitleContainer>

                <RatingRestaurantContainer>
                  <RatingRestaurantIcon source={ratingImg} />
                  <RatingRestaurantNumber>
                    {handleRatingNumber(restaurant)}
                  </RatingRestaurantNumber>
                </RatingRestaurantContainer>
              </>
            )}
          />
        </RestaurantsContainer>

        <PopularContainer>
          <PopularTitle>Mais populares</PopularTitle>

          <ExpandButtonPopular>
            <ExpandButtonPopularText>Ver todos</ExpandButtonPopularText>
          </ExpandButtonPopular>
        </PopularContainer>

        <PopularRestaurantsContainer onPress={() => {}}>
          <PopularRestaurantsList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurants}
            keyExtractor={restaurant => String(restaurant)}
            renderItem={({ item: restaurant }) => (
              <>
                <PopularRestaurantsImg source={restaurant} />
                <PopularRestaurantsTitleContainer>
                  <PopularRestaurantsTitle>
                    {handleRestaurant(restaurant)}
                  </PopularRestaurantsTitle>

                  <PopularRatingRestaurantContainer>
                    <PopularRatingRestaurantDescription>
                      Pizza Italiana
                    </PopularRatingRestaurantDescription>
                    <PopularRatingRestaurantIcon source={ratingImg} />
                  </PopularRatingRestaurantContainer>
                </PopularRestaurantsTitleContainer>
              </>
            )}
          />
        </PopularRestaurantsContainer>
      </Container>
    </>
  );
};

export default Dashboard;
