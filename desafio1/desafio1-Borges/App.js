import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert, ScrollView, TouchableOpacity  } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onPress = () => {
    // Verificar se as credenciais são corretas
    if (username === 'admin' && password === '1234') {
      // Navegar para a próxima tela usando a navegação fornecida por props
      navigation.navigate('MyTabs'); // 'Home' é o nome da tela de destino
    } else {
      Alert.alert('Credenciais incorretas. Tente novamente.');
    }
  };

  return (
    <View style={styles.viewPai}>
      <LinearGradient colors={['#3CB371', '#2E8B57', '#90EE90']} style={styles.button}>
        <View style={styles.login}>
          <Image style={styles.imagem} source={require('../desafio1-Borges/LogoEmpresa.png')} />
          <Text style={styles.titulo}>Seja Bem-Vindo ao EcoLife</Text>
          <TextInput
            style={styles.forms}
            placeholder="Digite seu usuário aqui"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={styles.forms}
            placeholder="Digite sua senha aqui"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Pressable style={styles.logBox} onPress={() => onPress({ navigation })}>
            <Text>Entrar</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const TabBottom = createBottomTabNavigator();
function MyTabs() {
  return (
    <TabBottom.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#3a9969"
      }}>
      <TabBottom.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='home' size={20} color={'#3a9969'} />
            } else {
              return <Ionicons name='home-outline' size={20} color={'#3a9969'} />
            }
          },
        }} />
      <TabBottom.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: "Perfil",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='person' size={20} color={'#3a9969'} />
            } else {
              return <Ionicons name='person-outline' size={20} color={'#3a9969'} />
            }

          },
        }} />
      <TabBottom.Screen
        name="Contato"
        component={Contato}
        options={{
          tabBarLabel: "Contato",
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {
            if (focused) {
              return <Ionicons name='bulb' size={20} color={'#3a9969'} />
            } else {
              return <Ionicons name="bulb-outline" size={20} color={'#3a9969'} />
            }

          },
        }} />
    </TabBottom.Navigator>
  );
}

function Home({ navigation }) {
  const handleLogout = () => {
    Alert.alert(
      'Confirmação',
      'Deseja realmente sair?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Confirmar',
          onPress: () => {
            // Lógica de logout aqui (pode incluir limpar o estado, etc.)
            // Navegar de volta para a tela de login após o logout
            navigation.navigate('Login');
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <ScrollView style={styles.Home}>
      <View style={styles.quemSomosContainer}>
        <Image style={styles.telaHomeImagem} source={require('../desafio1-Borges/LogoEmpresa.png')} />
        <Text style={styles.quemSomos}>Sobre Nós</Text>
        <TouchableOpacity style={styles.botaoLogout} onPress={handleLogout}>
        <Text style={styles.textoLogout}>Logout</Text>
      </TouchableOpacity>
      </View>
      <Text style={[styles.historia, { textAlign: 'center' }]}>Nossa História com a Natureza 🏡</Text>
      <Text style={[styles.historia2, { textAlign: 'justify' }]}>A EcoLife é uma empresa visionária que surgiu no ano de 2020, inspirada pela necessidade de promover soluções sustentáveis e inovadoras em um momento desafiador da história global - a pandemia. Com o compromisso inabalável com a biodiversidade e a preservação da natureza no coração de sua missão, a EcoLife rapidamente se destacou como uma força impulsionadora para a mudança positiva no cenário brasileiro.</Text>

      {/* Container for the images with flexDirection set to 'row' */}
      <ScrollView horizontal={true}>
        <View style={{ flexDirection: 'row' }}>
          <Image style={styles.imagensGrid} source={require('../desafio1-Borges/natureza1.jpg')} />    
          <Image style={styles.imagensGrid} source={require('../desafio1-Borges/natureza2.png')} />    
          <Image style={styles.imagensGrid} source={require('../desafio1-Borges/natureza3.webp')} />    
          <Image style={styles.imagensGrid} source={require('../desafio1-Borges/natureza4.webp')} /> 
        </View>
      </ScrollView>
      <Text style={[styles.historia2, { textAlign: 'justify' }]}>Desde o seu início, a EcoLife tem dedicado seus esforços a desenvolver e implementar práticas que equilibram o progresso econômico com a preservação ambiental. Nossa empresa acredita que é possível construir um futuro sustentável, onde as comunidades prosperem em harmonia com a natureza exuberante do Brasil.</Text>
      <Text style={[styles.historia2, { textAlign: 'justify' }]}>A EcoLife é mais do que uma empresa; é uma comunidade dedicada a criar um impacto positivo duradouro no meio ambiente e na sociedade.</Text>
    </ScrollView>
  );
}

function Perfil() {
  return (
    <View style={styles.usuario}>
      <Image style={styles.imagemPerfil} source={require('../desafio1-Borges/imagemPerfil.jpeg')} />  
      <Text style={styles.tituloPerfil}>Borges</Text>
      <Text style={styles.textoPerfil}>Informações Pessoais:</Text>
      <Text style={styles.textoInformacoes}>•E-mail: administradorBorges@gmail.com</Text>
      <Text style={styles.textoInformacoes}>•Cidade Residente: Dubai</Text>
      <Text style={styles.textoInformacoes}>•Telefone: 85 28 3156-127</Text>
    </View>
  );
}

function Contato() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [dadosEnviados, setDadosEnviados] = useState(false);

  const enviarMensagem = () => {
    setDadosEnviados(true);
  };

  return (
    <ScrollView style={styles.formulario}>
      <View>
        <Text style={styles.title}>Página de Contato</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={(text) => setNome(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Telefone"
          value={telefone}
          onChangeText={(text) => setTelefone(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mensagem"
          multiline
          numberOfLines={4}
          value={mensagem}
          onChangeText={(text) => setMensagem(text)}
        />
        <Pressable style={styles.botaoEnviar} onPress={enviarMensagem}>
          <Text>Enviar</Text>
        </Pressable>
        {dadosEnviados && (
          <View style={styles.dadosEnviadosContainer}>
            <Text style={styles.dadosEnviados}>Dados Enviados:</Text>
            <Text>Nome: {nome}</Text>
            <Text>E-mail: {email}</Text>
            <Text>Telefone: {telefone}</Text>
            <Text>Mensagem: {mensagem}</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}





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
  formulario: {
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  botaoEnviar: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2E8B57',
    padding: 10,
    borderRadius: 5,
    marginBottom: 16,
  },
  dadosEnviadosContainer: {
    marginTop: 16,
  },
  dadosEnviados: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  forms: {
    alignContent: "center",
    justifyContent: "center",
    marginTop: 25,
    height: 40,
    width: 400,
    borderWidth: 1,
    paddingLeft: 10,
    borderRadius: 80,
    color: "black",
    backgroundColor: "white",
  },
  login: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 0,
  },
  quemSomosContainer: {
    flexDirection: 'row', // Ajusta o layout para ser em linha (horizontal)
    alignItems: 'center', // Centraliza os itens verticalmente
    marginLeft: 15, // Ajusta o espaçamento à esquerda
  },
  quemSomos: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A9969',
    marginLeft: 15, // Adiciona espaçamento entre a imagem e o texto
  },
  quemÉ: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3A9969',
    marginLeft: 3, // Adiciona espaçamento entre a imagem e o texto
  },
  telaHomeImagem: {
    width: 150,
    height: 150,
  },
  historia: {
    fontSize: 20,
    color: '#3A9969',
    marginLeft: 15, // Adiciona espaçamento entre a imagem e o texto
    fontWeight: 'medium',
    marginBottom: 5,
  },
  historia2: {
    margin: 10,
    fontWeight: 'medium', // Ajusta o espaç
  },
  imagensGrid: {
    flexDirection: 'row' , // Ajusta o layout para ser em linha (horizontal) // Centraliza os itens verticalmente
    width: 150,
    margin: 10,
    height: 150,
  },
  imagem: {
    width: 300,
    height: 300,
  },
  logBox: {
    alignItems: "center",
    padding: 20,
    marginTop: 25,
    margin: 10,
    width: 400,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    borderRadius: 80,
    backgroundColor: '#90EE90',
    color: 'white',
  },
  button: {
    flex: 1, // Ensure LinearGradient takes up the full height
  },
  text: {
    // Add any additional styling for the text inside the LinearGradient if needed
  },
  imagemPerfil: {
    width: 150,
    height: 150,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 120,
    marginTop: 70,
  },
  tituloPerfil: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#3A9969',
    marginLeft: 150,
    marginTop: 20,
  },
  textoPerfil: {
    marginTop: 40,
    margin: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'center',
  },
  textoInformacoes: {
    margin: 20,
    fontSize: 15,
  },
  tituloNos: {
    fontSize: 30,
    alignItems: 'center',
  },
  textoLogout: {
    marginLeft: 35,
    fontSize: 'medium',
    color: 'green',
  }
});
