import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Title,TextInput } from 'react-native-paper';

const FeedbackForm = ({ navigation }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  return (
    <View style={styles.container}>
      <Title style={styles.title}>Provide Your Feedback</Title>
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
      <TextInput
        style={[styles.input, styles.multilineInput]}
        label="Feedback"
        multiline
        numberOfLines={4}
        value={feedback}
        onChangeText={(text) => setFeedback(text)}
      />
      <Button
        mode="contained"
        style={styles.button}
        onPress={() => navigation.navigate('Rent')}
      >
        Submit Feedback
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
  multilineInput: {
    height: 100,
  },
  button: {
    marginTop: 20,
  },
});

export default FeedbackForm;
