import React, { useState } from 'react';
import { View,  StyleSheet } from 'react-native';
import { Button, Title ,TextInput} from 'react-native-paper';

const Rent = () => {
  const [fullName, setFullName] = useState('');
  const [duration, setDuration] = useState('');
  const [agreed, setAgreed] = useState(false);

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Rental Agreement</Title>
      <TextInput
        style={styles.input}
        label="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        label="Rental Duration (in days)"
        keyboardType="numeric"
        value={duration}
        onChangeText={(text) => setDuration(text)}
      />
      <View style={styles.checkboxContainer}>
        <Title style={styles.checkboxLabel}>I agree to the terms and conditions</Title>
        <TextInput
          style={styles.checkboxInput}
          label="Yes/No"
          value={agreed ? 'Yes' : 'No'}
          onChangeText={(text) => {
            if (text.toLowerCase() === 'yes') {
              setAgreed(true);
            } else {
              setAgreed(false);
            }
          }}
        />
      </View>
      <Button mode="contained" style={styles.button} >
        Submit Agreement
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkboxLabel: {
    flex: 1,
    marginRight: 8,
  },
  checkboxInput: {
    flex: 1,
    height: 40,
    paddingLeft: 8,
  },
  button: {
    marginTop: 20,
  },
});

export default Rent;
