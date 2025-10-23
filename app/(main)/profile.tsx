import { View, Text } from 'react-native';
import { genericScreenStyles as styles } from '@/constants/globalStyles';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Screen</Text>
    </View>
  );
}
