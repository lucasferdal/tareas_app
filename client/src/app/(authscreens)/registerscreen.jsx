import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from 'react-native';
import { useRouter } from 'expo-router';
import CryptoJS from 'crypto-js';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Password do not match!');
      return;
    }

    try {
      const response = await fetch('http://10.0.2.2:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
            password_confirmation: confirmPassword,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Success', 'User registered successfully!');
        router.push('/loginscreen');
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.errors.join(', '));
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong!');
      console.log(error)
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Crea un usuario para poder guardar tus tareas</Text>
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
        <TextInput
          placeholder='Vuelve a escribir tu contraseña'
          style={styles.textInput}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </View>
      <TouchableOpacity onPress={handleRegister} style={styles.buttonContainer}>
        <Text style={styles.buttonStyles}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/loginscreen')}>
        <Text style={styles.linkText}>Ya tienes un usuario? Click aqui para loguearte</Text>
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
