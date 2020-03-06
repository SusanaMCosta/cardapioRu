import React, {Component} from 'react';
import {Button ,Modal, Text, TouchableHighlight, TouchableOpacity, View, Alert, StyleSheet, ImageBackground} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ModalExample = ({show, dayOfWeek, principal, vegetariano, salada, acompanhamentos, guarnicao, suco, closeModal}) => {
  
  //2024282
  return (
    <View style={{marginTop: 22}}>
      <Modal
        animationType="slide"
        transparent={false}
        visible={show}
        >
        <ImageBackground source={require('../img/fundo.jpg')} style={{width: "100%", height: '100%'}}>
        <View style={styles.container}>
          <View style={styles.fundo}>
            <Text style={styles.day}>{dayOfWeek}</Text>
            <Text style={styles.horario}>Almoço</Text>
            <Text style={styles.prato}>Principal</Text>
            <Text style={styles.refeicoes}>{principal}</Text>
            <Text style={styles.prato}>Vegetariano</Text>
            <Text style={styles.refeicoes}>{vegetariano}</Text>
            <Text style={styles.prato}>Salada</Text>
            <Text style={styles.refeicoes}>{salada}</Text>
            <Text style={styles.prato}>Acompanhamentos</Text>
            <Text style={styles.refeicoes}>{acompanhamentos}</Text>
            <Text style={styles.prato}>Guarnição</Text>
            <Text style={styles.refeicoes}>{guarnicao}</Text>
            <Text style={styles.prato}>Suco</Text>
            <Text style={styles.refeicoes}>{suco}</Text>
            <Text style={styles.horario}>Jantar</Text>
            <Text style={styles.prato}>Principal</Text>
            <Text style={styles.refeicoes}>{principal}</Text>
            <Text style={styles.prato}>Vegetariano</Text>
            <Text style={styles.refeicoes}>{vegetariano}</Text>
            <Text style={styles.prato}>Salada</Text>
            <Text style={styles.refeicoes}>{salada}</Text>
            <Text style={styles.prato}>Acompanhamentos</Text>
            <Text style={styles.refeicoes}>{acompanhamentos}</Text>
            <Text style={styles.prato}>Guarnição</Text>
            <Text style={styles.refeicoes}>{guarnicao}</Text>
            <Text style={styles.prato}>Suco</Text>
            <Text style={styles.refeicoes}>{suco}</Text>
          </View>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => closeModal()}>
              <Text style={styles.botao}>Fechar</Text>
          </TouchableOpacity>
               
        </View>
        </ImageBackground>
      </Modal>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    paddingVertical:70,
    paddingHorizontal:30,
  },
  fundo: {
    paddingBottom: 5,
    borderRadius: 10,
    backgroundColor: 'white'
  },
  day: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFA500'
  },
  horario: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    backgroundColor:'#FFA500',
    color: 'white',
    marginBottom: 5,
    marginTop: 5,
    borderRadius: 5,
    marginRight: 10,
    marginLeft: 10
  },
  prato: {
    fontSize: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FFA500'
  },
  refeicoes: {
    textAlign: 'center',
    color: '#783C00'
  },
  botao: {
    alignItems: 'center',
    backgroundColor: '#FFBF00',
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  }
})

export default ModalExample