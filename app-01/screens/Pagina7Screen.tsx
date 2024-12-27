import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function Pagina7Screen() {
    const [kelvin, setKelvin] = useState('');
    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [mensaje, setMensaje] = useState('');

    const convertir = () => {
        const kelvinValue = parseFloat(kelvin);
        if ( kelvinValue <= 0) {
            setMensaje('La temperatura en Kelvin no puede ser negativa');
            return;
        }

        const celsiusValue = kelvinValue - 273.15;
        const fahrenheitValue = (celsiusValue * 9 / 5) + 32;

        if (celsiusValue > 100) {
            setMensaje('Se ha superado la temperatura de ebullición del agua (100°C)');
            setCelsius('100.00');
        } else {
            setMensaje('');
            setCelsius(celsiusValue.toFixed(2));
        }


        setFahrenheit(fahrenheitValue.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Conversor de temperatura</Text>
            <TextInput
                style={styles.input}
                placeholder="Ingrese la temperatura en Kelvin"
                value={kelvin}
                onChangeText={(text) => setKelvin(text)}
                keyboardType="numeric"
            />
            <Button title="Convertir" onPress={convertir} />
            <Text style={styles.resultado}>Celsius: {celsius}</Text>
            <Text style={styles.resultado}>Fahrenheit: {fahrenheit}</Text>
            <Text style={styles.mensaje}>{mensaje}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        width: 200,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 20,
        textAlign: 'center',
        borderRadius: 10,
    },
    resultado: {
        fontSize: 18,
        marginBottom: 10,
    },
    mensaje: {
        fontSize: 16,
        color: 'red',
        marginBottom: 20,
    }
})