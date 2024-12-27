import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function Tarjeta4(props: any) {

    const [modalVisible, setModalVisible] = useState(false)
    function detalles(nombre: string) {
        setModalVisible(true)
    }

    return (
        <View>
            <TouchableOpacity  style={styles.container} onPress={() => detalles(props.results.name.first)}>
                <Text style={styles.titulo}>{props.results.name.first}</Text>
                <Text style={styles.descripcion}>{props.results.name.last}</Text>
                <View style={styles.fila}>
                    <Image source={{ uri: props.results.picture.large }} style={styles.img} />
                    <Text style={styles.descripcion}> Genero:{props.results.gender}</Text>
                </View>

            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalles del personaje</Text>
                        <Text style={styles.modalText}>Nombre: {props.results.name.first}</Text>
                        <Text style={styles.modalText}>Apellido: {props.results.name.last}</Text>
                        <Text style={styles.modalText}>Correo: {props.results.email}</Text>
                        <Text style={styles.modalText}>Telefono: {props.results.phone}</Text>
                        <Text style={styles.modalText}>Genero: {props.results.gender}</Text>
                        <Image style={styles.modalImg} source={{ uri:props.results.picture.large }} />


                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5cf5a1',
        margin: 10,
        borderRadius: 20

    },
    img: {
        height: 100,
        width: 100,
        resizeMode: "contain",
        borderRadius: 50,
        alignSelf: 'center'

    },
    descripcion: {
        fontSize: 20,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        padding: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 20,
        width: '80%'
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center'
    },
    modalText: {
        fontSize: 16,
        color: '#666',
        padding: 10
    },
    modalButton: {
        backgroundColor: '#7ff02d',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalButtonText: {
        fontSize: 16,
        color: '#fff'
    },
    modalImg: {
        height: 180,
        width: 180,
        resizeMode: "contain",
        borderRadius: 60,
        marginBottom: 20,
        alignSelf: 'center'
    },
    fila: {
        flexDirection: "row",
        padding: 10
    }
})