import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../WelcomeScreen';
import LoginScreen from '../LoginScreen';
import SignUpScreen from '../SignUpScreen';
import AfterSignUpScreen from '../AfterSignUpScreen'; // Import the new screen

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen
        name="AfterSignUp"
        component={AfterSignUpScreen}
        options={{ title: 'Dashboard', headerShown: false }} // Optionally hide the header
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
