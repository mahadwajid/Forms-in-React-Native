import React, { useState } from 'react';
import { View,  StyleSheet} from 'react-native';
import { Button, Text,  TextInput } from 'react-native-paper';

const LocalCarRentalForm = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [carModel, setCarModel] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');


  return (
    <View style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.headerText}>Local Car Rental Form</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={fullName}
        onChangeText={(text) => setFullName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Car Model Preference"
        value={carModel}
        onChangeText={(text) => setCarModel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Pickup Location"
        value={pickupLocation}
        onChangeText={(text) => setPickupLocation(text)}
      />
   <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('BillingPaymentForm')}
      >
        Submit
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  header: {
    marginBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LocalCarRentalForm;
