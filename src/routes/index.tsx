import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Index from '../pages/Index';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Produto from '../pages/Produto';

const Auth = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#FFFFFF' },
    }}
  >
    <Auth.Screen name="Produto" component={Produto} />
    <Auth.Screen name="Dashboard" component={Dashboard} />
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Index" component={Index} />
  </Auth.Navigator>
);

export default AuthRoutes;
