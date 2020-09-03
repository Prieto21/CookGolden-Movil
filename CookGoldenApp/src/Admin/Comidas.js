import React, { component, Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';


class InicioCook extends Component {

    //Funciones

    atras = () => {
        this.props.navigation.navigate('AdminRecet')
    }



    //Cierre De Funciones


    render() {
        return (
            <View style={styles.contenido}>

                <View style={styles.bloqueuno}>
                    <Button
                        style={styles.botones}
                        title="Atras"
                        color="red"

                        onPress={this.atras} />

                </View>

                <View style={styles.bloquedos}>
                    <Text style={styles.titulo}>
                        Comidas
                    </Text>
                </View>

                <View style={styles.comidas}>

                    <Text>Ejemplo</Text>
                    <Text></Text>
                    <View style={styles.contenidoBotones} >
                        <View>

                            <Button
                                style={styles.botones}
                                title="Modificar"
                                color="blue"

                                onPress={this.user} />

                        </View>

                        <View>
                            <Button
                                style={styles.botones}
                                title="Eliminar"
                                color="red"

                                onPress={this.recet} />
                        </View>
                    </View>

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
        flex: 3,
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