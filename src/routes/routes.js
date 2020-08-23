import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ListaInvestimentos from '../pages/listaInvestimentos';
import {ResgatePersonalizado} from '../pages/resgatePersonalizado';
import {StatusBar} from 'react-native';

const Stack = createStackNavigator();
// paleta de cores do app ---> https://www.bb.com.br/docs/pub/siteEsp/dilog/dwn/mbbCC11.3192.pdf

const opcoesNavegacao = {
  title: 'Resgate',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#fff',
    alignSelf: 'center',
  },
  headerStyle: {
    backgroundColor: '#0038A8',
    borderBottomColor: '#F9DD16',
    borderBottomWidth: 4,
  },
};

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0038A8" barStyle={'light-content'} />
      <Stack.Navigator screenOptions={opcoesNavegacao}>
        <Stack.Screen name="home" component={ListaInvestimentos} />
        <Stack.Screen name="resgate" component={ResgatePersonalizado} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
