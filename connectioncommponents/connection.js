
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet ,  TouchableOpacity } from 'react-native';

const ConnectionForm = ({ onSaveConnection }) => {
  const [method, setMethod] = useState('');
  const [number, setNumber] = useState('');

  const handleSave = () => {
    onSaveConnection(method, number);
    setMethod('');
    setNumber('');
  };

  return (
    <View style={styles.container}>
      <View >
        <Text style= {styles.title}>Club Connection</Text>
      </View>
      <Text style={styles.label}>Connection Method:</Text>
      <TextInput
        style={styles.input}
        value={method}
        onChangeText={setMethod}
      />

      <Text style={styles.label}>Connection Number:</Text>
      <TextInput
        style={styles.input}
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
      />
 
 <TouchableOpacity style={styles.buttonContainer} onPress={handleSave}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
   
    </View>
  )
};

const styles = StyleSheet.create({
  title:{
    color:"#000",
    marginBottom: 10,
    textAlign:"center",
    fontWeight:"bold",
    fontSize: 20,
   borderColor: "black",

  },
  input:{
    fontSize: 18,
    color: "#000",
    marginBottom: 50,
    paddingHorizontal: 5,
    paddingVertical:10,
    borderRadius: 6,
    borderWidth: .5
  },
  container:{
   padding: 10,

  },
  label:{
    fontSize: 15,
    fontWeight:"bold",
    color: "#000"
    
  },
  buttonContainer: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 10,
    width: 110,
    left: 110

  },
  buttonText: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: "center"
  
  },
})
export default ConnectionForm;