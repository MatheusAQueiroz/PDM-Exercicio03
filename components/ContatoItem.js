import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const ContatoItem = (props) => {
    return (
        <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
            <View style={styles.itemView}>
                <Text>{`Nome: ${props.contato.nome} - Telefone: ${props.contato.telefone}`}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemView: {
        flexDirection: 'row',
        borderColor: '#2196F3',
        margin: 10,
        padding: 12,
        borderWidth: 3
      }
});

export default ContatoItem;
