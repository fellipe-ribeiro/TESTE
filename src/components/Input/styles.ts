import styled from 'styled-components/native';

export const ContainerAuth = styled.View`
  width: 80%;
  height: 56px;
  padding: 0 16px;
  background: #f2f2f2;
  border-radius: 35px;
  margin-bottom: 8%;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #4a4b4d;
  font-size: 14px;
  font-family: 'metropolis.regular';
`;

export const Icon = styled.View`
  margin-right: 18px;
  background: #f2f2f2;
`;

export const ContainerSearch = styled.View`
  width: 90%;
  height: 45px;
  padding: 0 16px;
  background: #f2f2f2;
  border-radius: 35px;
  margin-bottom: 8%;
  margin-left: 5%;
  margin-top: 10%;
  margin-right: 0;

  flex-direction: row;
  align-items: center;
`;

export const IconSearch = styled.Image`
  margin-left: 5%;
  margin-right: 5%;
`;
