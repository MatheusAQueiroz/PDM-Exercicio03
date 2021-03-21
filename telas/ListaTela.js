import React, { useState } from 'react';
import { StyleSheet, View, Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import ContatoItem from '../components/ContatoItem';
import { BotaoCabecalho } from '../components/BotaoCabecalho';

const ListaTela = (props) => {
    const [contatos, setContatos] = useState([]);
    const [contador, setContador] = useState(0);
    // Funções de ação
    const adicionarContato = (contato) => {
        setContatos(contatos => {
            setContador(contador + 1);
            return [...contatos, {key: contador.toString(), value: contato}];
        });
        console.log(contatos);
    }
    const removerContato = (keyASerRemovida) => {
        setContatos(contatos => {
        return contatos.filter(contato => (contato.key !== keyASerRemovida));
        })
    }
    const params = props.navigation.state.params;
    if (params && params.contato) {
        adicionarContato(params.contato);
        props.navigation.state.params.contato = null;
    }
    return (
        <View style={styles.container}>
            <FlatList
                data={contatos}
                style={{width: '80%'}}
                renderItem={ 
                    contato =>
                    <ContatoItem chave={contato.item.key} onDelete={removerContato} contato={contato.item.value}/>
                }  
            />
        </View>
    )
};

ListaTela.navigationOptions = dadosNav => {
    return {
        headerTitle: "Lista de Contatos",
        headerRight:
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'andorid' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('Entrada')}} />
            </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      alignItems: 'center'
    }
});

export default ListaTela;
