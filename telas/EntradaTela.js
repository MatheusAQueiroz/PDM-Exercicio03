import React from 'react'
import { StyleSheet, View } from 'react-native'

import ContatoInput from '../components/ContatoInput'

const EntradaTela = (props) => {
    return (
        <View style={styles.container}>
            <ContatoInput {...props}/>
        </View>
    )
}

EntradaTela.navigationOptions = () => {
    return {
        headerTitle: "Novo Contato"
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      alignItems: 'center'
    }
});

export default EntradaTela
