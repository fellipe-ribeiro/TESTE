import React from 'react';
import { TextInputProps } from 'react-native';

import {
  ContainerAuth,
  TextInput,
  Icon,
  ContainerSearch,
  IconSearch,
} from './styles';

import searchIcon from '../../assets/Grupo6821.png';

interface InputProps extends TextInputProps {
  name: string;
  icon: string;
}

export const InputAuth: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <ContainerAuth>
    <Icon />

    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#B6B7B7"
      {...rest}
    />
  </ContainerAuth>
);

export const InputSearch: React.FC<InputProps> = ({ name, icon, ...rest }) => (
  <ContainerSearch>
    <IconSearch source={searchIcon} />

    <TextInput
      keyboardAppearance="dark"
      placeholderTextColor="#B6B7B7"
      {...rest}
    />
  </ContainerSearch>
);
