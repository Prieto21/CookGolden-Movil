import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Inicio  from './src/Inicio';
import Login  from './src/Login';
import Registro  from './src/Registro';
import InicioAdmin  from './src/Admin/Inicio';
import AdminUser  from './src/Admin/Usuarios';
import AdminRecet  from './src/Admin/Recetas';
import AdminComidas  from './src/Admin/Comidas';

const InicioNavigator = createStackNavigator({
   Bienvenido:{
     screen: Inicio
     
   },
   Ingresa:{
    screen: Login,
    
   },
   Nuevo:{
    screen:Registro,
   },
   InicioAdmin:{
    screen:InicioAdmin,
   },
   AdminUser:{
    screen:AdminUser,
   },
   
   AdminRecet:{
    screen:AdminRecet,
   },

   AdminComidas:{
    screen:AdminComidas,
   },
   
});

export default createAppContainer(InicioNavigator);


 
 