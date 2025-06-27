import { View, Text, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

export default function ChatScreen() {
  const theme = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.placeholder, { color: theme.colors.onBackground }]}>Chat coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {},
});
