import { AppColors } from '@/constants/colors';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddFoodScreen() {
  const [query, setQuery] = useState('');
  const [selectedMeal, setSelectedMeal] = useState('breakfast');

  const meals = ['breakfast', 'lunch', 'dinner', 'snack'];

  const handleSearch = () => {
    if (!query) {
      Alert.alert('Error', 'Please enter a food name');
      return;
    }
    Alert.alert('Search', `Searching for: ${query}`);
  };

  const handleScanFood = () => {
    Alert.alert('Coming Soon', 'AI food scanning will be available soon!');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Add Food</Text>
        <Text style={styles.subtitle}>Track your nutrition</Text>
      </View>

      <View style={styles.mealSelector}>
        {meals.map((meal) => (
          <TouchableOpacity
            key={meal}
            style={[styles.mealButton, selectedMeal === meal && styles.mealButtonActive]}
            onPress={() => setSelectedMeal(meal)}>
            <Text style={[styles.mealButtonText, selectedMeal === meal && styles.mealButtonTextActive]}>
              {meal.charAt(0).toUpperCase() + meal.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.scanButton} onPress={handleScanFood}>
        <Text style={styles.scanButtonText}>📸 Scan Food with AI</Text>
        <Text style={styles.scanButtonSubtext}>Premium Feature</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.dividerLine} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.dividerLine} />
      </View>

      <View style={styles.searchSection}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for food..."
          value={query}
          onChangeText={setQuery}
        />
        <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quickAdd}>
        <Text style={styles.quickAddTitle}>Quick Add</Text>
        <View style={styles.quickAddGrid}>
          <TouchableOpacity style={styles.quickAddItem}>
            <Text style={styles.quickAddEmoji}>🍳</Text>
            <Text style={styles.quickAddText}>Eggs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAddItem}>
            <Text style={styles.quickAddEmoji}>🍌</Text>
            <Text style={styles.quickAddText}>Banana</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAddItem}>
            <Text style={styles.quickAddEmoji}>🥗</Text>
            <Text style={styles.quickAddText}>Salad</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.quickAddItem}>
            <Text style={styles.quickAddEmoji}>🍗</Text>
            <Text style={styles.quickAddText}>Chicken</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.textSecondary,
  },
  mealSelector: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 8,
    marginBottom: 24,
  },
  mealButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: AppColors.border,
    alignItems: 'center',
  },
  mealButtonActive: {
    backgroundColor: AppColors.primary,
    borderColor: AppColors.primary,
  },
  mealButtonText: {
    fontSize: 12,
    fontWeight: '600',
    color: AppColors.text,
  },
  mealButtonTextActive: {
    color: '#fff',
  },
  scanButton: {
    margin: 24,
    marginTop: 0,
    padding: 20,
    backgroundColor: AppColors.primary,
    borderRadius: 16,
    alignItems: 'center',
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  scanButtonSubtext: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: AppColors.border,
  },
  dividerText: {
    marginHorizontal: 16,
    color: AppColors.textSecondary,
    fontSize: 14,
  },
  searchSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 12,
  },
  searchButton: {
    backgroundColor: AppColors.card,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  quickAdd: {
    padding: 24,
  },
  quickAddTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  quickAddGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  quickAddItem: {
    width: '23%',
    aspectRatio: 1,
    backgroundColor: AppColors.card,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quickAddEmoji: {
    fontSize: 32,
    marginBottom: 4,
  },
  quickAddText: {
    fontSize: 10,
    fontWeight: '600',
  },
});
