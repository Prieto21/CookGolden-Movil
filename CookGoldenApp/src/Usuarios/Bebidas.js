import React, { component, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity,ImageBackground ,Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';


class InicioCook extends Component {

    //Funciones

    atras = () => {
        this.props.navigation.navigate('UserInicio')
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
                        title="Atras"
                        color="orange"

                        onPress={this.atras} />

                </View>

                <View style={styles.bloquedos}>
                    <Text style={styles.titulo}>
                        Bebidas
                    </Text>
                    
                </View>

                <View style={styles.comidas}>
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/receta.jpg')}
                    />
                    <Text>Pollo</Text>
                    <Text>
                        Las mejores recetas típicas
                        colombianas con todo el
                        amor de arroz Diana,
                        prepáralas todas. Ingresa
                        y comienza a preparar la
                        receta de arroz con pollo
                        que más te llame la atención.
                        Prepara Ricas Recetas.
                        Deleita tu Paladar. Cocina c
                        on Diana. Descubre Cosas Nuevas.
                         </Text>
                    <View style={styles.contenidoBotones} >
                        </View>

                </View>
                

                

                <View style={styles.comidasdos}>
                    
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/receta.jpg')}
                    />
                    <Text>Pollo</Text>
                    <Text>
                        Las mejores recetas típicas
                        colombianas con todo el
                        amor de arroz Diana,
                        prepáralas todas. Ingresa
                        y comienza a preparar la
                        receta de arroz con pollo
                        que más te llame la atención.
                        Prepara Ricas Recetas.
                        Deleita tu Paladar. Cocina c
                        on Diana. Descubre Cosas Nuevas.
                         </Text>
                         
                    <View style={styles.contenidoBotones} >
                    </View>

                </View>



                <View style={styles.comidasdos}>
                    
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/receta.jpg')}
                    />
                    <Text>Pollo</Text>
                    <Text>
                        Las mejores recetas típicas
                        colombianas con todo el
                        amor de arroz Diana,
                        prepáralas todas. Ingresa
                        y comienza a preparar la
                        receta de arroz con pollo
                        que más te llame la atención.
                        Prepara Ricas Recetas.
                        Deleita tu Paladar. Cocina c
                        on Diana. Descubre Cosas Nuevas.
                         </Text>
                         
                    <View style={styles.contenidoBotones} >
                        
                    </View>

                </View>



                <View style={styles.comidasdos}>
                    
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/receta.jpg')}
                    />
                    <Text>Pollo</Text>
                    <Text>
                        Las mejores recetas típicas
                        colombianas con todo el
                        amor de arroz Diana,
                        prepáralas todas. Ingresa
                        y comienza a preparar la
                        receta de arroz con pollo
                        que más te llame la atención.
                        Prepara Ricas Recetas.
                        Deleita tu Paladar. Cocina c
                        on Diana. Descubre Cosas Nuevas.
                         </Text>
                         
                    <View style={styles.contenidoBotones} >
                        
                    </View>

                </View>



                <View style={styles.comidasdos}>
                    
                    <Image
                        style={styles.tinyLogo}
                        source={require('../../assets/receta.jpg')}
                    />
                    <Text>Pollo</Text>
                    <Text>
                        Las mejores recetas típicas
                        colombianas con todo el
                        amor de arroz Diana,
                        prepáralas todas. Ingresa
                        y comienza a preparar la
                        receta de arroz con pollo
                        que más te llame la atención.
                        Prepara Ricas Recetas.
                        Deleita tu Paladar. Cocina c
                        on Diana. Descubre Cosas Nuevas.
                         </Text>
                         
                    <View style={styles.contenidoBotones} >
                        
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
    
    contenidoBotones: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: "center",


    },

    contenidos: {
        flex: 0.5,
        flexDirection: 'row',
        backgroundColor: 'black',
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

    comidas: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    comidasdos: {
        flex: 2,
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
    },

    titulo: {

        fontSize: 50,
        color: 'white',
        fontStyle: 'italic',

    },
})

export default InicioCook