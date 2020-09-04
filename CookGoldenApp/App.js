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
import AdminBebidas  from './src/Admin/Bebidas';
import AdminPostres  from './src/Admin/Postres';
import Agregar  from './src/Admin/NuevoRece';
import Modificar  from './src/Admin/Modificar';
import UserInicio  from './src/Usuarios/Inicio';
import UserComidas  from './src/Usuarios/Comidas';
import UserPostres  from './src/Usuarios/Postres';
import UserBebidas  from './src/Usuarios/Bebidas';

const InicioNavigator = createStackNavigator({
   Bienvenido:{
     screen: Inicio
     
   },
   UserInicio:{
    screen: UserInicio,
    
   },
   Ingresa:{
    screen: Login,
    
   },
   
   UserComidas:{
    screen: UserComidas,
    
   },
   UserPostres:{
    screen: UserPostres,
    
   },
   UserBebidas:{
    screen: UserBebidas,
    
   },
   regis:{
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
   AdminBebidas:{
    screen:AdminBebidas,
   },
   AdminPostres:{
    screen:AdminPostres,
   },
   Nuevo:{
    screen:Agregar,
   },
   Modificar:{
    screen:Modificar,
   },
   
});

export default createAppContainer(InicioNavigator);


 
 