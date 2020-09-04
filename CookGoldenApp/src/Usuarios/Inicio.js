import React, { component, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image ,ImageBackground  ,  Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class InicioCook extends Component {

    //Funciones
    comida = () => {
        this.props.navigation.navigate('UserComidas')
    }
    bebida = () => {
        this.props.navigation.navigate('UserBebidas')
    }
    atras = () => {
        this.props.navigation.navigate('Ingresa')
    }
    postre = () => {
        this.props.navigation.navigate('UserPostres')
    }


    //Cierre De Funciones


    render() {
        return (
            <View style={styles.contenido}>
<ImageBackground style={styles.fondoimagen}
source={require('../../assets/fondo.jpg')}
>
<View style={styles.container}>
                <View style={styles.bloqueuno}>
                    <Button
                        style={styles.botones}
                        title="Cerrar Sesion"
                        color="red"

                        onPress={this.atras} />

                </View>

                <View style={styles.bloquedos}>
                    <Text style={styles.titulo}>
                        Bienvenido
        </Text>
                </View>
                <View style={styles.bloquecuatro}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/logo.jpg')}
               />
               
                </View>
                <View>
                <Button
                        style={styles.botones}
                        title="Bebidas"
                        color="orange"

                        onPress={this.bebida} />
                </View>
                <View style={styles.contenidos}>
                    
                    <View style={styles.subbloque}>
                    
                    <Button
                        style={styles.botones}
                        title="Comidas"
                        color="orange"

                        onPress={this.comida} />
        
                    </View>
                    
                    <View style={styles.subbloqueuno}>
                    <Button
                        style={styles.botones}
                        title="Postres"
                        color="orange"

                        onPress={this.postre} /> 
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
    subbloque:{

        flex:0.5,
        flexDirection:'row'
    },
    
    contenidos: {
        flex: 0.5,
        flexDirection: 'row',
        
        alignItems: "center",


    },
    bloqueuno: {
        flex: 0.3,
        



    },
    bloquedos: {
        flex: 0.5,
        

    },
    tinyLogo: {
        width: 250,
        height: 250,
        borderRadius:40,
        
      },
    
    bloquecuatro: {
        flex: 1,
        alignItems:'center'
    },

    titulo: {

        fontSize: 50,
        color: 'white',
        fontStyle: 'italic',

    },
})

export default InicioCook