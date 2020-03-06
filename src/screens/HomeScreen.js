import React, {Component} from 'react';
import { Button,View,Text,StyleSheet, ImageBackground } from 'react-native'
import Modal2 from '../components/Modal'

class HomeScreen extends Component {
    state = {
        Modal: false,
        dayOfWeek: "",
        principal: "",
        vegetariano: "",
        salada: "",
        acompanhamentos: "",
        guarnição: "",
        suco: "",
    }


    showModal = (dayOfWeek, principal, vegetariano, salada, acompanhamentos, guarnicao, suco) => {
        this.setState({
            Modal: true,
            dayOfWeek,
            principal,
            vegetariano,
            salada,
            acompanhamentos,
            guarnicao,
            suco,  
        })
    }

    closeModal = () => {
        this.setState({
            ...this.state,
            Modal: false
        })
    }

    render(){
        return (
            <ImageBackground source={require('../img/teste.jpg')} style={{width: '100%', height: '100%'}}>
            <View style={styles.container}>
                <View style={[styles.spacing]}>
                    <Button
                    color="#FFBF00"
                    title="Segunda-feira"
                    onPress={() => this.showModal("Segunda-Feira","Feijoada e Frango assado","Omelete de legumes", "Acelga, R. Roxo, Tomate e Passas", "Arroz branco, Arroz integral e Feijão Corda", "Farofa", "Acerola")}
                    />
                </View>
                <View style={styles.spacing} >
                    <Button
                    color="#FFBF00"
                    title="Terça-feira"
                    onPress={() => this.showModal("Terça-feira","Feijoada e Frango assado","Omelete de legumes", "Acelga, R. Roxo, Tomate e Passas", "Arroz branco, Arroz integral e Feijão Corda", "Farofa", "Acerola")}
                    />
                </View>
                <View style={styles.spacing} >
                    <Button
                    color="#FFBF00"
                    title="Quarta-feira"
                    onPress={() => this.showModal("Quarta-feira","Feijoada e Frango assado","Omelete de legumes", "Acelga, R. Roxo, Tomate e Passas", "Arroz branco, Arroz integral e Feijão Corda", "Farofa", "Acerola")}
                    />
                </View>
                <View style={styles.spacing} >
                    <Button
                    color="#FFBF00"
                    title="Quinta-feira"
                    onPress={() => this.showModal("Quinta-feira","Feijoada e Frango assado","Omelete de legumes", "Acelga, R. Roxo, Tomate e Passas", "Arroz branco, Arroz integral e Feijão Corda", "Farofa", "Acerola")}
                    />
                </View>
                <View style={styles.spacing} >
                    <Button
                    color="#FFBF00"
                    title="Sexta-feira"
                    onPress={() => this.showModal("Sexta-feira","Feijoada e Frango assado","Omelete de legumes", "Acelga, R. Roxo, Tomate e Passas", "Arroz branco, Arroz integral e Feijão Corda", "Farofa", "Acerola")}
                    />
                </View>
                <Modal2 show={this.state.Modal} dayOfWeek={this.state.dayOfWeek} principal={this.state.principal} vegetariano={this.state.vegetariano} salada={this.state.salada} acompanhamentos={this.state.acompanhamentos} guarnicao={this.state.guarnicao} suco={this.state.suco} closeModal={this.closeModal}></Modal2>
            </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
        paddingVertical: 20,
        flex: 1,
        marginHorizontal: 16,
        textAlign: 'center',
        marginTop: 175
    },
    spacing:{
        paddingTop:10,
    }
})

export default HomeScreen