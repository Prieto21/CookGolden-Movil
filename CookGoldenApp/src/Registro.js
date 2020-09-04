import React, { component, Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class InicioCook extends Component {

  //Funciones
  atras = () => {
    this.props.navigation.navigate('Ingresa') 
  }
  entrar = () => {
    this.props.navigation.navigate('UserInicio')
  }


  //Cierre De Funciones


  render() {
    return (
      <View style={styles.contenido}>
        <ImageBackground style={styles.fondoimagen}
source={require('../assets/fondo.jpg')}
>
<View style={styles.container}>

        <View>
          <Text style={styles.titulo}>
            Registrate
          </Text>
        </View>


        <View style={styles.login}>
          <View style={styles.centro}>
          <Input
              placeholder='Imagen (Nombre.jpg)'

            />
            <Input
              placeholder='Ingrese Nombre'

            />
            <Input
              placeholder='Ingrese Apellido'

            />
            <Input
              placeholder='Ingrese Usuario'

            />

            <Input placeholder="Ingrese Contraseña" />


            <Button
              style={styles.botones}
              title="Crear"
              color="orange"

              onPress={this.entrar} />

            <Button
              style={styles.botones}
              title="Atras"
              color="#1C65AE"

              onPress={this.atras} />


            
          </View>
          </View>
          
          </View>
        
          </ImageBackground>
        </View>
    )
  }
}
const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    


},
container:{
    flex: 1,
    flexDirection: 'column',
    alignItems:'center',
    
},

  fondoimagen: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  
  login: {
          marginTop:20,
    
    
    flexDirection: 'row',
    backgroundColor: 'white',

  },
  centro: {
    
flex:1,

flexDirection: 'column',


},


  titulo: {

          fontSize: 50,
    color: 'white',
    fontStyle: 'italic',

  },
})

export default InicioCook