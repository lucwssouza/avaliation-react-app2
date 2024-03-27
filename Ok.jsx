import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, } from 'react-native';
import styles from "./styles/global";

function Ok({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <Text style={styles.title}>OK</Text>
            </View>
            <View style={styles.datacontainer}>
                <Text style={styles.data}>DATA: 00/00/0000</Text>
            </View>
            <View style={styles.smiles}>
                <View style={styles.smilesoption}>
                    <Image source={require("./assets/ok.png")} style={{ width: 100, height: 100 }} onPress={() => navigation.navigate('Ok')} />
                    <View style={styles.select}>
                    </View>
                </View>
            </View>
            <View style={styles.hr} />
            <TextInput style={styles.input}></TextInput>
            <View style={styles.buttons}>
                <Button style={styles.btnback} title='Voltar' color={'#111'} onPress={() => navigation.goBack()}></Button>
                <Button title='ENVIAR' color={'#111'} onPress={() => { alert("Enviado com sucesso!") }}></Button>
            </View>
        </View >
    );
}

export default Ok;