import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
          Welcome To, {"\n"}<Text style={styles.highlight}>IoTherapy</Text>
        </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
      <Text style={styles.link}>
            Let's Start <Text style={styles.arrow}>→</Text>
          </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    fontSize: 18,
    fontStyle: 'italic',
    color: '#0066cc',
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
