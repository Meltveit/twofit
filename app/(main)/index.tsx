import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { dashboardStyles as styles } from '@/constants/globalStyles';
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
