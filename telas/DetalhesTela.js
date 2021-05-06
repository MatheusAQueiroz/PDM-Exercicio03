import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DetalhesTela = (props) => {
    return (
        <View>

        </View>
    );
}

DetalhesTela.naviagtionOptions = (dadosNav) => {
    return {
        headerTitle: dadosNav.navigation.getParam('nomeContato')
    }
}

export default DetalhesTela;
