import React from "react";
import {StatusBar, Text, FlatList} from "react-native";
import Item from "./item";

const restaurantes = [
    {
    id:1,
    nome:"Subway",
    localizacao: "Av amoreiras"
    },
    {
        id:2,
        nome:"McDonald",
        localizacao: "Centro de Campinas"
    }
]

export default function Servicos(){
    return(
       <StatusBar>
            <Text>Testando a pagina de serviços</Text>

            <FlatList
                data={restaurantes}
                renderItem={({item: {nome}}) => <Text> {nome}</Text> }
                keyExtractor={(id) => String (id)} />
       </StatusBar>
        
    )
}

