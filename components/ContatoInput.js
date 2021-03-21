import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

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
            {/* Inserção de Lembretes */}
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-between'}}>
                <TextInput placeholder="Nome" style={styles.inputField} onChangeText={capturarNome} value={contato.nome}/>
                <TextInput placeholder="Telefone" style={styles.inputField} onChangeText={capturarTelefone} value={contato.telefone}/>
            </View>
            <Button title="Cadastrar" onPress={ () => {props.navigation.navigate('Lista', {contato: contato})}}></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    inputView: {
        width: '80%',
        padding: 12
    },
        inputField: {
        flex: .49,
        borderBottomColor: 'black', 
        borderBottomWidth: 1,
        marginBottom: 4,
        padding: 2
    }
});

export default ContatoInput;