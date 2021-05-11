import React, { useEffect } from 'react';
import { Platform, FlatList } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';

import ContatoItem from '../components/ContatoItem';
import BotaoCabecalho from '../components/BotaoCabecalho';

const ListaTela = (props) => {
    const contatos = useSelector(estado => estado.contatos.contatos);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(contatosActions.listarContatos())
    }, [dispatch])
    return (
        <FlatList
            data={contatos}
            keyExtractor={contato => contato.id}
            renderItem={contato =>
                <ContatoItem 
                    onSelect={() => props.navigation.navigate('Detalhes', {idContato: contato.item.id, nomeContato: contato.item.nome})}
                    contato={contato.item}
                />
            }
        />
    )
};

ListaTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: 'Lista de Contatos',
        headerRight: () =>
            <HeaderButtons
                HeaderButtonComponent={BotaoCabecalho}>
                <Item
                    title="Adicionar"
                    iconName={Platform.OS === 'andorid' ? 'md-add' : 'ios-add'}
                    onPress={() => { dadosNav.navigation.navigate('Entrada')}} />
            </HeaderButtons>
    }
};

export default ListaTela;
