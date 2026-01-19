
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Checkbox() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, checked && styles.checked]}
        onPress={() => setChecked(!checked)}
      />
      <Text style={styles.label}>I am self-employed</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Horizontal alignment
    alignItems: 'center', // Vertically center
    margin: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#333',
    marginRight: 10,
    borderRadius: 4,
    marginTop:10,

  },
  checked: {
    backgroundColor: '#4CAF50', // Green when checked
  },
  label: {
    fontSize: 16,
    fontWeight:'bold',
    marginTop:10,
  },
});
