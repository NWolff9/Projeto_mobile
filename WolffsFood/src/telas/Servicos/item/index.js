import React from 'react';
import {Text} from 'react-native';

export default function Item(nome,localizacao){
    return <>
        <Text>{nome}</Text>
        <Text>{localizacao}</Text>
    
    </>

}
