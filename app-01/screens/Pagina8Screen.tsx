import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Tarjeta4 from '../components/Tarjeta4'

export default function Pagina8Screen() {
    const [datos, setdatos] = useState([]);

    useEffect(() => {
        async function leerArchivo() {
            const resp = await fetch('https://randomuser.me/api/?results=20');
            const json = await resp.json();
            setdatos(json.results);
            console.log(datos);
        }

        leerArchivo();
    }, []);
    return (
        <View>
            <Text style={styles.title}>USUARIOS</Text>
            <TextInput style={styles.textin} placeholder='Buscar' />
            <FlatList
                data={datos}
                renderItem={({ item }) => (<Tarjeta4 results={item} />)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    textin: {
        height: 40,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: "center",
    },
    title:{
        fontSize:30,
        textAlign:"center",
        fontWeight:"bold"
    }
})