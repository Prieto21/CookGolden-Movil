import React, { component, Component } from 'react'
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class InicioCook extends Component {

    //Funciones
    user = () => {
        this.props.navigation.navigate('AdminUser')
    }
    atras = () => {
        this.props.navigation.navigate('Ingresa')
    }
    recet = () => {
        this.props.navigation.navigate('AdminRecet')
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
                <View style={styles.contenidos}>
                    <View style={styles.subbloque}>
                    
                    <Button
                        style={styles.botones}
                        title="Usuarios"
                        color="gray"

                        onPress={this.user} />
        
                    </View>
                    
                    <View style={styles.subbloqueuno}>
                    <Button
                        style={styles.botones}
                        title="Recetas"
                        color="gray"

                        onPress={this.recet} /> 
                    </View>
                </View>
                <View style={styles.bloquecuatro}>
                <Image
                  style={styles.tinyLogo}
                  source={require('../../assets/logo.jpg')}
               />
                    <Text style={styles.titulo}>
                        Tenga Un Buen Dia
        </Text>
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
        borderRadius:45,
        
      },
    
    bloquecuatro: {
        flex: 2,
        alignItems:'center'
    },

    titulo: {

        fontSize: 50,
        color: 'white',
        fontStyle: 'italic',

    },
})

export default InicioCook