
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { useRouter } from 'expo-router';
import { useAuth } from '../../context/AuthContext';
import { updateUserProfile } from '../../services/userService';

const OnboardingScreen = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { user } = useAuth();

  const handleComplete = async () => {
    if (!name || !age || !weight || !height) {
      setError('Please fill out all fields');
      return;
    }
    try {
      await updateUserProfile(user.uid, { name, age, weight, height });
      router.replace('/(main)');
    } catch (err) {
      setError('Failed to save profile');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Complete Your Profile</Text>
      {error ? <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</Text> : null}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Weight (kg)"
        value={weight}
        onChangeText={setWeight}
        keyboardType="numeric"
      />
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, paddingHorizontal: 10 }}
        placeholder="Height (cm)"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <Button title="Complete" onPress={handleComplete} />
    </View>
  );
};

export default OnboardingScreen;
