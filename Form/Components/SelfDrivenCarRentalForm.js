import React, { useState } from 'react';
import { View } from 'react-native';
import { Button, Text,  TextInput } from 'react-native-paper';

const SelfDrivenCarRentalForm = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Enter Your Details</Text>
      </View>
      <TextInput
        style={styles.input}
        label="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        label="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('LocalCarRentalForm')}
      >
        Submit
      </Button>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 8,
  },
  button: {
    marginTop: 20,
  },
};

export default SelfDrivenCarRentalForm;
