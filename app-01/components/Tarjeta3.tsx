import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from 'react-native';

export default function Tarjeta3({ datos }: any) {
    const [modalVisible, setModalVisible] = useState(false);

    function detalles(name: string) {
        setModalVisible(true);
    }

    return (
        <View style={styles.tarjeta}>
            <TouchableOpacity onPress={() => detalles(datos.name.first)} style={styles.tarjetaTouchable}>
                <Text style={styles.titulo}>{datos.name.first}</Text>
                <Text style={styles.descripcion}>{datos.occupation}</Text>
                <Image style={styles.img} source={{ uri: datos.images.main }} />
            </TouchableOpacity>
            <Modal
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Detalles del personaje</Text>
                        <Text style={styles.modalText}>Nombre: {datos.name.first}</Text>
                        <Text style={styles.modalText}>Ocupación: {datos.occupation}</Text>
                        <Image style={styles.modalImg} source={{ uri: datos.images.main }} />
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                            <Text style={styles.modalButtonText}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    tarjeta: {
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tarjetaTouchable: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        padding: 10,
    },
    descripcion: {
        fontSize: 16,
        color: '#666',
        padding: 10,
    },
    img: {
        width: 180,
        height: 180,
        resizeMode: 'contain',
        borderRadius: 10,
        alignSelf: 'center',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#bcf1e2',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        color: '#666',
        padding: 10,
    },
    modalImg: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 10,
        marginBottom: 20,
        alignSelf: 'center',
    },
    modalButton: {
        backgroundColor: '#7ff02d',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    modalButtonText: {
        fontSize: 16,
        color: '#fff',
    },
});