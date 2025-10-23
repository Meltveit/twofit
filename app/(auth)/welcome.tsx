import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { AppColors } from '@/constants/colors';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>💪</Text>
        <Text style={styles.title}>2fit</Text>
        <Text style={styles.subtitle}>Track calories, reach your goals</Text>
      </View>

      <View style={styles.buttons}>
        <Link href="/(auth)/signup" asChild>
          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>Get Started</Text>
          </TouchableOpacity>
        </Link>

        <Link href="/(auth)/login" asChild>
          <TouchableOpacity style={styles.secondaryButton}>
            <Text style={styles.secondaryButtonText}>I already have an account</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontSize: 80,
    marginBottom: 16,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    color: AppColors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: AppColors.textSecondary,
  },
  buttons: {
    gap: 12,
    marginBottom: 40,
  },
  primaryButton: {
    backgroundColor: AppColors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: AppColors.primary,
    fontSize: 16,
    fontWeight: '600',
  },
});
