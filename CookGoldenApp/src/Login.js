import React, { component, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class InicioCook extends Component {

  //Funciones
  registro = () => {
    this.props.navigation.navigate('Nuevo')
  }
  entrar = () => {
    this.props.navigation.navigate('InicioAdmin')
  }


  //Cierre De Funciones


  render() {
    return (
      <View style={styles.contenido}>

        <View>
          <Text style={styles.titulo}>
            Login
        </Text>
        </View>


        <View style={styles.login}>

          <Input
            placeholder='Ingrese Usuario'
            leftIcon={
              <Icon
                name='user'
                size={24}
                color='black'
              />
            }
          />

          <Input placeholder="Ingrese Contraseña" secureTextEntry={true} />
          
          
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

            onPress={this.entrar} />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  contenido: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
    alignItems: "center",


  },
  login: {
    backgroundColor: 'white',
    margin: 50,
  },

  titulo: {

    fontSize: 50,
    color: 'white',
    fontStyle: 'italic',

  },
})

export default InicioCook