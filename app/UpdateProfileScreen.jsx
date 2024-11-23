import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const UpdateProfileScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState('Cyrine');
  const [lastName, setLastName] = useState('Doe');
  const [age, setAge] = useState('25');
  const [email, setEmail] = useState('cyrine@example.com');
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Function to pick an image from the gallery
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission Required', 'You need to allow access to your photos.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.5,
    });

    if (!result.canceled) {
      setProfilePhoto(result.assets[0].uri);
    }
  };

  // Function to handle submission of changes
  const handleSubmitChanges = () => {
    console.log('Updated Profile:', {
      firstName,
      lastName,
      age,
      email,
      profilePhoto,
    });
    Alert.alert('Profile Updated', 'Your profile has been updated successfully!');
    navigation.goBack(); // Navigate back to the previous screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Update Your Profile</Text>

      {/* Profile Photo */}
      <TouchableOpacity style={styles.photoContainer} onPress={pickImage}>
        {profilePhoto ? (
          <Image source={{ uri: profilePhoto }} style={styles.photo} />
        ) : (
          <Text style={styles.photoPlaceholder}>Add Photo</Text>
        )}
      </TouchableOpacity>

      {/* First Name */}
      <TextInput
        style={styles.input}
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
      />

      {/* Last Name */}
      <TextInput
        style={styles.input}
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
      />

      {/* Age */}
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        keyboardType="numeric"
        onChangeText={setAge}
      />

      {/* Email */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      {/* Submit Changes Button */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSubmitChanges}>
        <Text style={styles.saveButtonText}>Submit Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#51158c',
    textAlign: 'center',
  },
  photoContainer: {
    alignSelf: 'center',
    backgroundColor: '#ccc',
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  photoPlaceholder: {
    fontSize: 14,
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  saveButton: {
    backgroundColor: '#51158c',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UpdateProfileScreen;
