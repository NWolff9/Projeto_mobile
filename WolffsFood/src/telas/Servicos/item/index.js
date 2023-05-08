import React from 'react';
import { Text, View, Button } from 'react-native';
import estilos from './estilos';
import CampoInteiro from '../../../components/CampoInteiro';

export default function Item({ nome, restaurante, preco }) {
    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{restaurante}</Text>
                <Text style={estilos.preco}>{preco}</Text>
            </View>

            <View style={estilos.carrinho}>
                <View>
                    <view style={estilos.valor}>
                        <Text style={estilos.descricao}>Quantidade:</Text>
                        <CampoInteiro valor='0'/>
                    </view>
                  

                    <view style={estilos.valor}>
                        <Text style={estilos.descricao}>Preço:</Text>
                        <Text style={estilos.preco}>0</Text>
                    </view>

                </View>

                <View>
                    <Button title="Adcionar" />
                </View>

            </View>
            <View style={estilos.divisor} />
        </>

    )


}
