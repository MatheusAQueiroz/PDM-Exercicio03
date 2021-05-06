import React from 'react';
import Cores from '../constantes/Cores';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
    return (
        <TouchableOpacity style={styles.item} onPress={props.onSelect}>
            <Image style={styles.imagem} source={{uri: props.imagemUri}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{props.nome}</Text>
                <Text style={styles.telefone}>{props.telefone}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imagem: {
        width: 60,
        height: 60,
        borderRadius: 35,
        backgroundColor: '#ccc',
        borderColor: Cores.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    nome: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    telefone: {
        color: '#555',
        fontSize: 14
    }
});

export default ContatoItem;
