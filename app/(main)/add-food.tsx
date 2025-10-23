
import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import { searchFood } from '../../services/foodService';
import { addFoodLog } from '../../services/foodService';

const AddFoodScreen = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleSearch = async () => {
    if (!query) {
      setError('Please enter a food name');
      return;
    }
    try {
      const foodResults = await searchFood(query);
      setResults(foodResults);
      setError('');
    } catch (err) {
      setError('Failed to search for food');
    }
  };

  const handleAddFood = async (food) => {
    try {
      const today = new Date().toISOString().split('T')[0];
      await addFoodLog(user.uid, today, {
        foodName: food.label,
        calories: food.nutrients.ENERC_KCAL,
      });
      // Optionally, navigate back or show a success message
    } catch (err) {
      setError('Failed to add food');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>Add Food</Text>
      {error ? <Text style={{ color: 'red', textAlign: 'center', marginBottom: 10 }}>{error}</Text> : null}
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10 }}
        placeholder="Search for food"
        value={query}
        onChangeText={setQuery}
      />
      <Button title="Search" onPress={handleSearch} />
      <FlatList
        data={results}
        keyExtractor={(item) => item.food.foodId}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAddFood(item.food)}>
            <View style={{ padding: 10, borderBottomColor: 'gray', borderBottomWidth: 1 }}>
              <Text>{item.food.label}</Text>
              <Text>{item.food.nutrients.ENERC_KCAL.toFixed(2)} kcal</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default AddFoodScreen;
