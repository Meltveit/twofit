import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AppColors } from '@/constants/colors';

export default function DashboardScreen() {
  const caloriesRemaining = 1850;
  const caloriesGoal = 2000;
  const percentage = (caloriesRemaining / caloriesGoal) * 100;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.date}>Today, Oct 23</Text>
        <Text style={styles.greeting}>Let's track your meals! 🍽️</Text>
      </View>

      <View style={styles.calorieCard}>
        <View style={styles.calorieCircle}>
          <Text style={styles.calorieNumber}>{caloriesRemaining}</Text>
          <Text style={styles.calorieLabel}>calories left</Text>
        </View>
        <View style={styles.calorieDetail}>
          <Text style={styles.calorieDetailText}>Goal: {caloriesGoal} cal</Text>
          <Text style={styles.calorieDetailText}>Consumed: {caloriesGoal - caloriesRemaining} cal</Text>
        </View>
      </View>

      <View style={styles.macros}>
        <View style={styles.macroItem}>
          <Text style={styles.macroLabel}>Protein</Text>
          <View style={styles.macroBar}>
            <View style={[styles.macroFill, { width: '60%', backgroundColor: AppColors.primary }]} />
          </View>
          <Text style={styles.macroValue}>45g / 75g</Text>
        </View>

        <View style={styles.macroItem}>
          <Text style={styles.macroLabel}>Carbs</Text>
          <View style={styles.macroBar}>
            <View style={[styles.macroFill, { width: '40%', backgroundColor: AppColors.warning }]} />
          </View>
          <Text style={styles.macroValue}>80g / 200g</Text>
        </View>

        <View style={styles.macroItem}>
          <Text style={styles.macroLabel}>Fat</Text>
          <View style={styles.macroBar}>
            <View style={[styles.macroFill, { width: '70%', backgroundColor: AppColors.secondary }]} />
          </View>
          <Text style={styles.macroValue}>42g / 60g</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>📸 Snap Food</Text>
      </TouchableOpacity>

      <View style={styles.meals}>
        <Text style={styles.mealsTitle}>Today's Meals</Text>
        <Text style={styles.emptyText}>No meals logged yet</Text>
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
  date: {
    fontSize: 14,
    color: AppColors.textSecondary,
    marginBottom: 4,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  calorieCard: {
    margin: 24,
    marginTop: 0,
    padding: 24,
    backgroundColor: AppColors.card,
    borderRadius: 20,
    alignItems: 'center',
  },
  calorieCircle: {
    width: 180,
    height: 180,
    borderRadius: 90,
    borderWidth: 12,
    borderColor: AppColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  calorieNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: AppColors.primary,
  },
  calorieLabel: {
    fontSize: 14,
    color: AppColors.textSecondary,
  },
  calorieDetail: {
    gap: 4,
  },
  calorieDetailText: {
    fontSize: 14,
    color: AppColors.textSecondary,
    textAlign: 'center',
  },
  macros: {
    padding: 24,
    paddingTop: 0,
    gap: 16,
  },
  macroItem: {
    gap: 8,
  },
  macroLabel: {
    fontSize: 14,
    fontWeight: '600',
  },
  macroBar: {
    height: 8,
    backgroundColor: AppColors.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  macroFill: {
    height: '100%',
    borderRadius: 4,
  },
  macroValue: {
    fontSize: 12,
    color: AppColors.textSecondary,
  },
  addButton: {
    margin: 24,
    marginTop: 0,
    backgroundColor: AppColors.primary,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  meals: {
    padding: 24,
  },
  mealsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  emptyText: {
    textAlign: 'center',
    color: AppColors.textSecondary,
    fontSize: 16,
    paddingVertical: 40,
  },
});