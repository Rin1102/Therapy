import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from 'react-native';
import Slider from '@react-native-community/slider';
import Stars from 'react-native-stars';
import { FontAwesome } from '@expo/vector-icons';

const AfterSignUpScreen = ({ navigation }) => {
  const [rating, setRating] = useState(3); // Default star rating
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showCheckupForm, setShowCheckupForm] = useState(false);
  const [waterCups, setWaterCups] = useState(0);
  const [mood, setMood] = useState(50);
  const [sleep, setSleep] = useState(50);
  const [heartRate, setHeartRate] = useState(75);
  const [stressLevel, setStressLevel] = useState(30);
  const [showMenu, setShowMenu] = useState(false); // Avatar menu state

  const gender = 'female'; // Placeholder: Replace with gender from sign-up form
  const firstName = 'Cyrine'; // Placeholder: Replace with first name from sign-up form

  // Star rating messages
  const handleRatingChange = (newRating) => {
    setRating(newRating);

    let message = '';
    switch (newRating) {
      case 1:
        message = "Don't be too hard on yourself. Tomorrow is a new day! 🌟";
        break;
      case 2:
        message = "You're doing better than you think. Keep going! 💪";
        break;
      case 3:
        message = "Every day is a step forward. You're doing great! 🌈";
        break;
      case 4:
        message = "You're glowing! Keep up the fantastic work! ✨";
        break;
      case 5:
        message = "Amazing! You deserve all the success and happiness! 🌟🎉";
        break;
      default:
        message = 'Stay positive and keep striving! 🌻';
    }

    setPopupMessage(message);
    setShowPopup(true); // Show the popup
  };

  // Handle Daily Checkup Submission
  const handleSubmit = () => {
    const formData = {
      waterCups,
      mood,
      sleep,
      heartRate,
      stressLevel,
    };

    console.log('Daily Checkup Data:', formData);
    Alert.alert('Submitted', 'Your data has been saved.');
    setShowCheckupForm(false); // Close form
  };

  // Navigate to Update Profile screen
  const handleUpdateProfile = () => {
    setShowMenu(false); // Close menu
    navigation.navigate('UpdateProfile');
  };

  // Logout functionality
  const handleLogout = () => {
    console.log('Logging out...'); // Debugging log
    setShowMenu(false); // Close the menu
    navigation.navigate('Login'); // Replace with the Login screen
  };

  return (
    <View style={styles.container}>
      {/* Main Content */}
      <View style={styles.content}>
        {/* Top Bar */}
        <View style={styles.topBar}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greeting}>Hello!</Text>
            <Text style={styles.name}>{firstName}</Text>
          </View>
          <TouchableOpacity onPress={() => setShowMenu(!showMenu)}>
            <Image
              source={
                gender === 'female'
                  ? require('../assets/images/girl_avatar.png')
                  : require('../assets/images/boy_avatar.png')
              }
              style={styles.avatar}
            />
          </TouchableOpacity>
        </View>
  
        {/* Avatar Menu */}
        {showMenu && (
          <View style={styles.menuContainer}>
            <TouchableOpacity style={styles.menuItem} onPress={handleUpdateProfile}>
              <Text style={styles.menuItemText}>Update Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={styles.menuItemText}>Log Out</Text>
            </TouchableOpacity>
          </View>
        )}
  
        {/* Star Rating Section */}
        <View style={styles.ratingContainer}>
          <Text style={styles.question}>How are you feeling today?</Text>
          <Stars
            default={rating}
            count={5}
            update={handleRatingChange}
            fullStar={<FontAwesome name="star" size={30} color="#FFD700" />}
            emptyStar={<FontAwesome name="star-o" size={30} color="#ccc" />}
          />
        </View>
  
        {/* Daily Checkup Button */}
        <TouchableOpacity style={styles.checkupButton} onPress={() => setShowCheckupForm(true)}>
          <Text style={styles.checkupButtonText}>Daily Checkup</Text>
        </TouchableOpacity>
      </View>
  
      {/* Footer Menu */}
      <View style={styles.footerMenu}>
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.menuItem}>
          <FontAwesome name="bar-chart" size={24} color="#51158c" />
          <Text style={styles.menuText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('AfterSignUp')} style={styles.menuItem}>
          <FontAwesome name="home" size={24} color="#51158c" />
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert('Coming Soon!')} style={styles.menuItem}>
          <FontAwesome name="phone" size={24} color="#51158c" />
          <Text style={styles.menuText}>Contact</Text>
        </TouchableOpacity>
      </View>
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
  menuContainer: {
    position: 'absolute',
    top: 80,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingVertical: 10,
    width: 150,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  menuItemText: {
    fontSize: 16,
    color: '#51158c',
  },
  ratingContainer: {
    marginBottom: 20,
    alignItems: 'flex-start',
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  checkupButton: {
    backgroundColor: '#c96dc6',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 300, 
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
    backgroundColor: '#51158c',
    padding: 15,
    borderRadius: 10,
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
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popup: {
    backgroundColor: '#fff1e7',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    width: 300,
  },
  popupMessage: {
    fontSize: 18,
    color: '#51158c',
    textAlign: 'center',
    marginBottom: 15,
  },
  footerMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  menuText: {
    fontSize: 12,
    color: '#51158c',
    marginTop: 4,
  },
});

export default AfterSignUpScreen;
