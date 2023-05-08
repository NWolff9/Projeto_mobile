import React from 'react';
import { TextInput } from 'react-native';

export default function CampoInteiro(valor){
    return (
        <TextInput 
    KeyboardType='number-pad'
    selectTextOnFocus
    value = {valor}/>
    )
    
}
