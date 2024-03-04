import React from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

function Login() {
  return (
    <View style={styles.viewPai}>
      <LinearGradient
        colors={['#3CB371', '#2E8B57', '#90EE90']}
        style={styles.button}>
        <Text style={styles.text}>Sign in with Facebook</Text>

        <View style={styles.login}>
          <Image style={styles.imagem} source={require('../desafio1-Borges/imagem.png')} />
          <Text style={styles.titulo}>Seja Bem-Vindo ao EcoLife</Text>
          <TextInput style={styles.forms} placeholder="Digite seu usuário aqui" />
          <TextInput style={styles.forms} placeholder="Digite sua senha aqui" secureTextEntry={true} />
          <Pressable style={styles.logBox} onPress={() => onPress()}>
            <Text>Entrar</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const onPress = () => {
  Alert.alert('Login bem-sucedido');
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E8B57",
    alignItems: "center",
    justifyContent: "center",
  },
  viewPai: {
    flex: 1,
    height: '100%',
  },
  forms: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
    height: 40,
    width: 400,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 80,
    color: "white",
    backgroundColor: "white",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 250,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  imagem: {
    width: 100,
    height: 100,
  },
  logBox: {
    alignItems: "center",
    padding: 20,
    marginTop: 20,
    margin: 10,
    width: 400,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    borderRadius: 80,
    backgroundColor: '#3CB371',
    color: 'white',
  },
  button: {
    flex: 1, // Ensure LinearGradient takes up the full height
  },
  text: {
    // Add any additional styling for the text inside the LinearGradient if needed
  },
});
