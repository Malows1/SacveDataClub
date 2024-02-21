
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SavedConnections = ({ savedConnections }) => {
  return (
    <ScrollView style={styles.container}>
      {savedConnections.map((connection, index) => (
        <View key={index} style={styles.connectionContainer}>
          <Text style={styles.methodText}>Method: {connection.method}</Text>
          <Text style={styles.numberText}>Number: {connection.number}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    color:"#0000"
  },
  connectionContainer: {
    marginBottom: 16,
    color:"#0000"
  },
  methodText: {
    fontSize: 16,
    fontWeight: 'bold',
    color:"#000"
  },
  numberText: {
    fontSize: 16,
    color:"#000"
  },
});

export default SavedConnections;