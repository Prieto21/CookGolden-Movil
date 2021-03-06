import React, { component, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class InicioCook extends Component {

  //Funciones
  registro = () => {
    this.props.navigation.navigate('regis') 
  }
  entrar = () => {
    this.props.navigation.navigate('UserInicio')
  }
  entrarAdmin = () => {
    this.props.navigation.navigate('InicioAdmin')
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
            Login
          </Text>
        </View>


        <View style={styles.login}>
          <View style={styles.centro}>
            <Input
              placeholder='Ingrese Usuario'

            />

            <Input placeholder="Ingrese Contraseña" />


            <Button
              style={styles.botones}
              title="Entrar"
              color="orange"

              onPress={this.entrar} />

            <Button
              style={styles.botones}
              title="Registrarme"
              color="#1C65AE"

              onPress={this.registro} />


            <Button
              style={styles.botones}
              title="A"
              color="gray"

              onPress={this.entrarAdmin} />
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