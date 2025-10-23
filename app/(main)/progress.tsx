import { View, Text } from 'react-native';
import { genericScreenStyles as styles } from '@/constants/globalStyles';

export default function ProgressScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Progress Screen</Text>
    </View>
  );
}
