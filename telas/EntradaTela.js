import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import ContatoInput from '../components/ContatoInput';

import * as contatosActions from '../store/contatos-actions';
import { useDispatch } from 'react-redux';

const EntradaTela = (props) => {
    const [imagemURI, setImagemURI] = useState();
    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }
    const dispatch = useDispatch();
    const adicionarLugar = (contato) => {
        dispatch(contatosActions.addContato(contato.nome, contato.telefone, imagemURI));
        props.navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ContatoInput onFotoTirada={fotoTirada} onCadastrar={adicionarLugar} {...props}/>
        </View>
    );
}

EntradaTela.navigationOptions = (dadosNav) => {
    return {
        headerTitle: "Novo Contato"
    };
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      alignItems: 'center'
    }
});

export default EntradaTela;
