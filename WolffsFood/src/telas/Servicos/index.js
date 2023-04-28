import React from "react";
import {  Text, FlatList, View } from "react-native";
import Item from "./item";

const lanches = [
    {
        id: 1,
        nome: "Carne Seca com Cream Cheese",
        restaurante: "Subway",
        preco: 29.90
    },
    {
        id: 2,
        nome: "McLanche Feliz",
        restaurante: "McDonald",
        preco: 14.90
    }
]

export default function Servicos() {
    return (

            <View>
              

                <FlatList
                    data={lanches}
                    renderItem={({ item }) => <Item {...item} />}
                    keyExtractor={({ id }) => String(id)} />
                        

            </View>



    )
}

