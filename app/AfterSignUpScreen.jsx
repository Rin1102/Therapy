import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';

const AfterSignUpScreen = ({ navigation }) => {
  const [showCheckupForm, setShowCheckupForm] = useState(false);
  const [waterCups, setWaterCups] = useState(0);
  const [mood, setMood] = useState(50); // Slider values
  const [sleep, setSleep] = useState(50);
  const [heartRate, setHeartRate] = useState(75); // Example default value
  const [stressLevel, setStressLevel] = useState(30);
  const [rating, setRating] = useState(3); // Default star rating

  const gender = 'female'; // Placeholder: Replace with gender from sign-up form
  const firstName = 'Cyrine'; // Placeholder: Replace with first name from sign-up form

  const handleSubmit = () => {
    const formData = {
      waterCups,
      mood,
      sleep,
      heartRate,
      stressLevel,
      rating,
    };

    console.log('Daily Checkup Data:', formData); // Simulating data submission
    Alert.alert('Submitted', 'Your data has been saved (to be implemented with backend).');
    setShowCheckupForm(false); // Close the modal after submission
  };

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        {/* Greeting Section */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greeting}>Hello!</Text>
          <Text style={styles.name}>{firstName}</Text>
        </View>

        {/* Avatar */}
        <Image
          source={
            gender === 'female'
              ? require('../assets/images/girl_avatar.png')
              : require('../assets/images/boy_avatar.png')
          }
          style={styles.avatar}
        />
      </View>

      {/* Question and Star Rating */}
      <View style={styles.ratingContainer}>
        <Text style={styles.question}>How are you feeling today?</Text>
        <Stars
          default={rating}
          count={5}
          update={(newRating) => setRating(newRating)}
          fullStar={<FontAwesome name="star" size={24} color="#FFD700" />}
          emptyStar={<FontAwesome name="star-o" size={24} color="#ccc" />}
        />
      </View>

      {/* Daily Checkup Button */}
      <TouchableOpacity style={styles.checkupButton} onPress={() => setShowCheckupForm(true)}>
        <Text style={styles.checkupButtonText}>Daily Checkup</Text>
      </TouchableOpacity>

      {/* Modal for Daily Checkup */}
      <Modal visible={showCheckupForm} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Daily Checkup</Text>

          {/* Water Logger */}
          <Text>Water Cups: {waterCups}</Text>
          <View style={styles.waterButtons}>
            <TouchableOpacity onPress={() => setWaterCups(waterCups + 1)}>
              <Text style={styles.waterButton}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setWaterCups(Math.max(0, waterCups - 1))}>
              <Text style={styles.waterButton}>-</Text>
            </TouchableOpacity>
          </View>

          {/* Mood Slider */}
          <Text>Mood: {mood}%</Text>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={mood}
            onValueChange={setMood}
            minimumTrackTintColor="#51158c" // Gold color for the active portion
           maximumTrackTintColor="#ccc" // Gray color for the inactive portion
            thumbTintColor="#51158c"
          />

          {/* Sleep Slider */}
          <Text>Did You Sleep Well? {sleep}%</Text>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={sleep}
            minimumTrackTintColor="#51158c" // Gold color for the active portion
           maximumTrackTintColor="#ccc" // Gray color for the inactive portion
            thumbTintColor="#51158c"
            onValueChange={setSleep}
          />

          {/* Heart Rate Logger */}
          <Text>Log Your Heart Rate (from your watch): {heartRate} bpm</Text>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={40}
            maximumValue={150}
            step={1}
            value={heartRate}
            onValueChange={setHeartRate}
            minimumTrackTintColor="#51158c" // Gold color for the active portion
           maximumTrackTintColor="#ccc" // Gray color for the inactive portion
            thumbTintColor="#51158c"
          />

          {/* Stress Level Logger */}
          <Text>Log Your Stress Level (from your watch): {stressLevel}%</Text>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={stressLevel}
            onValueChange={setStressLevel}
            minimumTrackTintColor="#51158c" // Gold color for the active portion
           maximumTrackTintColor="#ccc" // Gray color for the inactive portion
            thumbTintColor="#51158c"
          />

          {/* Submit Button */}
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>

          {/* Close Button */}
          <TouchableOpacity style={styles.closeButton} onPress={() => setShowCheckupForm(false)}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  greetingContainer: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  name: {
    fontSize: 20,
    color: '#777',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  ratingContainer: {
    marginBottom: 20,
    alignItems: 'flex-start', // Align content to the left
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  checkupButton: {
    backgroundColor: '#b163ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  checkupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 100,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  waterButtons: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  waterButton: {
    fontSize: 24,
    marginHorizontal: 10,
    color: '#007BFF',
  },
  submitButton: {
    backgroundColor: '#b163ff',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  closeButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  closeButtonText: {
    fontSize: 18,
    color: 'red',
  },
});

export default AfterSignUpScreen;
