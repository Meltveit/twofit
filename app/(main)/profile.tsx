import { AppColors } from '@/constants/colors';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ProfileScreen() {
  const { user, signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: async () => {
            await signOut();
            router.replace('/(auth)/welcome');
          },
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>👤</Text>
        </View>
        <Text style={styles.name}>{user?.email || 'User'}</Text>
        <Text style={styles.email}>{user?.email}</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Goals</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Current Weight</Text>
          <Text style={styles.menuItemValue}>75 kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Goal Weight</Text>
          <Text style={styles.menuItemValue}>70 kg</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Daily Calorie Goal</Text>
          <Text style={styles.menuItemValue}>2000 cal</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Units</Text>
          <Text style={styles.menuItemValue}>Metric</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Notifications</Text>
          <Text style={styles.menuItemValue}>On</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Upgrade to Premium</Text>
          <Text style={styles.premiumBadge}>$2.99/mo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Help & Support</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuItemText}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
        <Text style={styles.signOutText}>Sign Out</Text>
      </TouchableOpacity>

      <Text style={styles.version}>Version 1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    padding: 24,
    paddingTop: 60,
    backgroundColor: AppColors.card,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: AppColors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 40,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: AppColors.textSecondary,
  },
  section: {
    padding: 24,
    borderBottomWidth: 1,
    borderBottomColor: AppColors.border,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: AppColors.textSecondary,
    marginBottom: 12,
    textTransform: 'uppercase',
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  menuItemText: {
    fontSize: 16,
  },
  menuItemValue: {
    fontSize: 16,
    color: AppColors.textSecondary,
  },
  premiumBadge: {
    backgroundColor: AppColors.primary,
    color: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    fontSize: 12,
    fontWeight: '600',
  },
  signOutButton: {
    margin: 24,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: AppColors.error,
    alignItems: 'center',
  },
  signOutText: {
    color: AppColors.error,
    fontSize: 16,
    fontWeight: '600',
  },
  version: {
    textAlign: 'center',
    color: AppColors.textSecondary,
    fontSize: 12,
    marginBottom: 24,
  },
});