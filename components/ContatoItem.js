import React from 'react';
import Cores from '../constantes/Cores';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ContatoItem = (props) => {
    const c = props.contato;
    const dataHora = new Date(c.tempo);
    return (
        <TouchableOpacity style={styles.item} onPress={props.onSelect}>
            <Image style={styles.imagem} source={{uri: c.imagem}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.nome}>{c.nome}</Text>
                <Text style={styles.telefone}>{c.telefone}</Text>
                <Text style={styles.dataHora}>{dataHora.toLocaleDateString()}, {dataHora.toLocaleTimeString()}</Text>
                <Text style={styles.coords}>Lat: {c.lat.toFixed(2)}  Lng: {c.lng.toFixed(2)}</Text>                
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
        width: 70,
        height: 70,
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
        fontSize: 18
    },
    telefone: {
        color: '#555',
        fontSize: 14,
        marginBottom: 5
    },
    dataHora: {
        color: '#555',
        fontSize: 12
    },
    coords: {
        color: '#555',
        fontSize: 12
    }
});

export default ContatoItem;
