import React, { component, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, ImageBackground } from 'react-native'


class InicioCook extends Component {
   //Funciones
   siguiente = () => {
      this.props.navigation.navigate('Ingresa')
   }



   //Cierre De Funciones
   render() {
      return (
 
         <View style={styles.container}>
<ImageBackground style={styles.fondoimagen}
source={require('../assets/fondo.jpg')}
>
            <View style={styles.alto}>
               <Text style={styles.titulo}>Cook Golden</Text>
            </View>
            <View style={styles.medio}>
               <Image
                  style={styles.tinyLogo}
                  source={require('../assets/logo.jpg')}
               />
            </View>
            <View style={styles.bajo}>

               <Button
                  style={styles.botones}
                  title="Comenzar"
                  color="orange"

                  onPress={this.siguiente} />





            </View>
            </ImageBackground>
         </View>

      )

   }
}
const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black',
 

   },
   fondoimagen: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },

   tinyLogo: {
      width: 250,
      height: 250,
      borderRadius: 45,
   },
   alto: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      fontSize: 50,

   },

   titulo: {

      fontSize: 50,
      color: 'white',
      fontStyle: 'italic',

   },

   medio: {
      flex: 1.8,
      alignItems: 'center'
   },
   bajo: {
      flex: 2,

   },

})

export default InicioCook