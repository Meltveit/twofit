import { StyleSheet } from 'react-native';
import { AppColors } from './colors';

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.textSecondary,
    marginBottom: 32,
  },
  form: {
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: AppColors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export const dashboardStyles = StyleSheet.create({
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

export const genericScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});
