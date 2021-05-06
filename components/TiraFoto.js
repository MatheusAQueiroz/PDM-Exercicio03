import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Cores from '../constantes/Cores';

const TiraFoto = (props) => {
    const [imagemURI, setImagemURI] = useState()
    const tirarFoto = async () => {
        const foto = await Permissions.askAsync(Permissions.CAMERA)
        .then(({status}) => {
            if (status === 'granted')
                return ImagePicker.launchCameraAsync({
                    allowsEditing: true,
                    aspect: [16, 9],
                    quality: 1
                });
            alert('Permita o uso da camera para usar essa função');
        })
        .catch(e => {throw e});
        setImagemURI(foto.uri);
        props.onFotoTirada(foto.uri);
    }
    return (
        <View style={styles.principal}>
            <View style={styles.previewDaImagem}>
                {
                    !imagemURI ?
                    <Text>Nenhuma foto.</Text> :
                    <Image style={styles.imagem} source={{uri: imagemURI}}/>
                }
                
            </View>
            <Button
                title='Tirar foto'
                color={Cores.primary}
                onPress={tirarFoto}
            />
        </View>
    );
}

export default TiraFoto;

const styles = StyleSheet.create({
    principal: {
        alignItems: 'center',
        marginBottom: 15
    },
    previewDaImagem: {
        width: '100%',
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
        borderColor: '#CCC',
        borderWidth: 1
    },
    imagem: {
        width: '100%',
        height: '100%'
    }
});
