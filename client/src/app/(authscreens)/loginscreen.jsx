import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await fetch('http://10.0.2.2:3000/users/sign_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Success', 'User logged in successfully!');
        // Puedes guardar el token de autenticación aquí y usarlo para futuras solicitudes
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.error);
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Inicia sesión para poder guardar tus tareas!</Text>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder='Correo electrónico'
          style={styles.textInput}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder='Contraseña'
          style={styles.textInput}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity onPress={handleLogin} style={styles.buttonContainer}>
        <Text style={styles.buttonStyles}>Iniciar sesión</Text>
      </TouchableOpacity>
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
  buttonContainer: {
    marginTop: 10,
  },
  buttonStyles: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    width: 120,
    height: 30,
    textAlign: 'center',
    justifyContent: 'center'
  }
});
