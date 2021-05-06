import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import TiraFoto from './TiraFoto';

const ContatoInput = (props) => {
    const [contato, setContato] = useState({nome: '', telefone: ''});
    const capturarNome = (nome) => {
        setContato({nome: nome, telefone: contato.telefone});
    }
    const capturarTelefone = (telefone) => {
        setContato({nome: contato.nome, telefone: telefone});
    }
    return(
        <View style={styles.inputView}>
            {/* Inserção de contatos */}
            <View style={{marginBottom: 15, width: '100%'}}>
                <TextInput placeholder="Nome" style={styles.inputField} onChangeText={capturarNome} value={contato.nome}/>
                <TextInput placeholder="Telefone" style={styles.inputField} onChangeText={capturarTelefone} value={contato.telefone}/>
            </View>
            <TiraFoto onFotoTirada={props.onFotoTirada}/>
            <Button title="Cadastrar" onPress={props.onCadastrar.bind(this, contato)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        width: '90%',
        padding: 12
    },
    inputField: {
        height: 30,
        marginBottom: 10,
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        marginBottom: 4,
        padding: 2
    }
});

export default ContatoInput;