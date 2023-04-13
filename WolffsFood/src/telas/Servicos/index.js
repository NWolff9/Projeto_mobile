import React from "react";
import {SafeAreaView, Text, View} from "react-native";

const restaurantes = [
    {
    id:1,
    nome:"Subway",
    },
    {
        id:2,
        nome:"McDonald"
    }
]

export default function Servicos(){
    return(
       <SafeAreaView>
            <Text>Testando a pagina de serviços</Text>
       </SafeAreaView>
        
    )
}

