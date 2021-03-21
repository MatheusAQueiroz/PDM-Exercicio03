import React from 'react'
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { HeaderButton } from 'react-navigation-header-buttons'
import Cores from '../constantes/Cores';

const BotaoCabecalho = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={23}
            color={Platform.OS === 'android' ? 'black' : Cores.primary}
        />
    );
};

export default BotaoCabecalho;
