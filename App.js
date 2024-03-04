import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer} from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function App(){
  return (
    <NavigationContainer>
      <MyTabs  />
    </NavigationContainer>
  );
}

const TabBottom = createBottomTabNavigator();

function MyTabs() {
  return (
    <TabBottom.Navigator
      initialRouteName='Home'
      screenOptions={{
        tabBarActiveTintColor: "#3a9969"
      }}>
         <TabBottom.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarLabel: "Home",
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if (focused) {
            return  <Ionicons name='home' size={20} color={'#3a9969'}/>
        } else{
          return <Ionicons name='home-outline' size={20} color={'#3a9969'}/>
        }
          },
      }}/>
      <TabBottom.Screen 
      name="Configurações" 
      component={Configuracoes}
      options={{
        tabBarLabel: "Configurações",
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if (focused) {
            return  <Ionicons name='settings' size={20} color={'#3a9969'}/>
        } else{
          return <Ionicons name='settings-outline' size={20} color={'#3a9969'}/>
        }
      
      },
      }}/>
      <TabBottom.Screen 
      name="Sobre" 
      component={Sobre}
      options={{
        tabBarLabel: "Sobre",
        headerShown: false,
        tabBarIcon: ({focused, size, color}) => {
          if (focused) {
            return  <Ionicons name='person' size={20} color={'#3a9969'}/>
        } else{
          return <Ionicons name='person-outline' size={20} color={'#3a9969'}/>
        }
      
      },
      }}/>
    </TabBottom.Navigator> 
  );
}

function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home do Borges</Text>
    </View>
  );
}

function Configuracoes() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Configurações do Borges</Text>
    </View>
  );
}

function Sobre() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Borges lindo</Text>
    </View>
  );
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2E8B57",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 25,
    },
    titulo: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#fff",
      textAlign: "center",
    }
});
