import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pagina2Screen() {
const usuarios =[
  { 
    nombre:"Luis Fernandez", 
    edad: 20
  },
  { 
    nombre:"Javier Espinosa", 
    edad: 50
  },
  { nombre:"Andres Carrera",
    edad: 25
  },
]


  
  return (
    <View>
      <Text style={{fontSize:40, textAlign:"center"}}>Usuarios</Text>
      <FlatList
      data={usuarios}
      renderItem={({item}) =>
      <View>
        <Text>{item.nombre}</Text>
        <Text>{item.edad}</Text>
        </View>
      }
      />
    </View>
  )
}

const styles = StyleSheet.create({})