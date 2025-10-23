import { AppColors } from '@/constants/colors';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function ProgressScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Progress</Text>
        <Text style={styles.subtitle}>Track your journey</Text>
      </View>

      <View style={styles.statsGrid}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>7</Text>
          <Text style={styles.statLabel}>Day Streak 🔥</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>-2.5kg</Text>
          <Text style={styles.statLabel}>Weight Change</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>1,850</Text>
          <Text style={styles.statLabel}>Avg Calories</Text>
        </View>

        <View style={styles.statCard}>
          <Text style={styles.statNumber}>85%</Text>
          <Text style={styles.statLabel}>Goal Rate</Text>
        </View>
      </View>

      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Weight Trend</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.placeholderText}>📊</Text>
          <Text style={styles.placeholderSubtext}>Chart coming soon</Text>
        </View>
      </View>

      <View style={styles.chartSection}>
        <Text style={styles.sectionTitle}>Calorie Intake</Text>
        <View style={styles.chartPlaceholder}>
          <Text style={styles.placeholderText}>📈</Text>
          <Text style={styles.placeholderSubtext}>Chart coming soon</Text>
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
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    gap: 12,
  },
  statCard: {
    width: '47%',
    backgroundColor: AppColors.card,
    padding: 20,
    borderRadius: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: 'bold',
    color: AppColors.primary,
    marginBottom: 8,
  },
  statLabel: {
    fontSize: 14,
    color: AppColors.textSecondary,
    textAlign: 'center',
  },
  chartSection: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  chartPlaceholder: {
    height: 200,
    backgroundColor: AppColors.card,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    fontSize: 48,
    marginBottom: 8,
  },
  placeholderSubtext: {
    fontSize: 14,
    color: AppColors.textSecondary,
  },
});
