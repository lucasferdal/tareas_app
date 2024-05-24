import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Inicia sesión para poder guardar tus tareas!</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder='Correo electrónico'
          style={styles.textInput}
        />
        <TextInput
          placeholder='Contraseña'
          style={styles.textInput}
          secureTextEntry
        />
      </View>
      <TouchableOpacity onPress={() => router.push('/registerscreen')}>
        <Text style={styles.linkText}>No tienes un usuario? Regístrate para crearte uno!</Text>
      </TouchableOpacity>
    </View>
  );
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
  },
  textInputContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 20,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'gray',
    width: '80%',
    height: 40,
    paddingLeft: 10,
  },
  linkText: {
    color: 'blue',
    marginTop: 20,
  },
});
