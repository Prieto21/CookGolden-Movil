import React, { component, Component } from 'react'
import { View, Text, StyleSheet, ImageBackground,TouchableOpacity, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


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
            <ScrollView>
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
                        Usuarios
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
                    
                    
                    <View style={styles.users}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/perfil.jpg')}
                        />
                        <Text>Nombre</Text>
                        <Text>Sergio</Text>
                        <Text>Apellido</Text>
                        <Text>Prieto</Text>
                        <Text>Usuario</Text>
                        <Text>Prieto21</Text>
                        <Text>Contraseña</Text>
                        <Text>123</Text>


                    </View>
                    <View style={styles.users}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/perfil.jpg')}
                        />
                        <Text>Nombre</Text>
                        <Text>Sergio</Text>
                        <Text>Apellido</Text>
                        <Text>Prieto</Text>
                        <Text>Usuario</Text>
                        <Text>Prieto21</Text>
                        <Text>Contraseña</Text>
                        <Text>123</Text>


                    </View>
                   
                    <View style={styles.users}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../../assets/perfil.jpg')}
                        />
                        <Text>Nombre</Text>
                        <Text>Sergio</Text>
                        <Text>Apellido</Text>
                        <Text>Prieto</Text>
                        <Text>Usuario</Text>
                        <Text>Prieto21</Text>
                        <Text>Contraseña</Text>
                        <Text>123</Text>


                    </View>
                </View>

                </View>
        
        </ImageBackground>
            </View>
            </ScrollView>
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
   
    users: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
        
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

    },

    bloquecuatro: {
        flex: 2,
        alignItems: 'center'
        
    },

    titulo: {

        fontSize: 50,
        color: 'white',
        fontStyle: 'italic',

    },
})

export default InicioCook