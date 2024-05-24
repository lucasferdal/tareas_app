import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import CryptoJS from 'crypto-js';

export default function RegisterScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Hash the passwords
    const hashedPassword = CryptoJS.SHA256(password).toString();
    const hashedConfirmPassword = CryptoJS.SHA256(confirmPassword).toString();

    // Compare the hashed passwords
    if (hashedPassword === hashedConfirmPassword) {
      // Proceed with the registration process
      Alert.alert('Success', 'Passwords match!');
      // Navigate to another screen or perform further actions
    } else {
      Alert.alert('Error', 'Passwords do not match!');
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
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.linkText}>Registrarse</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/login')}>
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
});
