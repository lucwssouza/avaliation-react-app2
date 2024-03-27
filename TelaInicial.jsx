import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import styles from "./styles/global";

function TelaInicial({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <Text style={styles.title}>AVALIAÇÃO DA PALESTRddAS</Text>
      </View>
      <View style={styles.datacontainer}>
        <Text style={styles.data}>DATA: 00/00/0000</Text>
      </View>
      <View style={styles.smiles}>
        <View style={styles.smilesoption}>
          <TouchableOpacity onPress={() => navigation.navigate('Good')}>
            <Image source={require("./assets/good.png")} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
          <View style={styles.select}>
          </View>
        </View>
        <View style={styles.smilesoption}>
          <TouchableOpacity onPress={() => navigation.navigate('Ok')}>
            <Image source={require("./assets/ok.png")} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>
          <View style={styles.select}></View>
        </View>
        <View style={styles.smilesoption}>
          <TouchableOpacity onPress={() => navigation.navigate('Bad')}>
            <Image source={require("./assets/bad.png")} style={{ width: 100, height: 100 }} onPress={() => navigation.navigate('Login')} />
          </TouchableOpacity>
          <View style={styles.select}></View>
        </View>
      </View>
    </View >
  );
}

export default TelaInicial;