import { AppColors } from '@/constants/colors';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type OnboardingData = {
  gender: 'male' | 'female' | 'other' | null;
  age: string;
  height: string;
  currentWeight: string;
  goalWeight: string;
  activityLevel: string;
  goal: 'lose' | 'maintain' | 'gain' | null;
};

export default function OnboardingScreen() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    gender: null,
    age: '',
    height: '',
    currentWeight: '',
    goalWeight: '',
    activityLevel: 'moderate',
    goal: null,
  });

  const { completeOnboarding } = useAuth();
  const router = useRouter();

  const handleFinish = () => {
    completeOnboarding();
    router.replace('/(main)');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>What's your gender?</Text>
            {(['male', 'female', 'other'] as const).map((gender) => (
              <TouchableOpacity
                key={gender}
                style={[styles.option, data.gender === gender && styles.optionSelected]}
                onPress={() => setData({ ...data, gender })}>
                <Text style={styles.optionText}>{gender.charAt(0).toUpperCase() + gender.slice(1)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 2:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Tell us about yourself</Text>
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={data.age}
              onChangeText={(age) => setData({ ...data, age })}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Height (cm)"
              value={data.height}
              onChangeText={(height) => setData({ ...data, height })}
              keyboardType="numeric"
            />
          </View>
        );

      case 3:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>What's your weight?</Text>
            <TextInput
              style={styles.input}
              placeholder="Current weight (kg)"
              value={data.currentWeight}
              onChangeText={(currentWeight) => setData({ ...data, currentWeight })}
              keyboardType="numeric"
            />
            <TextInput
              style={styles.input}
              placeholder="Goal weight (kg)"
              value={data.goalWeight}
              onChangeText={(goalWeight) => setData({ ...data, goalWeight })}
              keyboardType="numeric"
            />
          </View>
        );

      case 4:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>Activity level?</Text>
            {['Sedentary', 'Light', 'Moderate', 'Active', 'Very Active'].map((level) => (
              <TouchableOpacity
                key={level}
                style={[styles.option, data.activityLevel === level.toLowerCase() && styles.optionSelected]}
                onPress={() => setData({ ...data, activityLevel: level.toLowerCase() })}>
                <Text style={styles.optionText}>{level}</Text>
              </TouchableOpacity>
            ))}
          </View>
        );

      case 5:
        return (
          <View style={styles.stepContainer}>
            <Text style={styles.stepTitle}>What's your goal?</Text>
            {(['lose', 'maintain', 'gain'] as const).map((goal) => (
              <TouchableOpacity
                key={goal}
                style={[styles.option, data.goal === goal && styles.optionSelected]}
                onPress={() => setData({ ...data, goal })}>
                <Text style={styles.optionText}>
                  {goal === 'lose' ? 'Lose Weight' : goal === 'maintain' ? 'Maintain Weight' : 'Gain Weight'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
    }
  };

  const canContinue = () => {
    switch (step) {
      case 1: return data.gender !== null;
      case 2: return data.age && data.height;
      case 3: return data.currentWeight && data.goalWeight;
      case 4: return true;
      case 5: return data.goal !== null;
      default: return false;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.progress}>
        {[1, 2, 3, 4, 5].map((i) => (
          <View key={i} style={[styles.progressDot, i <= step && styles.progressDotActive]} />
        ))}
      </View>

      {renderStep()}

      <View style={styles.buttons}>
        {step > 1 && (
          <TouchableOpacity style={styles.backButton} onPress={() => setStep(step - 1)}>
            <Text style={styles.backButtonText}>Back</Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity
          style={[styles.continueButton, !canContinue() && styles.buttonDisabled]}
          onPress={() => {
            if (step === 5) {
              handleFinish();
            } else {
              setStep(step + 1);
            }
          }}
          disabled={!canContinue()}>
          <Text style={styles.continueButtonText}>{step === 5 ? 'Finish' : 'Continue'}</Text>
        </TouchableOpacity>
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
  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    marginTop: 40,
    marginBottom: 40,
  },
  progressDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: AppColors.border,
  },
  progressDotActive: {
    backgroundColor: AppColors.primary,
    width: 24,
  },
  stepContainer: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 32,
  },
  option: {
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: AppColors.border,
    marginBottom: 12,
  },
  optionSelected: {
    borderColor: AppColors.primary,
    backgroundColor: `${AppColors.primary}10`,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: AppColors.border,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
    gap: 12,
  },
  backButton: {
    flex: 1,
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: AppColors.border,
    alignItems: 'center',
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  continueButton: {
    flex: 2,
    backgroundColor: AppColors.primary,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonDisabled: {
    opacity: 0.5,
  },
});