import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider as PaperProvider, Button, TextInput, Text } from 'react-native-paper';
import SelfDrivenCarRentalForm  from './Components/SelfDrivenCarRentalForm';
import LocalCarRentalForm from './Components/LocalCarRentalForm ';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BillingPaymentForm from './Components/BillingPaymentForm';
import FeedbackForm from './Components/FeedbackForm';
import Rent from './Components/Rent';

const Stack = createNativeStackNavigator();

const App = () => {

  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="SelfDrivenCarRentalForm "
        component={SelfDrivenCarRentalForm }
        options={{ headerShown: false }} 
      />
      <Stack.Screen
        name="LocalCarRentalForm"
        component={LocalCarRentalForm}
        options={{ headerShown: false }} 
      />
          <Stack.Screen
        name="BillingPaymentForm"
        component={BillingPaymentForm}
        options={{ headerShown: false }} 
      />

        <Stack.Screen
        name="FeedbackForm"
        component={FeedbackForm}
        options={{ headerShown: false }} 
      />

         <Stack.Screen
        name="Rent"
        component={Rent}
        options={{ headerShown: false }} 
      />

    </Stack.Navigator>
  </NavigationContainer>
  );
};



export default App;
