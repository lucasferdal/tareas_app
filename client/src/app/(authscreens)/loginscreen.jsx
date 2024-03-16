import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

export default function loginscreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Inicia sesion para poder guardar tus tareas!</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder='Correo electronico'
          style={styles.textInput}
          />
        <TextInput
          placeholder='Contraseña'
          style={styles.textInput}
        />
      </View>
      <Text>
        No tienes un usuario? Registrate para crearte uno!
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    marginVertical: 20,
    fontSize: 16,
    fontFamily: ''
  },
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    width: '80%',
    height: '18%',
    paddingLeft: 10
  }
})