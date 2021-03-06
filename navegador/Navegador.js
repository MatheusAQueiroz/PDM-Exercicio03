import { Platform } from 'react-native'

import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Cores from '../constantes/Cores';

import ListaTela from '../telas/ListaTela';
import EntradaTela from '../telas/EntradaTela';
import DetalhesTela from '../telas/DetalhesTela';

const Navegador = createStackNavigator({
    Lista: ListaTela,
    Entrada: EntradaTela,
    Detalhes: DetalhesTela
}, {
    defaultNavigationOptions: {
        headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
    }
});

export default createAppContainer(Navegador);
