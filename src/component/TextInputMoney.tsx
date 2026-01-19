
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function TextInputMoney() {
  const [amount, setAmount] = useState('');

  const handleChange = (text: string) => {
    // Allow only digits and up to one decimal point
    const sanitized = text.replace(/[^0-9.]/g, '');
    // Optional: limit to 2 decimal places
    const parts = sanitized.split('.');
    if (parts.length > 1) {
      parts[1] = parts[1].slice(0, 2);
    }
    setAmount(parts.join('.'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.prefix}>$</Text>
      <TextInput
        style={styles.input}
        value={amount}
        onChangeText={handleChange}
        placeholder="0.00"
        keyboardType="decimal-pad" // iOS/Android decimal-friendly
        maxLength={12} // optional
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    height: 48,
    width:'100%',
    marginTop: 16,
  },
  prefix: {
    fontSize: 18,
    color: '#333',
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 18,
    paddingVertical: 8,
  },
});
