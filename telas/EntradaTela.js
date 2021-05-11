import React, { useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

import ContatoInput from '../components/ContatoInput';

import * as contatosActions from '../store/contatos-actions';
import { useDispatch } from 'react-redux';

const EntradaTela = (props) => {
    const [locCarregando, setLocCarregando] = useState(false);
    const [imagemURI, setImagemURI] = useState();
    const fotoTirada = imagemURI => {
        setImagemURI(imagemURI);
    }
    const dispatch = useDispatch();
    const adicionarContato = async (contato) => {
        setLocCarregando(true);
        const locPermission = await Permissions.askAsync(Permissions.LOCATION);
        if (locPermission.status !== 'granted') {
            Alert.alert('Permissão Negada','É necessário garantir a permissão de localização para salvar contatos.',[{text: 'OK'}]);
            setLocCarregando(false);
            return;
        }
        const p = await Location.getCurrentPositionAsync();
        dispatch(contatosActions.addContato(contato.nome, contato.telefone, imagemURI, Math.floor(p.timestamp), p.coords.latitude, p.coords.longitude));
        setLocCarregando(false);
        props.navigation.goBack();
    }
    return (
        <View style={styles.container}>
            <ContatoInput onFotoTirada={fotoTirada} onCadastrar={adicionarContato} {...props}/>
            { locCarregando &&
                <View style={styles.sobreposicaoCarregamento}>
                    <ActivityIndicator/>
                </View>
            }
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
    },
    sobreposicaoCarregamento: {
        backgroundColor: '#55555511',
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default EntradaTela;
