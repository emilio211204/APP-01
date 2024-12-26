import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'

export default function Pagina5Screen() {
    const [numero1, setnumero1] = useState(0)
    const [numero2, setnumero2] = useState(0)

    useEffect(() => {
    if (numero1 <= 0) {
        Alert.alert("ERROR")
        setnumero1(0)
    }
    if (numero2 <= 0) {
        Alert.alert("El número 2 es menor o igual a 0")
        setnumero2(0)
    }

    }, [numero1, numero2])
    

    function aumetar() {
        setnumero1(numero1 + 1)
    }
    return (
        <View style={styles.container}>
            <View style={styles.fila}>
                <Button title="-" onPress={() => setnumero1(numero1 - 1)}/>
                <Text style={styles.txt}>{numero1}</Text>
                <Button title="+" onPress={() => aumetar()}/>
            </View>
            <View style={styles.fila}>
                <Button title="-" onPress={() => setnumero2(numero2 - 1)}/>
                <Text style={styles.txt}>{numero2}</Text>
                <Button title="+" onPress={() => setnumero2(numero2 + 1)}/>
            </View>
            <View style={styles.linea}>
                <Text style={styles.txt}>Suma:{numero1 + numero2}</Text>
                <Text style={styles.txt}>Resta:{numero1 - numero2}</Text>
                <Text style={styles.txt}>Multiplicación:{numero1 * numero2}</Text>
                <Text style={styles.txt}>División:{(numero1 / numero2).toFixed(2)}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    fila:{
        flexDirection:"row",
    },
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    txt:{
        fontSize:30,
    },
    linea:{
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",

    }
})