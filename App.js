import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function BMIApp() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  const [BMI, setBMI] = useState(0);

  const calcularBMI = () => {
    const nuevoBMI = peso / (altura * altura);
    setBMI(nuevoBMI);

    
  };

  return (
    <SafeAreaView style={styles.contenedor}>

     <View style={styles.con}>

     <Text style={styles.titulo}>Calculador IMC</Text>

<View style={styles.Cont1}>
  <View style={styles.det}>
    <Text style={styles.Text}>Ingresa tu Peso</Text>
    <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder='tu peso'
      onChangeText={setPeso}
      value={peso.toString()}
    />
  </View>

  <View style={styles.det}>
    <Text style={styles.Text}>Ingresa tu Altura</Text>
    <TextInput
      style={styles.input}
      keyboardType='numeric'
      placeholder='tu altura'
      onChangeText={setAltura}
      value={altura.toString()}
    />
  </View>

  <View style={styles.det2}><Button onPress={calcularBMI} title='Calcular' color="black" /></View>

</View>


     </View>


     <View style={styles.cont2}>
  <Text>El IMC es de: {BMI.toFixed(2)}</Text>
</View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    flex: 1,
    backgroundColor: '#d8e2dc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    padding: 30,
    fontSize: 24,
    textAlign: 'center',
  },

  Cont1: {
    width: '50%',
  },

  det: {
    borderRadius:9,
    marginVertical: 11,
    backgroundColor: '#eff6e0',
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  Text: {
    paddingTop: 11,
    fontSize: 14,
  },

  input: {
    
    backgroundColor: 'white',
    padding: 40,
    marginVertical: 9,
    paddingVertical: 1,
    marginHorizontal: 13,
    textAlign:'center',
    
  },

  cont2: {

    marginTop:22,
    backgroundColor:'white',
    height:50,
    width:220,
    borderRadius:9,
    alignItems: 'center',
    justifyContent: 'center',
  },

  con: {
    borderRadius:9,
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },

  det2: {
    borderRadius:9,
    marginVertical: 19,
    justifyContent: 'center',
    alignItems: 'center',
  
  },

  
});
